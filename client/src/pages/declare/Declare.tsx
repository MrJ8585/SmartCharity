import { ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Container,
  Flex,
  Text,
  Image,
  Box,
  Center,
  VStack,
  Card,
  CardBody,
  Spacer,
  Input,
  Textarea,
  Button,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Declare() {
  const [title, setTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [value, onChange] = useState(new Date().toString());

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const sendForm = () => {
    axios
      .post("localhost/gastos/company", {
        title: title,
        quantity: quantity,
        description: description,
        date: value,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Container w="90%" maxW="container.lg" marginTop="1em">
      <Center marginTop={6}>
        <Text fontWeight="bold" fontSize="3xl">
          Declarar gastos
        </Text>
      </Center>
      <Center marginBottom={10}>
        <Text>
          Declarar y registrar datos de la empresa ante la blockchain.
        </Text>
      </Center>
      <Flex
        gap="1em"
        alignItems="center"
        paddingBottom={3}
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Input
          //   value={6}
          //   onChange={handleChange}
          placeholder="Título"
          size="md"
          type="number"
          onChange={handleTitle}
        />
        <Input
          //   value={6}
          //   onChange={handleChange}
          placeholder="Cantidad"
          size="md"
          type="number"
          onChange={handleQuantity}
        />
      </Flex>
      <Textarea
        placeholder="Adjunta la descripción de tu declaración aquí"
        onChange={handleDescription}
      />
      <Flex marginTop={3}>
        <Calendar
          onChange={(val) => onChange(val?.toString() ?? new Date().toString())}
          value={value}
        />
      </Flex>
      <Button
        colorScheme="facebook"
        size="sm"
        marginTop={3}
        type="submit"
        onSubmit={sendForm}
      >
        Registrar
      </Button>
    </Container>
  );
}

export { Declare };
