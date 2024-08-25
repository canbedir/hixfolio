"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import CreateTopMenu from "./TopMenu";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";
import Step6 from "../Steps/Step6";
import Step7 from "../Steps/Step7";
import Step8 from "../Steps/Step8";
import GenerateHTML from "../Generate/GenerateHTML";

interface StepsProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Steps: React.FC<StepsProps> = ({ step, setStep }) => {
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
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const [linkForms, setLinkForms] = useState([{ id: Date.now(), name: "", url: "" }]);
  const [skillForms, setSkillForms] = useState([{ id: Date.now(), name: "", url: "" }]);
  const [projectForms, setProjectForms] = useState([{ id: Date.now(), name: "", url: "" }]);

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
    if (savedColor) setColor(savedColor);
    if (savedProfilePic) {
      const file = new File([savedProfilePic], 'profile.jpg', { type: 'image/jpeg' });
      setProfilePic(file);
    }
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
        localStorage.setItem(`${id}_profilePic`, profilePic.name);
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
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const generateHTML = () => {
    return (
      <GenerateHTML
        name={name}
        jobTitle={jobTitle}
        email={email}
        city={city}
        phone={phone}
        school={school}
        company={company}
        color={color}
        profilePic={profilePic ? profilePic.name : ''}
        skillForms={skillForms}
        projectForms={projectForms}
        linkForms={linkForms}
      />
    );
  };

  const handleDownload = () => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent.toString()], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hixfolio_${name}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === 1) {
      setIsNextDisabled(
        !name || !jobTitle || !profilePic || !email || !city || !phone
      );
    }

    if (step === 2) {
      setIsNextDisabled(!school);
    }

    if (step === 3) {
      setIsNextDisabled(!company || !jobPosition);
    }

    if (step === 4) {
      setIsNextDisabled(linkForms.length === 0);
    }

    if (step === 5) {
      setIsNextDisabled(skillForms.length === 0);
    }

    if (step === 6) {
      setIsNextDisabled(projectForms.length === 0);
    }

    if (step === 7) {
      setIsNextDisabled(!color);
    }
  }, [
    step,
    name,
    jobTitle,
    profilePic,
    email,
    city,
    phone,
    school,
    company,
    jobPosition,
    linkForms,
    skillForms,
    projectForms,
    color,
  ]);

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

  const colors = [
    { hex: "#DEDEDE", name: "Default" },
    { hex: "#7c3aed", name: "Purple" },
    { hex: "#2563eb", name: "Ocean" },
    { hex: "#ea580c", name: "Sunset" },
    { hex: "#eab308", name: "Gold" },
    { hex: "#06b6d4", name: "Sea Foam" },
    { hex: "#ec4899", name: "Bubblegum" },
    { hex: "#dc2626", name: "Cherry" },
    { hex: "#16a34a", name: "Mint" },
  ];

  return (
    <div>
      <CreateTopMenu isNextDisabled={isNextDisabled} setStep={setStep} step={step} />

      {step === 1 && (
        <Step1
          name={name}
          setName={setName}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          email={email}
          setEmail={setEmail}
          city={city}
          setCity={setCity}
          phone={phone}
          setPhone={setPhone}
          profilePic={profilePic}
          handleImageUpload={handleImageUpload}
          shadowColor={shadowColor}
        />
      )}

      {step === 2 && (
        <Step2
          school={school}
          setSchool={setSchool}
          shadowColor={shadowColor}
        />
      )}

      {step === 3 && (
        <Step3
          company={company}
          setCompany={setCompany}
          jobPosition={jobPosition}
          setJobPosition={setJobPosition}
          shadowColor={shadowColor}
        />
      )}

      {step === 4 && (
        <Step4
          linkForms={linkForms}
          addLinkForm={addLinkForm}
          removeLinkForm={removeLinkForm}
          updateLinkForm={updateLinkForm}
        />
      )}

      {step === 5 && (
        <Step5
          skillForms={skillForms}
          addSkillForm={addSkillForm}
          removeSkillForm={removeSkillForm}
          updateSkillForm={updateSkillForm}
        />
      )}

      {step === 6 && (
        <Step6
          projectForms={projectForms}
          addProjectForm={addProjectForm}
          removeProjectForm={removeProjectForm}
          updateProjectForm={updateProjectForm}
        />
      )}

      {step === 7 && (
        <Step7
          color={color}
          setColor={setColor}
          colors={colors}
        />
      )}

      {step === 8 && (
        <Step8 handleDownload={handleDownload} />
      )}

      {step !== 8 && (
        <>
          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className="text-lg"
              size="lg"
              variant="outline"
              disabled={step === 1}
            >
              Geri
            </Button>
          </div>
          <div className="absolute bottom-3 right-5">
            <Button
              onClick={handleNext}
              className="text-white text-lg"
              size="lg"
              disabled={isNextDisabled}
            >
              İleri
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Steps;