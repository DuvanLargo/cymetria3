//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from 'react-slick'; //crear la funcion del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'


function App() { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slideToShow: 3,
    slideToScroll: 1,
    autoplaySpeed: 30,
    autoplay: true 
  };

  return (
    <>
   
    <button className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} >Tailwind</button>
 
    {/* <div class="grid grid-cols-10 gap-2">
      <div class="bg-violet-50 aspect-square"></div>
      <div class="bg-violet-100 aspect-square"></div>
      <div class="bg-violet-200 aspect-square"></div>
      <div class="bg-violet-300 aspect-square"></div>
      <div class="bg-violet-400 aspect-square"></div>
      <div class="bg-violet-500 aspect-square"></div>
      <div class="bg-violet-600 aspect-square"></div>
      <div class="bg-violet-700 aspect-square"></div>
      <div class="bg-violet-800 aspect-square"></div>
      <div class="bg-violet-900 aspect-square"></div>
    </div> */}
     <div className='w-3/4 m-auto mt-10 bg-blue-300 pt-10' style={{'borderRadius':'10px'}}>
      <div className='mt-30'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=''>
            <div className='bg-blue-100 h-[300px] text-black rounded-xl'>
              <img src={d.img} alt='' className='h-64 w-64 rounded-full my-auto mx-auto' />
            </div><div className='flex flex-col items-center justify-center gap-5 p-5'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-center'>{d.review}</p>
              <button className='bg-indigo-400 text-white text-lg px-4 py-2'>Mis tutoriales</button>
              </div>
              </div>
          )          
          )}
        </Slider>
        </div> 
    </div>
    

    </>
  )
}

const data = [
  {
    name:`Brais Moure`,
    img:`../src/assets/Fotos/brais.png`,
    review:`Developer`
  },
  {
    name:`Facundo`,
    img:`../src/assets/Fotos/facundo.png`,
    review:`Developer`
  },
];

export default App
