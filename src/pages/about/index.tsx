import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"

const About = () => {
    return (
        <>  
            <Flex justifyContent={"center"} alignItems={"center"} mt ={"50px"} ml={"40px"} flexDirection={{base: "column", md: "row"}}>
                <Box width={{base: "100%", md: "50%"}} textAlign={"left"}>
                    <Heading as='h4' size='md' textAlign={{ base: "center", md: "left"}}>
                        About me
                    </Heading>
                    <Text textAlign={{ base: "center", md: "left"}} mt={"10px"} width={"90%"}>
                        I'm Arya Perdana Irawan, a 20-year-old undergraduate student majoring in Computer Engineering. As a Fullstack Developer with a penchant for backend development, I'm constantly thirsty for knowledge in technology, particularly in the realm of software engineering. Eager to dive deep into the intricacies of coding and problem-solving, I strive to stay at the forefront of technological advancements.
                    </Text>
                </Box>
                <Box mt={{base: "20px", md: "0px"}} textAlign={{ base: "center", md: "left"}}>
                    <Heading as='h4' size='md'>
                        Let's connect
                    </Heading>
                    <Text mt={"10px"}>
                        Feel free to reach out and connect with me.

                        <Flex
                        fontSize={"30px"}
                        mt={"25px"}
                        gap={"20px"}
                        justifyContent={{ base: "center", md: "left"}}
                        >
                            <FaFacebook /> <BsTwitterX /> <FaInstagram /> <FaLinkedin />
                        </Flex>
                    </Text>
                </Box>
            </Flex>
        </>
    )
};

export default About;
