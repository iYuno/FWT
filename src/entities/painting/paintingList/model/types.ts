import { IPainting } from "@/shared/api/painting/types";
import { RejectedDataType } from "@/shared/api/types/errorTypes";

export interface IPaintingList {
  readonly paintings: IPainting[];
  readonly totalCountPaintings: number;
  readonly isLoading: boolean;
  readonly error: RejectedDataType | null;
}
