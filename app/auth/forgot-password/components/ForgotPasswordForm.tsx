"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";
import CustomFormField from "../../signup/components/FormField";
import SubmitButton from "../../../../components/ui/SubmitButton";
import { useState } from "react";
import router from "next/router";
import { z } from "zod";
import { FormFieldType } from "@/config/enums";
import { placeholders } from "@/config/placeholders";
import { routes } from "@/config/routes";

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        email: values.email,
      };

      const newUser = await checkUser(user);

      if (newUser) {
        router.push(routes.auth.OTP);
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
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
