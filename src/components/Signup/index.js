import React from 'react'
import { Container, Form, FormButton,Icon, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from './SignupElements'
const SignUp = () => {
    return (
        <>
        <Container>
            <FormWrap>
              
                <FormContent>
                    <Form action="#">
                      <FormH1>Sign Up  with email to Register </FormH1>
                      <FormLabel  htmlFor='for'>First Name</FormLabel>
                        <FormInput type='text' required></FormInput>
                        <FormLabel  htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='text' required></FormInput>
                        <FormLabel  htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required></FormInput>
                        <FormLabel >Password</FormLabel>
                        <FormInput type='password'  required></FormInput>
                        <FormButton type='submit' href="https://project-445.herokuapp.com/signin"> Sign Up</FormButton>
                        
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>   
        </>
    )
}

export default SignUp ;