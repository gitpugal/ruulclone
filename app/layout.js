import './globals.css'
import { Inter, Poppins } from 'next/font/google'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
      <title>Ruul | Worktech Solutions for modern and Global Work</title>  
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&family=Poppins:wght@300&family=Ubuntu&display=swap" rel="stylesheet"/>
      </head>
            <body className="text-[#013e39] h-fit">{children}</body>
      </html>
          )
}
