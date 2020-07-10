import React from "react"
import { Container, Text } from "./styles"
import FormInput from "../FormInput"

const Welcome = ({ name, gender, hometown, birthday, pronoun, foods }) => (
  <Container>
    <Text>{/*`Welcome to the SCA 2 Web Starter, ${name}!`*/`${name} is a ${gender} person from ${hometown} who was born on ${birthday}. ${pronoun} favorite foods are ${foods}.`}</Text>
  </Container>
)

export default Welcome