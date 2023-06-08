import {
  Text,
  Flex,
  Spacer,
  Center,
  ButtonGroup,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MoonIcon,
  CalendarIcon,
  HamburgerIcon,
  AtSignIcon,
} from "@chakra-ui/icons";
import { Account } from "./account";
// Kaiku Manga

type Pages = "home" | "organizations" | "profile";

type Props = {
  isAccountVisible: boolean;
};

function HeaderBtn({ title, route, selected, icon }: any) {
  return (
    <Link to={route}>
      <Button
        variant="outline"
        background={selected ? "#37a0ea" : ""}
        color={selected ? "white" : ""}
      >
        {icon}
        <Text marginLeft="5px">{title}</Text>
      </Button>
    </Link>
  );
}

function Header({ isAccountVisible }: Props) {
  const { toggleColorMode } = useColorMode();
  const [selectedPage, setSelectedPage] = useState<Pages>("home");
  const location = useLocation();
  const bottomBorder = useColorModeValue("#e2e8f0", "#e2e8f0");

  useEffect(() => {
    const url = location.pathname;
    if (url.includes("home")) {
      setSelectedPage("home");
    } else if (url.includes("organizations")) {
      setSelectedPage("organizations");
    } else if (url.includes("profile")) {
      setSelectedPage("profile");
    }
  }, [location]);

  return (
    <Flex padding="10px 30px" borderBottom="1px" borderColor={bottomBorder}>
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
            icon={<CalendarIcon />}
            selected={selectedPage === "home"}
          />
          <HeaderBtn
            title="Organizations"
            route="/organizations"
            icon={<HamburgerIcon />}
            selected={selectedPage === "organizations"}
          />
          <HeaderBtn
            title="Profile"
            route="/profile"
            icon={<AtSignIcon />}
            selected={selectedPage === "profile"}
          />
        </ButtonGroup>
      </Center>
      <Spacer />
      <Button onClick={toggleColorMode} marginRight="1em">
        <MoonIcon />
      </Button>
      {isAccountVisible && <Account />}
    </Flex>
  );
}

export { Header };
