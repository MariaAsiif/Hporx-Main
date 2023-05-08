import React from 'react'
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import HproxLanding from '../pages/HropxLanding/Landing';
import AuthProvider from '../partials/Auth'
// import CommingSoon from '../pages/CommingSoon/CommingSoon'
import Signin from '../pages/Admin/SignIn/Signin'
import SignUp from '../pages/Admin/SignUp/Signup'
import Appointments from '../pages/Admin/Appointment/Appointments'
import CreateAppointment from '../pages/Admin/Appointment/CreateAppointment'

import Products from '../pages/Admin/Ecome/Product/Products'
import CreateProducts from '../pages/Admin/Ecome/Product/CreateProducts'

import Categories from '../pages/Admin/Ecome/Category/Categories'
import CreateCategory from '../pages/Admin/Ecome/Category/CreateCategory'

import Stores from '../pages/Admin/Ecome/Store/Stores'
import CreateStore from '../pages/Admin/Ecome/Store/CreateStore'







import AdminDashboard from '../pages/Admin/AdminDashboard';
import Diseases from '../pages/Admin/Disease/Diseases';
import CreateDisease from '../pages/Admin/Disease/CreateDisease';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Landing page Routes */}
            <Route path="/">
                <Route index element={<HproxLanding />} />
                {/* <Route path="/comingsoon" element={<CommingSoon />} /> */}
                {/* <Route path="/user-feedback" element={<UserFeedback />} /> */}
                <Route path="/adminsignin" element={<Signin />} />
                <Route path="/adminsignup" element={<SignUp />} />
            </Route>

            {/* Admin Routes */}
            <Route
                element={<AuthProvider />}
            >
                <Route path='/admindashboard' element={<AdminDashboard />} />
                <Route path="/appointment" element={<Appointments />} />
                <Route path="/appointment/create-appointment" element={<CreateAppointment />} />
                <Route path="/products" element={<Products />} />
                <Route path="/category" element={<Categories />} />
                <Route path="/store" element={<Stores />} />
                <Route path="/products/create-products" element={<CreateProducts />} />
                <Route path="/category/create-category" element={<CreateCategory />} />
                <Route path="/store/create-store" element={<CreateStore />} />
                <Route path="/disease" element={<Diseases />} />
                <Route path="/disease/create-disease" element={<CreateDisease />} />
                <Route path="/department" element={<Department />} />
                <Route path="/department/create-department" element={<CreateDepartment />} />
                <Route path="/designation" element={<Designation />} />
                <Route path="/designation/create-designation" element={<CreateDesignation />} />
                <Route path="/message" element={<Message />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/create-job" element={<CreateJob />} />
                <Route path="/applied-jobs" element={<AppliedAllJobs />} />
                <Route path="/jobcategory" element={<JobCategories />} />
                <Route path="/jobcategory/create-jobcategory" element={<CreateJobCategory />} />
                <Route path="/candidates" element={<Candidate />} />
                <Route path="/candidates/create-candidate" element={<CreateCandidate />} />
                <Route path="/tutorial" element={<VideoTutorial />} />
                <Route path="/tutorial/create-tutorial" element={<CreateVideo />} />
                <Route path="/question" element={<Questions />} />
                <Route path="/question/create-question" element={<CreateQuestion />} />
                <Route path="/employers" element={<Employers />} />
                <Route path="/employers/create-employers" element={<CreateEmployer />} />
                <Route path="/inspire" element={<Inspire />} />
                <Route path="/inspire/create-inspire" element={<CreateInspire />} />
                <Route path="/ticker" element={<Ticker />} />
                <Route path="/ticker/create-ticker" element={<CreateTicker />} />
                <Route path="/phonebook" element={<PhoneBooks />} />
                <Route path="/phonebook/create-phonebook" element={<CreatePhoneBook />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/create-product" element={<CreateFeedback />} />
                <Route path="/feedback" element={<FeedBack />} />
                <Route path="/feedback/create-feedback" element={<CreateFeedback />} />
                <Route path='/brand-advertisement' element={<BrandAdvertisement />} />
                <Route path='/brand-advertisement/create-brand-advertisement' element={<CreateBrandAdvertisement />} />
                <Route path='/business-advertisement' element={<BusinessAdvertisement />} />
                <Route path='/business-advertisement/create-business-advertisement' element={<CreateBusinessAdvertisement />} />
                <Route path='/organization-advertisement' element={<OrganizationAdvertisement />} />
                <Route path='/organization-advertisement/create-organization-advertisement' element={<CreateOrganizationAdvertisement />} />
                <Route path="/locate/doctor" element={<Doctors />} />
                <Route path="/locate/lawyer" element={<Lawyers />} />
                <Route path="/locate/services" element={<Services />} />
                <Route path="/locate/doctor/create-doctor" element={<CreateDoctor />} />
                <Route path="/locate/lawyer/create-lawyer" element={<CreateLawyer />} />
                <Route path="/locate/services/create-service" element={<CreateServices />} />
                <Route path="/faq" element={<Faqs />} />
                <Route path="/faq/create-faq" element={<CreateFaq />} />
                <Route path="/task" element={<Task />} />
                <Route path="/task/create-task" element={<CreateTask />} />
                <Route path="/industry" element={<Industries />} />
                <Route path="/industry/create-industry" element={<CreateIndustry />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/policy/create-policy" element={<CreatePolicy />} />
                <Route path="/permission" element={<Permission />} />
                <Route path="/permission/create-permission" element={<CreatePermission />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/roles/create-roles" element={<CreateRole />} />
                <Route path="/singlePermission" element={<SinglePermission />} />
                <Route path="/singlePermission/create-permission/:id" element={<CreateSinglePermission />} />
                <Route path="/multiplePermission" element={<MutiplePermission />} />
                <Route path="/multiplePermission/create-permission/:id" element={<CreateMultiplePermission />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/terms/create-terms" element={<CreateTermsCondition />} />
                <Route path="/tasks" element={<TermsConditions />} />
                <Route path="/tasks/create-tasks" element={<CreateTermsCondition />} />
                <Route path="/taskcategory" element={<TaskCategories />} />
                <Route path="/taskcategory/create-taskcategory" element={<CreateTaskCategory />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/aboutus/create-aboutus" element={<CreateAboutUs />} />
                <Route path="/lexicons" element={<Lexicons />} />
                <Route path="/lexicons/create-lexicon" element={<CreateLexicon />} />
                <Route path="/user" element={<Roles />} />
                <Route path="/user/assign-role" element={<AssignRole />} />
                <Route path="/user/list" element={<Users />} />
                <Route path="/user/list/create-user" element={<CreateUsers />} />
            </Route>
        </>
    )
)

export default router

