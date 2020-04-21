import React from 'react';
import Receipt from './components/receiptDetails'
import {
  BrowserRouter,
  Route,
  Switch
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
import YearSlider from './components/YearSlider'
import AllEvents from './components/AllEvents'
import AddMemberForm from './components/AddMemberForm'


const DefaultContainer = () => (
  <div>
  <MenuBar />
    <Route  path='/receipt' component={Receipt}></Route>
    <Route  path='/details' component={ReceiptDetails}></Route>
    <Route  path='/events' component={Events}></Route>
    <Route  path='/eventsedit' component={Eventedit}></Route>
    <Route  path='/membermainpage' component={MemberMainPage}></Route>
    <Route  path='/aboutmandal' component={AboutMandal}></Route>
    <Route  path='/editaboutmandal' component={EditAboutMandal}></Route>
    <Route  path='/editdonationaboutmandal' component={EditDonationAboutMandal}></Route>
    <Route  path='/basicsetting' component={BasicSetting}></Route>
    <Route  path='/resetpassword' component={ResetPAsswordPopup}></Route>
    <Route  path='/treasurebilling' component={TreasurerBillingPage}></Route>
    <Route  path='/adminbilling' component={AdminBilling}></Route>
    <Route  path='/menubar' component={MenuBar}></Route>
    <Route  path='/userhome' component={UserHomePage}></Route>
    <Route  path='/userprofilesetting' component={UserProfileSetting}></Route>
    <Route  path='/successfully' component={Successfully}></Route>
    <Route  path='/receiptform' component={ReceiptForm}></Route>
    <Route  path='/memberprofile' component={MemberProfile}></Route>
    <Route  path='/homepage' component={MemberHomeePage}></Route>
    <Route  path='/feedback' component={Feedback}></Route>
    <Route  path='/membereditprofile' component={MemberEditProfile}></Route>
    <Route  path='/addnewpost' component={AddNewPost}></Route>
    <Route  path='/accountsetting' component={AccountSetting}></Route>
    <Route  path='/error' component={ErrorMessage}></Route>
    <Route  path='/eventupdated' component={eventUpdated}></Route>
    <Route  path='/eventdetails' component={EventDetails}></Route>
    <Route  path='/billingtable' component={BillingTable}></Route>
    <Route  path='/yearslider' component={YearSlider}></Route>
    <Route  path='/allevents' component={AllEvents}></Route>
    <Route path='/addmember' component={AddMemberForm}></Route>    
    <Footer/>
  </div>
)
export default function App() {
  return ( 
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route  path="/signup" component={SignUp}/>
      <Route  path='/forgotpassword' component={ForgotPassword}></Route>
      <Route component={DefaultContainer}/>
    </Switch>
  </BrowserRouter>
  );
}