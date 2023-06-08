import axios from "axios";
import {
  Container,
  Flex,
  Text,
  Center,
  VStack,
  Input,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TransferButton } from "pages/organizations/[wallet]/Transfer";

function Declare() {
  const [title, setTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [value, onChange] = useState(new Date().toString());
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      .post("http://localhost/gastos/company", {
        companyWallet:
          "0xb2fe4ca0daa2ca7b3810e52bda5015275e94ffa2ec6c2ff91667c6865833f27c",
        titulo: title,
        quantity: quantity,
        descripcion: description,
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
          value={title}
          //   onChange={handleChange}
          placeholder="Título"
          size="md"
          onChange={handleTitle}
        />
        <Input
          value={quantity}
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
        value={description}
      />
      <Flex marginTop={3}>
        <Button mt={4} onClick={onOpen}>
          Donate
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <VStack alignItems="center">
              <Text>Donate to</Text>
              <Text color="#37a0ea">har</Text>
              {/* <Image src={organization.img} alt="WWF" /> */}
            </VStack>
          </ModalHeader>
          <Center></Center>
          <ModalCloseButton />
          <ModalBody>
            <Center mb={5}>
              <TransferButton
                to="5F53x1L7jUNjPaepdSncANp2A22ZvRBWL3GPb9vNQQb2CV63"
                amount={parseInt(quantity)}
                onClose={onClose}
                fetch={sendForm}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export { Declare };
