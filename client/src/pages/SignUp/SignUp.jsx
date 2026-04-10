import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleCheckBox = (gender) => {
        setInputs({
            ...inputs,
            gender: gender
        })
    }

    const { loading, signup } = useSignup();   //signup hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full max-w-md px-4 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20'>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp
                    <span className='text-blue-500'>
                        ChatApp
                    </span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Sadie Sink' className='w-full input input-bordered h-10'
                            value={inputs.fullname}
                            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='sadieSink' className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Ss@12345' className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Ss@12345' className='w-full mb-2 input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckBox} selectedGender={inputs.gender} />

                    <div>
                        <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                            Already have an account
                        </Link>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading} >
                            {loading ? <span className="loading loading-spinner"></span> : "SignUp"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp


//Starter code of this file

// import GenderCheckBox from "./GenderCheckbox"

// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20'>

//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     SignUp
//                     <span className='text-blue-500'>
//                         ChatApp
//                     </span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>
//                         </label>
//                         <input type="text" placeholder='Sadie Sink' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type="text" placeholder='sadieSink' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder='Ss@12345' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label p-2 '>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input type="text" placeholder='Ss@12345' className='w-full mb-2 input input-bordered h-10' />
//                     </div>

//                     <GenderCheckBox />

//                     <div>
//                         <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                             Already have an account
//                         </a>
//                     </div>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp