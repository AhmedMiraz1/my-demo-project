import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen ]=useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'ProductDetails', path: '/products/:id' }
      ];
      
    return (
        <nav className="text-2xl text-black ">
           <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ? <IoMdClose />: <CiMenuFries  />
            }
           
           </div>
            <ul className={`md:flex justify-between mt-12  duration-1000 absolute md:static
            ${open ? "top-0":"-top-60"}
             px-7   ml-6`}>
            {
                routes.map(route => <Link  key={route.id} route={route}></Link>)
            }
            </ul>

            
        </nav>
    );
};

export default Navbar;