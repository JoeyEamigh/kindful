import { Campaign } from './campaign';
import { Fund } from './fund';

export type MetaCampaignsResponse = Campaign[];
export type MetaCustomFieldsResponse = CustomField[];
export type MetaCustomFieldGroupResponse = CustomFieldGroup[];
export type MetaFundsResponse = Fund[];
export type MetaDetailsResponse = Details;
export type ImportStatsResponse = ImportStats;

export interface CustomField {
  id: number;
  name: string;
  field_type: string;
  field_values: string[];
  custom_field_group: CustomFieldGroup;
}

export interface CustomFieldGroup {
  id: string;
  name: string;
}

export interface Details {
  id: number;
  name: string;
  email: string;
  subdomain: string;
  root_url: string;
  time_zone: string;
  ein: string;
  city: string;
  state: string;
  country: string;
}

export interface ImportStats {
  sync_enabled: boolean;
  message: string;
  pending_jobs: number;
  pending_updates: number;
}
