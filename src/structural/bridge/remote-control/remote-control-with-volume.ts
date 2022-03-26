import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp() {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} e  agora tem ${this.device.getVolume()}`,
    );
  }

  volumeDown() {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} e  agora tem ${this.device.getVolume()}`,
    );
  }
}
