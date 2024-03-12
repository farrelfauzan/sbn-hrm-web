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
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      form.handleSubmit(onSubmit)();
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await login(values)
      .then((response) => {
        console.log(response);
        toast({
          title: "Login Successful",
          description: "You are now logged in",
          variant: "default",
          duration: 2000,
          className:
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
        });
        router.replace("/");
      })
      .catch((error: AxiosError | any) => {
        toast({
          title: error.response?.data.message,
          description: "Please check your credentials and try again",
          variant: "destructive",
          duration: 2000,
          className:
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4",
        });
        throw error;
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
                onKeyDown={handleKeyDown}
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
