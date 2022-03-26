import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume) {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
}

const tv = new Tv();

const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
