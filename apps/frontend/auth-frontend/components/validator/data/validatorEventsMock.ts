import type { ValidatorEvent, ValidatorSidebarItem } from "../types/validatorEvent";

export const validatorSidebarItems: ValidatorSidebarItem[] = [
  {
    label: "Dashboard",
    icon: "▦",
  },
  {
    label: "Events",
    icon: "▣",
  },
  {
    label: "Venues",
    icon: "⌖",
  },
  {
    label: "Zones",
    icon: "◇",
  },
  {
    label: "Seats",
    icon: "▱",
  },
  {
    label: "Sales",
    icon: "▰",
  },
  {
    label: "Validation",
    icon: "⌗",
    active: true,
  },
  {
    label: "Users",
    icon: "◉",
  },
];

export const validatorEvents: ValidatorEvent[] = [
  {
    id: 1,
    title: "Neon Nights Festival 2024",
    venue: "Arena Movistar, Santiago",
    dateLabel: "Hoy, 20:30 PM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtyI1dNuHyJoV3XM4VmpSqhoVHOfKATEHLU0W7k9AXKLRo9lVxYPY0yupg3a_H6XcZYw21ywzwVny8lgWEtaIGE_1prbv_mOYGp7qnNb1HbGQyNjkl4UFfNYz5YhCNsPW8BD6hzu1SxRTU6aF7-ZUGJZnckBPAtmvEMB6Zz9Uw9yfW7bsnrI3pxZrsazXlJQrH9MIPq3XjjjiFqog_t6z596E22kv-C46aU-1axAjRbGt_ECLGtAxTiFa63FcHn9Bw8qABCGsK_Ja",
    status: "in-progress",
    filter: "today",
    badge: {
      label: "En curso",
      tone: "primary",
    },
    metric: {
      label: "Validación",
      value: "850/1200",
      progress: 70.8,
      enabled: true,
      buttonLabel: "Iniciar Validación",
    },
  },
  {
    id: 2,
    title: "Sinfonía bajo las Estrellas",
    venue: "Teatro Municipal",
    dateLabel: "Hoy, 18:00 PM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeZd1OivvaD1v22MtLEFQw2te8-kvvtSNNLezMTlUci1V8za4DCuxD_0khQL-buojIZ8op5J8Jb2UuFAJ0f7EpDVL8ClSXw7s_g20NyhErTmq4A6F9skLJd9V_xJeYc3wwL-yx7OfyM-sl7XT9qXwUrVvmbHtaeI9WPE0JgvK7OX-Hagv88HYZfqCz2nVqask7nHLH4O_RH4Te7YcoSNdqybKwwYCiaDMAYQMZ0MD_0Wfd6f3iN2JK_7pDL-bZj2B_AM5p_1vX5oPv",
    status: "today",
    filter: "today",
    metric: {
      label: "Validación",
      value: "0/450",
      progress: 0,
      enabled: true,
      buttonLabel: "Iniciar Validación",
    },
  },
  {
    id: 3,
    title: "Tech Innovators Summit",
    venue: "Centro de Convenciones",
    dateLabel: "Mañana, 09:00 AM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvn2CQng2pSR2mBbSp2iiH5UHYHd3R3YuaNqaW32NzMKoXZ04DY3Eh1thpjX2Hb99nFMSrS3BdlQdvVcvX2loGD1Im7uwOQC9mVOZjKnHTl2gOLQoOgCOP85M2xHS3DIMvtWf7lRHJKIPpnrMykf1BXk4k0bzjHNIG27bZpQKQALenSUGdTzgwKdqQCKOLGl1oI41G8salI2-9maP41hngzFPs8D_j_nU1jcGE4U_Wfd3dFcca77Q07nzDEUERhBQy1umuOCmEBFWx",
    status: "tomorrow",
    filter: "tomorrow",
    badge: {
      label: "Mañana",
      tone: "secondary",
    },
    metric: {
      label: "Tickets Vendidos",
      value: "2,400",
      progress: 100,
      enabled: false,
      buttonLabel: "No disponible aún",
    },
  },
  {
    id: 4,
    title: "Copa Regional: Final",
    venue: "Estadio Monumental",
    dateLabel: "15 Oct, 16:00 PM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbcvvRQ4PzKunK9Q8HpydsScLfhb4zVMwXTv20cbkYqHw2mqQu96I-zn0hrWZZguq4NNh87YYOwXHtvkNt9HMuhbNU6wjiuQQTpLtahaTpJOHrfc6gpqAz-xrpBi7KF9FqFvy5W7n4lukXpoLkEz74nb0BuvSPx0V04eqDkYwxDnbwg2FF5H7SHD265_Qc7uAmruLSMiR6OREK_RqKmAC-bjHFrGwt4yt1Dmtm8RhYLQ4auv-sc5Df2dt8kNRNzbAjUMroRxp3ZUJx",
    status: "upcoming",
    filter: "upcoming",
    metric: {
      label: "Tickets Vendidos",
      value: "15,000",
      progress: 100,
      enabled: false,
      buttonLabel: "No disponible aún",
    },
  },
];
