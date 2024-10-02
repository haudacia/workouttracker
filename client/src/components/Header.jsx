import { NavLink } from "react-router-dom"
import NavButton from "./NavButton"

function Header() {
    return (
        <nav className='bg-black h-fit p-4 absolute top-0 w-full'>
            <ul className='flex flex-row justify-between'>
                <li><NavButton text='log new training session' /></li>
                <li><NavButton text='training history' /></li>
                <li><NavButton><NavLink to='/my-workout-plans'>my workout plans</NavLink></NavButton></li>
            </ul>
        </nav >
    )
}

export default Header