import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Settings Service
 *
 * Armazena os valores da tela de Settings no Storage
 *
 */
export interface SettingsProps {
  theme: string;
}

export const setSettings = async (settings: SettingsProps) => {
  const APP_NAME = "my_app";

  try {
    await AsyncStorage.setItem(
      `@${APP_NAME}:setting`,
      JSON.stringify(settings)
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSettings = async () => {
  const APP_NAME = "my_app";

  return new Promise<SettingsProps>((resolve, reject) => {
    AsyncStorage.getItem(`@${APP_NAME}:setting`)
      .then((response) => {
        if (response !== null) {
          resolve(JSON.parse(response));
        } else {
          resolve({} as SettingsProps);
        }
      })
      .catch((err) => reject(err));
  });
};
