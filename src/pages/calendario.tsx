import { Button } from '@ui/button';
import CalendarModal from '@ui/CalendarModal';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { CalendarArrDays, CalendarDays } from 'src/helper/calendarArrDays';

// TODO adicionarum onClick em todas os dias pra abrir o modal
// TODO adicionar a opção de data em inglês
// TODO Formato de hora pro americano
// TODO bater na api pra pegar os feriados

interface CalendarMonthRenderProps {
  daysOfWeek: string[]
  days: CalendarDays[]
  date: Date
}

export default function Calendario() {
  const arrMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const minMonthIndex = 0;
  const maxMonthIndex = 11;
  const date = new Date()
  const month = date.getMonth()
  const [MonthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  const [days, setDays] = useState<CalendarDays[]>(CalendarArrDays(year, MonthIndex))
  const [ismodalOpen, setIsModaOpen] = useState(false)
  let monthDisplay = arrMeses[MonthIndex]

  useEffect(() => {
    setDays(CalendarArrDays(year, MonthIndex))
  }, [MonthIndex])

  const minusMonthIndex = (MonthIndex: number) => {
    if (MonthIndex > minMonthIndex) return MonthIndex - 1;
    setYear(year => year - 1)
    return 11;
  };
  const plusMonthIndex = (MonthIndex: number) => {
    if (MonthIndex < maxMonthIndex) return MonthIndex + 1;
    setYear(year => year + 1)
    return 0;
  };

  const BackToday = () => {
    setYear(date.getFullYear())
    setMonthIndex(date.getMonth())
  }

  return (
    <section className='flex flex-col items-center text-black dark:text-white'>
      <div className='flex gap-12'>
        <Button
          Children='Hoje'
          onClick={() => BackToday()}
        />
        <div className='flex gap-6 items-center'>
          <AiOutlineArrowLeft
            className='w-7 h-7 cursor-pointer'
            onClick={() => {
              setMonthIndex(minusMonthIndex(MonthIndex))
              monthDisplay = arrMeses[MonthIndex]
            }}
            title='mês anterior'
          />
          <h1 className='text-3xl text-center select-none w-72'>{monthDisplay} de {year}</h1>
          <AiOutlineArrowRight className='w-7 h-7 cursor-pointer'
            onClick={() => {
              setMonthIndex(plusMonthIndex(MonthIndex))
              monthDisplay = arrMeses[MonthIndex]
            }}
            title='proximo mês'
          />
        </div>
        <Button
          Children='Criar'
        />
      </div>
      <div className='flex pt-2 '>
        {daysOfWeek.map(item => (
          <div
            className='px-4 py-2 w-52 text-center'
            key={item}
          >
            <h3 className='select-none'>{item}</h3>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap max-w-[1460px] justify-center' >
        {days.length > 35 ?
          days.map((item, index) => (
            <div className='w-52 h-32 calendar' key={index}>
              {item.Month === date.getMonth() && item.days === date.getDate() ?
                <div className='flex justify-center  py-2  select-none'>
                  <div className='w-10 bg-violet-700 dark:bg-DarkModeGreen text-center text-white rounded-full'>
                    {item.days}
                  </div>
                </div>
                :
                <div className='text-center py-2 pr-4 select-none'>
                  {item.days}
                </div>
              }
            </div>
          ))
          :
          days.map((item, index) => (
            <div className='w-52 h-40 calendar'
              key={index}
              onClick={() => setIsModaOpen(prev => !prev)}
            >
              {item.Month === date.getMonth() && item.days === date.getDate() ?
                <div className='flex justify-center  py-2  select-none'>
                  <div className='w-7 bg-violet-700 dark:bg-DarkModeGreen h-7 flex justify-center items-center  text-white rounded-full'>
                    {item.days}
                  </div>
                </div>
                :
                <div className='text-center py-2 pr-4 select-none'>
                  {item.days}
                </div>
              }
            </div>
          ))
        }
      </div>
      <CalendarModal
        State={ismodalOpen}
        SetState={setIsModaOpen}
      />
    </section>
  )
}
