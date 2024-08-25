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
  profilePic: any;
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '');
    
    if (input.length > 0) {
      const firstPart = input.substring(0, 6).match(/.{1,3}/g)?.join(' ') || '';
      
      const secondPart = input.substring(6).match(/.{1,2}/g)?.join(' ') || '';
      
      input = [firstPart, secondPart].filter(Boolean).join(' ');
    }
  
    setPhone(input);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-10 md:gap-5">
        <div className="flex items-center gap-4 justify-between">
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
        <div className="flex items-center justify-between gap-3">
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
              onChange={handlePhoneChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
