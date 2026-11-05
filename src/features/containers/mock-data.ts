import { Container } from "./types";

export const containers: Container[] = [
  { id: "1", number: "MSKU1234567", type: "40ft", weightKg: 24500, status: "در بندر", cargoType: "لوازم خانگی", arrivalDate:new Date("2026-10-20"), location: "اسکله ۳", shipName: "کشتی آریا" },
  { id: "2", number: "TGHU7654321", type: "20ft", weightKg: 18200, status: "ترخیص شده", cargoType: "مواد غذایی", arrivalDate: new Date("2026-10-12"), location: "درب خروجی" },
  { id: "3", number: "CMAU2468135", type: "40ft", weightKg: 26800, status: "در انتظار بازرسی", cargoType: "قطعات صنعتی", arrivalDate: new Date("2026-10-28"), location: "محوطه ب", shipName: "کشتی خزر" },
  { id: "4", number: "HLXU9753186", type: "20ft", weightKg: 15400, status: "در بندر", cargoType: "پارچه", arrivalDate: new Date("2026-10-30"), location: "محوطه الف", shipName: "کشتی آریا" },
  { id: "5", number: "OOLU1357924", type: "40ft", weightKg: 22100, status: "ترخیص شده", cargoType: "مواد شیمیایی", arrivalDate: new Date("2026-10-05"), location: "درب خروجی" },
  { id: "6", number: "EGHU8642097", type: "20ft", weightKg: 19900, status: "در انتظار بازرسی", cargoType: "لوازم الکترونیکی", arrivalDate: new Date("2026-11-01"), location: "محوطه ب" },
  { id: "7", number: "MSCU3141592", type: "40ft", weightKg: 27300, status: "در بندر", cargoType: "مصالح ساختمانی", arrivalDate: new Date("2026-11-02"), location: "اسکله ۱", shipName: "کشتی هرمز" },
  { id: "8", number: "APLU2718281", type: "20ft", weightKg: 16700, status: "ترخیص شده", cargoType: "لاستیک", arrivalDate: new Date("2026-09-28"), location: "درب خروجی" },
];