

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './components/Like/CartContext';

// import Homepage from './pages/homepage';
// import ProductPage from './pages/ProductPageCategori/ProductPage';
// import CartPage from './pages/productPage/productpage';
// import SendPage from './pages/send page/sendpage';
// import SuccessfulP from './pages/Successful page/SuccessfulP';
// import SabadPage from './pages/Cart/Cart';
// import FailedP from './pages/Failedpage/FailedPage';
// import ShoppingPage8 from './pages/shoppingPage/shoppingpage';
// import LikeProfilePage from './pages/likeProfilePage/likeProfilePage';
// import Userprofilepage from './pages/userProfilePage/userprofilepage';
// import HistoriPage from './pages/HistoryPage/historiPage';
// import TicketsendPage from './pages/ticketSendPage/ticketsendPage';
// import PastTicketPage from './pages/PastTicketPage/pastTicketPage';
// import LoginForm from './pages/Loginform/LoginForm';
// import MainLayoutProfile from './components/Layout/LayoutProfile/MainLayout';
// import MainLayout from './components/Layout/Mainlayout/mainLayout';
// import Carouselus from './pages/testcarosel/Carousel';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Homepage />} />
//           <Route path="/CartPage/:categoryId/:productId" element={<CartPage />} />
//           <Route path='/Sendpage' element={<SendPage />} />
//           <Route path='/SuccessfulP' element={<SuccessfulP />} />
//           <Route path='/sabad' element={<SabadPage />} />
//           <Route path='/FailedPayment' element={<FailedP />} />
//           <Route path="/productpage/:categoryId" element={<ProductPage />} />
//           <Route path='/lp' element={<MainLayoutProfile />} />
//           <Route path='/MainLayout' element={<MainLayout />} />
//           <Route path='/test' element={<ShoppingPage8 />} />
//           <Route path='/like' element={<LikeProfilePage />} />
//           <Route path='/profile' element={<Userprofilepage />} />
//           <Route path='/history' element={<HistoriPage />} />
//           <Route path='/ticket' element={<TicketsendPage />} />
//           <Route path='/pastticket' element={<PastTicketPage />} />
//           <Route path='/LoginForm' element={<LoginForm />} />
//           <Route path='/AboutUS' element={<Carouselus />} />
          
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Like/CartContext';
import { LawProvider } from '../src/components/ghavanin/LawContext'; // Import LawProvider

import Homepage from './pages/homepage';
import ProductPage from './pages/ProductPageCategori/ProductPage';
import CartPage from './pages/productPage/productpage';
import SendPage from './pages/send page/sendpage';
import SuccessfulP from './pages/Successful page/SuccessfulP';
import SabadPage from './pages/Cart/Cart';
import FailedP from './pages/Failedpage/FailedPage';
import ShoppingPage8 from './pages/shoppingPage/shoppingpage';
import LikeProfilePage from './pages/likeProfilePage/likeProfilePage';
import Userprofilepage from './pages/userProfilePage/userprofilepage';
import HistoriPage from './pages/HistoryPage/historiPage';
import TicketsendPage from './pages/ticketSendPage/ticketsendPage';
import PastTicketPage from './pages/PastTicketPage/pastTicketPage';
import LoginForm from './pages/Loginform/LoginForm';
import MainLayoutProfile from './components/Layout/LayoutProfile/MainLayout';
import MainLayout from './components/Layout/Mainlayout/mainLayout';
import Carouselus from './pages/testcarosel/Carousel';
import Testhom from './components/Content/Test1';


function App() {
  return (
    <CartProvider>
        <LawProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            
            <Route path="/CartPage/:categoryId/:productId" element={<CartPage />} />
            <Route path='/Sendpage' element={<SendPage />} />
            <Route path='/SuccessfulP' element={<SuccessfulP />} />
            <Route path='/sabad' element={<SabadPage />} />
            <Route path='/FailedPayment' element={<FailedP />} />
            <Route path="/productpage/:categoryId" element={<ProductPage />} />
            <Route path='/lp' element={<MainLayoutProfile />} />
            <Route path='/MainLayout' element={<MainLayout />} />
            <Route path='/test' element={<ShoppingPage8 />} />
            <Route path='/like' element={<LikeProfilePage />} />
            <Route path='/profile' element={<Userprofilepage />} />
            <Route path='/history' element={<HistoriPage />} />
            <Route path='/ticket' element={<TicketsendPage />} />
            <Route path='/pastticket' element={<PastTicketPage />} />
            <Route path='/LoginForm' element={<LoginForm />} />
            {/* <Route path='/AboutUS' element={<Carouselus />} /> */}
          </Routes>
        </Router>
        </LawProvider>
    </CartProvider>
  );
}

export default App;
