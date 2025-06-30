import React from "react";

function Footer() {
  return (
    <div className="mt-5 fixed bottom-0 text-center p-6 bg-gradient-to-b w-full text-white bg-gradient-to-b from-black to-gray-800 footer ">
      <span className="text-white">&copy; {new Date().getFullYear()} Copyright - </span>
      <a className="link-underline text-white font-bold" href="https://oussama-hassani.netlify.app">Oussama  Hassani</a>
    </div>
  )
}


export default Footer
