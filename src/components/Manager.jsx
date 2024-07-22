
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArry] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpasswordArry(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });

    navigator.clipboard.writeText(text)
  }

  const showPass = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("img/hide.png")) {
      ref.current.src = "img/view.png"
      passwordRef.current.type = "password"
    } else {
      ref.current.src = "img/hide.png"
      passwordRef.current.type = "text"
    }
  };

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setpasswordArry([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      console.log([...passwordArray, form])
      setForm({ site: "", username: "", password: "" })

      toast('Password saved', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",


      });
    }
    else { toast('Error: Password not saved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    }); }

  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const deletePassword = (id) => {
    console.log("deleting password with id...", id)
    let c = confirm("Do you really wand to delete this password?")
    if (c) {
      setpasswordArry(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

      toast('Password Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
  }

  const editPassword = (id) => {
    console.log("editing password with id...", id)
    setForm(passwordArray.filter(i => i.id === id)[0])
    setpasswordArry(passwordArray.filter(item => item.id !== id))
  }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="fixed inset-0 -z-10 h-full  w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">     </div>
      <div className="md:mycontainer min-h-[83vh] py-5 ">
        <h1 className='text-white font-bold text-center text-2xl'>PASSWORDMANAGER</h1>
        <p className='text-white text-center'>Your Own Passward Manager</p>
        <div className="flex flex-col items-center gap-2  py-7">
          <input value={form.site} onChange={handleChange} name='site' placeholder='Enter Website URL' className='rounded-full py-3 px-5 w-3/4 ' />

          <div className=' flex flex-col md:flex-row gap-10 w-3/4 justify-between py-5 '>

            <input value={form.username} onChange={handleChange} name='username' placeholder='UserName' className='rounded-full py-3 px-5 md:w-1/2 ' />

            <div className="relative md:w-1/2">
              <input ref={passwordRef} value={form.password} onChange={handleChange} name='password' placeholder='Password' className='rounded-full py-3 w-full px-5' type='password' />
              <span className='absolute right-0 p-1 top-1' onClick={showPass} >
                <img ref={ref} src="img/view.png" alt="eye" className='p-1' width={30} /></span>
            </div>
          </div>

          <div>
            <button onClick={savePassword} className=' font-bold flex justify-center gap-2 items-center rounded-full py-2 w-56 bg-white text-black'><lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover">
            </lord-icon>Save</button>
          </div>
          <div className="passwords w-3/4 ">
            <h2 className='font-semibold text-white text-2xl py-2 '>Your Passwords</h2>
            {passwordArray.length === 0 && <div className='text-white'>No password to show</div>}
            {passwordArray.length !== 0 && (
              <div className=" flex justify-center items-center">
                <table className=" table-auto w-full  bg-white overflow-hidden border-black rounded">
                  <thead className="bg-violet-600">
                    <tr>
                      <th className="text-white py-2">Site</th>
                      <th className="text-white py-2">Username</th>
                      <th className="text-white py-2">Password</th>
                      <th className="text-white py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passwordArray.map((item, index) => (
                      <tr key={index}>
                        <td className="  border py-2 text-center ">
                          <div className='flex justify-around items-center'>
                            <a href={item.site} target="_blank" rel="noopener noreferrer">
                              {item.site}
                            </a>
                            <div onClick={() => copyText(item.site)}>
                              <img src="img/copy.png" alt="copy" className='w-5 cursor-pointer' />
                            </div>
                          </div>
                        </td>
                        <td className="border py-2 text-center ">
                          <div className='flex justify-around items-center'>
                            {item.username}
                            <div onClick={() => copyText(item.username)}>
                              <img src="img/copy.png" alt="copy" className='w-5 cursor-pointer' />
                            </div>
                          </div>
                        </td>
                        <td className=" border py-2 text-center">
                          <div className='flex justify-around items-center'>
                            {item.password}
                            <div onClick={() => copyText(item.password)}>
                              <img src="img/copy.png" alt="copy" className='w-5 cursor-pointer' />
                            </div></div>
                        </td>
                        <td className=" border py-2 text-center">
                          <div className='flex justify-around items-center'>
                            <span onClick={() => { { editPassword(item.id) } }}><img src="img/edit.png" alt="copy" className='w-5 cursor-pointer' /></span>
                            <span onClick={() => { { deletePassword(item.id) } }}><img src="img/delete.png" alt="copy" className='w-5 cursor-pointer' /></span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div >

      </div>


    </>
  )
}

export default Manager











