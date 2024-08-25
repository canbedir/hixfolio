import React from "react";
import { Button } from "../ui/button";
import SkillForm from "../Create/SkillForm";
interface Step5Props {
  skillForms: Array<{ id: number; name: string; url: string }>;
  addSkillForm: () => void;
  removeSkillForm: (id: number) => void;
  updateSkillForm: (id: number, newName: string, newUrl: string) => void;
}

const Step5: React.FC<Step5Props> = ({
  skillForms,
  addSkillForm,
  removeSkillForm,
  updateSkillForm,
}) => {
  return (
    <div className="p-5 max-h-[250px] overflow-y-auto">
      <div className="flex flex-col items-center gap-5">
        {skillForms.map((form) => (
          <SkillForm
            key={form.id}
            linkName={form.name}
            linkUrl={form.url}
            onRemove={() => removeSkillForm(form.id)}
            onEdit={(newName, newUrl) => updateSkillForm(form.id, newName, newUrl)}
            isLast={form.id === skillForms[skillForms.length - 1].id}
          />
        ))}
        <div className="flex justify-start w-full">
          <Button
            onClick={addSkillForm}
            className="w-[80px] bg-cyan-600 hover:bg-cyan-700"
          >
            New
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
