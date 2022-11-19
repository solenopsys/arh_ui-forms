import { DataProvider } from "@solenopsys/uimatrix-utils";


export interface ProviderService{
  getProvider(  key: string,  titleKey?: string):DataProvider
}