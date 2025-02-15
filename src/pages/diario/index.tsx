import DiarypageWritten from '@ui/diario/Card';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { diaryPage } from 'src/context/diaryContext';

//TODO logica de acessa a pagina já escrita

export default function Diario() {

  const [diary, setdiary] = useAtom(diaryPage);

  return (
    <>
      <p className='text-3xl mb-2  text-violet-900 dark:text-green-700'>Fevereiro 2023</p>
      <hr />
      <div className='flex flex-wrap gap-[19px] pt-4 max-w-[1550px] '>
        <Link
          href='./diario/pagina'
          className='w-60 h-52  bg-white  text-black dark:text-white drop-shadow-lg dark:bg-neutral-900 flex justify-center items-center cursor-pointer  select border-2'
        >
          <p className='text-lg'> + Entrada</p>
        </Link>
        {diary.map(entry => (
          <DiarypageWritten
            Text={entry.Text}
            Title={entry.Title}
            Data={entry.Data}
            Feeling={entry.Feeling}
            Id={entry.Id}
            key={entry.Id}
          />
        ))}
      </div>
      <p className='text-3xl mb-2 pt-10 text-violet-900 dark:text-green-700'>Janeiro 2023</p>
      <hr />
    </>
  )
}
