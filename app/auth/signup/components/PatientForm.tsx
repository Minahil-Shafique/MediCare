"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";
import CustomFormField from "./FormField";
import SubmitButton from "../../../../components/ui/SubmitButton";
import { useState } from "react";
import router from "next/router";
import { z } from "zod";
import { FormFieldType } from "@/config/enums";
import { routes } from "@/config/routes";

export function PatientForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) router.push(routes.patients.register(newUser.$id));
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <CustomFormField
          name="name"
          label="Full Name"
          type="text"
          placeholder="Enter your Name"
          fieldType={FormFieldType.INPUT}
          control={form.control}
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          name="email"
          label="Email"
          placeholder="Enter your Email"
          fieldType={FormFieldType.INPUT}
          control={form.control}
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />

        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
}

export default PatientForm;
