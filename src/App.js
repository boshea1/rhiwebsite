import './App.css';
import cookies from './images/cookiespic.jpg'
import brownies from './images/brownies.jpg'
import Faq from './Components/Faq';
import Card from './Components/Card';
import caravan from './images/caravan.jpeg'
import Reviews from './Components/Reviews';
import coffee from './images/coffee.jpg'
import Aboutus from './Components/Aboutus';
import { SocialIcon} from 'react-social-icons'

//


function App() {

  var list = ['Cookies','Bagels','Drinks','Coffee']
  return (
    <div className=" relative top-6 font-fugaz text-pink-400 lg:text-xl App">
      <div className='top-6'>
        <h1 className='text-7xl mb-4'>Rhi's Food Stop</h1>
      </div>
      <hr className='w-4/5 m-auto'/>
      <div className="carousel rounded-box w-4/5 max-h-[400px] m-0 p-0">
  <div className="carousel-item">
    <img src={cookies} alt="Cookies" />
  </div> 
  <div className="carousel-item">
    <img src={brownies} alt="Brownies" />
  </div> 
  <div className="w-[265px] carousel-item">
    <img src={caravan} alt="Caravan" />
  </div> 
  <div className="h-[400px] mx-0 carousel-item">
    <img src={coffee} alt="Coffee" />
  </div> 
  </div>
      <hr className=' w-4/5 m-auto my-3'/>
      <Aboutus/>
      <hr className=' w-4/5 m-auto my-3'/>
      <div>
        <h1 className='text-3xl'>Gallery</h1>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1
         p-4 place-items-center'>
          {list.map((a)=><Card no ={list.indexOf(a)} aa={a}/>)}
        </div>
      </div>
      <hr className='w-4/5 m-auto my-3'/>
      {window.viewport<'340px' ?'': <Reviews/>}
      <hr className='w-4/5 m-auto my-3'/>
      <Faq/>
      <div className='relative left-1/2 transform -translate-x-1/2'>
        <div className='bg-white m-4 mb-10'>
        <h1 className='text-3xl'>Contact Us</h1>
        <p>0123456789</p>
        <p>email@example.com</p>
        <SocialIcon url='www.instagram.com'/>
        </div>
      </div>
    </div>
  );
}

export default App;
