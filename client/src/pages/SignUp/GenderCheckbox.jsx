const GenderCheckBox = () => {
    return (
        <div className="flex gap-3">
            <div className="form-control">
                <label className={'label gap-2 cursor-pointer'}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox bg-slate-900" />
                </label>
            </div>

            <div className="form-control">
                <label className={'label gap-2 cursor-pointer'}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox bg-slate-900" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;


//Starter code of this file

// const GenderCheckBox = () => {
//     return (
//         <div className="flex gap-3">
//             <div className="form-control">
//                 <label className={'label gap-2 cursor-pointer'}>
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" className="checkbox bg-slate-900" />
//                 </label>
//             </div>

//             <div className="form-control">
//                 <label className={'label gap-2 cursor-pointer'}>
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" className="checkbox bg-slate-900" />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckBox;