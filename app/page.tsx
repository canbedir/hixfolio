import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10">
      <div>
        <div>
          <span> <Image src={"/logo.svg"} alt="" width={250} height={150}/> </span>
        </div>
      </div>
    </div>
  );
}
