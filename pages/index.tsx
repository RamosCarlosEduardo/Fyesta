import Head from 'next/head';
import { Sidebar } from '@ui/aside';
import { Navbar } from '@ui/navbar';
import { BsList } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'

export default function Test() {
  return (
    <>
      <Head>
        <title>Fyesta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Navbar />
          <div className=' flex border-2 border-white mx-8 my-8 rounded-lg'>
            <div className='mx-6 my-6 w-full'>
              <p className='text-2xl'>Insira um título</p>
              <div className='pt-6 pb-3 flex gap-3 items-center'>
                <BsList />
                <p>Tags</p>
              </div>
              <div className='w-full border-b-2 border-white'>
                <div className='py-3 pb-6 flex gap-3 items-center '>
                  <AiOutlineCalendar />
                  <p>Date</p>
                </div>
              </div>
              <input className='mt-4 font-thin italic bg-transparent w-full' placeholder='Comece a escrever agora mesmo' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
