import React from 'react'
import { Container, Form, FormButton,Icon, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to ="/">StockAnalysis</Icon>
                <FormContent>
                    <Form action="#">
                      <FormH1>Sign In to Analyse stocks</FormH1>
                        <FormLabel  htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required></FormInput>
                        <FormLabel >Password</FormLabel>
                        <FormInput type='password'  required></FormInput>
                        <FormButton type='submit' href="https://stock-market-analysis-cse445.herokuapp.com/" target= "_blank"> Continue</FormButton>
                        <Text>Forget password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>   
        </>
    )
}

export default SignIn ;
