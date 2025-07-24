import Image from "next/image";
import Swiping from "./Swiping";
import Example1 from "./example1";
import Drag from "./Drag";

export default function Home() {
  return (
    <>
    
    <h1>welcome to my dinner app</h1>
    <Swiping/>
    <Drag />
    <Example1 />
    </>
  );
}
