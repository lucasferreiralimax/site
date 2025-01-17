import { Flex, Icon, Stack, useMediaQuery } from "@chakra-ui/react"
import { useState } from "react"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 960px)")
  const [isOpen, setIsOpen] = useState(!isMobile)

  return (
    <Flex direction={["column", "column", "row"]}>
      <Flex as="header"
        bg="brand.primary"
        align="center"
        justify="space-around"
        py="4"
        w={["100%", "100%", "50%"]}
      >
        <Logo />
        <Stack display={["block", "block", "none"]}>
          <Icon
            as={RiMenuLine}
            display={isOpen ? "none" : "block"}
            cursor="pointer"
            onClick={() => setIsOpen(true)}
            fontSize="2rem"
          />
          <Icon
            as={RiCloseLine}
            display={isOpen ? "block" : "none"}
            cursor="pointer"
            onClick={() => setIsOpen(false)}
            fontSize="2rem"
          />
        </Stack>
      </Flex>
      <Stack
        bg="brand.primary"
        textAlign="center"
        display={isOpen ? "block" : "none"}
        py="4"
      >
        <Navbar />
      </Stack>
      <Flex
        w={["100%", "100%", "50%"]}
        display={["none", "none", "flex"]}
        bg="brand.primary"
        align="center"
      >
        <Navbar />

      </Flex>
    </Flex>
  )
}