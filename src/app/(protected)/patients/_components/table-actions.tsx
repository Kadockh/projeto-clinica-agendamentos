import { EditIcon, MoreVerticalIcon, TrashIcon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

import { deletePatient } from "@/actions/delete-patient";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { patientsTable } from "@/db/schema";

import UpsertPatientForm from "./upsert-patient-form";

interface PatientTableActionsProps {
  patient: typeof patientsTable.$inferSelect;
}

export const PatientTableActions = ({ patient }: PatientTableActionsProps) => {
  const [upsertDialogIsOpen, setUpsertDialogIsOpen] = useState<boolean>(false);
  const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState<boolean>(false);

  const deletePatientAction = useAction(deletePatient, {
    onSuccess: () => {
      toast.success("Paciente excluído com sucesso.");
      setDeleteDialogIsOpen(false);
    },
    onError: () => {
      toast.error("Erro ao excluir paciente.");
    },
  });

  const handleDeletePatient = () => {
    deletePatientAction.execute({ id: patient.id });
  };

  return (
    <>
      <Dialog open={upsertDialogIsOpen} onOpenChange={setUpsertDialogIsOpen}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVerticalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{patient.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setUpsertDialogIsOpen(true)}>
              <EditIcon className="h-4 w-4" /> Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setDeleteDialogIsOpen(true)}
              className="text-destructive focus:text-destructive">
              <TrashIcon className="h-4 w-4" /> Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpsertPatientForm
          isOpen={upsertDialogIsOpen}
          patient={patient}
          onSuccess={() => setUpsertDialogIsOpen(false)}
        />
      </Dialog>

      <AlertDialog
        open={deleteDialogIsOpen}
        onOpenChange={setDeleteDialogIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir paciente</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o paciente{" "}
              <strong>{patient.name}</strong>? Esta ação não pode ser desfeita e
              todos os agendamentos relacionados a este paciente também serão
              removidos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeletePatient}
              disabled={deletePatientAction.isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {deletePatientAction.isPending ? "Excluindo..." : "Excluir"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
