import React, { useState } from 'react';
import Products from './Products';

const App = () => {
  const fakeDatabase = [
    {
      name: 'Jordan',
      price: '199',
      img: 'https://vivabasquet.com/wp-content/uploads/2016/07/FOTO2JORDANBANNED.jpg'
    },
    {
      name: 'NIKE',
      price: '159',
      img: 'https://perou.io/wp-content/uploads/2014/03/nike-lebron-11-hornets-1.jpg'
    },
    {
      name: 'Yello NIKE',
      price: '299',
      img: 'https://www.lesitedelasneaker.com/wp-content/images/2018/03/nike-air-max-270-black-university-gold-AH8050-004.png'
    },
    {
      name: 'GREEN NIKE',
      price: '299',
      img: 'http://probeg.org/images/Asics_1.jpg'
    },
    {
      name: 'КАЛОШ',
      price: '599',
      img: 'https://maximumufa.ru/images/галош.jpg'
    },
    {
      name: 'Black NIKE',
      price: '599',
      img: 'http://freshspace.cz/wp-content/uploads/2014/08/foot-locker-triple-black-collection-05.jpg'
    }
  ]

  const [base, setBase] = useState(fakeDatabase)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setBase(base.filter((item) => item.name.toLowerCase().includes(e.target.value)))

    if (e.target.value === ''){
      setBase(fakeDatabase)
    }
  }

  return (
    <div id='main'>
      <input onChange={(e) => handleSearch(e)} name="search" placeholder='Поиск...' id='search'/>
      <Products base={base} />
    </div>
  );
};

export default App;




// return (
//   <div id='main'>
//     <input onChange={(e) => handleSearch(e)} name="search" placeholder='Поиск...' id='search'/>
//     <div className='products'>
//       {base.map((item) => {
//         return(
//           <div className='product'>
//             <img src={item.img} className='product-img'/>
//             <div className='product-description'>
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>Lorem ipsum dolor sit amet очень карсивы красовк</p>
//               </div>
//               <div>
//                 <button className='product-details'>Детали</button>
//               </div>
//             </div>
//             <div className='description2'>
//               <hr/>
//               <button>Добавить в корзину</button>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   </div>
// );