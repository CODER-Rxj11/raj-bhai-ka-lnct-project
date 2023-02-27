import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  // Avatar,
  // SimpleGrid,
  Icon,
  Img,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiInstagram, FiGlobe } from "react-icons/fi";
// import { AiOutlinePhone } from "react-icons/ai";

import Reveal from "../library/Reveal";
// import { wrap } from "module";

const Sponsor: React.FC = () => {
  return (
    <Box width="100%" py={{ xs: "20px", lg: "50px" }}>
      <Container maxWidth="1440px" px={{ xs: "10px", lg: "40px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal>
            <Text color="rgb(28%, 56%, 5%)" fontWeight="700" fontSize="4xl" mb="2rem">
              Organized By
            </Text>
          </Reveal>
          <Reveal
            display="flex"
            mb="1rem"
            width={{ xs: "90%", lg: "50%" }}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            <Img src="/assets/club.jpeg" />
          </Reveal>
          <Reveal mt="1rem" mb="2rem">
            <a
              href="https://www.facebook.com/lncthackathonclub"
              target="_blank"
            >
              <Icon
                ml="1rem"
                bg="rgb(28%, 56%, 5%)"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={FiFacebook}
              />
            </a>
            <a
              href="https://www.instagram.com/lncthackathonclub/"
              target="_blank"
            >
              <Icon
                ml="1rem"
                bg="rgb(28%, 56%, 5%)"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={FiInstagram}
              />
            </a>
            <a href="https://hackathonclub.lnct.ac.in/" target="_blank">
              <Icon
                ml="1rem"
                bg="rgb(28%, 56%, 5%)"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={FiGlobe}
              />
            </a>
            <a href="mailto:hackathon@lnct.ac.in">
              <Icon
                ml="1rem"
                bg="rgb(28%, 56%, 5%)"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={HiOutlineMail}
              />
            </a>
          </Reveal>
          
        </Flex>
      </Container>

      <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          mt="3rem"
          flexWrap="wrap"
        >
      <Reveal>
          <Text color="rgb(28%, 56%, 5%)" fontWeight="700" fontSize="5xl" mb="3rem">
              Sponsored By
            </Text>
          </Reveal>
      {/* <Box width={{ lg: "70%" }}> */}
      {/* <Reveal
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              left
              // justifyContent="space-evenly"
            > */}
              {/* <SimpleGrid
                mt="1rem"
                mb="2rem"
                width={{ xs: "90%", md: "70%", lg: "150%" }}
                columns={{ xs: 1, sm: 5 }}
                spacing={{ xs: 10, lg: 5 }}
              > */}
              <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          mt="0rem"
        >
                <Reveal>
                  <Img my="auto" width="80%" src="/assets/kliclogo.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/anupamlogo.jpeg" />
                </Reveal>
                
                </Flex>
              {/* </SimpleGrid> */}
              {/* </Reveal> */}
              {/* </Box> */}
    </Flex>
    </Box>
    
  );
};

export default Sponsor;
