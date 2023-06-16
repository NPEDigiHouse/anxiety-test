import { NavbarMenuType } from "./types";

interface IROUTES {
  home : NavbarMenuType;
  anxietyTest: NavbarMenuType;
  anxietyClass: NavbarMenuType;
}

export const ROUTES : IROUTES = {
  home: "",
  anxietyTest: "asesmen-kecemasan",
  anxietyClass: "tingkat-kecemasan"
}