import { Contact } from './contact';

export type ContactMatchByOptions =
  | 'external_id'
  | 'id'
  | 'first_name_last_name'
  | 'first_name_last_name_email'
  | 'email'
  | 'company_name'
  | 'company_name_email'
  | 'stripe_customer_id'
  | 'stripe_charge_id'
  | 'paypal_transaction_id'
  | 'authorize_customer_id';

export interface ContactMatchBy {
  contact?: ContactMatchByOptions;
}

export interface ContactImportRequest {
  data_format: 'contact';
  action_type: 'create' | 'update';
  data_type: 'json';
  data: Contact[];
  match_by?: ContactMatchBy;
}

export interface ImportResponse {
  id: string;
  status: 'pending';
}
