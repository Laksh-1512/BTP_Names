"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
});

const LeftNavbar = ({ setResponse }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://v2.namsor.com/NamSorAPIv2/api2/json/origin/${values.firstName}/${values.lastName}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "11a30ccdcb68b71e11f65cca45173cec",
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResponse(data); // Extract JSON data from response
      } else {
        toast.error("The request failed!");
      }
      form.reset();
    } catch (error) {
      toast.error("The request failed with status:", response.status, response);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-1/2 p-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input disabled={isLoading} placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full " disabled={isLoading} type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default LeftNavbar;
