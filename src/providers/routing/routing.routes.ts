export const ROOT_ROUTE = 'ROOT_ROUTE';
export const REGISTRATION_ROUTE = 'REGISTRATION_ROUTE';
export const AUTHORIZATION_ROUTE = 'AUTHORIZATION_ROUTE';
export const CREATE_TODO_PAGE_ROUTE = 'CREATE_TODO_PAGE_ROUTE';
export const MY_TODO_PAGE_ROUTE = 'MY_TODO_PAGE_ROUTE';

export const ROUTES = {
  [ROOT_ROUTE]: '/',
  [REGISTRATION_ROUTE]: '/sign-up',
  [AUTHORIZATION_ROUTE]: '/sign-in',
  [CREATE_TODO_PAGE_ROUTE]: '/create-todo',
  [MY_TODO_PAGE_ROUTE]: '/my-todo',
} as const;
