import { DonorContact } from './contact';
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
