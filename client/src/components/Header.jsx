import { NavLink } from "react-router-dom"
import CustomButton from "./CustomButton"

function Header() {
    return (
        <nav className='bg-black h-fit p-24 absolute top-0 w-full'>
            <ul className='flex flex-row justify-between'>
                <li><CustomButton><NavLink to='/log-session'>log new session</NavLink></CustomButton></li>
                <li><CustomButton text='training history' /></li>
                <li><CustomButton><NavLink to='/my-workout-plans'>my workout plans</NavLink></CustomButton></li>
            </ul>
        </nav >
    )
}

export default Header