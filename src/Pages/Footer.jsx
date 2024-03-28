import '../Styles/Footer.scss'
import logo from '../assets/vite.svg'
const Footer = () => {
    return (
        <div className='footer'>
        <hr />
            <div className='container'>
<div className='logo-center'>
<img  src={logo} alt="" />
</div>
           
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#project'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <div className='bottom'>
               
                    <p>2024 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
