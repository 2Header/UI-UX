import { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "@/components/providers/ThemeProvider";

import { Header, DynamicHeader } from "./Header";
import * as Style from "./index.styled";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const context = useContext(ThemeContext);
  return (
    <Style.App>
      <Style.Content>
        <DynamicHeader
          switchTheme={() => context?.switchTheme()}
        ></DynamicHeader>
        {children}
      </Style.Content>
    </Style.App>
  );
};
