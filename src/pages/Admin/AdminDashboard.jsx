import React, { useEffect, useState } from 'react';
import Customers from '../Admin/Customer/Customers';
import WelcomeBanner from '../../../utils/WelcomeBanner';
import { Link } from "react-router-dom"



function AdminDashboard() {

  // state 
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full  mx-auto">

      {/* Welcome banner */}
      <div className='mb-3'>
        <ul className="inline-flex flex-wrap text-sm font-medium">
          <li className="flex items-center">
            <Link to="/dashboard" className="text-slate-500 text-[25px] font-bold hover:text-indigo-500 uppercase" >Dashboard | administration </Link>
          </li>
        </ul>
      </div>

      {loading && <WelcomeBanner />}

      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <Customers />
        
    
      </div>

   

    </div>
  );
}

export default AdminDashboard;