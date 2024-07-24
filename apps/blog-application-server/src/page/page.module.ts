import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PageModuleBase } from "./base/page.module.base";
import { PageService } from "./page.service";
import { PageController } from "./page.controller";
import { PageResolver } from "./page.resolver";

@Module({
  imports: [PageModuleBase, forwardRef(() => AuthModule)],
  controllers: [PageController],
  providers: [PageService, PageResolver],
  exports: [PageService],
})
export class PageModule {}
