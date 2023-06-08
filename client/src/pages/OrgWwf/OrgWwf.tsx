/** @format */

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
} from "@chakra-ui/react";
import { useState } from "react";
// @ts-ignore
import HorizontalTimeline from "react-horizontal-timeline";
import { TransferButton } from "./Transfer";
import Chart from "react-apexcharts";

function OrgnizationWWF() {
  const [value, setValue] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [previous, setPrevious] = useState(0);

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
  const [inputValue, setInputValue] = useState(0);

  return (
    <Container w="90%" maxW="container.xl">
      <Flex flexDir="column" my={4}>
        <Center>
          <Heading size="4xl" mb={2}>
            World Wildlife Fund
          </Heading>
        </Center>
        <Flex>
          <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr 1fr" }} gap={4}>
            {/* Image and */}
            <Center>
              <Image
                src="https://assets.stickpng.com/images/58568d4c4f6ae202fedf2721.png"
                alt="WWF"
              />
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
            <Card>
              <CardBody>
                <Heading size="md">NFTs</Heading>
              </CardBody>

              <Box overflow="auto" maxHeight="400px">
                <Stack spacing={2}>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    m={4}
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.imgur.com/izhXPv4.png"
                      alt="WhatTheDuck"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">What The Duck!</Heading>
                        <Text fontSize="sm">
                          Get this FT by donating more than $100,000 to WWF
                        </Text>
                      </CardBody>
                    </Center>
                  </Card>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    m={4}
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.imgur.com/uEfhUnx.png"
                      alt="PawsAndReflect"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">Paws and Reflect</Heading>
                        <Text fontSize="sm">
                          Get this FT by donating $10,000 or more
                        </Text>
                      </CardBody>
                    </Center>
                  </Card>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    m={4}
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.imgur.com/X8iUUa6.png"
                      alt="FintasticVoyage"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">Fin-tastic Voyage</Heading>
                        <Text fontSize="sm">
                          Get this FT by donating $1,000 or more
                        </Text>
                      </CardBody>
                    </Center>
                  </Card>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    m={4}
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.imgur.com/eGalAvY.png"
                      alt="HoptoIt"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">Hop to It!</Heading>
                        <Text fontSize="sm">
                          Get this FT by donating $100 or more
                        </Text>
                      </CardBody>
                    </Center>
                  </Card>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    m={4}
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.imgur.com/DbQQH1q.png"
                      alt="CatitudeStrikes"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">Catitude Strikes</Heading>
                        <Text fontSize="sm">
                          Get this FT by donating $10 or more
                        </Text>
                      </CardBody>
                    </Center>
                  </Card>
                </Stack>
              </Box>
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
            <ModalHeader>Modal Title</ModalHeader>
            <Center>
              <Text>Cantidad a donar</Text>
            </Center>
            <Input
              value={inputValue}
              onChange={(e: any) => setInputValue(e.target.value)}
              placeholder="Ingrese un monto"
            />
            <ModalCloseButton />
            <ModalBody>
              <TransferButton
                to="0xd6d8fa0cedb0d42900585a8e2e086eee2f65adb5e2985f373dae10fab6b97377"
                amount={inputValue}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
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

export { OrgnizationWWF };
