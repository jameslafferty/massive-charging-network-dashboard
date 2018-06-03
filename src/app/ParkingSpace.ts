import { PowerReadout } from './PowerReadout';

export interface ParkingSpace {
  readonly id: string;
  status: string;
  powerReadouts?: PowerReadout[];
}
