import { Card, CardBody, Heading, Stack, Text, Image, Modal, ModalOverlay, ModalContent, ModalBody, IconButton, Flex } from "@chakra-ui/react";
import { useState } from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Portfolio = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleNextImage = () => {
        const newIndex = (selectedImageIndex + 1) % images.length;
        setSelectedImageIndex(newIndex);
    };

    const handlePreviousImage = () => {
        const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
        setSelectedImageIndex(newIndex);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Flex mt={{ base: "50px", md: "200px" }} marginX="auto" width={{ base: "80%", md: "80%" }} height={"100vh"} justifyContent={"center"} flexDirection={"column"}>
            <Heading textAlign={"center"} >Portfolio</Heading>
            <Card maxW='md' mt={{ base: "50px", md: "70px" }} mx="auto">
                <CardBody>
                    <Stack direction="row" justify="center" align="center">
                        <IconButton
                            aria-label="Previous Image"
                            icon={<IoMdArrowDropleft />}
                            onClick={handlePreviousImage}
                            disabled={selectedImageIndex === 0}
                        />
                        <Image
                            src={images[selectedImageIndex]}
                            alt={`Image ${selectedImageIndex}`}
                            borderRadius='lg'
                            cursor="pointer"
                            onClick={handleImageClick}
                        />
                        <IconButton
                            aria-label="Next Image"
                            icon={<IoMdArrowDropright />}
                            onClick={handleNextImage}
                            disabled={selectedImageIndex === images.length - 1}
                        />
                    </Stack>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Circle Apps</Heading>
                        <Text>
                            Circle-Apps is a social media platform inspired by the functionalities of Twitter while offering a unique set of features tailored to its community. Built with a focus on modern technologies, Circle-Apps utilizes ReactJS, TypeScript, Redux, and Chakra UI on the frontend to ensure a responsive, accessible, and visually appealing user interface. On the backend, it leverages ExpressJS, TypeORM, and PostgreSQL to handle data management efficiently and securely.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Image src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default Portfolio;
