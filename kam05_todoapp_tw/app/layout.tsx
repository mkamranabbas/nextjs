import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body className='min-h-screen min-w-full grid place-content-center radial-blue'>

          <header>
                <div className="w-fixed w-full">
                    <div className="sticky top-0 p-2 w-full h-full bg-slate-100 border-b-2 border-slate-500 ">
                      
                      <h1 className='text-center text-4xl'>To Do App</h1>

                      <h4 className='text-1xl text-right text-gray-400'>(with Tailwind)</h4>

                    </div>
                </div>
          </header>
            <div className="container min-w-[1000px]">
                
                <main role="main" className="w-full flex-grow">
                  
                {children}

                </main>
                {/* <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
                    <div className="flex sm:flex-col px-2">
                      
                    </div>
                </div> */}
            </div>
            <footer className="bg-black mt-auto text-yellow-200 p-4">
              Developed By : M Kamran Abbas, Roll No. : PIAIC149834
            </footer>
      
      </body>
    </html>
  )
}
