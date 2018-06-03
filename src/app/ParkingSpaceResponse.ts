import { ParkingSpace } from './ParkingSpace';
export interface ParkingSpaceResponse {
  readonly name: string;
  readonly spaces: ParkingSpace[][];
}
