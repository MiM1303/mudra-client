import useUserData from "../../../hooks/useUserData";
import "../../../Layout/DashboardStyles.css";

const MyAccount = () => {
    const [userData] = useUserData();
    console.log("in my account page",userData);
    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-fit lg:mx-auto">
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th className="text-base lg:text-xl py-6 px-1 lg:p-10">Name:</th>
                        <td className="text-base lg:text-xl">{userData.name}</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th className="text-base lg:text-xl py-6 px-1 lg:p-10">Email:</th>
                        <td className="text-base lg:text-xl">{userData.email}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="text-base lg:text-xl py-6 px-1 lg:p-10">Phone No:</th>
                        <td className="text-base lg:text-xl">{userData.phone}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th className="text-base lg:text-xl py-6 px-1 lg:p-10">Balance:</th>
                        <td className="text-base lg:text-xl"><span className="text-[#A90C0F] font-extrabold">{userData.balance}</span> taka</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            {/* <p><span>Name:</span>{userData.name}</p>
            <p><span>Email:</span>{userData.email}</p>
            <p><span>Phone No:</span>{userData.phone}</p>
            <p><span>Balance:</span>{userData.balance} taka</p> */}
            {/* <p><span></span></p> */}
        </div>
    );
};

export default MyAccount;