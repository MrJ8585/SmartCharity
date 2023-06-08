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
import { get } from "http";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAccount } from "@gear-js/react-hooks";
import { organizations } from "pages/organizations/Organizations";
import Identicon from "@polkadot/react-identicon";

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

function DonationRecord({ title, wallet, amount, date, imgSrc }: any) {
  return (
    <Card width="700px">
      <CardBody>
        <Flex alignItems="center" justifyContent="flex-start" gap="2em">
          <Image src={imgSrc} boxSize="60px" />
          <VStack alignItems="flex-start" fontWeight="light">
            <Flex alignItems="center" gap="2em">
              <Text fontSize="lg" fontWeight="semibold">
                {title}
              </Text>
              <Text>{date}</Text>
            </Flex>
            <Text fontSize=".8em">{wallet}</Text>
          </VStack>
          <Spacer />
          <Text>$ {amount}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

function Profile() {
  const { account, accounts } = useAccount();
  const [donations, setDonations] = useState<any[]>([]);
  useEffect(() => {
    getDonations();
  }, []);

  const getDonations = async () => {
    const userWallet = accounts[0].address;
    const response = await axios.post(
      "http://localhost:80/donacion/user/wallet",
      { userWallet: userWallet }
    );
    const donationsResponse = response.data;
    setDonations(
      donationsResponse.map((donation: any) => {
        const cosa = organizations.find(
          (org) => org.wallet === donation.companyWallet
        );
        return {
          title: cosa?.title,
          imgSrc: cosa?.img,
          ...donation,
        };
      })
    );
  };

  return (
    <Container w="90%" maxW="container.lg" marginTop="1em">
      <Flex
        gap="1em"
        alignItems="center"
        paddingY="3em"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Flex alignItems="center">
          <Identicon value={account?.address} theme="polkadot" size={200} />
          <Box padding="10px" maxWidth="400px">
            <Text fontSize="3xl">{account?.meta.name}</Text>
            <Text color="gray.500" fontSize="1em">
              {account?.address}
            </Text>
          </Box>
        </Flex>
        <Card>
          <VStack alignItems="center" padding="1em" borderRadius="1em">
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
          {donations.map((donationRecord) => (
            <DonationRecord
              title={donationRecord.title}
              date={donationRecord.date}
              imgSrc={donationRecord.imgSrc}
              amount={donationRecord.quantity}
              wallet={donationRecord.companyWallet}
            />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
}

export { Profile };
