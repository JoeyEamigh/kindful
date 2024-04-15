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

export interface ImportStatusResponse {
  job_type: string | null;
  id: string;
  status: 'pending' | 'complete' | 'ready' | 'failed';
  stats: {
    Fund: number;
    Team: number;
    Cause: number;
    Contact: number;
    Campaign: number;
    'Team Member': number;
    Transaction: number;
    'Integrations Transaction Link': number;
  };
  update_stats: {
    Note: number;
    Team: number;
    Cause: number;
    Group: number;
    Contact: number;
    Pledge: number;
    'Soft Credit': number;
    'Team Member': number;
    Transaction: number;
    'Groups Person': number;
    'Custom Field': number;
    'Recurring Donation': number;
    'Custom Field Group': number;
  };
  notifications: {
    page: number;
    count: number;
    results: unknown[];
  };
}
