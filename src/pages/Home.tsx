import { useEffect, useState } from "react";

import { Box, Flex, HStack, Text, View, useColorMode } from "native-base";

import { Switch } from "../components/Switch";
import { SettingsProps, getSettings } from "../services/storage/local-storage";

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { toggleColorMode } = useColorMode();

  function handleThemeColor() {
    setIsDarkMode((prev) => !prev);
    toggleColorMode();
  }

  useEffect(() => {
    async function loadSettings() {
      await getSettings().then(async (response: SettingsProps) => {
        setIsDarkMode(() => (response.theme === "dark" ? true : false));
      });
    }
    loadSettings();
  }, []);

  return (
    <View
      _dark={{
        bg: "dark.50",
      }}
      _light={{
        bg: "white",
      }}
    >
      <Flex
        h="100%"
        direction="column"
        alignItems="center"
        p={8}
        justifyContent="center"
      >
        <HStack>
          <Text mt={3} fontSize={15}>
            Tema Dark?
          </Text>
          <Switch active={isDarkMode} onChange={handleThemeColor} />
        </HStack>

        <Box
          p={10}
          bg={["primary.500", "primary.600"]}
          shadow={2}
          rounded="md"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "white",
          }}
        >
          Home
        </Box>
      </Flex>
    </View>
  );
}
