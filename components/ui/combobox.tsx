"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const levels = [
  {
    value: "junior",
    label: "Junior",
  },
  {
    value: "mid",
    label: "Mid",
  },
  {
    value: "senior",
    label: "Senior",
  },
];

export function ComboboxDemo({
  selectedLevel,
  onLevelSelect,
}: {
  selectedLevel: string;
  onLevelSelect: (level: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedLevel || "");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? levels.find((level) => level.value === value)?.label
            : "Select Skill Level"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search level..." />
          <CommandList>
            <CommandEmpty>No level found.</CommandEmpty>
            <CommandGroup>
              {levels.map((level) => (
                <CommandItem
                  key={level.value}
                  value={level.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    setValue(newValue);
                    onLevelSelect(newValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === level.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {level.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
