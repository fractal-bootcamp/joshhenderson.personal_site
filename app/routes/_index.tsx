import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return(<header>
    <nav>
      <ul>
        <li><a href="./about">about</a></li>
        <li><a href="https://github.com/Hendersonajardimj">github</a></li>
        <li><a href="./about">Portfolio</a></li>
      </ul>
    </nav>
  </header>)
  };



export default function Index() {
  return (
    <Header/>
  );
};
