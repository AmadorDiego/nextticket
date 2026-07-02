import type {
  RejectedTicketData,
  SuccessTicketData,
  ValidationStat,
  ValidatorNavItem,
} from "../types/validation";

export const validatorNavItems: ValidatorNavItem[] = [
  {
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    label: "Events",
    icon: "event",
  },
  {
    label: "Validation",
    icon: "qr_code_scanner",
    active: true,
  },
  {
    label: "Users",
    icon: "group",
  },
];

export const validationStats: ValidationStat[] = [
  {
    label: "Validados",
    value: "1,248",
    tone: "primary",
  },
  {
    label: "Capacidad",
    value: "65%",
    tone: "default",
  },
  {
    label: "Rechazados",
    value: "12",
    tone: "danger",
  },
];

export const successTicketData: SuccessTicketData = {
  assistant: "Roberto Domínguez",
  zone: "VIP Platinum A12",
  folio: "#992-XKA-201",
};

export const rejectedTicketData: RejectedTicketData = {
  message: "Escaneado previamente a las 18:45 hrs.",
  location: "Puerta Norte 04",
};
