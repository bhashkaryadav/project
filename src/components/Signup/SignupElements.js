import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Container =styled.div`
min-height:699px;
position:relative;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background:linear-gradient(
    108deg,
    rgba(142, 163, 139)0%,
    rgba(96, 156, 132)100%
);
`
export const FormWrap =styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:30px;

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

    @media (max-width:480px){
        padding:10px;
    }
`
export const Form =styled.form`
    background:#010101;
    max-width:400px;
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding: 80px 32px;
    border-radius: 4px;
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
    background:#01bf71;
    padding:16px 0;
    border :none
    border-radius:4px;
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




