import { ViewIcon } from "@chakra-ui/icons";
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

export const organizations = [
  {
    title: "4 PATAS",
    wallet: "5FA57NG5AcDDyRuXCWLcSXMAPrWZQZmfBtQxVeUNbhawWGHw",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/849/themes/common/logo-1866482157-1574635760-6cf4fcbbca71b55a01145347adaf5bde1574635760.png?0",
  },

  {
    title: "Doctores Sin Fronteras",
    wallet: "5E7GBcbwWsYjhufaUrooxmDGXeMnpidQ61tYus9hzv8B634i",
    img: "https://www.sustainable.pitt.edu/wp-content/uploads/2022/02/doctors@2x.png",
  },
  {
    title: "ONU",
    wallet: "5HMYXHkRxtrWchbosFJLMpARWhdLPz7z7kGCAshdjKweAkyF",
    img: "https://www.un.org/sites/un2.un.org/files/2021/03/un-logo.png",
  },
  {
    title: "World Wildlife Fund",
    wallet: "5G7PvWJ3XPbPEAXAVSUiKSX6PrvssEhsdi8vBoeGd7aMBCvs",
    img: "https://1000marcas.net/wp-content/uploads/2020/02/logo-WWF.png",
  },
];

function OrganizationCard({ title, wallet, img }: any) {
  return (
    <Card padding="10px" width="full">
      <Flex>
        <Image
          boxSize="60px"
          borderRadius="full"
          src={img}
          alt="algo"
          marginRight="15px"
          objectFit="cover"
        />
        <Center>
          <Stack>
            <Text fontSize="xl" color="#" fontWeight="semibold">
              {title}
            </Text>
          </Stack>
        </Center>
        <Spacer />
        <Flex gap="3em">
          <Center>
            <Text fontSize="md" fontWeight="light">
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                11231
              </span>
              total donations
            </Text>
          </Center>
          <Spacer />
          <Center>
            <Link to={`/organizations/${wallet}`}>
              <Button colorScheme="facebook" size="sm">
                View Organizacion
                <ViewIcon marginLeft="10px" />
              </Button>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </Card>
  );
}

function Organizations() {
  return (
    <Container maxW="container.lg" marginTop="10px">
      <VStack spacing="1em">
        {organizations.map((organization) => (
          <OrganizationCard
            title={organization.title}
            img={organization.img}
            wallet={organization.wallet}
          />
        ))}
      </VStack>
    </Container>
  );
}

export { Organizations };
