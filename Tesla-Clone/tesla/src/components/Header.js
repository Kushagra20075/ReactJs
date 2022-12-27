import React , {useState} from 'react';
import '../styles/Header.css';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from 'react-redux';


function Header() {
    const [menuStatus,setmenuStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <div className="box"><a key={index}href="#">{ car }</a></div>
                ))}
                <div className="box"><a href="#">Solar Roof</a></div>
                <div className="box"><a href="#">Solar Panels</a></div>
            </Menu>
            <RightMenu>
                <div className="box"><a href="#">Shop</a></div>
                <div className="box"><a href="#">Account</a></div>
                <div className="box" onClick={()=>setmenuStatus(true)}><a href="#">Menu</a></div>
            </RightMenu>
            <MenuBar show={menuStatus}>
                    <li className="close"><i class="fa fa-times" aria-hidden="true" onClick={()=>setmenuStatus(false)}></i></li>

                    <li className="li"><a href="#" className="lia">Existing Inventory</a></li>
                    <li className="li"><a href="#" className="lia">Used Inventory</a></li>
                    <li className="li"><a href="#" className="lia">Trade-in</a></li>
                    <li className="li"><a href="#" className="lia">Cyber-Truck</a></li>
                    <li className="li"><a href="#" className="lia">Roadster</a></li>
                    <li className="li"><a href="#" className="lia">Semi</a></li>
                    <li className="li"><a href="#" className="lia">Charging</a></li>
                    <li className="li"><a href="#" className="lia">Powerwall</a></li>
                    <li className="li"><a href="#" className="lia">Commercial Energy</a></li>
                    <li className="li"><a href="#" className="lia">Utilities</a></li>
                    <li className="li"><a href="#" className="lia">Find Us</a></li>
                    <li className="li"><a href="#" className="lia">Support</a></li>
                    <li className="li"><a href="#" className="lia">Investor Relations</a></li>
                    <li className="li"><i class="fa fa-globe" aria-hidden="true" /><a href="#" className="lia">United States</a></li>
            </MenuBar>
            
        </Container>
        

    )
}

export default Header;


/*
                    {cars && cars.map((car,index)=>(
                        <li className="li"><a key={index} href="#" className="lia">{ car }</a></li>
                    ))}

<div className="container">
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <div className="Menu">
                <a className="para" href="#">Model S</a>
                <a className="para" href="#">Model 3</a>
                <a className="para" href="#">Model X</a>
                <a className="para" href="#">Model Y</a>
            </div>
            <div className="RightMenu">
                <a className="para" href="#">Shop</a>
                <a className="para" href="#">Tesla Account</a>
                <a className="para" href="#"></a>
                <MenuIcon />
            </div>
            
        </div>


*/
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:2;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        size
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`



const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

`

const MenuBar = styled.div`
position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 400px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.7s ease-in;


`







