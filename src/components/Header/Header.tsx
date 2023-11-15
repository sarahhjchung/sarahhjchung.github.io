import { Menu } from "@/components/Menu";
import { Logo } from "@/components/Logo";

interface Props {
  pageTitle?: string;
}

export function Header({ pageTitle }: Props) {
  return (
    <div className="container mt-6 md:mt-12 md:px-24 flex flex-row w-full justify-between">
      <Logo />
      {pageTitle && <h1>{pageTitle}</h1>}
      <Menu />
    </div>
  );
}
