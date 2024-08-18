"use client";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CreatePage = () => {
  const router = useRouter();

  function handleCreatePortfolio() {
    const id = uuidv4();
    router.push(`/create/${id}`);
  }

  return (
    <div className="container mt-10 max-w-7xl">
      <div className="flex items-center justify-center">
      <Link href={"/"} className="inline-block">
        <Image src={"/logo.svg"} alt="" width={250} height={150} />
      </Link>
      </div>
      <div className="flex items-enter justify-between border-b py-2">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Button onClick={handleCreatePortfolio} className="text-white text-lg" size={"hix"}>Create Portfolio</Button>
      </div>
    </div>
  );
};
export default CreatePage;
