import logo from "../assets/mudra_logo.png"
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    var salt = bcrypt.genSaltSync(10);
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        // const pin = data.pin;
        var hash = bcrypt.hashSync(data.pin, salt);
        data.pin = hash;
        // console.log(data, data.pin);

        // const isMatch = bcrypt.compareSync("12345", hash);
        // console.log(isMatch);

        data.user_status = "pending";
        data.balance = 0;
        data.transactions = [];
        console.log(data);


        // SEND USER DATA TO DATABASE
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                toast.success("Successfully Registered!");
            }
        })
      
    }


    return (
        <div>
            <ToastContainer />
            <div className="hero min-h-screen">
                <div className="hero-content lg:w-1/3">
                    
                    <div className="card  lg:w-full shrink-0">
                        <div className="card-body pb-0">
                            <img src={logo} alt="" className="h-14 w-14 lg:h-20 lg:w-20"/>
                            <p className="font-bold text-lg lg:text-xl">Register</p>
                            <p className="text-lg lg:text-xl">for your <span className="font-bold text-[#A90C0F]">Mudra</span> account</p>
                        </div>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })}/>
                                    {errors.name && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                        </div>
                        {/* PIN */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">PIN</span>
                                    </label>
                                    <input type="number" placeholder="Enter a 5 digit PIN number" className="input input-bordered" {...register("pin", { required: true, pattern: { value: /^[0-9]{5}$/, message: "PIN must be 5 digits",
                                      }, })}
                                    />
                                    {errors.PIN && <span className="mt-2 text-[#FF5A3D]">{errors.PIN.message}</span>}
                        </div>
                        {/* Mobile Number */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Mobile No.</span>
                                    </label>
                                    <input type="number" placeholder="01..." className="input input-bordered" {...register("phone", { required: true })}/>
                                    {errors.phone && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                        </div>
                        {/* Email */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Your Email" className="input input-bordered" {...register("email", { required: true })}/>
                                    {errors.email && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                        </div>
                        {/* Account Type */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Account Type</span>
                                    </label>
                                    <select className="input input-bordered" {...register("user_role")}>
                                        <option value="user">User</option>
                                        <option value="agent">Agent</option>
                                    </select>
                                    {/* <input type="" placeholder="Your Email" className="input input-bordered" {...register("email", { required: true })}/> */}
                                    {errors.user_role && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                        </div>
                        <p>
                            Already have an account? <span className="text-[#A90C0F] font-bold underline lg:text-lg">Log In</span> here!
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn text-black text-base lg:text-lg font-bold bg-[#F6BE4F]">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;