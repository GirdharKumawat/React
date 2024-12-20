import React,{ useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authServices from './AppWrite/auth'
import { Header,Footer } from './components/index'
import {login ,logout} from "./store/authSlice"
function App() {

  const [loading, setLoading] =useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

if(loading)
{
  return <h1>Loading...</h1>
}
  return (
    <div>
      <Header/>
      <h1>App</h1>
      <Footer/>
    </div>
  )


}

export default App
