import GenderCheckBox from "./GenderCheckbox"

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-lg border border-white/20'>

                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp
                    <span className='text-blue-500'>
                        ChatApp
                    </span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Sadie Sink' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='sadieSink' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Ss@12345' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="text" placeholder='Ss@12345' className='w-full mb-2 input input-bordered h-10' />
                    </div>

                    <GenderCheckBox />

                    <div>
                        <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                            Already have an account
                        </a>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>SignUp</button>
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