"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { UserLoginValidation } from "@/lib/validation";
import CustomFormField from "../../signup/components/FormField";
import SubmitButton from "../../../../components/ui/SubmitButton";
import { useState } from "react";
import router from "next/router";
import { z } from "zod";
import { FormFieldType } from "@/config/enums";
import { placeholders } from "@/config/placeholders";
import { routes } from "@/config/routes";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserLoginValidation>>({
    resolver: zodResolver(UserLoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserLoginValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        email: values.email,
        password: values.password,
      };

      const newUser = await checkUser(user);

      if (newUser) {
        router.push(routes.patients.default);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField
          name="email"
          label="Email"
          placeholder={placeholders.auth.email}
          type="text"
          fieldType={FormFieldType.INPUT}
          control={form.control}
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          name="password"
          label="Password"
          placeholder={placeholders.auth.pass}
          type="password"
          fieldType={FormFieldType.INPUT}
          control={form.control}
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
