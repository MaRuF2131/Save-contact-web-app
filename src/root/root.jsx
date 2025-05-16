import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy,Suspense } from "react";
import {delayImport} from '../mytools/delayimport/delayimport'
const Home=lazy(()=>delayImport (()=> import( "../components/mainlayout/mainlayout"),1000))
const Contactlist=lazy(()=>delayImport(()=> import("../components/contactlist/contactlist"),1000))
const CreateContact=lazy(()=>delayImport(()=> import("../components/create-contact-form/createContact"),1000))
const Loader =lazy(()=> import('../mytools/loader/loader'))
const roots=createBrowserRouter([
    {
        path:'/',
        element:(
            <Suspense fallback={<Loader/>}>
                   <Home />
            </Suspense>
        ),
        children:[
            {
              path:'/My Contact',
              element:(
                <Suspense fallback={<Loader/>}>
                       <Contactlist/>
                </Suspense>
              )
            },
                
            {
             path:'/Add Contact',
              element:(
                <Suspense fallback={<Loader/>}>
                       <CreateContact/>
                </Suspense>
              )
            }
        ]

    }

])

function root() {
  return (
    <RouterProvider router={roots}>
    </RouterProvider>
  )
}

export default root