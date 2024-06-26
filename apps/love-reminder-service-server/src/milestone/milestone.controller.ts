import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MilestoneService } from "./milestone.service";
import { MilestoneControllerBase } from "./base/milestone.controller.base";

@swagger.ApiTags("milestones")
@common.Controller("milestones")
export class MilestoneController extends MilestoneControllerBase {
  constructor(protected readonly service: MilestoneService) {
    super(service);
  }
}
