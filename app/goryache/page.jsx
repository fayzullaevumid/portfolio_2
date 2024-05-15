'use client'
import React, { useEffect, useState } from "react";
import './page.css'
import Navbar from "../navbar/page";
import Issiq from "../issiq/page";
import { db } from "../config";
import {getDocs, doc, collection, setDoc } from "firebase/firestore";


// const ovqatlar = [
//   {
//   image: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/09/103_1662031720-scaled-e1662031771203-1280x640.jpg',
//   name: 'Шурпа из говядины',
//   price: 25000
//   },
//   {
//   image: 'https://www.imageup.ru/img147/3204169/6.jpeg',
//   name: 'Суп Чечевица',
//   price: 20000
//   },
//   {
//   image: 'https://img.freepik.com/premium-photo/mastava-is-a-traditional-uzbek-soup-in-a-white-bowl_112304-1632.jpg?w=360',
//   name: 'Суп Мастава',
//   price: 20000
//   },
//   {
//   image: 'https://cdn.lifehacker.ru/wp-content/uploads/2021/03/shutterstock_1177337086_1614799190-scaled-e1684418859403-1024x512.jpg',
//   name: 'Суп Машхурда',
//   price: 22000
//   },
//   {
//   image: 'https://cdn.lifehacker.ru/wp-content/uploads/2023/03/106_1677761729-scaled-e1677761805873-1280x640.jpg',
//   name: 'Лагман',
//   price: 27000
//   },
//   {
//   image: 'https://grill-bbq.ru/wp-content/uploads/2021/07/shashlyk-iz-kuritsy.jpg',
//   name: 'Шашлык',
//   price: 15000
//   },
//   {
//   image: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/03/305_1646911766-scaled-e1646911810269-1280x640.jpg',
//   name: 'Манты',
//   price: 8000
//   },
//   {
//   image: 'https://img.7ya.ru/pub/img/21860/thinkstockphotos-499512656.jpg',
//   name: 'Долма',
//   price: 25000
//   },
//   {
//   image: 'https://img.povar.ru/mobile/8b/4e/89/f5/uzbekskii_plov-4860.jpg',
//   name: 'Плов',
//   price: 37000
//   },
//   {
//   image: 'https://вкуснофф.рф/img/recepty/3883/big.jpg',
//   name: 'Казан кебаб',
//   price: 40000
//   },
//   {
//   image: 'https://topfood.club/assets/cache_image/uploads/recipes/2021-10-26-xjfnmq-traditional-new-year-russian-salad-olivier-2021-09-24-00-21-12-utc_756x0_62c.jpg',
//   name: 'Оливье',
//   price: 21000
//   },
//   {
//   image: 'https://www.gastronom.ru/binfiles/images/20221027/b15f8eab.jpg',
//   name: 'Цезарь',
//   price: 27000
//   },
//   {
//   image: 'https://static.1000.menu/img/content-v2/dc/3a/17965/salat-mujskoi-kapriz-s-kuricei_1642311626_6_max.jpg    ',
//   name: 'Мужской Каприз',
//   price: 27000
//   },
//   {
//   image: 'https://cdn.7days.ru/pic/d93/982031/1445587/86.jpg  ',
//   name: 'Подшуба',
//   price: 20000
//   },
//   {
//   image: 'https://static.1000.menu/img/content-v2/e4/ba/36347/salat-achichuk_1653204005_7_max.jpg ',
//   name: 'Ачичук',
//   price: 15000
//   },
//   ]

const Goryache = ( ) => {
  const [products, setProducts] = useState([])
  const bludo = collection(db, 'ovqat')
  useEffect(() => {
    const getOvqat = async () => {
      const data = await getDocs(bludo)
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getOvqat();
  }, [])
    return(
        <div className="car">
            <Navbar/>
         {products.map(val => (
          <Issiq key={val.id}
          val={val}
          />
         ))}
        </div>
    )
}

export default Goryache;