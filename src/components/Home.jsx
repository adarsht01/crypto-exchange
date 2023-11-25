import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image filter={"grayscale(1)"} w={"full"} h={"full"} objectFit={"fill"} src='https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Text filter={"grayscale(2)"}  fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-200px"}>Crypto Exchange</Text>
    </Box>
  )
}

export default Home