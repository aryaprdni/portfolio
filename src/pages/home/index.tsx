import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import TypeIt from "typeit-react";
import image from "../../assets/arya.png";
import { FiDownload } from "react-icons/fi";
import About from "../about";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Navbar from "../../component/Navbar/navbar";
import { Element } from "react-scroll";
import myCV from "../../assets/arya-cv.pdf";

const Home = () => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"} 
        m={"0 auto"}
        flexDirection={"column"}
      >
        <Navbar />
        <Element name="aboutMe">
          
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          width={"90%"}
          flexDirection={{ base: "column", md: "row" }}
          // mt={"200px"}
          m={"100px auto"}
        >
          <Box
            width={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: "30px", md: "0px" }}
            order={{ base: 2, md: 1 }}
          >
            <TypeIt options={{ loop: true, cursor: false }}>
              <Heading as="h1" size="md" noOfLines={1}>
                Hi, I'm Arya Perdana Irawan
              </Heading>
              <Heading as="h1" size="md" noOfLines={1}>
                A Fullstack Developer
              </Heading>
            </TypeIt>
            <Text mt={"50px"}>
              A fresh graduate fullstack developer with a passion for
              technology. I specialize in building responsive web applications
              using JavaScript, React, and Node.js. I'm enthusiastic about
              continuous learning and growth in the software development world.
              Welcome to my portfolio!
            </Text>

            <Box mt={"30px"}>
              <a href={myCV}
              download={myCV}
              target="_blank"
              rel="noreferrer">
                <Button colorScheme="yellow" mr={3}>
                  <FiDownload
                    style={{ background: "none", marginRight: "5px" }}
                  />
                  Download CV
              </Button>
              </a>
              <a href="mailto:aryaperdanairawan473@gmail.com">
                <Button colorScheme="yellow" mr={3}>
                  Hire Me
                </Button>
              </a>
            </Box>
          </Box>

          <Box
            width={{ base: "50%", lg: "20%", md: "30%", sm: "200px" }}
            textAlign={{ base: "center", md: "right" }}
            ml={{ base: "0px", md: "30px" }}
            mt={{ base: "30px", md: "0px" }}
            order={{ base: 1, md: 2 }}
          >
            <img src={image} alt="arya" width={"500px"} />
          </Box>
        </Flex>
          <About/>
        </Element>
        <Element name="skills" style={{ height: "100vh" }}>
          <Skills/>
        </Element>
        <Element name="projects" style={{ height: "100vh" }}>
        <Portfolio/>
        </Element>
      </Flex>


      <Box as="footer" p={4} textAlign="center" bg={"gray.50"} mt={"200px"}>
        <Text color="gray.500">Made with ❤️ by Arya Perdana Irawan</Text>
      </Box>
    </>
  );
};

export default Home;
