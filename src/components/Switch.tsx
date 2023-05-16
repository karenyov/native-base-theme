import { useTheme } from "native-base";
import { Switch as SwitchCustom, SwitchProps } from "react-native";

interface Props extends SwitchProps {
  active?: boolean;
}

export function Switch({ active = false, ...rest }: Props) {
  const theme = useTheme();

  return (
    <SwitchCustom
      trackColor={{
        true: theme.colors.primary["500"],
        false: theme.colors.gray["400"],
      }}
      value={active}
      thumbColor={theme.colors.gray["50"]}
      {...rest}
    />
  );
}
