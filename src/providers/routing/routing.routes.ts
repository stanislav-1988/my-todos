export const ROOT_ROUTE = 'ROOT_ROUTE';
export const REGISTRATION_ROUTE = 'REGISTRATION_ROUTE';
export const AUTHORIZATION_ROUTE = 'AUTHORIZATION_ROUTE';

export const ROUTES = {
  [ROOT_ROUTE]: '/',
  [REGISTRATION_ROUTE]: '/sign-up',
  [AUTHORIZATION_ROUTE]: '/sign-in',
} as const;
