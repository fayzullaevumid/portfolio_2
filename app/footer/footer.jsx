import './footer.css'
export default function Footer(){
    return(
        <>
        <div className='footer-container'>
            <p className='footer-text'>MIDAS</p>
            <a href="/aloqa">Обратная связь</a>
            <a href="">Доставка</a>
            <a href="">Оплата</a>
            <a href="">Контакты</a>
            <p className='footer-2'>+998(90)777-77-77</p>
            <a href="">test@midas.com</a>
        </div>
        <div className='footer'>
            <p>@2009-2019, OOO"MIDAS",официальный сайт</p>
            <a className='footer-text-1' href="">Политика конфидентиальности и оферта</a>
            <a className='footer-text-1' href="">Пользовательское соглашение</a>
        </div>
        </>
    )
}