import {
  Card,
  Image,
  Container,
  Flex,
  Button,
  Text,
  Stack,
  Spacer,
  VStack,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function OrganizationCard() {
  return (
    <Card padding="10px" width="full">
      <Flex>
        <Image
          boxSize="60px"
          borderRadius="full"
          src="https://bit.ly/dan-abramov"
          alt="algo"
          marginRight="15px"
        />
        <Center>
          <Stack>
            <Text fontSize="xl" color="#">
              CETYS universidad
            </Text>
          </Stack>
        </Center>
        <Spacer />
        <Center>
          <Text fontSize="lg" fontWeight="light">
            <span style={{ fontWeight: "bold", marginRight: "10px" }}>
              11231
            </span>
            total donations
          </Text>
        </Center>
        <Spacer />
        <Center>
          <Button colorScheme="facebook" size="sm">
            <Link to="/organizations">View Organizacion</Link>
          </Button>
        </Center>
      </Flex>
    </Card>
  );
}

function Organizations() {
  return (
    <Container maxW="container.lg" marginTop="10px">
      <VStack spacing="1em">
        <OrganizationCard />
        <OrganizationCard />
      </VStack>
    </Container>
  );
}

export { Organizations };
