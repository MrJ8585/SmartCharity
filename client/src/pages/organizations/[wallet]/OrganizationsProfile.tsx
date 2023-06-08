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
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { organizations } from "../Organizations";
//@ts-ignore
import HorizontalTimeline from "react-horizontal-timeline";
import Chart from "react-apexcharts";
import { TransferButton } from "./Transfer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { MoonIcon } from "@chakra-ui/icons";
import { json } from "stream/consumers";
import { Json } from "@polkadot/types";

function OrganizacionProfile() {
  const [value, setValue] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [previous, setPrevious] = useState(0);
  const [organization, setOrganization] = useState<any>({});
  const { id } = useParams();
  const [totalDonaciones, setTotalDonaciones] = useState<any>(0);
  const [dates, setDates] = useState<any>([]);
  const [descriptions, setDescriptions] = useState<any>({});
  const [donadores, setDonadores] = useState<string[]>([]);

  const fetch = (wallet: any) => {
    axios
      .post(`http://localhost/donacion/company/wallet`, {
        companyWallet: wallet,
      })
      .then((res) => {
        const totalQuantity = res.data.reduce(
          (sum: any, item: any) => sum + item.quantity,
          0
        );
        setTotalDonaciones(totalQuantity);
        const randomDates: any = res.data.map((item: any) => {
          return {
            ...item,
            date: format(new Date(item.date), "yyyy-MM-dd"),
          };
        });
        const sortedByDate = randomDates.sort((a: any, b: any) => {
          return b.id - a.id;
        });
        setDates(sortedByDate);
      });

    axios.get(`http://localhost/gastos/company/${wallet}`).then((response) => {
      setDescriptions(response.data.map((item: any) => item.descripcion));
    });
  };

  useEffect(() => {
    const organizacion = organizations.find((org) => org.wallet === id);
    setOrganization(organizacion);
    fetch(organizacion?.wallet);
  }, [value]);

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

  const nfts = [
    {
      name: "What The Duck!",
      description: "Get this FT by donating 100,000 units or more to WWF",
      image: "https://i.imgur.com/izhXPv4.png",
    },
    {
      name: "Paws and Reflect",
      description: "Get this FT by donating 10,000 units or more to WWF",
      image: "https://i.imgur.com/uEfhUnx.png",
    },
    {
      name: "Fin-tastic Voyage",
      description: "Get this FT by donating 1,000 units or more to WWF",
      image: "https://i.imgur.com/X8iUUa6.png",
    },
    {
      name: "Hop to It!",
      description: "Get this FT by donating 100 units or more to WWF",
      image: "https://i.imgur.com/eGalAvY.png",
    },
    {
      name: "Catitude Strikes",
      description: "Get this FT by donating 10 units or more to WWF",
      image: "https://i.imgur.com/DbQQH1q.png",
    },
  ];

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
              <Center>
                <CardHeader>
                  <Heading size="md">Reports</Heading>
                </CardHeader>
              </Center>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Total donations
                    </Heading>
                    <Text pt="2" fontSize="sm" color="green">
                      ${totalDonaciones}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Latest Transactions
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      <List spacing={1}>
                        {dates.slice(0, 3).map((date: any) => (
                          <Popover>
                            <ListItem>
                              <PopoverTrigger>
                                <Button mx={1}>
                                  <strong>
                                    {date.userWallet.substring(0, 5)}
                                  </strong>{" "}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <PopoverCloseButton />
                                <PopoverBody p={4}>
                                  {JSON.stringify(date, null, 2)}
                                </PopoverBody>
                              </PopoverContent>
                              {date.quantity} Units
                            </ListItem>
                          </Popover>
                        ))}
                      </List>
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            {/* NFTS */}
            <Card justify="center" align="center" overflow="auto">
              <Heading size="md" my={2}>
                FTs
              </Heading>
              {organization.wallet !=
              "0xb2fe4ca0daa2ca7b3810e52bda5015275e94ffa2ec6c2ff91667c6865833f27c" ? (
                <CardBody>
                  <Center height="90%">
                    <Text fontSize="lg" color="gray">
                      This organization doesn't offer FTs
                    </Text>
                  </Center>
                </CardBody>
              ) : (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <Center>
                      <CardBody>
                        <Heading size="md">The perfect latte</Heading>

                        <Text py="2">
                          Caffè latte is a coffee beverage of Italian origin
                          made with espresso and steamed milk.
                        </Text>
                      </CardBody>
                    </Center>
                  </Stack>
                </Card>
              )}
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
                Spending timeline
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
                  fetch={fetch}
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
              values={dates}
            />
          </div>
          <Center>
            <Text fontSize="2xl">{descriptions[value]}</Text>
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
