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
} from "@chakra-ui/react";

const badges = [
  {
    title: "Badge 1",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/189/189715.png",
  },
  {
    title: "Badge 2",
    imgSrc:
      "https://img.freepik.com/free-vector/floating-yellow-star_78370-598.jpg?w=2000",
  },
];

const donationRecords = [
  {
    title: "Donation 1",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/189/189715.png",
  },
  {},
];

function Badge({ title, imgSrc }: any) {
  return (
    <Card maxW="150px">
      <CardBody>
        <VStack alignItems="center">
          <Image src={imgSrc} boxSize="80%" borderRadius="full" />
          <Text>{title}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

function DonationRecord() {
  return (
    <Card width="700px">
      <CardBody>
        <Flex alignItems="center" justifyContent="flex-start" gap="2em">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/189/189715.png"
            boxSize="60px"
          />
          <Text fontSize="lg" fontWeight="semibold">
            Hello
          </Text>
          <Spacer />
          <Text>$30000 pesos</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

function Profile() {
  return (
    <Container w="90%" maxW="container.lg" marginTop="1em">
      <Flex
        gap="1em"
        alignItems="center"
        paddingY="3em"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Flex>
          <Image
            src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
            boxSize="200px"
            borderRadius="full"
          />
          <Box padding="10px">
            <Text fontSize="3xl">Clini</Text>
            <Text color="gray.500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </Text>
          </Box>
        </Flex>
        <Card>
          <VStack
            // border="1px"
            alignItems="center"
            padding="1em"
            borderRadius="1em"
          >
            <Text fontSize="2em" fontWeight="semibold" color="#37a0ea">
              Badges
            </Text>
            <Flex gap="1em">
              {badges.map((badge) => (
                <Badge title={badge.title} imgSrc={badge.imgSrc} />
              ))}
            </Flex>
          </VStack>
        </Card>
      </Flex>
      <VStack padding="1em">
        <Text fontSize="2em" fontWeight="semibold" color="#37a0ea">
          Donations History
        </Text>
        <VStack>
          {donationRecords.map((donationRecord) => (
            <DonationRecord />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
}

export { Profile };
