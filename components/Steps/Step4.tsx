import React from "react";
import { Button } from "../ui/button";
import LinkForm from "../Create/LinkForm";
interface Step4Props {
  linkForms: Array<{ id: number; name: string; url: string }>;
  addLinkForm: () => void;
  removeLinkForm: (id: number) => void;
  updateLinkForm: (id: number, newName: string, newUrl: string) => void;
}

const Step4: React.FC<Step4Props> = ({
  linkForms,
  addLinkForm,
  removeLinkForm,
  updateLinkForm,
}) => {
  return (
    <div className="p-5 max-h-[250px] overflow-y-auto">
      <div className="flex flex-col items-center gap-5">
        {linkForms.map((form) => (
          <LinkForm
            key={form.id}
            onRemove={() => removeLinkForm(form.id)}
            isLast={linkForms.length === 1}
            linkName={form.name}
            linkUrl={form.url}
            onEdit={(newName, newUrl) =>
              updateLinkForm(form.id, newName, newUrl)
            }
          />
        ))}
        <div className="flex justify-start w-full">
          <Button
            onClick={addLinkForm}
            className="w-[80px] bg-yellow-500 hover:bg-yellow-600"
          >
            New
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
