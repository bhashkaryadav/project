import React from 'react'
import { FaBars }  from 'react-icons/fa';
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

import {useAuth0 } from '@auth0/auth0-react'

const Navbar = ({ toggle }) => {
    const { loginWithRedirect } =useAuth0();
    const {logout} =useAuth0();
    
  
    return (
     <>
    
     <Nav>
         <NavbarContainer>
        
           <NavLogo to = '/'>Stock Analytics</NavLogo > 
           <MobileIcon onClick ={toggle}>
                <FaBars />
            </MobileIcon> 
            <NavMenu>
                
                <NavItem>
                   <NavLinks to ="about" >About</NavLinks>
                </NavItem>
                <NavItem>
                   <NavLinks to ="discover" >Discover</NavLinks>
                </NavItem>
                <NavItem>
                   <NavLinks to ="services" >Services</NavLinks>
               
                </NavItem>
                
            </NavMenu>
            <NavBtn>
            

            <NavBtnLink  onClick={()=>loginWithRedirect()}  >Sign In</NavBtnLink>
                
              
            </NavBtn>
         </NavbarContainer>
     </Nav>
     </>
    )
};

export default Navbar;
