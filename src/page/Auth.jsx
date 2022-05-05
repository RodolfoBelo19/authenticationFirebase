import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { useState } from "react";

import { 
  auth, 
  providerGoogle 
} from "../firebase-config";

export const Auth = () => {

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // Enter with google account
  const handleGoogle = async () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      }) 
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      })
  }

  return (
    <div className="bg-white">
      <div className="bg-gray-200 container md:w-2/6 w-full rounded shadow-md md:h-3/4 py-6 mx-auto md:my-12 px-4 md:px-0 block text-left">
        <div className="w-full md:w-8/12 mx-auto">
          <div className="w-full flex">
            <a href="#" className="mx-auto inline-block mb-4">
              <img className="w-24" src="https://www.windroseenergy.com/wp-content/uploads/2018/03/Team-member-icon-1.png" alt="" />
            </a>
          </div>
          <div className="mt-1 flex flex-wrap">
            <div className="w-full">
              <div className="mb-2">
                <button onClick={handleGoogle} id="google" className="rounded waves-effect waves-light flex items-center justify-center relative cursor-pointer w-full bg-red-600 hover:bg-red-500 transition duration-600  py-4 text-white font-sans text-center text-xs tracking-widest uppercase">
                  <i className="fab fa-google absolute left-0 pl-6"></i>
                  Entrar com Google
                </button>
              </div>
            </div>
            <hr className="border-2 text-black" />
             <form className="mt-6 w-full">
              <div className="form-group row">
                <label className="text-sm">Email</label>
                <div className="py-2">
                  <input className="mb-2 -mt-12 w-full border-2 rounded py-1" type={'email'} />
                </div>
              </div>
              <div className="form-group row">
                <label className="text-sm">Senha</label>
                <div className="py-2">
                  <input className="mb-2 -mt-12 w-full border-2 rounded py-1" type={'password'} />
                </div>
              </div>
              <div className="form-group row mb-0">
                <div className="col-md-8 offset-md-4">
                  {/* Componentizar bottuns para reutilização de códigos */}
                  <button className="rounded waves-effect waves-light flex items-center justify-center relative cursor-pointer w-full bg-sky-800 hover:bg-sky-700 transition duration-300 px-3 py-4 text-white font-sans text-center text-xs tracking-widest uppercase">
                    Entrar
                  </button>
                  <a target="_blank" href="#" className="rounded waves-effect waves-light flex items-center justify-center relative cursor-pointer w-full px-3 py-4 text-black font-sans text-center text-xs tracking-widest uppercase">
                    Esqueceu sua Senha?
                  </a>
                  <button className="rounded waves-effect waves-light flex items-center justify-center relative cursor-pointer w-full px-3 py-4 text-black font-sans text-center text-xs tracking-widest uppercase">
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