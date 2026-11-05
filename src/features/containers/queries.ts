import { ApiResult } from "@/lib/api-types";
import { containers } from "./mock-data";
import { Container } from "./types";


export async function getContainers(): Promise<ApiResult<Container[]>> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve( { success: true, data: containers });
    }, 2000),
  );
}
