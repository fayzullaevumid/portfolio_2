import React from "react";
import './page.css'
import Navbar from "../navbar/page";
import Footer from "../footer/footer";

const Oplata = () => {
    return(
        <div>
            <Navbar/>
            <p className="oplata-text-1">Оплата</p>
             <p className="oplata-text-2">Главная / Корзина / Оплата</p>
             <p className="oplata-text-3">01. Контактные данные</p>
          <div className="oplata-card-01">
            <label htmlFor="ism">имя*</label>
            <input type="text" id="ism"/>
            <label htmlFor="nomer">телефон*</label>
            <input type="text" id="nomer"/>
            <label htmlFor="email">email*</label>
            <input type="text" id="email"/>
            <label htmlFor="soni">кол-во персон*</label>
            <input type="text" id="soni"/>
          </div>
          <p className="oplata-text-3">02. Способ доставки</p>
          <div className="oplata-card-02">
            <div className="card-ichidagi">
                <p className="oplata-text-4">Бесконтактная оплата  300Р</p> 
                <p className="oplata-text-5">Доставка по Ташкенту <br />
                Осуществляется: ежедневно с 12:00 до 00:00, <br />
                Диапазон времени: от 1 до 1.5 часов
                </p>
            </div>
            <div className="card-ichidagi-1">
                <p className="oplata-text-4">Самовызов  +0Р</p>
                <p className="oplata-text-5">
                    Доступен с 12:00 до 00:00 <br />
                    По адресу ул.Улофа Пальме 5с2
                </p>
            </div>
          </div>
          <p className="oplata-text-7">Адрес доставки</p>
          <div className="card-ichidegi-3">
            <label htmlFor="kocha">улица</label>
            <input type="text" id="kocha"/>
            <label htmlFor="uy">дом</label>
            <input type="text" id="uy"/>
            <label htmlFor="kvartira">квартира</label>
            <input type="text" id="kvartira"/>
            <label htmlFor="izoh">комментарий <br /> к заказу</label>
            <input type="text" id="izoh"/>
          </div>
          <p className="oplata-text-3">03. Оплата</p>
          <div className="card-ichi">
            <input className="radio" type="radio" />
            <img className="icon-1" src="/mastercard.svg" alt="" />
            <img className="icon-1" src="/visa.svg" alt="" />
            <img className="icon-1" src="/mir.svg" alt="" />
            <img className="icon-1" src="/apple.svg" alt="" />
            <img className="icon-1" src="/google.svg" alt="" />
          </div>
          <div className="card-ichi">
            <input className="radio" type="radio" />
            <p className="input-text">Наличными курьеру</p>
          </div>
          <div className="card-ichi">
          <input className="radio" type="radio" />
            <p className="input-text">Картой курьеру</p> 
          </div>
          <button className="knopka-3">Подтвердить заказ</button>
         <Footer/>
        </div>
    )
}

export default Oplata;