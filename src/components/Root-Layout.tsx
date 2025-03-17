import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="h-auto mx-auto p-1">{children}</div>;
}
