import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Container =styled.div`
min-height:692px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;

background:linear-gradient(
    108deg,
    rgba(142, 163, 139)0%,
    rgba(96, 156, 132)100%
);
`
export const FormWrap =styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;

    @meida (max-width:400px){
        height:80%;
    }
`

export const Icon =styled(Link)`
    margin-left:32px;
    margin-top:32px;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    font-size:32px;

    @media (max-width:480px){
        mmargin-left:16px;
        margin-top:8px;
    }
`

export const FormContent =styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;

    @media (max-width:480px){
        padding:10px;
    }
`
export const Form =styled.form`
    background:linear-gradient(
        108deg,
        rgba(115, 111, 113  )0%,
        rgba(148, 172, 162 )100%
    );
    max-width:400px;
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding: 80px 32px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media( max-width:400px){
        padding:32px 32px;
    }
`
export const FormH1 =styled.h1`
    margin-bottom:40px;
    color:#fff;
    font-size:20px;
    font-weight:400;
    text-align:center;
`
export const FormLabel =styled.label`
    margin-bottom:8px;
    font-size:14px;
    color:#fff;
`

export const FormInput =styled.input`
    padding:16px 16px;
    margin-bottom:32px;
    border:none;
    border-radius:4px;
`
export const FormButton =styled.a`
    background:#767FA9 ;
    padding:16px 0;
    border :none
    border-radius:10px;
    color:#fff;
    font-size:20px;
    cursor:pointer;
    text-align:center;
    text-decoration:none; 
`

export const Text =styled.span`
    text-align:center;
    margin-top:24px;
    color:#fff;
    font-size:14px;
`




export const Nav = styled.nav`
    background:#000;
    height:80px;
   /* margin-top: -80px;*/
    display: flex;
    justify-content:center; 
    align-items:center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media all screen and (max-width:960px){
        transition:0.8s all ease;
    }
`
export const NavbarContainer =styled.div`
    display:flex;
    justify-content:space-between;
    height: 80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width: 1100px;

`;


export const NavLogo =styled(LinkR)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;

`;


export const MobileIcon =styled.div`
    display:none;

    @media (max-width:768px){
        display:block;
        position:absolute;
        top:22px;
        right:20px;
        transform:translated(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:#fff;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media screen and (max-width:768px){
        display:none;
    }

`;

export const NavItem =styled.li`
    height:80px;
`;

export const NavLinks =styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:10px 22px;
    color:#010606;
    font-size:16px;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    margin-right:20px;

    &:hover{
        transition:all o.2s ease-in-out;
        background:#fff;
        color:#010606;
    }


`

export const HeroBg =styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;

`
export const VideoBg =styled.video`
    width: 100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
    background: #232a34;
    `
