import { Card } from "../../components/card";
import { Condition } from "./condition";
import { Icon } from "./icon";
import { Wind } from "./wind";
import { Location } from "./location";
import { Temperature } from "./temperature";

export const Current = () => {
  return (
    <Card>
      <Location />
      <Icon />
      <Temperature />
      <Condition />
      <Wind />
    </Card>
  )
}
