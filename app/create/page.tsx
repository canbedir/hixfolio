"use client";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Edit2, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Portfolio {
  id: string;
  name: string;
  createdAt: string;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [editing, setEditing] = useState(false);
  const [editedPortfolios, setEditedPortfolios] = useState<Map<string, string>>(
    new Map()
  );

  useEffect(() => {
    const storedPortfolios: Portfolio[] = JSON.parse(
      localStorage.getItem("portfolios") || "[]"
    );
    setPortfolios(storedPortfolios);
  }, []);

  const handleCreatePortfolio = (): void => {
    const id = uuidv4();

    const lastPortfolioNumber = portfolios.length
      ? parseInt(portfolios[portfolios.length - 1].name.split(" ")[1])
      : 0;

    const nextPortfolioNumber = lastPortfolioNumber + 1;
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

  const handleDeletePortfolio = (id: string) => {
    const updatedPortfolios = portfolios.filter(
      (portfolio) => portfolio.id !== id
    );

    setPortfolios(updatedPortfolios);
    localStorage.setItem("portfolios", JSON.stringify(updatedPortfolios));
  };

  const handleEdit = () => {
    setEditing(true);
    const portfolioMap = new Map();
    portfolios.forEach((portfolio) => {
      portfolioMap.set(portfolio.id, portfolio.name);
    });
    setEditedPortfolios(portfolioMap);
  };

  const handleSave = () => {
    const updatedPortfolios = portfolios.map((portfolio) => ({
      ...portfolio,
      name: editedPortfolios.get(portfolio.id) || portfolio.name,
    }));

    setPortfolios(updatedPortfolios);
    localStorage.setItem("portfolios", JSON.stringify(updatedPortfolios));
    setEditing(false);
  };

  const handleNameChange = (id: string, newName: string) => {
    setEditedPortfolios((prev) => new Map(prev).set(id, newName));
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

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      setPortfolios((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        localStorage.setItem("portfolios", JSON.stringify(newItems));
        return newItems;
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      variant={{ x: 50 }}
      className="container mt-10 min-h-[900px] max-w-7xl shadow-lg shadow-primary relative"
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
          editing ? (
            // Render portfolio list without drag-and-drop when editing
            <ul className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
              {portfolios.map((portfolio) => (
                <SortableItem
                  key={portfolio.id}
                  id={portfolio.id}
                  portfolio={portfolio}
                  editing={editing}
                  editedPortfolios={editedPortfolios}
                  handleNameChange={handleNameChange}
                  handleDeletePortfolio={handleDeletePortfolio}
                  formatDate={formatDate}
                />
              ))}
            </ul>
          ) : (
            // Render portfolio list with drag-and-drop when not editing
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={portfolios}
                strategy={rectSortingStrategy}
              >
                <ul className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
                  {portfolios.map((portfolio) => (
                    <SortableItem
                      key={portfolio.id}
                      id={portfolio.id}
                      portfolio={portfolio}
                      editing={editing}
                      editedPortfolios={editedPortfolios}
                      handleNameChange={handleNameChange}
                      handleDeletePortfolio={handleDeletePortfolio}
                      formatDate={formatDate}
                    />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          )
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
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {editing ? (
          <Button
            onClick={handleSave}
            variant={"secondary"}
            className="text-black dark:text-white bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80"
          >
            <Save size={24} />
          </Button>
        ) : (
          <Button
            onClick={handleEdit}
            variant={"secondary"}
            className="text-black dark:text-white bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-white/80"
          >
            <Edit2 size={24} />
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default DashboardPage;

interface SortableItemProps {
  id: string;
  portfolio: Portfolio;
  editing: boolean;
  editedPortfolios: Map<string, string>;
  handleNameChange: (id: string, newName: string) => void;
  handleDeletePortfolio: (id: string) => void;
  formatDate: (dateString: string) => string;
}

const SortableItem: React.FC<SortableItemProps> = ({
  id,
  portfolio,
  editing,
  editedPortfolios,
  handleNameChange,
  handleDeletePortfolio,
  formatDate,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    boxShadow: isDragging
      ? "0px 4px 15px rgba(0, 100, 255, 3)"
      : "0px 3px 10px rgba(40, 40, 155, 1)",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
    >
      {editing ? (
        <Input
          type="text"
          value={editedPortfolios.get(portfolio.id) || ""}
          onChange={(e) => handleNameChange(portfolio.id, e.target.value)}
          className="shadow-lg shadow-blue-900"
        />
      ) : (
        <Link href={`/create/${portfolio.id}`}>
          <h1 className="dark:text-white">{`${portfolio.name} - ${formatDate(
            portfolio.createdAt
          )}`}</h1>
        </Link>
      )}
      {editing && (
        <Trash2
          onClick={() => handleDeletePortfolio(portfolio.id)}
          size={25}
          className="cursor-pointer text-red-600 hover:text-red-900 absolute top-0 right-2"
        />
      )}
    </li>
  );
};
