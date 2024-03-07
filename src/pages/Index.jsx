import React, { useState } from "react";
import { Box, Heading, Link, Text, Flex, Spacer, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const stories = [
  {
    id: 1,
    title: "Show HN: My New Project",
    url: "https://example.com",
    points: 42,
    author: "johndoe",
    numComments: 5,
  },
  {
    id: 2,
    title: "Ask HN: How to Learn React?",
    url: "https://example.com",
    points: 28,
    author: "janedoe",
    numComments: 12,
  },
  // Add more sample stories...
];

const Index = () => {
  const [storyList, setStoryList] = useState(stories);

  const upvoteStory = (id) => {
    setStoryList((prevList) => prevList.map((story) => (story.id === id ? { ...story, points: story.points + 1 } : story)));
  };

  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Hacker News
      </Heading>
      <VStack spacing={4} align="stretch">
        {storyList.map((story) => (
          <Box key={story.id} borderWidth={1} borderRadius="md" p={4}>
            <Flex align="center">
              <Link href={story.url} fontWeight="bold" fontSize="lg">
                {story.title}
              </Link>
              <Spacer />
              <HStack>
                <Text fontSize="sm" color="gray.500">
                  {story.points} points
                </Text>
                <IconButton icon={<FaHeart />} size="sm" variant="ghost" onClick={() => upvoteStory(story.id)} aria-label="Upvote" />
              </HStack>
            </Flex>
            <Flex mt={2} align="center">
              <Text fontSize="sm" color="gray.500">
                by {story.author}
              </Text>
              <Spacer />
              <HStack>
                <FaComment />
                <Text fontSize="sm" color="gray.500">
                  {story.numComments} comments
                </Text>
              </HStack>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
