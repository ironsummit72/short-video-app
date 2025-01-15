import { z } from "zod";

const loginWithEmailSchema = z.object({
  email: z
    .string()
    .min(2, { message: "cannot be empty" })
    .email({ message: "invalid email address" })
    .trim(),
  password: z
    .string()
    .min(2, { message: "Cannot be empty" })
    .max(50, { message: "cannot be more than 50 characters" }),
});

const loginWithUsernameSchema = z.object({
  username: z.string().min(2, { message: "username cannot be empty" }).trim(),
  password: z
    .string()
    .min(2, { message: "Cannot be empty" })
    .max(50, { message: "cannot be more than 50 characters" }),
});

const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "username should atleast be 3 characters long" })
      .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    firstname: z
      .string()
      .min(3, { message: "firstname must be atleast 3 characters long" })
      .max(30, { message: "cannot be more than 30 characters long" })
      .trim(),
    lastname: z
      .string()
      .min(3, { message: "lastname must be atleast 3 characters long" })
      .max(30, { message: "cannot be more than 30 characters long" })
      .trim(),
    password: z
      .string()
      .min(1, { message: "please enter your password" })
      .trim(),
    confirmpassword: z
      .string()
      .min(1, { message: "please confirm your password" })
      .trim(),
  })
  .refine((data) => data.password !== data.confirmpassword, {
    message: "password not matching ",
  });

export { loginWithEmailSchema, loginWithUsernameSchema,RegisterFormSchema };
