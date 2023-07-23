"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [visible, setVisible] = useState(false);

  function clickElev() {
    console.log("first");

    fetch("http://localhost:3000/api/hello")
      .then((r) => r.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 10000);
        } else {
          alert("점검이 필요합니다.");
        }
      });
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
      <span
        className={
          "relative flex h-3 w-3 animate-bounce " + (visible ? "" : "hidden")
        }
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
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
