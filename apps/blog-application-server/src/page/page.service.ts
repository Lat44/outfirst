import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PageServiceBase } from "./base/page.service.base";

@Injectable()
export class PageService extends PageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
