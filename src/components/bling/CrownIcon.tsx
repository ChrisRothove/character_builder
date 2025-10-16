import CrownOff from "@assets/crown-off.svg";
import CrownOn from "@assets/crown-on.svg";

export default function CrownIcon({
  isOn = false,
}: {
  isOn: boolean | undefined;
}) {
  return isOn ? (
    <img width="20rem" className="crown-icon" src={CrownOn} alt="Crown" />
  ) : (
    <img width="20rem" className="crown-icon" src={CrownOff} alt="Crown" />
  );
}
