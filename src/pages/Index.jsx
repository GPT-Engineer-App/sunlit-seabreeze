import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaShip, FaRegCompass, FaPhone, FaBlog, FaCalendarAlt, FaRegEnvelope } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("blue.200", "blue.700");

  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          SolarBreeze
        </Heading>
        <Text fontSize="xl">Discover the Ultimate Coworking Experience on the Open Seas</Text>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} my={10} align="center" justify="center" gap={6}>
        <Image src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWlsaW5nJTIwY293b3JraW5nJTIwc3BhY2V8ZW58MHx8fHwxNzEwMDgwODI0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="350px" objectFit="cover" />
        <VStack align="flex-start" maxW="lg">
          <Heading as="h2" size="lg" mb={4}>
            A New Wave of Remote Working
          </Heading>
          <Text>Blending luxury sailing with a productive coworking environment, SolarBreeze is your escape to warmer climates and brighter horizons. Join us for an unparalleled work and leisure experience.</Text>
          <Button colorScheme="blue" rightIcon={<FaRegCompass />}>
            Set Sail Today
          </Button>
        </VStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
        <FeatureCard icon={FaSun} title="Sunlit Destinations" description="Explore exotic locations bathed in sunlight, ideal for remote workers and adventure seekers." />
        <FeatureCard icon={FaShip} title="Luxury Coworking" description="State-of-the-art coworking facilities set on a luxury vessel. Work has never been so inspiring." />
        <FeatureCard icon={FaRegCompass} title="Wellness & Adventure" description="Engage in wellness and sport activities to revitalize your body and mind during your workation." />
      </SimpleGrid>

      <Box as="section" bg={bg} p={10} borderRadius="lg" my={10}>
        <Heading as="h3" size="lg" textAlign="center" mb={6}>
          Ready to embark on your SolarBreeze journey?
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="center" gap={4}>
          <Button colorScheme="orange" leftIcon={<FaCalendarAlt />}>
            Check Availability
          </Button>
          <Button variant="outline" leftIcon={<FaPhone />}>
            Contact Us
          </Button>
        </Flex>
      </Box>

      <Box as="footer" textAlign="center" py={6}>
        <Link href="/blog" isExternal>
          <Icon as={FaBlog} w={6} h={6} mx={2} />
          Visit Our Blog
        </Link>
        <Link href="mailto:hello@solarbreeze.com">
          <Icon as={FaRegEnvelope} w={6} h={6} mx={2} />
          hello@solarbreeze.com
        </Link>
      </Box>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <VStack bg={useColorModeValue("white", "gray.800")} boxShadow="md" padding={5} borderRadius="lg" align="start">
      <Icon as={icon} w={10} h={10} color={useColorModeValue("blue.500", "blue.200")} />
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{description}</Text>
    </VStack>
  );
};

export default Index;
