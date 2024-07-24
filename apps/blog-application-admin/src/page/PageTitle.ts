import { Page as TPage } from "../api/page/Page";

export const PAGE_TITLE_FIELD = "id";

export const PageTitle = (record: TPage): string => {
  return record.id?.toString() || String(record.id);
};
