import React, { useState,useEffect } from 'react';
import {Box,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Heading,
    Center

} from "@chakra-ui/react"

import ProfileTypo from "../../Constants/ProfileType"

const Leaderboard = () => {

    const[leaderboard,setLeaderboard]=useState<ProfileTypo[]>([])

    let requestHeaders: any = { 
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem("token")
    };

    const getLeaderboard = () => {
        fetch("https://crazy-tan-ray.cyclic.app/user/leaderboard", {
          method: "GET",
          headers:requestHeaders,
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setLeaderboard(res);
          })
          .catch((err) => console.log(err.message));
      };

    useEffect(()=>{
        getLeaderboard()
    },[])

if(leaderboard.length===0){
    return(
        <>
        <Center bgColor={"white"}>
            <Heading>No More Data</Heading>
        </Center>
        </>
    )
}
  return (
    <Center marginTop="50px">
     
        <Box

            w={{ base: "full", lg: "70%" }}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"

          >
             <Heading textAlign="center" padding="10px"> Leaderboard</Heading>
            <TableContainer overflowX={"auto"}>
              <Table
                size={{ base: "xs", md: "md", lg: "lg" }}
                textAlign="left"
                variant="striped"
                colorScheme="teal"
              >
                <Thead bg={"blue.500"}>
                  <Tr>
                    <Th
                      color="white"
                      fontSize={{ base: "xs", md: "md", lg: "lg" }}
                    >
                      S.No
                    </Th>
                    <Th
                      color="white"
                      fontSize={{ base: "xs", md: "md", lg: "lg" }}
                    >
                      Name
                    </Th>
                    <Th
                      color="white"
                      fontSize={{ base: "xs", md: "md", lg: "lg" }}
                    >
                      Score
                    </Th>
                    <Th
                      color="white"
                      fontSize={{ base: "xs", md: "md", lg: "lg" }}
                    >
                      Level
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {leaderboard?.map((el,index) => {
                    return (
                      <Tr key={index}>
                        <Td color={"gray.700"} fontWeight="semibold">
                          {index+1}
                        </Td>
                        <Td color={"gray.700"} fontWeight="semibold">
                          {el.name}
                        </Td>
                        <Td color={"gray.700"} fontWeight="semibold">
                          {el.score}
                        </Td>
                        <Td color="blue.500" fontWeight="semibold">
                          {el.level}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    </Center>
  )
}

export default Leaderboard