import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Trash, Edit3 } from "lucide-react";
import { Button } from "../ui/button";
import { ComboboxDemo } from "../ui/combobox";

const SkillForm = ({
  onRemove,
  isLast,
  linkName,
  linkUrl,
  onEdit,
}: {
  onRemove: () => void;
  isLast: boolean;
  linkName: string;
  linkUrl: string;
  onEdit: (newName: string, newUrl: string) => void;
}) => {
  const [isSkillEditing, setIsSkillEditing] = useState(true);
  const [name, setName] = useState(linkName);
  const [url, setUrl] = useState(linkUrl);

  const handleSave = () => {
    setIsSkillEditing(false);
    onEdit(name, url);
  };

  return isSkillEditing ? (
    <div className="w-full flex flex-col gap-1">
      <Label htmlFor="skillName" className="mb-1">
        Skill & Language Name
      </Label>
      <div className="flex w-full flex-col sm:flex-row gap-5">
        <Input
          className="shadow-lg w-full shadow-cyan-500"
          type="text"
          id="skillName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex items-center gap-5">
          <ComboboxDemo
            selectedLevel={url}
            onLevelSelect={(newLevel) => setUrl(newLevel)}
          />
          <Button variant={"ghost"} onClick={handleSave}>
            Save
          </Button>
          <Trash
            onClick={isLast ? undefined : onRemove}
            className={`cursor-pointer ${
              isLast ? "text-gray-400 cursor-not-allowed" : "text-red-600"
            }`}
            size={30}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between w-full gap-5">
      <div className="w-full">
        <p className="text-lg">{name}</p>
        <p className="text-sm text-gray-600">{url}</p>
      </div>
      <div className="flex items-center gap-5">
        <Edit3
          onClick={() => setIsSkillEditing(true)}
          className="cursor-pointer text-blue-600"
          size={30}
        />
        <Trash
          onClick={onRemove}
          className="cursor-pointer text-red-600"
          size={30}
        />
      </div>
    </div>
  );
};

export default SkillForm;
