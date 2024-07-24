"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { OTPValidation } from "@/lib/validation";
import SubmitButton from "../../../../components/ui/SubmitButton";
import { useState } from "react";
import { z } from "zod";
import { FormFieldType } from "@/config/enums";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export function PatientForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof OTPValidation>>({
    resolver: zodResolver(OTPValidation),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof OTPValidation>) => {
    setIsLoading(true);

    try {
      // const newUser = await findUser(user);
      // if (newUser) {
      //   router.push(`/patients/${newUser.$id}/register`);
      // }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
  );
}

export default PatientForm;
