import React from "react";
import { Button } from "../ui/button";
import ProjectForm from "../Create/ProjectForm";

interface Step6Props {
  projectForms: Array<{ id: number; name: string; url: string }>;
  addProjectForm: () => void;
  removeProjectForm: (id: number) => void;
  updateProjectForm: (id: number, newName: string, newUrl: string) => void;
}

const Step6: React.FC<Step6Props> = ({
  projectForms,
  addProjectForm,
  removeProjectForm,
  updateProjectForm,
}) => {
  return (
    <div className="p-5 max-h-[250px] overflow-y-auto">
      <div className="flex flex-col items-center gap-5">
        {projectForms.map((form) => (
          <ProjectForm
            key={form.id}
            linkName={form.name}
            linkUrl={form.url}
            onRemove={() => removeProjectForm(form.id)}
            onEdit={(newName, newUrl) => updateProjectForm(form.id, newName, newUrl)}
            isLast={projectForms.length === 1}
          />
        ))}
        <div className="flex justify-start w-full">
          <Button
            onClick={addProjectForm}
            className="w-[80px] bg-pink-500 hover:bg-pink-600"
          >
            New
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step6;
