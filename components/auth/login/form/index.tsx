"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError, AxiosResponse } from "axios";

export const FormLogin = () => {
  const { toast } = useToast();
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await login(values)
      .then((response) => {
        console.log(response);
        toast({
          title: "Login Successful",
          description: "You are now logged in",
          variant: "default",
          duration: 2000,
        });
      })
      .catch((error: AxiosError) => {
        toast({
          title: "Invalid Credentials",
          description: "Please check your credentials and try again",
          variant: "destructive",
          duration: 2000,
        });
        return error.code;
      });
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full max-w-sm items-center gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" {...field} />
            </>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                {...field}
              />
            </>
          )}
        />
        <Button type="submit" className="text-white">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default FormLogin;
