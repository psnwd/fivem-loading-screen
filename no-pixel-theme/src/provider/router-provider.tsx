import { VisibilityProvider } from "./visibility-provider";

export function Providers(props: { children: React.ReactNode }) {
  return <VisibilityProvider>{props.children}</VisibilityProvider>;
}
