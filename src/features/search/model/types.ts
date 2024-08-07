import { RejectedDataType } from '../../../shared/api/types/errorTypes';

export interface ISearchState {
  readonly query: string | null
  readonly error: RejectedDataType | null
}
