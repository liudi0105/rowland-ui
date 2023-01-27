import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    compact: boolean;
    borderRadius: string;
    colors: {
      primary: string;
      hover: string;
      active: string;
      link: string;
    };
  }
}
