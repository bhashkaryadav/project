import React from 'react'
import { Button } from '../ButtonElements'


import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img } from './InfoElements';


const InfoSection = ({lightBg,
     id,
     imgStart,
     topLine,
     lightText,
     headLine,
     darkText,
     description,
     buttonLabel,
    
    primary,
    dark,
    dark2}) => {
    return (
        <>
        <InfoContainer  lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    target= "_blank"
                                    offset={-80}
                                    primary={primary ? 1:0}
                                    dark={dark ? 1:0}
                                    dark2={dark2 ? 1:0}
                                    href="https://groww.in/p/investment-basics/"
                                    >{buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                       
                </InfoRow>
             
            </InfoWrapper>
        </InfoContainer>   
        </>
    )
}
export default InfoSection;
