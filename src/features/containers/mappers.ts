import { formatDateToShamsi, formatWeight } from "@/lib/format";
import { Container, ContainerRow } from "./types";

export default function toContainerRow(container: Container): ContainerRow {
  return {
    id: container.id,
    arrivalDate: formatDateToShamsi(container.arrivalDate),
    cargoType: container.cargoType,
    location: container.location,
    number: container.number,
    shipName: container.shipName ?? "-",
    status: container.status,
    type: container.type,
    weightKg: formatWeight(container.weightKg),
  };
}
