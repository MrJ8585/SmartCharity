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
} from "@chakra-ui/react";
import { useState } from "react";
// @ts-ignore
import HorizontalTimeline from "react-horizontal-timeline";

function Orgnization() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];

  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
    "The event of 22 March 2021 : Board Exam",
  ];

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
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Caffe Latte"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">The perfect latte</Heading>
                        <Text fontSize="sm">First Tier</Text>
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
                      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt="Caffe Latte"
                    />
                    <Center>
                      <CardBody>
                        <Heading size="md">The perfect latte</Heading>
                        <Text fontSize="sm">First Tier</Text>
                      </CardBody>
                    </Center>
                  </Card>
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Flex>
        <Center>
          <Heading size="xl" my={4}>
            Donation timeline
          </Heading>
        </Center>
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
      </Flex>
    </Container>
  );
}

export { Orgnization };
