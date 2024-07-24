import { Vessel as TVessel } from "../api/vessel/Vessel";

export const VESSEL_TITLE_FIELD = "id";

export const VesselTitle = (record: TVessel): string => {
  return record.id?.toString() || String(record.id);
};
