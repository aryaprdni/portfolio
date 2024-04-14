import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={"gray.50"} w={"100%"} position={"fixed"} zIndex={1} top={0}>
            <Flex justifyContent="space-between" alignItems="center" p={4} w={"60%"} fontWeight={"bold"} m={"auto"} position="relative">
                <Link to="aboutMe" smooth={true} duration={500}>Arya Perdana Irawan</Link>
                <IconButton
                    aria-label="Toggle Navigation"
                    display={{ base: "block", md: "none" }}
                    icon={isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                    onClick={isOpen ? onClose : onOpen}
                    variant="unstyled"
                    position="absolute"
                    right={4}
                    top={3}
                />
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justifyContent={{ base: "flex-start", md: "flex-end" }}
                    gap={{ base: 2, md: 4 }}
                    listStyleType="none"
                    flex="1"
                    display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                    position="absolute" 
                    bg="gray.50" 
                    right={4} 
                    top={{ base: "56px", md: "0"}}
                    zIndex={2} 
                    borderRadius="md"
                    boxShadow={{ base: "md", md: "none" }} 
                    p={4}
                >
                    <li>
                        <Link to="aboutMe" smooth={true} duration={500}>About me</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} >Skills</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} >Projects</Link>
                    </li>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;
