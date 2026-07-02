export type ValidationResultType = "success" | "rejected" | "invalid" | null;

export interface ValidatorNavItem {
  label: string;
  icon: string;
  active?: boolean;
}

export interface ValidationStat {
  label: string;
  value: string;
  tone?: "primary" | "default" | "danger";
}

export interface SuccessTicketData {
  assistant: string;
  zone: string;
  folio: string;
}

export interface RejectedTicketData {
  message: string;
  location: string;
}
