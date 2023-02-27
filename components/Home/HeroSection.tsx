import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  SimpleGrid,
  Img,
} from "@chakra-ui/react";

import Reveal from "../library/Reveal";
import Carousel from "./HeroCarousel";

const HeroSection: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      height={{ lg: "55vw" }}
      width="100%"
      p={{ xs: "40px 0 60px", sm: "140px 0 130px" }}
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          justify="space-between"
          alignItems="center"
          flexDirection={{ xs: "column-reverse", lg: "row" }}
        >
          <Box width={{ lg: "41%" }} justifyContent="center">
            <Reveal
              display="flex"
              flexDirection={{ xs: "column-reverse", lg: "column" }}
              left
            >
              <SimpleGrid
                mt="1rem"
                mb="2rem"
                width={{ xs: "90%", md: "70%", lg: "150%" }}
                columns={{ xs: 2, sm: 8 }}
                spacing={{ xs: 10, lg: 5 }}
                // mx="15rem" 
              >
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/logo.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/g20.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/IIC.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/nirf.jpg" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/NBA.png" />
                </Reveal>
                <Reveal>
                  <Img
                    my="auto"
                    width="100%"
                    src="/assets/Hackathon Club Logo.png"
                  />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/30.png" />
                </Reveal>
                {/* <Reveal>
                  <Img my="auto" width="100%" src="/assets/" />
                </Reveal> */}
                
              </SimpleGrid>
              <Box>
                <Text
                  as="h1"
                  fontSize={{ xs: "3xl", lg: "1.8rem" }}
                  fontWeight="700"
                  textAlign={{ xs: "center", lg: "left" }}
                  color="rgb(28%, 56%, 5%)"
                  lineHeight="1.1"
                >
                  LNCT Group of Colleges present,
                </Text>
                <Text
                  as="h1"
                  fontSize={{ xs: "3xl", lg: "3xl" }}
                  fontWeight="700"
                  textAlign={{ xs: "center", lg: "left" }}
                  color="rgb(28%, 56%, 5%)"
                  lineHeight="1.2"
                  mb={{ xs: "1rem", lg: "2rem" }}
                  mt="1rem"
                >
                  National Agro Hackathon – 2023
                  <br />
                  <Text as="span" fontSize={{ xs: "2xl", lg: "1.8rem" }}>
                    Version 1.0
                  </Text>
                </Text>
                <Text
                  textAlign={{ xs: "center", lg: "left" }}
                  color="#14213d"
                  mb="0.5rem"
                  fontSize={"lg"}
                >
                  LNCT Group Hackathon Club is organising a “National Agro Hackathon - 2023, Version 1.0”, aimed at bringing together a diverse group of individuals with a passion for agriculture to develop creative and innovative solutions to the challenges facing by this sector.
                </Text>
                <Text
                  textAlign={{ xs: "center", lg: "left" }}
                  color="#14213d"
                  // mb="1rem"
                  fontSize={"lg"}
                >
                  The Agriculture Hackathon will provide a platform for participants to collaborate and work with like-minded individuals, learn from industry experts and gain valuable exposure to the latest technologies and trends in agriculture. 
                </Text>
              </Box>
            </Reveal>
            <Reveal
              d="flex"
              justifyContent={{ xs: "center", lg: "flex-start" }}
              delay={0.4}
              mt="3rem"
            >
              <a href="https://docs.google.com/forms/d/1FavIfjRwoKrMSjKz4mBV10UKIbiuJ1WMT7qyCKWGOkM/viewform" target="_blank">
                <Button
                  // ml="1rem"
                  borderRadius="500px"
                  height="44px"
                  p="0 25px"
                  color="white"
                  bg="rgb(95%, 62%, 2%)"
                  _hover={{
                    bg: "#FFFFFF",
                    color: "rgb(95%, 62%, 2%)",
                    border: "1px solid rgb(95%, 62%, 2%)",
                  }}
                >
                  Register Now
                </Button>
              </a>
            </Reveal>
          </Box>
          <Reveal
            right
            delay={0.4}
            height={{ xs: "40%", sm: "auto" }}
            width={{ lg: "52%" }}
            mb={{ xs: "1rem", md: "0" }}
          >
            <Carousel />
          </Reveal>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HeroSection;
