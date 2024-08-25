import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface Step1Props {
  name: string;
  setName: (name: string) => void;
  jobTitle: string;
  setJobTitle: (jobTitle: string) => void;
  email: string;
  setEmail: (email: string) => void;
  city: string;
  setCity: (city: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  profilePic: any
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shadowColor: string;
}

const Step1: React.FC<Step1Props> = ({
  name,
  setName,
  jobTitle,
  setJobTitle,
  email,
  setEmail,
  city,
  setCity,
  phone,
  setPhone,
  profilePic,
  handleImageUpload,
  shadowColor,
}) => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-10 md:gap-5">
        {/* Name, job title and profile picture section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Enter your job title"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <Label htmlFor="profilePic">Profile Picture</Label>
                <input
                  id="profilePic"
                  type="file"
                  onChange={handleImageUpload}
                  accept=".jpg, .jpeg, .png"
                />
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <Label htmlFor="profilePic">Profile Picture</Label>
                <img
                  className="h-[80px] w-[80px] object-cover rounded-full"
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
          </div>
        </div>
        {/* Email, city and phone section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your city"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
