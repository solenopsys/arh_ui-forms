import {DataProvider, FreeProvider} from "@solenopsys/ui-utils";

export interface ProviderService{
  getProvider(  key: string,  titleKey?: string):FreeProvider | DataProvider
}
