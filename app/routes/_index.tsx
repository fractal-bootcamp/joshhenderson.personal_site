import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Josh's Site" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => {
  return(<header className="flex space-x-4 bg-orange-600">
        <button className="hover:bg-cyan-600"><a href="./about">About</a></button>
        <button className="hover:bg-cyan-600"><a href="https://github.com/Hendersonajardimj">Github</a></button>
        <button className="hover:bg-cyan-600"><a href="./about">Portfolio</a></button>
  </header>)
  };



export default function Index() {
  return (
    <div className="">
    <Header/>
    </div>
  );
};
