export const CONTAINER_STATUSES = ["در بندر", "ترخیص شده", "در انتظار بازرسی"] as const;
export type ContainerStatus = (typeof CONTAINER_STATUSES)[number];

export const CONTAINER_TYPES = ["20ft" , "40ft"] as const;
export type ContainerType = (typeof CONTAINER_TYPES)[number];

export type Container = {
  id: string;
  number: string;
  type: ContainerType;
  weightKg: number;
  status: ContainerStatus;
  cargoType: string;
  arrivalDate: Date;
  location: string;
  shipName?: string;
};

export type ContainerRow = {
  id: string;
  number: string;
  type: string;
  weightKg: string;
  status: string;
  cargoType: string;
  arrivalDate: string;  
  location: string;
  shipName: string;
};
