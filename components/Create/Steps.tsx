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
import { userInfo } from "os";

interface StepsProps {
  step: number;
  setStep: any | number;
}

const Steps = ({ step, setStep }: StepsProps) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  const [jobPosition, setJobPosition] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem(`${id}_name`);
    const savedJobTitle = localStorage.getItem(`${id}_jobTitle`);
    const savedEmail = localStorage.getItem(`${id}_email`);
    const savedCity = localStorage.getItem(`${id}_city`);
    const savedPhone = localStorage.getItem(`${id}_phone`);
    const savedSchool = localStorage.getItem(`${id}_school`);
    const savedCompany = localStorage.getItem(`${id}_company`);
    const savedJobPosition = localStorage.getItem(`${id}_jobPosition`);

    if (savedName) setName(savedName);
    if (savedJobTitle) setJobTitle(savedJobTitle);
    if (savedEmail) setEmail(savedEmail);
    if (savedCity) setCity(savedCity);
    if (savedPhone) setPhone(savedPhone);
    if (savedSchool) setSchool(savedSchool);
    if (savedCompany) setCompany(savedCompany);
    if (savedJobPosition) setJobPosition(savedJobPosition);
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
    }
  }, [name, jobTitle, email, city, phone, school, company, jobPosition, id]);

  const generateHTML = () => {
    return `
      <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}'s Portfolio</title>
  <style>
    .container {
      height: 90vh;
      width: 98%;
      padding:20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      background-color: #ffffff;
      font-family:Arial,"sans-serif";
    }
    .card {
      position: absolute;
      width: 250px;
      height: 100px;
      display: flex;
      padding: 7px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      box-shadow: 0 10px 15px -3px #973bff;
      border-radius: 20px;
      transition: box-shadow 0.5s;
    }
    .card:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    }
    .top-left {
      top: 20px;
      left: 20px;
      transform: rotate(-20deg);
    }
    .top-right {
      top: 20px;
      right: 20px;
      transform: rotate(20deg);
    }
    .bottom-left {
      bottom: 20px;
      left: 20px;
      transform: rotate(20deg);
    }
    .bottom-right {
      bottom: 20px;
      right: 20px;
      transform: rotate(-20deg);
    }
    .profile-pic {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      box-shadow: 0px 10px 15px #973bff;
      overflow: hidden;
      transition: box-shadow 0.5s;

    }
    .profile-pic img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .profile-pic:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    }
    .content-card {
      padding: 20px;
      box-shadow: 0px 10px 15px #973bff;
      border-radius: 20px;
      transition: box-shadow 0.5s;
      min-width: 400px;
      text-align: center;
    }
    .content-card:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    }
    .skills-social {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card top-left">
      <h1>${name}</h1>
      <p>${city}</p>
      <p>studied at ${school}</p>
    </div>
    <div class="card top-right">
      <h1>${jobTitle}</h1>
      <p>working at ${company}</p>
    </div>
    <div class="card bottom-left">
      <h1>${email}</h1>
    </div>
    <div class="card bottom-right">
      <h1>${phone}</h1>
    </div>
    <div class="profile-pic">
      <img src="" alt="">
    </div>
    <div class="content-card skills-social">
      <div class="skills">
        <h1>Skills</h1>
        ${skillForms.map(skill => `<p>${skill.name}</p>`).join('')}
      </div>
      <div class="social-media">
        <h1>Social Media</h1>
        ${linkForms.map(link => `<p> <a href={link.url}>${link.name} </a> </p>`).join('')}
      </div>
    </div>
    <div class="content-card projects">
      <h1>Projects</h1>
      ${projectForms.map(project => `<p> <a href={project.url}>${project.name} </a> </p>`).join('')}
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
          <div className="text-center h-full flex items-center justify-center flex-col gap-5">
            <h1 className="text-4xl font-bold">
              Your portfolio site is ready! 🥳
            </h1>
            <Button className="text-white" onClick={handleDownload}>Download Portfolio</Button>
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
