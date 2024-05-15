import './page.css'
export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <p className="p">MIDAS</p>
            <a href="/aksiya">Акции</a>
            <a href="/goryache">Горячее</a>
            <a href="/xolodnoe">Холодное</a>
            <a href="/desert">Десерты</a>
            <a href="/napitki">Напитки</a>
            <div className="icon">
                <img src="/icon3.svg" alt="" />
                <img src="/icon4.svg" alt="" />
            </div>
        </div>
        </>
    )
}