interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Administrator', 'Sales Manager', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'mako official',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Create orders', 'Edit own orders', 'Read own orders'],
  ownerAbilities: ['Manage company', 'Manage users', 'Manage products', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/fef60b1b-53b6-4556-982d-0b979444aa36',
};
