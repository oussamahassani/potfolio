import React from "react";

function Footer() {
  return (
    <div className="text-center p-6 bg-gradient-to-b w-full text-white from-cyan-800 to-cyan-700  footer">
      <span className="text-white">&copy; {new Date().getFullYear()} Copyright - </span>
      <a className="link-underline text-white font-bold" href="https://oussama-hassani.netlify.app">Oussama  Hassani</a>
    </div>
  )
}


export default Footer
