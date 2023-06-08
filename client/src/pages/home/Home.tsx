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
import whiteLogo from "../../assets/images/logoBlack.png";
import blueLogo from "../../assets/images/logoBlue.png";
import { organizations } from "pages/organizations/Organizations";
import { Link } from "react-router-dom";

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
          <Image
            src={imageSrc}
            boxSize="100px"
            borderRadius="full"
            objectFit="cover"
          />
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
  wallet: string;
};

function Organization({ title, imageSrc, wallet }: OrganizationProps) {
  return (
    <Link to={`/organizations/${wallet}`}>
      <Card w="300px">
        <CardBody>
          <Flex align="center" gap="10px">
            <Image
              src={imageSrc}
              boxSize="50px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text fontSize="lg">{title}</Text>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}

const features = [
  {
    title: "Donate to your favorite ONG",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3430/3430447.png",
    content:
      "There's a lot of ONGs where you can donate and help to the most in need",
  },
  {
    title: "Track ONG's money",
    imageSrc:
      "https://cdn.icon-icons.com/icons2/1860/PNG/512/graphmagnifier_118081.png",
    content: "See for what is being used the money you donated",
  },
  {
    title: "Get exclusive badges",
    imageSrc:
      "https://icon-library.com/images/badge-icon-png/badge-icon-png-24.jpg",
    content: "Show off you ONG's donator tier badges on your profile",
  },
];

// const organizations = [
//   {
//     title: "CETYS Universidad",
//     imageSrc:
//       "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
//   },
//   { title: "ONG 2", imageSrc: "https://bit.ly/3qBf6gB" },
//   {
//     title: "CETYS Universidad",
//     imageSrc:
//       "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
//   },
//   {
//     title: "CETYS Universidad",
//     imageSrc:
//       "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
//   },
//   {
//     title: "CETYS Universidad",
//     imageSrc:
//       "https://static-00.iconduck.com/assets.00/coinbase-icon-512x512-rgejvkzh.png",
//   },
// ];

function Home() {
  //zod
  const bgColor = useColorModeValue("#37a0ea", "#117bc4");
  const bg = useColorModeValue("white", "#2d3748");
  const img = useColorModeValue(whiteLogo, blueLogo);

  return (
    <Container w="90%" maxW="container.xl">
      <Flex alignItems="center" justifyContent="center" padding="4em" gap="4em">
        <Image src={img} fit="cover" boxSize="-moz-fit-content" width="260px" />
        <VStack w="400px">
          <Text fontSize="4xl" align="center" fontWeight="bold">
            Your charity is safe with SmartCharity
          </Text>
          <Link to="/organizations">
            <Button maxW="-moz-fit-content" background={bgColor} color="white">
              Look at our ONGs
              <AttachmentIcon marginLeft="10px" />
            </Button>
          </Link>
        </VStack>
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
        <Link to="https://es.wikipedia.org/wiki/Organizaci%C3%B3n_no_gubernamental">
          <Button paddingX="100px" background={bg} alignItems="center">
            Learn more
            <InfoIcon marginLeft="10px" />
          </Button>
        </Link>
      </VStack>
      <VStack align="start" paddingX="10px" paddingY="20px">
        <Text fontSize="3xl" fontWeight="bold">
          Trending organizations
        </Text>
        <Flex gap="20px" maxW="full" flexWrap="wrap">
          {organizations.map((organization) => (
            <Organization
              title={organization.title}
              wallet={organization.wallet}
              imageSrc={organization.img}
            />
          ))}
        </Flex>
      </VStack>
    </Container>
  );
}

export { Home };
