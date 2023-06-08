import { AttachmentIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Center,
  Button,
  Stack,
  Card,
  CardBody,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

type FeatureProps = {
  imageSrc: string;
  title: string;
  content: string;
};

function Feature({ imageSrc, title, content }: FeatureProps) {
  return (
    <Card w="200px">
      <CardBody>
        <VStack>
          <Image src={imageSrc} boxSize="100px" borderRadius="full" />
          <Text align="center" fontSize="lg" fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize="sm" align="center">
            {content}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

type OrganizationProps = {
  title: string;
  imageSrc: string;
};

function Organization({ title, imageSrc }: OrganizationProps) {
  return (
    <Card w="300px">
      <CardBody>
        <Flex align="center" gap="10px">
          <Image src={imageSrc} boxSize="50px" borderRadius="full" />
          <Text fontSize="lg">{title}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    title: "Donate to your favorite ONG",
    imageSrc:
      "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
    content:
      "There's a lot of ONGs where you can donate and help to the most in need",
  },
  {
    title: "Track ONG's money",
    imageSrc: "https://bit.ly/2Z4KKcF",
    content: "See for what is being used the money you donated",
  },
  {
    title: "Track ONG's money",
    imageSrc: "https://bit.ly/2Z4KKcF",
    content: "Show off you ONG's donator tier badges on your profile",
  },
];

const organizations = [
  {
    title: "CETYS Universidad",
    imageSrc:
      "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
  },
  { title: "ONG 2", imageSrc: "https://bit.ly/3qBf6gB" },
  {
    title: "CETYS Universidad",
    imageSrc:
      "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
  },
  {
    title: "CETYS Universidad",
    imageSrc:
      "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
  },
  {
    title: "CETYS Universidad",
    imageSrc:
      "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
  },
];

function Home() {
  const bgColor = useColorModeValue("#37a0ea", "#117bc4");
  const bg = useColorModeValue("white", "#2d3748");

  return (
    <Container w="90%" maxW="container.xl">
      <Flex alignItems="center" justifyContent="center">
        <Image
          src="https://i.imgur.com/LcrmL8F.png"
          fit="cover"
          boxSize="500px"
        />
        <Stack w="400px">
          <Text fontSize="4xl" align="center" fontWeight="bold">
            Your charity is safe with SmartCharity
          </Text>
          <Button maxW="-moz-fit-content" background={bgColor} color="white">
            Connect your wallet!
            <AttachmentIcon marginLeft="10px" />
          </Button>
        </Stack>
      </Flex>
      <VStack
        background={bgColor}
        padding="2em"
        color="white"
        gap="20px"
        borderRadius="2em"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Explore all our Features
        </Text>
        <Flex gap="20px">
          {features.map((feature) => (
            <Feature
              title={feature.title}
              imageSrc={feature.imageSrc}
              content={feature.content}
            />
          ))}
        </Flex>
        <Button paddingX="100px" background={bg} alignItems="center">
          Learn more
          <InfoIcon marginLeft="10px" />
        </Button>
      </VStack>
      <VStack align="start" paddingX="10px" paddingY="20px">
        <Text fontSize="3xl" fontWeight="bold">
          Trending organizations
        </Text>
        <Flex gap="20px" maxW="full" flexWrap="wrap">
          {organizations.map((organization) => (
            <Organization
              title={organization.title}
              imageSrc={organization.imageSrc}
            />
          ))}
        </Flex>
      </VStack>
    </Container>
  );
}

export { Home };
