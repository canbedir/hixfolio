"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DateSelector from "./DateSelector";
import LinkForm from "./LinkForm";
import SkillForm from "./SkillForm";
import ProjectForm from "./ProjectForm";
import { useParams } from "next/navigation";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface StepsProps {
  step: number;
  setStep: any | number;
}

const Steps = ({ step, setStep }: StepsProps) => {
  const shadowColor = `
  ${step === 1 && `shadow-lg shadow-primary`}
  ${step === 2 && `shadow-lg shadow-blue-600`}
  ${step === 3 && `shadow-lg shadow-orange-600`}
  ${step === 4 && `shadow-lg shadow-yellow-500`}
  ${step === 5 && `shadow-lg shadow-cyan-500`}
  ${step === 6 && `shadow-lg shadow-pink-500`}
  ${step === 7 && `shadow-lg shadow-rose-600`}
  ${step === 8 && `shadow-lg shadow-green-600`}
  `;

  const { id } = useParams();

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [color, setColor] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(`${id}_name`);
    const savedJobTitle = localStorage.getItem(`${id}_jobTitle`);
    const savedEmail = localStorage.getItem(`${id}_email`);
    const savedCity = localStorage.getItem(`${id}_city`);
    const savedPhone = localStorage.getItem(`${id}_phone`);
    const savedSchool = localStorage.getItem(`${id}_school`);
    const savedCompany = localStorage.getItem(`${id}_company`);
    const savedJobPosition = localStorage.getItem(`${id}_jobPosition`);
    const savedColor = localStorage.getItem(`${id}_color`);
    const savedProfilePic = localStorage.getItem(`${id}_profilePic`);

    if (savedName) setName(savedName);
    if (savedJobTitle) setJobTitle(savedJobTitle);
    if (savedEmail) setEmail(savedEmail);
    if (savedCity) setCity(savedCity);
    if (savedPhone) setPhone(savedPhone);
    if (savedSchool) setSchool(savedSchool);
    if (savedCompany) setCompany(savedCompany);
    if (savedJobPosition) setJobPosition(savedJobPosition);
    if (savedColor) setProfilePic(savedColor);
    if (savedProfilePic) setProfilePic(savedProfilePic);
  }, [id]);

  useEffect(() => {
    if (id) {
      localStorage.setItem(`${id}_name`, name);
      localStorage.setItem(`${id}_jobTitle`, jobTitle);
      localStorage.setItem(`${id}_email`, email);
      localStorage.setItem(`${id}_city`, city);
      localStorage.setItem(`${id}_phone`, phone);
      localStorage.setItem(`${id}_school`, school);
      localStorage.setItem(`${id}_company`, company);
      localStorage.setItem(`${id}_jobPosition`, jobPosition);
      localStorage.setItem(`${id}_color`, color);
      if (profilePic) {
        localStorage.setItem(`${id}_profilePic`, profilePic);
      }
    }
  }, [
    name,
    jobTitle,
    email,
    city,
    phone,
    school,
    company,
    jobPosition,
    color,
    profilePic,
    id,
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        if (id) {
          localStorage.setItem(`${id}_profilePic`, base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedProfilePic = localStorage.getItem(`${id}_profilePic`);
    if (savedProfilePic) {
      setProfilePic(savedProfilePic);
    }
  }, [id]);

  const colors = [
    { hex: "#DEDEDE", name: "Default" },
    { hex: "#7c3aed", name: "Violet" },
    { hex: "#2563eb", name: "Ocean" },
    { hex: "#ea580c", name: "Sunset" },
    { hex: "#eab308", name: "Gold" },
    { hex: "#06b6d4", name: "Seafoam" },
    { hex: "#ec4899", name: "Bubblegum" },
    { hex: "#dc2626", name: "Cherry" },
    { hex: "#16a34a", name: "Mint" },
  ];

  const generateHTML = () => {
    return `
      <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
        color: #747474;
      }
      
      a {
        text-decoration: none;
        color: #747474;
        
      }
        a:hover{
        color:#DEDEDE
      }

      body {
        min-height: 100vh;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: #202020;
        color: ${color};
        font-family: sans-serif;
      }

      .navbar {
        width: 100%;
        height: 60px;
        background-color: #2d2d2d;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .main-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 100px 250px;
      }

      .main-left {
        max-width: 450px;
      }

      .main-email {
        margin-top: 20px;
      }

      .email-btn {
        padding: 15px 30px;
        background-color: ${color};
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor:pointer;
      }

      .email-btn:hover{
      background-color: #DEDEDE;
      transition:0.3s;
      }

      .main-img {
        height: 400px;
        width: 400px;
        border-radius: 50%;
        background-color: #2d2d2d;
        text-align: center;
      }

      .main-img img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 50%;
      }

      .main-bottom {
        padding: 70px 250px;
      }

      .skills-container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 5px;
        min-height: 550px;
      }

      .skills-title {
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .skills-main {
        display: flex;
        align-items: center;
        justify-content: center;
        gap:60px; 
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="navbar">
        <h1>${name}'s Portfolio</h1>
      </div>
      <div class="main-container">
        <div class="main-left">
          <div class="main-title">
            <h1>Hi There</h1>
            <h1>I'am ${name}</h1>
            <h1>${jobTitle}</h1>
          </div>
          <div class="main-p">
            <p>I live in ${city}, I study/studied at ${school}.</p>
            <p>I work/worked in ${company}.</p>
            <p>My phone number: ${phone}</p>
          </div>
          <div class="main-email">
            <a href="mailto:${email}?subject=Subject&body=Message">
              <button class="email-btn">Contact me email</button>
            </a>
          </div>
        </div>
        <div class="main-right">
          <div class="main-img">
            <img src="${profilePic}" alt="${name}'s Profile Picture" />
          </div>
        </div>
      </div>
      <div class="main-bottom">
        <div class="skills-container">
          <h1 class="skills-title">Skills</h1>
          <div class="skills-main">
            ${skillForms
              .map(
                (skill) => `
            <p>${skill.name}</p>
            `
              )
              .join("")}
          </div>
          <h1 class="skills-title">Projects</h1>
          <div class="skills-main">
            ${projectForms
              .map(
                (project) => `
            <p><a href=${project.url}>${project.name} </a></p>
            `
              )
              .join("")}
          </div>
          <h1 class="skills-title">Social Media</h1>
          <div class="skills-main">
            ${linkForms
              .map(
                (link) => `
            <p><a href=${link.url}>${link.name}</a></p>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
    `;
  };

  const handleDownload = () => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio_${name}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
            <div className="flex items-center justify-between">
              <div className="w-1/2 flex flex-col gap-5">
                <div>
                  <Label htmlFor="name">Name & Surname</Label>
                  <Input
                    className={shadowColor}
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
                    className={shadowColor}
                    type="text"
                    id="JobTitle"
                    placeholder="Fullstack Developer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 justify-center">
                <Label htmlFor="profilePic">Profile Picture</Label>
                <img
                  className="h-[90px] w-[90px] object-cover rounded-full"
                  src={profilePic ? profilePic : "Resim Yükle"}
                  alt=""
                />
                <Input
                  className={shadowColor}
                  type="file"
                  id="profilePic"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div>
                  <Label htmlFor="Email">Email</Label>
                  <Input
                    className={shadowColor}
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
                    className={shadowColor}
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
                  className={shadowColor}
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
                className={shadowColor}
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
                    className={shadowColor}
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
                    className={shadowColor}
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
              {colors.map((stepColor) => (
                <HoverCard key={stepColor.hex}>
                  <HoverCardTrigger asChild>
                    <span
                      onClick={() => setColor(stepColor.hex)}
                      className={`rounded-full h-7 w-7 cursor-pointer transition-all duration-300 ease-in-out ${
                        color === stepColor.hex
                          ? "scale-[1.30]"
                          : ""
                      }`}
                      style={{ backgroundColor: stepColor.hex }}
                    ></span>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className={`w-[110px] h-[40px]`}
                    style={{ backgroundColor: stepColor.hex }}
                  >
                    <h1 className="w-full h-full flex items-center justify-center text-white">
                      {stepColor.name}
                    </h1>
                  </HoverCardContent>
                </HoverCard>
              ))}
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
          <div className="text-center h-full flex items-center justify-center flex-col gap-5">
            <h1 className="text-4xl font-bold">
              Your portfolio site is ready! 🥳
            </h1>
            <Button
              className="text-white bg-green-600 hover:bg-green-500"
              onClick={handleDownload}
            >
              Download Portfolio
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
