import React from "react";
import Navbar from "../navbar/page";
import './page.css'

const Aksiya = () => {
    return(
        <div>
            <Navbar/>
            <p className="p-image">Скидки на Блюда</p>
            <p className="p-image-2">Главная / Акции</p>
          <div className="container-1">
             <img className="image-1" src="https://teremok.ru/upload/iblock/338/%D0%91%D0%BB%D1%8E%D0%B4%D0%BE%20%D0%B4%D0%BD%D1%8F%20696%D1%85696.jpg" alt="" />
             <img className="image-2" src="https://www.restoran.ru/upload/resize_cache/editor/ec9/750_1000_1/photo_2023_02_01_15_40_50748.jpg" alt="" />
             <img className="image-3" src="https://chef.ru/wp-content/uploads/2023/01/img_7144-768x768.jpg" alt="" />
         </div>
         <p className="p-image-1">Скидки на Десерты</p>
         <div className="container-1">
         <img className="image-1" src="https://provance42.ru/images/shares/%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B%2020.jpg" alt="" />
         <img className="image-1" src="https://media-cdn.tripadvisor.com/media/photo-p/15/a7/b6/d9/30-20-00.jpg" alt="" />
         <img className="image-1" src="https://gcdn.tomesto.ru/img/events_event/000/016/727/a179263f3fb8a4c68d079ddab558f646_full-174430.jpg" alt="" />
         </div>
        </div>
    )
}

export default Aksiya;