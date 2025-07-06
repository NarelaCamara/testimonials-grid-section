export interface IPerson {
  name: string;
  verified: boolean;
  description: string;
  title: string;
  avatar: string;
}

export const colors = [
  "bg-[#733FC8]",
  "bg-[#48556A]",
  "bg-[#FFFFFF]",
  "bg-[#FFFFFF]",
  "bg-[#19202D]",
] as const;
export type Color = (typeof colors)[number];
