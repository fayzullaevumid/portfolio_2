import React from "react";
import './page.css'
import Navbar from "../navbar/page";
import Footer from "../footer/footer";

const Aloqa = () => {
    return(
        <div>
        <Navbar/>
        <p className="p-text">Обратная связь</p>
        <p className="p-text-1">Главная / Обратная связь</p>
        <img className="image" src="https://www.pngall.com/wp-content/uploads/7/Sweet-Dessert-PNG-Photo.png" alt="" />
        <img className="image-1" src="https://www.pngall.com/wp-content/uploads/7/Sweet-Dessert-PNG-Transparent-HD-Photo.png" alt="" />
        <div className="container">
            <label htmlFor="otziv">ваш вопрос, отзыв или пожелание:</label>
            <input type="text" id="otziv"/>
            <label htmlFor="email">email для получения ответа:</label>
            <input type="text" id="email"/>
        </div>
        <button className="knopka">отправить</button>
        <Footer/>
        </div>
    )
}

export default Aloqa;