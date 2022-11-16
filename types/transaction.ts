import { Contact, DonorContact } from './contact';
import { TransactionRequestQuery } from './querying';
import { Campaign } from './campaign';
import { Fund } from './fund';

export interface TransactionRequestColumns {
  transaction?: string[];
  contact?: string[];
  campaign?: string[];
  fund?: string[];
}

export interface TransactionQueryRequest {
  query: TransactionRequestQuery[];
  per_page?: number;
  columns?: TransactionRequestColumns;
  contact_custom_fields?: number[];
}

export interface Transaction {
  id: number;
  external_id?: string | null;
  sync_version?: number;
  transaction_time: string;
  updated_at: string;
  amount_in_cents: number;
  campaign_id?: number;
  fund_id?: number;
  designation?: string | null;
  // joins
  campaign?: Campaign;
  fund?: Fund;
  contact?: DonorContact;
  // end joins
  contact_id?: number;
  acknowledged?: boolean;
  note?: string;
  transaction_type?: string;
  success?: boolean;
  was_refunded?: boolean;
  currency?: string;
  check_num?: string | null;
  card_type?: string | null;
  non_tax_deduct_amount_in_cents?: number;
  is_donation?: boolean;
  custom_field_name1?: string | null;
  custom_field_value1?: string | null;
  custom_field_name2?: string | null;
  custom_field_value2?: string | null;
  custom_field_name3?: string | null;
  custom_field_value3?: string | null;
  deleted_at?: string | null;
  batch_deposit?: string | null;
  gateway_transaction_id?: string | null;
  record_type?: string;
  _links?: {
    self?: string;
    contact?: string;
  };
}

type TransactionType =
  | 'cash'
  | 'check'
  | 'consolidated'
  | 'credit'
  | 'eft'
  | 'offline_recurring'
  | 'one_time_transaction'
  | 'paypal'
  | 'payroll_deduction'
  | 'shopify'
  | 'square'
  | 'stock';

export interface ContactWithTransaction extends Contact {
  stripe_customer_id?: string;
  authorize_customer_id?: string;
  paypal_payer_id?: string;
  created_at?: string;
  updated_at?: string;
  transaction_id?: string;
  amount_in_cents: string;
  currency?: string;
  transaction_time: string;
  transaction_updated_at?: string;
  campaign?: string;
  campaign_id?: string;
  /** if unknown, pass 'General' */
  fund: string | 'General';
  /** if unknown, pass '1' */
  fund_id: string | '1';
  acknowledged?: string;
  transaction_note?: string;
  stripe_charge_id?: string;
  authorize_transaction_id?: string;
  paypal_transaction_id?: string;
  transaction_type?: TransactionType;
  was_refunded?: string;
  check_num?: string;
  card_type?: string;
  non_tax_deductible_amount_in_cents?: string;
  is_donation?: string;
  cause?: string;
  cause_id?: string;
  team?: string;
  team_id?: string;
  team_member_first_name?: string;
  team_member_last_name?: string;
  team_member_id?: string;
}

export interface TransactionWithContactRequest {
  data_format: 'contact_with_transaction';
  action_type: 'create' | 'update';
  data_type: 'json';
  data: ContactWithTransaction[];
}

export interface TransactionLink {
  id: string;
  external_id: string;
  sync_version: string;
  updated_at: string;
}

export interface TransactionLinkRequest {
  action_type: 'create';
  data_type: 'json';
  data: TransactionLink[];
}
