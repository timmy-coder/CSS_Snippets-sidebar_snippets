import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {title: "Dashboard", src: "Chart_fill"},
    {title: "Inbox", src: "Chart"},
    {title: "Accounts", src: "User", gap: true},
    {title: "Schedule", src: "Calendar"},
    {title: "Search", src: 'Search'},
    {title: "Anaytics", src: "Chart"},
    {title: "Files", src: "Folder", gap: true},
    {title: "Setting", src: "Setting"},
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>A sidebar snippets</title>
        <meta name="description" content="Sidebar Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex'>
        <div className={`${open ? "w-72": "w-20"} w-72 h-screen p-5 pt-8 duration-300 bg-dark-purple relative`}>
          <img src='/assets/control.png' className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
          <div className='flex gap-x-4 items-center'>
            <img src='/assets/logo.png' className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>
            <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Snippets</h1>
          </div>
          <ul className='pt-6'>
            {Menus.map((menu, index) => (
              <li key={index} className={`text-gray-300 ${index === 0 && 'bg-light-white'} text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white   rounded-md 
              ${menu.gap ? "mt-9" : "mt-2"}`}>
                <img src={`/assets/${menu.src}.png`}/>
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'> 
          <h1>Home page</h1>
        </div>
      </div>      
    </div>
  )
}