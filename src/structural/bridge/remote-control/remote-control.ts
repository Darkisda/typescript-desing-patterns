import { DeviceImp } from '../device/device-imp';

export class RemoteControl {
  constructor(protected device: DeviceImp) {}

  togglePower() {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status ${this.device.getPower()}`,
    );
  }
}
