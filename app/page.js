"use client";

import LeftNavbar from "@/components/left-navbar";
import RightNavbar from "@/components/right-navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState(null);
  return (
    <Card className="">
      <CardHeader className="text-center pb-0 text-2xl">
        <CardTitle>Name Details</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center w-[800px]">
        <LeftNavbar setResponse={setResponse} />
        <RightNavbar response={response} />
      </CardContent>
    </Card>
  );
}
