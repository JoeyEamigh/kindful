import { Fund } from './fund';

export interface Campaign {
  id: number;
  external_id?: string | null;
  sync_version?: number;
  name: string;
  description?: string | null;
  short_name?: string;
  custom_field_name1?: string | null;
  custom_field_name2?: string | null;
  custom_field_name3?: string | null;
  created_at?: string;
  updated_at?: string;
  fund_id?: number;
  fund?: Fund;
  record_type?: 'campaign';
  _links?: {
    self?: string;
  };
}
