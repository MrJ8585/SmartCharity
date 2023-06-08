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
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { DeclareBtn } from "pages/organizations/[wallet]/declareBtn";
import { useAccount } from "@gear-js/react-hooks";

const organizations = [
  {
    title: "4 PATAS",
    wallet:
      "0x88cc79086d8490ff9ee727bc666fee8e72e5eb0116446ec4a11454be5a21691c",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/849/themes/common/logo-1866482157-1574635760-6cf4fcbbca71b55a01145347adaf5bde1574635760.png?0",
  },

  {
    title: "Doctores Sin Fronteras",
    wallet:
      "0x5a6bc767fedd0f56c2aab41ef93299925489f9b161b26cc60c7512042a79d518",
    img: "https://www.sustainable.pitt.edu/wp-content/uploads/2022/02/doctors@2x.png",
  },
  {
    title: "ONU",
    wallet:
      "0xea04eaecf9368a318cf7b6e4778298a4efa0b5d5765f74a509ea4a16ab7c4200",
    img: "https://www.un.org/sites/un2.un.org/files/2021/03/un-logo.png",
  },
  {
    title: "World Wildlife Fund",
    wallet:
      "0xb2fe4ca0daa2ca7b3810e52bda5015275e94ffa2ec6c2ff91667c6865833f27c",
    img: "https://1000marcas.net/wp-content/uploads/2020/02/logo-WWF.png",
  },
];

function Declare() {
  const [title, setTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [value, onChange] = useState(new Date().toString());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { account, accounts } = useAccount();

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const sendForm = (blockId: any) => {
    console.log(blockId);
    axios
      .post("http://localhost:80/gastos/company", {
        companyWallet:
          "0xb2fe4ca0daa2ca7b3810e52bda5015275e94ffa2ec6c2ff91667c6865833f27c",
        titulo: title,
        quantity: quantity,
        descripcion: description,
        bloque: blockId,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Container w="90%" maxW="container.lg" marginTop="1em">
      <Center marginTop={6}>
        <Text fontWeight="bold" fontSize="3xl">
          Declare expenses
        </Text>
      </Center>
      <Center marginBottom={10}>
        <Text>Declare and register data of the company in the blockchain.</Text>
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
          placeholder="Title"
          size="md"
          onChange={handleTitle}
        />
        <Input
          value={quantity}
          //   onChange={handleChange}
          placeholder="Cuantity"
          size="md"
          type="number"
          onChange={handleQuantity}
        />
      </Flex>
      <Textarea
        placeholder="Description of your declaration"
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
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <ModalHeader textAlign="center">
            <VStack alignItems="center">
              <Text>Donate to</Text>
              <Text color="#37a0ea">Needed people</Text>
            </VStack>
          </ModalHeader>
          <Center></Center>
          <ModalCloseButton />
          <ModalBody>
            <Center mb={5}>
              <DeclareBtn
                to="0x5a6bc767fedd0f56c2aab41ef93299925489f9b161b26cc60c7512042a79d518"
                amount={parseInt(quantity)}
                onClose={onClose}
                fetch={sendForm}
                from={account!.address}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export { Declare };
