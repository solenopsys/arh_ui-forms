import { DataProvider } from "@solenopsys/ui-utils";


export interface ProviderService{
  getProvider(  key: string,  titleKey?: string):DataProvider
}
