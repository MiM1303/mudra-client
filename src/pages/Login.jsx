import logo from "../assets/mudra_logo.png"
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();
    var salt = bcrypt.genSaltSync(10);
    const onSubmit = (data) => {
        console.log(data);
        // data.user_pin = parseInt(data.user_pin);
        var hash = bcrypt.hashSync(data.user_pin, salt);
        

        fetch(`http://localhost:5000/users/${data.username}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const user_data = data;
            if(data.message === "User not found"){
                toast.error("Account Does Not Exist!");
                return;
            }
            const isMatch = bcrypt.compareSync("12345", hash);
            // console.log(data.pin, hash, isMatch);
            if(isMatch){
                console.log("PIN matches");
                // set jwt token in local storage
                axiosPublic.post('jwt', data)
                .then(res=>{
                    if(res.data.token){
                        
                        localStorage.setItem('access-token', res.data.token);
                        // console.log("current user data",user_data);
                        localStorage.setItem('user-email', user_data.email);

                    }
                })
                navigate('/dashboard', { state: { from: location } })
            }
            else{
                toast.error("Wrong PIN! Please Enter Correct PIN.");
            }
        })

        // if hash matches, redirect to dashboard
        
      
    }
    return (
        <div>
            <ToastContainer />
            <div className="hero min-h-screen">
                <div className="hero-content lg:w-1/3">
                    
                    <div className="card  lg:w-full shrink-0">
                        <div className="card-body pb-0">
                            <img src={logo} alt="" className="h-14 w-14 lg:h-20 lg:w-20"/>
                            <p className="font-bold text-lg lg:text-xl">Login</p>
                            <p className="text-lg lg:text-xl">to your <span className="font-bold text-[#A90C0F]">Mudra</span> account</p>
                        </div>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        {/* Mobile Number or Email */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Mobile Number/Email</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" {...register("username", { required: true })}/>
                                    {errors.username && <span className="mt-2 text-[#FF5A3D]">This field is required</span>}
                        </div>
                        {/* PIN */}
                        <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">PIN</span>
                                    </label>
                                    <input type="number" placeholder="Enter a 5 digit PIN number" className="input input-bordered" {...register("user_pin", { required: true, pattern: { value: /^[0-9]{5}$/, message: "PIN must be 5 digits",
                                      }, })}
                                    />
                                    {errors.user_pin && <span className="mt-2 text-[#FF5A3D]">{errors.user_pin.message}</span>}
                        </div>
                        
                        <p>
                            Do not have an account? <Link to="/register" className="text-[#A90C0F] font-bold underline lg:text-lg">Register</Link> here!
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn text-black text-base lg:text-lg font-bold bg-[#F6BE4F]">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;