import { ViewIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

function Declare() {
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
        />
        <Input
          //   value={6}
          //   onChange={handleChange}
          placeholder="Cantidad"
          size="md"
          type="number"
        />
      </Flex>
      <Textarea placeholder="Adjunta la descripción de tu declaración aquí" />
      <Button colorScheme="facebook" size="sm" marginTop={3}>
        Registrar
      </Button>
    </Container>
  );
}

export { Declare };
