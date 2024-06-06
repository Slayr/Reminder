import { Milestone as TMilestone } from "../api/milestone/Milestone";

export const MILESTONE_TITLE_FIELD = "label";

export const MilestoneTitle = (record: TMilestone): string => {
  return record.label?.toString() || String(record.id);
};
