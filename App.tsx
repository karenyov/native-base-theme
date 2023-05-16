import {
  NativeBaseProvider,
  StatusBar,
  StorageManager,
  ColorMode,
  useColorMode,
} from "native-base";

import { Home } from "./src/pages/Home";
import { THEME } from "./src/utils/styles/theme";
import {
  SettingsProps,
  getSettings,
  setSettings,
} from "./src/services/storage/local-storage";

export default function App() {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        const val = await getSettings();
        const data = val as SettingsProps;
        return data.theme === "dark" ? "dark" : "light";
      } catch (e) {
        return "light";
      }
    },
    set: async (value: ColorMode) => {
      try {
        const storage = await getSettings();
        const data = storage as SettingsProps;
        data.theme = value === "dark" ? "dark" : "light";

        await setSettings(data);
      } catch (e) {
        console.log(e);
      }
    },
  };

  return (
    <NativeBaseProvider theme={THEME} colorModeManager={colorModeManager}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </NativeBaseProvider>
  );
}
