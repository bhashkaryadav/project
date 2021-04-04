import React ,{useState} from 'react'
import Video from '../../videos/video2.mp4';
import  {Button}  from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const  HeroSection = () => {

        const [hover,setHover ]= useState(false)

        const onHover = () =>{
            setHover(!hover);
        
    };
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg   muted src={Video} type ='video/mp4' /> 
            </HeroBg>
            <HeroContent>
                <HeroH1>Stock Analysis For Beginners made Easy</HeroH1>
                <HeroP>
                Sign up for a new account today and 
                get started with your journey as a technical analyst
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="/signup" 
                    onMouseEnter= {onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                    
                      SignIn to Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>  
            </HeroContent>
        </HeroContainer>
    )
}

export default  HeroSection;
