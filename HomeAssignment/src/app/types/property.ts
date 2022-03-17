export interface Property {
  propertyId: string;
  createdOn: Date;
  address: string;
  occupiedStats: string;
  owner: string;
  ownerStatus: string;
  tenant?: {
    contactId: string;
    firstName: string;
    lastName: string;
    tenantStatus: string;
  };
  plan: string;
}
