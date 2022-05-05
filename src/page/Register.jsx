import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const Register = () => {

  const [user, setUser] = useState({})

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email)
  }, [email])

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // const register = ()
  return (
    <div className="bg-white">
      <div className="bg-gray-200 container w-2/6 rounded shadow-md h-3/4 py-6 mx-auto my-12 px-4 md:px-0 block text-left">
        <div className="w-full md:w-8/12 mx-auto">
          <div className="w-full flex">
            <a href="#" className="mx-auto inline-block mb-8">
              <img className="w-24" src="https://www.windroseenergy.com/wp-content/uploads/2018/03/Team-member-icon-1.png" alt="" />
            </a>
          </div>
          <div className="mt-1 flex flex-wrap">
             <form className="mt-6 w-full">
              <div className="form-group row">
                <label className="text-md-right">Email</label>
                <div className="py-2">
                  <input onChange={(e) => {
                    setEmail(e.target.value)
                  }} className="mb-2 -mt-12 w-full border-2 rounded py-1" value={email} type={'email'} />
                </div>
              </div>
              <div className="form-group row">
                <label className="text-md-right">Senha</label>
                <div className="py-2">
                  <input onChange={(e) => {
                    setPassword(e.target.value)
                  }} className="mb-2 -mt-12 w-full border-2 rounded py-1" value={password} type={'password'} />
                </div>
              </div>
              <div className="form-group row mb-0">
                <div className="col-md-8 offset-md-4">
                  <button className="rounded waves-effect waves-light flex items-center justify-center relative cursor-pointer w-full px-3 py-4 text-black font-sans text-center text-xs tracking-widest uppercase">
                  </button>
                  <button className="rounded waves-effect waves-light flex items-center justify-center relative cursor-pointer w-full bg-sky-800 hover:bg-sky-700 transition duration-300 px-3 py-4 text-white font-sans text-center text-xs tracking-widest uppercase">
                    Cadastre-se
                  </button>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}