import { IPaintings } from '../../../shared/api/painting/types';
import { RejectedDataType } from '../../../shared/api/types/errorTypes';

export interface ISearchState {
  readonly paintings: IPaintings[] | null
  readonly isLoading: boolean
  readonly error: RejectedDataType | null
}
