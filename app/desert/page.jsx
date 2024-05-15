'use client'
import React from "react";
import './page.css'
import Navbar from "../navbar/page";


const cardArray = [
  {
    img:"https://www.gastronom.ru/binfiles/images/20170707/b04eaef7.jpg",
    nomi:"Пончик",
    massa:0.25,
    narx:12000,
  },
  {
    img:"https://img.freepik.com/premium-photo/pink-donut-on-a-pink-background_73107-2021.jpg",
    nomi:"Пончики с малиной",
    massa:"1шт",
    narx:15000,
  },
  {
    img:"https://i.ytimg.com/vi/W2ueG00Vb-c/maxresdefault.jpg",
    nomi:"Пончики обычные",
    massa:"1шт",
    narx:10000,
  },
  {
    img:"https://img.freepik.com/premium-photo/pink-donut-on-a-pink-background_73107-2021.jpg",
    nomi:"Пончики",
    massa:"1шт",
    narx:12000,
  },

]
const Desert = () => {
  return (
    <div>
      <Navbar />
      {/* <Component nomi={"Ponchik"} narx={12} massasi={0.250}/> */}
      <div className="card-desert-1">
        <p className="desert-text">Жизнь слишком коротка,<br /> поэтому начинайте с десерта.</p>
        <img className="desert-image" src="https://sotni.ru/wp-content/uploads/2023/08/deserty-2.webp" alt="" />
      </div>
      <p className="text-body">Десерты</p>
      <p className="text-body-1"> Главная / Десерты
      </p>
      <div className="card-desert">
        {cardArray.map(val=>(
          <>
          <div className="card-3">
          <img className="card-photo" src={val.img} alt="" />
          <p className="p0">{val.nomi}<br />
          </p>
          <p className="p-size">{val.massa}</p>
          <div className="card-2">
            <p className="p6">
              <strong>{val.narx} sum</strong>
            </p>
            <a href="/korzina" >
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
          </div>
          </>
        ))}
        <br /><br /><br /><br /><br />
      </div>
      <div className="card-desert">
        <div className="card-3">
          <img className="card-photo" src="https://www.gastronom.ru/binfiles/images/20170707/b04eaef7.jpg" alt="" />
          <p className="p0">Пончик<br />
          </p>
          <p className="p-size">0.25</p>
          <div className="card-2">
            <p className="p6">
              <strong>12тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://img.freepik.com/premium-photo/pink-donut-on-a-pink-background_73107-2021.jpg" alt="" />
          <p className="p0">Пончики<br />(с малиной)
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>12тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://i.ytimg.com/vi/W2ueG00Vb-c/maxresdefault.jpg" alt="" />
          <p className="p0">Пончики<br />(обычные)
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>12тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://img1.russianfood.com/dycontent/images_upl/52/big_51593.jpg" alt="" />
          <p className="p0">Заварные<br />(обычные)
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>10тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="desert-card">
        <div className="card-3">
          <img className="card-photo" src="https://gastroloft.com.ua/wp-content/uploads/2022/02/napoleon-gastroloft.png" alt="" />
          <p className="p0">Наполеон<br />(с кусочками малины)
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>20тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://i.pinimg.com/736x/a4/a4/db/a4a4dbda8cbf638f0d779f78ce3fb973.jpg" alt="" />
          <p className="p0">Наполеон<br />(афганский)
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>22тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://yasensvit.ua/uploads/recipes/prev/6463dc63a9a32.jpg" alt="" />
          <p className="p0">Медовик<br />(с необычным кремом)
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>22тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://art-lunch.ru/wp-content/uploads/2018/03/cake_Prague_01.jpg" alt="" />
          <p className="p0">Торт<br />прага
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>22тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="desert-card-2">
        <div className="card-3">
          <img className="card-photo" src="https://i.ytimg.com/vi/eBpiUmRPL5U/maxresdefault.jpg" alt="" />
          <p className="p0">Торт<br />Орео
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>25тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://img.povar.ru/mobile/be/33/68/1c/tort_niu_iork-450142.jpg" alt="" />
          <p className="p0">Торт<br />Нью-Йорк
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>30тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://eda.yandex.ru/images/1380298/bc7069b040a240b27160d50c689ea5c1-800x800.jpeg" alt="" />
          <p className="p0">Торт<br />Опера
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>24тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://art-lunch.ru/wp-content/uploads/2014/10/Tiramisu_01.jpg" alt="" />
          <p className="p0">Торт<br />Тирамису
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>32тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="desert-card-3">
        <div className="card-3">
          <img className="card-photo" src="https://i.ytimg.com/vi/SRsz7ZYPamQ/maxresdefault.jpg" alt="" />
          <p className="p0">Торт<br />Трюфель
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>20тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://baking-academy.ru/upload/iblock/397/39791d4f139eb5aca508ef01080e9123.jpg" alt="" />
          <p className="p0">Торт<br />Фруктовый
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>22тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://static.1000.menu/img/content-v2/d9/08/37893/tort-ptiche-moloko-po-gostu_1672412896_2_max.jpg" alt="" />
          <p className="p0">Торт<br />Птичье молоко
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>18тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="card-3">
          <img className="card-photo" src="https://s1.eda.ru/StaticContent/Photos/3/220328202632/p_O.jpg" alt="" />
          <p className="p0">Торт<br />Панчо
          </p>
          <p className="p-size">1шт</p>
          <div className="card-2">
            <p className="p6">
              <strong>26тыс.</strong>
            </p>
            <a href="/korzina">
              <img className="card-foto" src="/icon4.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desert;
