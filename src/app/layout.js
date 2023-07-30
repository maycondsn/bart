import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import RightSide from './pages/RightSide'
import LeftSide from './pages/LeftSide'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BART | chat',
  description: 'Chat in real time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        
        <div id="menu" className="menu">
          <Header />
        </div>
        <div id="left" 
         className='left py-9 bg-slate-100 border-black border rounded'>
          {children}
        </div>
        <div id="right" className='right'>
          <RightSide />
        </div>
        
      </body>
    </html>
  )
}
