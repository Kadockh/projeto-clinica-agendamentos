import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { doctorsTable } from "@/db/schema";

dayjs.extend(utc);

export const generateTimeSlots = (
  doctor: typeof doctorsTable.$inferSelect,
  selectedDate: Date
) => {
  const slots: string[] = [];

  // Verificar se a data selecionada está dentro dos dias disponíveis do médico
  const selectedDay = selectedDate.getDay();
  const { availableFromWeekDay, availableToWeekDay } = doctor;

  // Verificar se o dia da semana está dentro do range disponível
  let isAvailableDay = false;
  if (availableFromWeekDay <= availableToWeekDay) {
    // Range normal (ex: segunda a sexta)
    isAvailableDay =
      selectedDay >= availableFromWeekDay && selectedDay <= availableToWeekDay;
  } else {
    // Range que passa pelo domingo (ex: sexta a segunda)
    isAvailableDay =
      selectedDay >= availableFromWeekDay || selectedDay <= availableToWeekDay;
  }

  if (!isAvailableDay) {
    return slots;
  }

  // Converter horários do médico para dayjs
  const startTime = dayjs(doctor.availableFromTime, "HH:mm:ss");
  const endTime = dayjs(doctor.availableToTime, "HH:mm:ss");

  // Gerar slots de 30 em 30 minutos
  let currentTime = startTime;
  while (currentTime.isBefore(endTime)) {
    slots.push(currentTime.format("HH:mm"));
    currentTime = currentTime.add(30, "minute");
  }

  return slots;
};
