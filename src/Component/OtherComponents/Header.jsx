import React, { useEffect, useState } from 'react'

function Header({data}) {

  const [username, setUsername] = useState("")
  // if(!data){
  //   setUsername("Admin")
  // }
  // else{
  //   setUsername(data.name)
  // }
  useEffect(() => {
    if (!data) {
      setUsername("Admin");
    } else {
      setUsername(data.name);
    }
  }, [data]);


  const logOutUser= ()=>{
    // localStorage.setItem("loggedInUser", " ");
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }



  //{username == data.name && `Emp-ID:- ${data.id}`}
  return (
    <header className='flex items-center justify-between px-20 py-2  h-[15vh] '>
      <div>
        <h2>Hiii, <br /> <span className='text-2xl font-semibold'>{username}👋🏻  </span></h2>
      </div>
      <button onClick={logOutUser} className='bg-red-600 px-2 py-1 rounded text-xl'>Log Out</button>
    </header>
  )
}

export default Header