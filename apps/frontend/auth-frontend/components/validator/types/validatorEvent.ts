export type ValidatorEventFilter = "today" | "tomorrow" | "all";

export type ValidatorEventStatus =
  | "in-progress"
  | "today"
  | "tomorrow"
  | "upcoming";

export interface ValidatorSidebarItem {
  label: string;
  icon: string;
  active?: boolean;
}

export interface ValidatorEvent {
  id: number;
  title: string;
  venue: string;
  dateLabel: string;
  imageUrl: string;
  status: ValidatorEventStatus;
  filter: Exclude<ValidatorEventFilter, "all"> | "upcoming";
  badge?: {
    label: string;
    tone: "primary" | "secondary";
  };
  metric: {
    label: string;
    value: string;
    progress: number;
    enabled: boolean;
    buttonLabel: string;
  };
}
