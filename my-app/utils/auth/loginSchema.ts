import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Invalid password"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
