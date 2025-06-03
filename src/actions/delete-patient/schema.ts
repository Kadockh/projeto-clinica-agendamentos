import { z } from "zod";

export const deletePatientSchema = z.object({
  id: z.string().uuid({
    message: "ID do paciente é obrigatório.",
  }),
});

export type DeletePatientSchema = z.infer<typeof deletePatientSchema>;
