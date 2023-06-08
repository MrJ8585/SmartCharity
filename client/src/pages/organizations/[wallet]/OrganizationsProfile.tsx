import {
  Container,
  Flex,
  Image,
  Center,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  CardHeader,
  StackDivider,
  Box,
  Grid,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { organizations } from "../Organizations";
//@ts-ignore
import HorizontalTimeline from "react-horizontal-timeline";
import Chart from "react-apexcharts";
import { TransferButton } from "./Transfer";
import { useParams } from "react-router-dom";

function OrganizacionProfile() {
  const [value, setValue] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [previous, setPrevious] = useState(0);
  const [organization, setOrganization] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    setOrganization(organizations.find((org) => org.wallet === id));
  }, [value]);

  const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];

  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
  ];

  const series = [
    {
      name: "Guests",
      data: [19, 22, 20, 26],
    },
  ];
  const options = {
    xaxis: {
      categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"],
    },
  };

  const [amount, setAmount] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <Container w="90%" maxW="container.xl">
      <Flex flexDir="column" my={4}>
        <Center>
          <Heading size="4xl" mb={2}>
            {organization.title}
          </Heading>
        </Center>
        <Flex>
          <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr 1fr" }} gap={4}>
            {/* Image and */}
            <Center>
              <Image src={organization.img} alt="WWF" />
            </Center>
            {/* Reports */}
            <Card>
              <CardHeader>
                <Heading size="md">Reports</Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Total Donaciones
                    </Heading>
                    <Text pt="2" fontSize="sm" color="green">
                      $1,500,200
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Top donadores
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Últrimas transacciones
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            {/* NFTS */}
            <Card justify="center" align="center">
              <CardBody>
                <Heading size="md">FTs</Heading>
                <Center height="90%">
                  <Text fontSize="lg" color="gray">
                    This organization doesn't offer FTs
                  </Text>
                </Center>
              </CardBody>
            </Card>
          </Grid>
        </Flex>
        <Center>
          <Flex flexDir="column">
            <Button mt={4} onClick={onOpen}>
              Donate
            </Button>
            <Box>
              <Heading size="xl" my={4}>
                Donation timeline
              </Heading>
              <Text size="md" my={4}>
                Here you can see why the ONG needs the donations
              </Text>
            </Box>
          </Flex>
        </Center>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">
              <VStack alignItems="center">
                <Text>Donate to</Text>
                <Text color="#37a0ea">{organization.title}</Text>
                <Image src={organization.img} alt="WWF" />
              </VStack>
            </ModalHeader>
            <Center>
              <VStack maxW="200px">
                <Text color="gray.500">
                  Submit the amount you want to donate to this organization
                </Text>
                <Input
                  placeholder="$ ####"
                  type="number"
                  width="80%"
                  onChange={handleChange}
                />
              </VStack>
            </Center>
            <ModalCloseButton />
            <ModalBody>
              <Center mb={5}>
                <TransferButton
                  to={organization.wallet}
                  amount={parseInt(amount)}
                  onClose={onClose}
                />
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
        <div className="root-div">
          <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
            <HorizontalTimeline
              styles={{ outline: "#96CFF7", foreground: "#37a0ea" }}
              index={value}
              indexClick={(index: any) => {
                setValue(index);
                setPrevious(value);
              }}
              values={VALUES}
            />
          </div>
          <Center>
            <Text fontSize="2xl">{description[value]}</Text>
          </Center>
        </div>
        <Center>
          <Flex flexDir="column">
            <Center>
              <Heading size="xl" mt={10}>
                Budget timeline
              </Heading>
            </Center>
            <Chart type="line" series={series} options={options} width={600} />
          </Flex>
        </Center>
      </Flex>
    </Container>
  );
}

export { OrganizacionProfile };
