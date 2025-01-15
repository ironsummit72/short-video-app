import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Register() {
  const form = useForm();
  function onSubmit() {}
  return (
    <main className="flex w-screen items-center h-screen">
      <div className="left md:w-1/2 hidden md:flex flex-col items-start gap-10 m-10 p-10 ">
        <h1 className="text-5xl font-bold w-[80%] leading-snug">
          Unleash Your Creativity, One Short{" "}
          <span className="text-primary">Video</span> at a Time!
        </h1>
        <img src="/online_media.svg" className="h-72" alt="" />
      </div>
      <div className="right  w-full md:w-1/2 m-2 p-2 ">
        <Card className="">
          <CardHeader className="font-bold text-2xl">Register</CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>

                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firstname</FormLabel>

                      <FormControl>
                        <Input placeholder="Enter your First name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lastname</FormLabel>

                      <FormControl>
                        <Input placeholder="Enter your Last name" {...field} />
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
                        <Input placeholder="Enter a Password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>

                      <FormControl>
                        <Input placeholder="Confirm Your Password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Register
                </Button>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-gray-500 font-bold">
                    Already Have an Account ?
                  </span>{" "}
                  <Link
                    className="text-primary font-bold hover:underline"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Register;
