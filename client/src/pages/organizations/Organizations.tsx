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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const organizations = [
  {
    title: "4 PATAS",
    wallet:
      "0x88cc79086d8490ff9ee727bc666fee8e72e5eb0116446ec4a11454be5a21691c",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/849/themes/common/logo-1866482157-1574635760-6cf4fcbbca71b55a01145347adaf5bde1574635760.png?0",
  },

  {
    title: "Doctores Sin Fronteras",
    wallet:
      "0x5a6bc767fedd0f56c2aab41ef93299925489f9b161b26cc60c7512042a79d518",
    img: "https://www.sustainable.pitt.edu/wp-content/uploads/2022/02/doctors@2x.png",
  },
  {
    title: "ONU",
    wallet:
      "0xea04eaecf9368a318cf7b6e4778298a4efa0b5d5765f74a509ea4a16ab7c4200",
    img: "https://www.un.org/sites/un2.un.org/files/2021/03/un-logo.png",
  },
  {
    title: "World Wildlife Fund",
    wallet:
      "0xb2fe4ca0daa2ca7b3810e52bda5015275e94ffa2ec6c2ff91667c6865833f27c",
    img: "https://1000marcas.net/wp-content/uploads/2020/02/logo-WWF.png",
  },
];

function OrganizationCard({ title, wallet, img, numberDonations }: any) {
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
                {numberDonations}
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
  const [organizationData, setOrganizationData] = useState<any>([]);
  useEffect(() => {
    getTotalDonations();
  }, []);

  console.log(organizationData);

  const getTotalDonations = async () => {
    const info: any = [];
    for (const organization of organizations) {
      const response = await axios.post(
        "http://localhost:80/donacion/company/wallet",
        {
          companyWallet: organization.wallet,
        }
      );
      info.push({ ...organization, totalDonations: response.data.length });
    }
    setOrganizationData(info);
  };

  return (
    <Container maxW="container.lg" marginTop="10px">
      <VStack spacing="1em">
        {organizationData.map((organization: any) => (
          <OrganizationCard
            title={organization.title}
            img={organization.img}
            wallet={organization.wallet}
            numberDonations={organization.totalDonations}
          />
        ))}
      </VStack>
    </Container>
  );
}

export { Organizations, organizations };
