import {
  Text,
  Flex,
  Spacer,
  Center,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Account } from "./account";
// Kaiku Manga

type Pages = "home" | "organizations" | "profile";

type Props = {
  isAccountVisible: boolean;
};

function HeaderBtn({ title, route, selected }: any) {
  return (
    <Button
      variant="outline"
      background={selected ? "#37a0ea" : ""}
      color={selected ? "white" : "black"}
    >
      <Link to={route}>{title}</Link>
    </Button>
  );
}

function Header({ isAccountVisible }: Props) {
  const [selectedPage, setSelectedPage] = useState<Pages>("home");
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    console.log(url);
    if (url.includes("home")) {
      setSelectedPage("home");
    } else if (url.includes("organizations")) {
      setSelectedPage("organizations");
    } else if (url.includes("profile")) {
      setSelectedPage("profile");
    }
  }, [location]);
  console.log(window.location.href);

  return (
    <Flex
      background="white"
      padding="10px 30px"
      borderBottom="1px"
      borderColor="gray.200"
      color="black"
    >
      <Center>
        <Text fontSize="3xl" color="#37a0ea" fontWeight="bold">
          SmartCharity
        </Text>
      </Center>
      <Spacer />
      <Center>
        <ButtonGroup>
          <HeaderBtn
            title="Home"
            route="/home"
            selected={selectedPage === "home"}
          />
          <HeaderBtn
            title="Organizations"
            route="/organizations"
            selected={selectedPage === "organizations"}
          />
          <HeaderBtn
            title="Profile"
            route="/profile"
            selected={selectedPage === "profile"}
          />
        </ButtonGroup>
      </Center>
      <Spacer />
      {isAccountVisible && <Account />}
    </Flex>
  );
}

export { Header };
