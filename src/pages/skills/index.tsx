import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { FaDatabase, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import "./style.css"

const Skills = () => {
    return (
       <>
           <Box mt={{ base: "100px", md: "220px" }} position={"relative"}>
                <Heading textAlign={"center"}>Skills</Heading>   
                <Flex 
                    mt={{ base: "200px", md: "150px" }} 
                    ml={{ base: "0", md: "10%" }} 
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    alignItems={{ base: "flex-start", md: "center" }} 
                    textAlign={{ base: "center", md: "left" }} 
                >
                    <Box className="stage-cube-cont" ml={{ base: "100px", md: "0" }} mt={{ base: "100px", md: "100px" }}>
                        <div className="cubeSpinner">
                            <div className="face1" >
                                <FaHtml5 color="#F06529"/>
                            </div>
                            <div className="face2" >
                                <IoLogoCss3 color="#28A4D9"/>
                            </div>
                            <div className="face3" >
                                <SiJavascript color="#EFD81D" />
                            </div>
                            <div className="face4" >
                                <FaReact color="#5ED4F4" />
                            </div>
                            <div className="face5" >
                                <FaNodeJs color="#DD0031"/>
                            </div>
                            <div className="face6" >
                                <FaDatabase />
                            </div>
                        </div>
                    </Box>
                    <Box 
                        mt={{ base: "250px", md: "0" }} 
                        ml={{ base: "35px", md: "500px" }} 
                        width={{ base: "80%", md: "600px" }} 
                        // textAlign={{ base: "center", md: "left" }} // Dihapus karena sudah ditentukan di atas
                    >
                        <Text>Frontend: HTML, CSS, Boostrap, JavaScript, ReactJS, Typescript</Text>
                        <Text>Backend: NodeJs, ExpressJs, Typescript</Text>
                        <Text>ORM: Sequelize, TypeORM, Prisma</Text>
                        <Text>Database: PostgreSQL, MySQL, MongoDB</Text>
                    </Box>
                </Flex>
           </Box>
       </>
    )
}

export default Skills
