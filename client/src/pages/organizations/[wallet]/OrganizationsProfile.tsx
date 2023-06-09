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
  const [datesTL, setDatesTL] = useState<any>();
  const [hash, setHash] = useState<any>([]);
  const [quantity, setQuantity] = useState<any>(0);
  const [expenses, setExpenses] = useState<any>([]);
  const [donations, setDonations] = useState<any>([]);
  const [chartArr, setChartArr] = useState<any>([]);

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
        setDonations(res.data);
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
      const data = response.data;
      const descriptions = data.map((item: any) => item.descripcion);
      const datesTL = data.map((item: any) => item.date);
      const qty = data.map((item: any) => item.quantity);
      const block = data.map((item: any) => item.bloque);

      setDescriptions(descriptions);
      setDatesTL(datesTL);
      setQuantity(qty);
      setExpenses(data);
      setHash(block);
    });
  };

  useEffect(() => {
    const organizacion = organizations.find((org) => org.wallet === id);
    setOrganization(organizacion);
    fetch(organizacion?.wallet);
    buildCharts();
  }, [value]);

  const buildCharts = () => {
    const mergedArr = [...donations, ...expenses];

    // Sort the merged array by date
    const sortedArray = mergedArr.sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setChartArr(sortedArray);
  };

  const completeArrayDates = (): string[] => {
    var init: string[] = [""];

    chartArr.forEach((index: any) => {
      const fecha = index.date;
      if (!init.includes(fecha)) {
        const lastFecha = fecha.split("T");
        init.push(lastFecha[0]);
      }
    });
    console.log(init);
    return init;
  };

  const completeArrayUnits = (): number[] => {
    var init: number[] = [0];
    var num: number = 0;

    chartArr.forEach((index: any) => {
      const cantidad = index.quantity;
      if (!index.userWallet) {
        num = num - cantidad;
      } else {
        num + cantidad;
      }
      init.push(num);
    });

    return init;
  };

  const series = [
    {
      name: "Units",
      data: completeArrayUnits(),
    },
  ];

  const options = {
    xaxis: {
      categories: completeArrayDates(),
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
            <Card
              justify="center"
              align="center"
              overflow="hidden"
              maxH="400px"
            >
              <Heading size="md" my={2}>
                FTs
              </Heading>
              <Box overflowY="scroll">
                {organization.wallet !==
                "0xb2fe4ca0daa2ca7b3810e52bda5015275e94ffa2ec6c2ff91667c6865833f27c" ? (
                  <CardBody>
                    <Center height="90%">
                      <Text fontSize="lg" color="gray">
                        This organization doesn't offer FTs
                      </Text>
                    </Center>
                  </CardBody>
                ) : (
                  nfts.map((nft: any) => (
                    <Card
                      direction={{ base: "column", sm: "row" }}
                      overflow="hidden"
                      variant="outline"
                    >
                      <Center>
                        <Image
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "200px" }}
                          src={nft.image}
                          alt={nft.name}
                        />

                        <Stack>
                          <CardBody>
                            <Heading size="md">{nft.name}</Heading>
                            <Text py="2">{nft.description}</Text>
                          </CardBody>
                        </Stack>
                      </Center>
                    </Card>
                  ))
                )}
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
            {datesTL && (
              <HorizontalTimeline
                styles={{ outline: "#96CFF7", foreground: "#37a0ea" }}
                index={value}
                indexClick={(index: any) => {
                  setValue(index);
                  setPrevious(value);
                }}
                values={datesTL}
              />
            )}
          </div>
          <Center>
            <Flex flexDir="column">
              <Center>
                <Heading size="lg">${quantity[value]}</Heading>
              </Center>
              <Center>
                <Text fontSize="xl">{descriptions[value]}</Text>
              </Center>
              <Center>
                <Heading size="md" mt={4}>
                  Hash:
                </Heading>
              </Center>
              <Text fontSize="xl">{hash[value]}</Text>
            </Flex>
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
