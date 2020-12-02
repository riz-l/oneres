// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as OneResponse } from "../../assets/img/logo/oneresponse.svg";

// Import: Icons
import { FaUserCircle as UserIcon } from "react-icons/fa";
import { HiMenu as ToggleIcon } from "react-icons/hi";
import { AiOutlinePrinter as PrintIcon } from "react-icons/ai";
import { GoSearch as SearchIcon } from "react-icons/go";
import { RiLogoutBoxRLine as LogoutIcon } from "react-icons/ri";

// Import: Elements
import {
  Container,
  Primary,
  Wrapper,
  Logo,
  UserWrapper,
  User,
  Secondary,
  ToggleWrapper,
  Toggle,
  ButtonMenu,
  Button,
} from "./Header.elements";

// Component: Header
export default function Header({ setIsPatientListOpen, setIsSearchMenuOpen }) {
  return (
    <Container>
      <Primary>
        <Wrapper>
          <Logo>
            <OneResponse />
          </Logo>

          <UserWrapper>
            <User>
              <UserIcon />
            </User>
          </UserWrapper>
        </Wrapper>
      </Primary>

      <Secondary>
        <Wrapper>
          <ToggleWrapper>
            <Toggle
              onClick={() =>
                setIsPatientListOpen((isPatientListOpen) => !isPatientListOpen)
              }
            >
              <ToggleIcon />
              <span>Patient List</span>
            </Toggle>
          </ToggleWrapper>

          <ButtonMenu>
            <Button>
              <PrintIcon />
            </Button>

            <Button
              onClick={() =>
                setIsSearchMenuOpen((isSearchMenuOpen) => !isSearchMenuOpen)
              }
            >
              <SearchIcon />
            </Button>

            <Button>
              <LogoutIcon />
            </Button>
          </ButtonMenu>
        </Wrapper>
      </Secondary>
    </Container>
  );
}
