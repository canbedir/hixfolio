"use client";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Portfolio {
  id: string;
  name: string;
  createdAt: string;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    const storedPortfolios: Portfolio[] = JSON.parse(
      localStorage.getItem("portfolios") || "[]"
    );
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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      variant={{ x: 50 }}
      className="container mt-10 min-h-[900px] max-w-7xl shadow-lg shadow-primary"
    >
      <div className="flex items-center justify-center">
        <Link href="/" className="inline-block">
          <Image src="/logo.svg" alt="Logo" width={250} height={150} />
        </Link>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          onClick={handleCreatePortfolio}
          className="text-white w-full text-lg"
          size={"hix"}
        >
          Create Portfolio
        </Button>
      </div>

      {/* Portfolio List */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-center">Your Portfolios</h2>
        {portfolios.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
            {portfolios.map((portfolio) => (
              <li key={portfolio.id} className="mb-4">
                <Link href={`/create/${portfolio.id}`}>
                  <Button variant={"link"} className="font-medium text-lg">
                    {`${portfolio.name} - ${formatDate(portfolio.createdAt)}`}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 flex items-center justify-center">
            <Image
              src={"/illustrator/no-data.svg"}
              alt=""
              width={500}
              height={100}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DashboardPage;
