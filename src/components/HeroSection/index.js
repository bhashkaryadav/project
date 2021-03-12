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
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4' /> 
            </HeroBg>
            <HeroContent>
                <HeroH1>Stock Analysis For Noobs made Easy</HeroH1>
                <HeroP>
                Sign up for a new account today and 
                recieve $12 in credit account next century
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="/signup" 
                    onMouseEnter= {onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                    
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>  
            </HeroContent>
        </HeroContainer>
    )
}

export default  HeroSection;
