"use client";
import Image from "next/image";
export default function Home() {
  function clickElev() {
    console.log("first");
    fetch("http://localhost:3000/api/hello")
      .then((res) => res)
      .then((json) => console.log(json));
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold">11층 호출</h1>
      <Image
        onClick={clickElev}
        src="/downbutton.png"
        alt="elevator Logo"
        width={500}
        height={24}
        className="active:scale-95 hover:translate-y-1 "
      />
      <Image
        src="/elevator.png"
        alt="elevator Logo"
        width={600}
        height={24}
        className="absolute bottom-0"
      />
    </main>
  );
}
