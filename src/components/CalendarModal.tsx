import * as Portal from '@radix-ui/react-portal';
import { useState } from 'react';
import { ModalProps } from 'src/interfaces/Modal';
import { Button } from './button';
import { ControledInput } from './input/input';
import { Select } from './Select';
import { RxLoop, RxTextAlignJustify } from 'react-icons/rx'
import { AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai'
import { DateHelper } from 'src/helper/DiaryDate';
import FormataData from 'src/utils/FormataData';

// TODO Finalizar o modal

export default function CalendarModal({ State, SetState }: ModalProps) {

  const DateInput = DateHelper()

  const [Title, setTitle] = useState('')
  const [reminderOption, setReminderOption] = useState('Não se repete')
  const [ModalOption, setModalOption] = useState('Tarefa')
  const [DataRaw, setData] = useState(DateInput)
  const Data = FormataData(DataRaw)

  return (
    <Portal.Root>
      {State &&
        <section className='w-[450px] rounded-lg fixed left-60 top-48 flex flex-col bg-white dark:bg-neutral-900 shadow-2xl'>
          <div className='flex items-center justify-end bg-gray-100 dark:bg-[#505050] rounded-t-lg'>
            <button
              className='text-2xl py-2 px-3'
              onClick={() => SetState(prev => !prev)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className='pr-10 pl-20 pt-10'>
            <ControledInput
              onChange={setTitle}
              value={Title}
              placeholder='Adicionar titulo'
              type='text'
              Width='full'
              intent='transparent'
              textSize='Dxl'
            />
            <div className='flex gap-3 py-5' >
              <Button
                Children='Tarefa'
                onClick={() => setModalOption('Tarefa')}
                intent={ModalOption === 'Tarefa' ? 'Selected' : 'primary'}
              />
              <Button
                Children='Lembrete'
                onClick={() => setModalOption('Lembrete')}
                intent={ModalOption === 'Tarefa' ? 'primary' : 'Selected'}
              />
            </div>
          </div>
          <div className='py-5 flex gap-4 items-center px-10'>
            <AiOutlineClockCircle className='w-7 h-7' />
            <input
              type='date'
              className='bg-transparent w-36 h-12 px-2 border-[1px] border-black dark:border-white rounded-md focus:outline-none text-center'
              value={DataRaw}
              onChange={e => setData(e.target.value)}
            />
          </div>
          {ModalOption === 'Tarefa' ?
            <div className='py-5 px-10 flex gap-4'>
              <RxTextAlignJustify className='w-7 h-7' />
              <textarea
                className='w-full h-32 px-2 py-1 resize-none bg-transparent outline-none border-[1px] dark:border-white border-black'
                placeholder='Adicionar uma descrição'
              />
            </div>
            :
            <div className='py-5 px-10 flex gap-4 items-center '>
              <RxLoop className='w-7 h-7' />
              <Select
                Options={['Não se repete', 'todos os dias', 'semanal a cada x dias', 'personalizar']}
                value={reminderOption}
                onChange={setReminderOption}
              />
            </div>
          }
          <div className='pb-4 pl-20'>
            <Button
              intent='success'
              Children='Salvar'
            />
          </div>
        </section>
      }
    </Portal.Root>
  )
}
