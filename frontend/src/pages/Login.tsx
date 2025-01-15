import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  loginWithEmailSchema,
  loginWithUsernameSchema,
} from "@/validations/form.validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
function Login() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Tabs defaultValue="username" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="username">Username</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>
        <TabsContent value="username">
          <LoginWithUsername />
        </TabsContent>
        <TabsContent value="email">
          <LoginWithEmail />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Login;
function LoginWithEmail() {
  const form = useForm<z.infer<typeof loginWithEmailSchema>>({
    resolver: zodResolver(loginWithEmailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof loginWithEmailSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login with email</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. example@example.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your email address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-gray-500 font-bold">
                Don't have an Account ?
              </span>{" "}
              <Link
                className="text-primary font-bold hover:underline"
                to={"/register"}
              >
                Register
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
function LoginWithUsername() {
  const form = useForm<z.infer<typeof loginWithUsernameSchema>>({
    resolver: zodResolver(loginWithUsernameSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof loginWithUsernameSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login with username</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. lewis" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-gray-500 font-bold">
                Don't have an Account ?
              </span>{" "}
              <Link
                className="text-primary font-bold hover:underline"
                to={"/register"}
              >
                Register
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
