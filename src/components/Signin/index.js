import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Container, Form, FormButton, Icon, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text, Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink } from './SigninElements'
import {HeroBg,VideoBg, } from '../HeroSection/HeroElements'
import Video from '../../videos/video2.mp4';


const SignIn = () => {
    const { logout } = useAuth0();
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Stock Analytics</NavLogo >
                    <NavBtn>
                        <NavBtnLink onClick={() => logout()} >LogOut</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>

            <Container>
            <HeroBg>
                <VideoBg   muted src={Video} type ='video/mp4' /> 
            </HeroBg>
                <FormWrap>
                    <FormContent>
                        <Form >
                            <FormH1> Various NSE  Listed Companies And Their Data</FormH1>
                          
                            <FormButton type='submit' href="https://share.streamlit.io/lakshya-ag/streamlit-dashboard/main/home.py" target="_blank"> Home</FormButton>
                        </Form>
                    </FormContent>
                    <FormContent>
                        <Form >
                            <FormH1>Visualise Data on various market factors</FormH1>
                        
                            <FormButton type='submit' href="https://share.streamlit.io/lakshya-ag/streamlit-dashboard/main/data_analysis.py" target="_blank"> Data Analysis</FormButton>
                        </Form>
                    </FormContent>
                    <FormContent>
                        <Form >
                            <FormH1>Check the Prediction using No. of Models</FormH1>
                          
                            <FormButton type='submit' href="https://share.streamlit.io/lakshya-ag/streamlit-dashboard/main/prediction.py" target="_blank"> Prediction</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
              
            

        </>
    )
}

export default SignIn;
