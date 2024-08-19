"use client";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Portfolio {
  id: string;
  name: string;
  createdAt: string;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    const storedPortfolios: Portfolio[] =
      JSON.parse(localStorage.getItem("portfolios") || "[]");
    setPortfolios(storedPortfolios);
  }, []);

  const handleCreatePortfolio = (): void => {
    const id = uuidv4();
    const nextPortfolioNumber = portfolios.length + 1;
    const name = `Portfolio ${nextPortfolioNumber}`;

    const newPortfolio: Portfolio = {
      id,
      name,
      createdAt: new Date().toISOString(),
    };

    localStorage.removeItem("portfolioData");
    localStorage.removeItem("formData");

    const updatedPortfolios = [...portfolios, newPortfolio];
    setPortfolios(updatedPortfolios);
    localStorage.setItem("portfolios", JSON.stringify(updatedPortfolios));

    router.push(`/create/${id}`);
  };

  return (
    <div className="container mt-10 max-w-7xl">
      <div className="flex items-center justify-center">
        <Link href="/" className="inline-block">
          <Image src="/logo.svg" alt="Logo" width={250} height={150} />
        </Link>
      </div>
      <div className="flex items-center justify-between border-b py-2">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Button
          onClick={handleCreatePortfolio}
          className="text-white text-lg"
          size={"hix"}
        >
          Create Portfolio
        </Button>
      </div>

      {/* Portfolio List */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Your Portfolios</h2>
        {portfolios.length > 0 ? (
          <ul className="mt-4">
            {portfolios.map((portfolio) => (
              <li key={portfolio.id} className="mb-4">
                <Link href={`/create/${portfolio.id}`}>{portfolio.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-lg">No portfolios created yet.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
