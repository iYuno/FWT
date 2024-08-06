import { IPaintings } from '../../../../shared/api/painting/types';
import { RejectedDataType } from '../../../../shared/api/types/errorTypes';

export interface IPaintingList {
  readonly paintings: IPaintings[];
  readonly totalCountPaintings: number;
  readonly isLoading: boolean;
  readonly error: RejectedDataType | null;
}
