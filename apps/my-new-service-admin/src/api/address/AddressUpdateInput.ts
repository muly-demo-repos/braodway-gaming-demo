import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { InputJsonValue } from "../../types";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  tmpFile?: InputJsonValue;
  zip?: number | null;
};
