import React from 'react';
import Receipt from './components/receiptDetails'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import ReceiptDetails from './components/Receipt';
import Events from './components/Events';
import Eventedit from './components/EventEdit';
import MemberMainPage from './components/MemberMainPage';
import AboutMandal from './components/AboutMandal';
import EditAboutMandal from './components/EditAboutMandal';
import EditDonationAboutMandal from './components/EditDonationAboutMandal';
import BasicSetting from './components/basicSetting';
import ResetPAsswordPopup from './components/ResetPasswordPopup';
import NavBar from './components/NavBar';
import TreasurerBillingPage from './components/TreasurerBillingPage'
import AdminBilling from './components/AdminBilling'
import UserHomePage from './components/UserHomePage'
import MenuBar from './components/MenuBar'
import UserProfileSetting from './components/UserProfileSetting'
import Successfully from './components/Successfully'
import ReceiptForm from './components/ReceiptForm'
import MemberProfile from './components/MemberProfile'
import MemberHomeePage from './components/MemberHomePage'
import Feedback from './components/Feedback'
import MemberEditProfile from './components/MemberEditProfile'
import AddNewPost from './components/AddNewPost'
import AccountSetting from './components/AccountSetting'
import ErrorMessage from './components/ErrorMessage'
import eventUpdated from './components/eventUpdated';
import Login from './components/Login'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'
import EventDetails from './components/EventDetails'
import Footer from './components/Footer'
import BillingTable from './components/BillingTable'
export default function App() {

  return ( 
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path='/receipt' component={Receipt}></Route>
        <Route exact path='/details' component={ReceiptDetails}></Route>
        <Route exact path='/events' component={Events}></Route>
        <Route exact path='/eventsedit' component={Eventedit}></Route>
        <Route exact path='/membermainpage' component={MemberMainPage}></Route>
        <Route exact path='/aboutmandal' component={AboutMandal}></Route>
        <Route exact path='/editaboutmandal' component={EditAboutMandal}></Route>
        <Route exact path='/editdonationaboutmandal' component={EditDonationAboutMandal}></Route>
        <Route exact path='/basicsetting' component={BasicSetting}></Route>
        <Route exact path='/resetpassword' component={ResetPAsswordPopup}></Route>
        <Route exact path='/treasurebilling' component={TreasurerBillingPage}></Route>
        <Route exact path='/adminbilling' component={AdminBilling}></Route>
        <Route exact path='/menubar' component={MenuBar}></Route>
        <Route exact path='/userhome' component={UserHomePage}></Route>
        <Route exact path='/userprofilesetting' component={UserProfileSetting}></Route>
        <Route exact path='/successfully' component={Successfully}></Route>
        <Route exact path='/receiptform' component={ReceiptForm}></Route>
        <Route exact path='/memberprofile' component={MemberProfile}></Route>
        <Route exact path='/homepage' component={MemberHomeePage}></Route>
        <Route exact path='/feedback' component={Feedback}></Route>
        <Route exact path='/membereditprofile' component={MemberEditProfile}></Route>
        <Route exact path='/addnewpost' component={AddNewPost}></Route>
        <Route exact path='/accountsetting' component={AccountSetting}></Route>
        <Route exact path='/error' component={ErrorMessage}></Route>
        <Route exact path='/eventupdated' component={eventUpdated}></Route>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/forgotpassword' component={ForgotPassword}></Route>
        <Route exact path='/eventdetails' component={EventDetails}></Route>
        <Route exact path='/billingtable' component={BillingTable}></Route>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}