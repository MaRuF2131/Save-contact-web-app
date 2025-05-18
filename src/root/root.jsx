import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy,Suspense } from "react";
import {delayImport} from '../mytools/delayimport/delayimport'
const Home=lazy(()=> import( "../components/mainlayout/mainlayout"))
const Contactlist=lazy(()=>import("../components/contactlist/contactlist"))
const Myprofile=lazy(()=> import("../components/profile/profile"))
const CreateContact=lazy(()=>import('../components/create-contact-form/createContact'))
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
            },

            {
              path:'/myprofile',
              element:(
                <Suspense fallback={<Loader/>}>
                      <Myprofile/>
                </Suspense>
              )
            },

            {
              index:true,
              element:(
                <Suspense fallback={<Loader/>}>
                         <Myprofile/>
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