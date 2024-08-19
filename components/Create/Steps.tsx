"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DateSelector from "./DateSelector";
import LinkForm from "./LinkForm";
import SkillForm from "./SkillForm";
import ProjectForm from "./ProjectForm";

interface StepsProps {
  step: number;
  setStep: any | number;
}

const Steps = ({ step, setStep }: StepsProps) => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  const [jobPosition, setJobPosition] = useState("");

  const handleDownload = () => {
    const userInfo = {
      name: name,
      jobTitle: jobTitle,
      email: email,
      city: city,
      phone: phone,
      school: school,
      company: company,
      jobPosition: jobPosition,
      links: linkForms,
      skills: skillForms,
      projects: projectForms,
    };

    // JSON formatına çevirme
    const jsonContent = JSON.stringify(userInfo, null, 2);

    // Blob oluşturma
    const blob = new Blob([jsonContent], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio_data.json"; // Dosya ismi
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Belleği temizleme
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const [linkForms, setLinkForms] = useState([
    { id: Date.now(), name: "", url: "" },
  ]);

  const addLinkForm = () => {
    setLinkForms([...linkForms, { id: Date.now(), name: "", url: "" }]);
  };

  const removeLinkForm = (id: number) => {
    setLinkForms(linkForms.filter((form) => form.id !== id));
  };

  const updateLinkForm = (id: number, newName: string, newUrl: string) => {
    setLinkForms(
      linkForms.map((form) =>
        form.id === id ? { ...form, name: newName, url: newUrl } : form
      )
    );
  };

  const [skillForms, setSkillForms] = useState([
    { id: Date.now(), name: "", url: "" },
  ]);

  const addSkillForm = () => {
    setSkillForms([...skillForms, { id: Date.now(), name: "", url: "" }]);
  };

  const removeSkillForm = (id: number) => {
    setSkillForms(skillForms.filter((form) => form.id !== id));
  };

  const updateSkillForm = (id: number, newName: string, newUrl: string) => {
    setSkillForms(
      skillForms.map((form) =>
        form.id === id ? { ...form, name: newName, url: newUrl } : form
      )
    );
  };

  const [projectForms, setProjectForms] = useState([
    { id: Date.now(), name: "", url: "" },
  ]);

  const addProjectForm = () => {
    setProjectForms([...projectForms, { id: Date.now(), name: "", url: "" }]);
  };

  const removeProjectForm = (id: number) => {
    setProjectForms(projectForms.filter((form) => form.id !== id));
  };

  const updateProjectForm = (id: number, newName: string, newUrl: string) => {
    setProjectForms(
      projectForms.map((form) =>
        form.id === id ? { ...form, name: newName, url: newUrl } : form
      )
    );
  };

  return (
    <div>
      {/* Step 1 */}

      {step === 1 && (
        <div className="p-5">
          <div className="flex flex-col gap-5">
            <div className="w-1/2 flex flex-col gap-5">
              <div>
                <Label htmlFor="name">Name & Surname</Label>
                <Input
                  className="shadow-lg shadow-primary"
                  type="text"
                  id="name"
                  placeholder="Irmak Balota"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="JobTitle">Job Title</Label>
                <Input
                  className="shadow-lg shadow-primary"
                  type="text"
                  id="JobTitle"
                  placeholder="Fullstack Developer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div>
                  <Label htmlFor="Email">Email</Label>
                  <Input
                    className="shadow-lg shadow-primary"
                    type="text"
                    id="Email"
                    placeholder="hix@dev.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="City">City</Label>
                  <Input
                    className="shadow-lg shadow-primary"
                    type="text"
                    id="City"
                    placeholder="Istanbul"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <Label htmlFor="Phone">Phone</Label>
                <Input
                  className="shadow-lg shadow-primary"
                  type="text"
                  id="Phone"
                  placeholder="000 000 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="absolute bottom-3 right-5">
              <Button
                onClick={handleNext}
                className="text-white text-lg"
                size={"lg"}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2 */}

      {step === 2 && (
        <div className="p-5">
          <div className="flex flex-col gap-10">
            <div className="w-1/2">
              <Label htmlFor="school">School Name</Label>
              <Input
                className="shadow-lg shadow-primary"
                type="text"
                id="school"
                placeholder="Koç University"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>

            <div>
              <DateSelector />
            </div>
          </div>

          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className=" text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Back
            </Button>
          </div>
          <div className="absolute bottom-3 right-5">
            <Button
              onClick={handleNext}
              className="text-white text-lg"
              size={"lg"}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 */}

      {step === 3 && (
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex flex-col w-full gap-10">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    className="shadow-lg shadow-primary"
                    type="text"
                    id="company"
                    placeholder="Hix Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="jobposition">Job Position</Label>
                  <Input
                    className="shadow-lg shadow-primary"
                    type="text"
                    id="jobposition"
                    placeholder="Backend Developer"
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <DateSelector />
              </div>
            </div>

            <div className="absolute bottom-3 left-5">
              <Button
                onClick={handleBack}
                className=" text-lg"
                size={"lg"}
                variant={"outline"}
              >
                Back
              </Button>
            </div>
            <div className="absolute bottom-3 right-5">
              <Button
                onClick={handleNext}
                className="text-white text-lg"
                size={"lg"}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4 */}

      {step === 4 && (
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
                className="w-[80px]"
                variant={"active"}
              >
                New
              </Button>
            </div>
          </div>
          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className="text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Back
            </Button>
          </div>
          <div className="absolute bottom-3 right-5">
            <Button
              onClick={handleNext}
              className="text-white text-lg"
              size={"lg"}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Step 5 */}

      {step === 5 && (
        <div className="p-5 max-h-[250px] overflow-y-auto">
          <div className="flex flex-col items-center gap-5">
            {skillForms.map((form) => (
              <SkillForm
                key={form.id}
                onRemove={() => removeSkillForm(form.id)}
                isLast={skillForms.length === 1}
                linkName={form.name}
                linkUrl={form.url}
                onEdit={(newName, newUrl) =>
                  updateSkillForm(form.id, newName, newUrl)
                }
              />
            ))}
            <div className="flex justify-start w-full">
              <Button
                onClick={addSkillForm}
                className="w-[80px]"
                variant={"active"}
              >
                New
              </Button>
            </div>
          </div>
          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className="text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Back
            </Button>
          </div>
          <div className="absolute bottom-3 right-5">
            <Button
              onClick={handleNext}
              className="text-white text-lg"
              size={"lg"}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Step 6 */}

      {step === 6 && (
        <div className="p-5 max-h-[250px] overflow-y-auto">
          <div className="flex flex-col items-center gap-5">
            {projectForms.map((form) => (
              <ProjectForm
                key={form.id}
                onRemove={() => removeProjectForm(form.id)}
                isLast={projectForms.length === 1}
                linkName={form.name}
                linkUrl={form.url}
                onEdit={(newName, newUrl) =>
                  updateProjectForm(form.id, newName, newUrl)
                }
              />
            ))}
            <div className="flex justify-start w-full">
              <Button
                onClick={addProjectForm}
                className="w-[80px]"
                variant={"active"}
              >
                New
              </Button>
            </div>
          </div>
          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className="text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Back
            </Button>
          </div>
          <div className="absolute bottom-3 right-5">
            <Button
              onClick={handleNext}
              className="text-white text-lg"
              size={"lg"}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Step 7 */}

      {step === 7 && (
        <div className="p-5 h-[335px] flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-4xl font-bold">The Last Step 🎉</h1>
            <p className="text-lg font-medium">
              Choose a colour for your Portfolio site!
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="rounded-full bg-red-600 h-7 w-7 cursor-pointer"></span>
              <span className="rounded-full bg-green-600 h-7 w-7 cursor-pointer"></span>
              <span className="rounded-full bg-primary h-7 w-7 cursor-pointer"></span>
              <span className="rounded-full bg-pink-500 h-7 w-7 cursor-pointer"></span>
              <span className="rounded-full bg-blue-500 h-7 w-7 cursor-pointer"></span>
              <span className="rounded-full bg-orange-500 h-7 w-7 cursor-pointer"></span>
              <span className="rounded-full bg-cyan-700 h-7 w-7 cursor-pointer"></span>
            </div>
            <div className="absolute bottom-3 left-5">
              <Button
                onClick={handleBack}
                className="text-lg"
                size={"lg"}
                variant={"outline"}
              >
                Back
              </Button>
            </div>
            <div className="absolute bottom-3 right-5">
              <Button
                onClick={handleNext}
                className="text-white text-lg"
                size={"lg"}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Step 8 */}

      {step === 8 && (
        <div className="p-5 h-[335px]">
          <div className="text-center h-full flex items-center justify-center flex-col">
            <h1 className="text-4xl font-bold">Your portfolio site is ready! 🥳</h1>
            <Button
              onClick={handleDownload}
              className="mt-5 text-white text-lg"
              size={"lg"}
            >
              Download
            </Button>
          </div>
          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className="text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
