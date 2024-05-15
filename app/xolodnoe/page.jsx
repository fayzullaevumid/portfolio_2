import React from "react";
import './page.css'
import Navbar from "../navbar/page";

const Xolodnoe = () => {
    return(
        <div>
          <Navbar/>
          <div className="carddd">
            <p className="text-000">Любую проблему можно <br /> решить правильным мороженым.</p>
            <img className="icecream" src="https://media.kudago.com/images/list/69/0a/690aa1a2d9557d1cc460628e97f979db.jpg" alt="" />
          </div>
          <p className="cream-text">Мороженное</p>
          <p className="cream-text-1">Главная / Холодное</p>
          <div className="xolodno-card">
          <div className="card-3">
                    <img className="card-photo" src="https://yasensvit.ua/uploads/recipes/prev/60b76b9f8d2cc.png" alt="" />
                    <p className="p0">Мороженное<br />(Пломбир)
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
                    <img className="card-photo" src="https://cdn.lifehacker.ru/wp-content/uploads/2020/06/Depositphotos_279044362_xl-2015-1_1591038425.jpg" alt="" />
                    <p className="p0">Мороженное<br />(Шоколадное)
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
                    <img className="card-photo" src="https://i.obozrevatel.com/food/recipemain/2019/1/22/fruktovoemorojennoe2.jpg?size=636x424" alt="" />
                    <p className="p0">Мороженное<br />(Фруктовое)
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
                    <img className="card-photo" src="https://www.chefmarket.ru/blog/wp-content/uploads/2021/07/sundae-ice-cream-1-2000x1200.jpg" alt="" />
                    <p className="p0">Мороженное<br />(Сливочное)
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
                    <img className="card-photo" src="https://static.1000.menu/img/content-v2/30/03/66670/yagodnoe-morojenoe-domashnee_1658916592_8_max.jpg" alt="" />
                    <p className="p0">Мороженное<br />(Ягодное)
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
          </div>
        </div>
    )
}

export default Xolodnoe;