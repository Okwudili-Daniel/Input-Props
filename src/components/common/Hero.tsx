import React from "react";
import styled from "styled-components";
import BaseInput from ".";

const Hero = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Card>
                    <Title>
                        Start getting paid with Flutterwave
                    </Title>

                    <BaseInput type = "text" placeholder="First Name"/>
                    <BaseInput type = "text" placeholder="Last Name"/>
                    <BaseInput type = "email" placeholder="Email"/>
                    <BaseInput type = "password" placeholder="password"/>
                    </Card>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Hero;
const Card = styled.div`
width: 400px;
    height: 600px;
    background-color: #ffff;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 17px;
    margin: 20px 0px;

`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    background-color: #00000020;
`