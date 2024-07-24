/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Page } from "./Page";
import { PageCountArgs } from "./PageCountArgs";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageFindUniqueArgs } from "./PageFindUniqueArgs";
import { DeletePageArgs } from "./DeletePageArgs";
import { PageService } from "../page.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Page)
export class PageResolverBase {
  constructor(
    protected readonly service: PageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async _pagesMeta(
    @graphql.Args() args: PageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Page])
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async pages(@graphql.Args() args: PageFindManyArgs): Promise<Page[]> {
    return this.service.pages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Page, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "own",
  })
  async page(@graphql.Args() args: PageFindUniqueArgs): Promise<Page | null> {
    const result = await this.service.page(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Page)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "delete",
    possession: "any",
  })
  async deletePage(@graphql.Args() args: DeletePageArgs): Promise<Page | null> {
    try {
      return await this.service.deletePage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}