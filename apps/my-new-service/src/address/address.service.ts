import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { AddressServiceBase } from "./base/address.service.base";

@Injectable()
export class AddressService extends AddressServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super(prisma, localStorageService);
  }
}
