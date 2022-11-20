import { CustomFieldGroup } from './meta';

export interface Contact {
  id: string;
  external_id?: string;
  sync_version?: number;
  title?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  birthday?: string;
  company_name?: string;
  employer?: string;
  retired_or_not_employed?: string;
  occupation?: string;
  email?: string;
  alt_email?: string;
  email_opt_in?: string;
  email_deliverable?: string;
  email_deliverable_error_reason?: string;
  primary_phone?: string;
  alt_phone?: string;
  fax_phone?: string;
  addr1?: string;
  addr2?: string;
  city?: string;
  state?: string;
  postal?: string;
  country?: string;
  spouse_first?: string;
  spouse_last?: string;
  created_at?: string;
  updated_at?: string;
  custom_fields?: { [name: string]: ContactCustomField };
}

export interface DonorContact extends Contact {
  donor_type?: string;
}

export interface QueriedContact extends Contact {
  record_type: 'contact';
  _links: {
    self: string;
  };
}

export interface ContactCustomField {
  custom_field_id: string;
  name?: string;
  custom_field_group?: CustomFieldGroup;
  field_type?: string;
  field_values?: string[];
  value?: string;
}

export interface ContactWithCauseTeam extends Contact {
  campaign?: string;
  campaign_id?: string;
  fund?: string;
  fund_id?: string;
  cause?: string;
  cause_id?: string;
  team?: string;
  team_id?: string;
  team_member_first_name?: string;
  team_member_last_name?: string;
  team_member_id?: string;
}

export interface ContactWithNonCashGift extends Contact {
  campaign?: string;
  campaign_id?: string;
  parent_campaign?: string;
  parent_campaign_id?: string;
  fund?: string;
  fund_id?: string;
  non_cash_gift_id?: string;
  amount_in_cents: string;
  currency?: string;
  non_cash_gift_time: string;
  non_cash_gift_updated_at?: string;
  non_cash_gift_note?: string;
  non_tax_deductible_amount_in_cents?: string;
}

export interface ContactWithNote extends Contact {
  campaign?: string;
  campaign_id?: string;
  fund?: string;
  fund_id?: string;
  note_id?: string;
  note_time: string;
  note_updated_at?: string;
  note_type?: string;
  note_subject?: string;
  note_body?: string;
  message_body?: string;
  note_sender_name?: string;
  note_sender_email?: string;
}

export interface ContactWithPledge extends Contact {
  campaign?: string;
  campaign_id?: string;
  fund?: string;
  fund_id?: string;
  pledge_id?: string;
  pledge_time: string;
  pledge_updated_at?: string;
  amount_in_cents: string;
  pledge_note?: string;
}

export interface ContactWithSoftCredit extends Contact {
  campaign?: string;
  campaign_id?: string;
  fund?: string;
  fund_id?: string;
  soft_credit_id: string;
  amount_in_cents: string;
  currency?: string;
  soft_credit_time: string;
  soft_credit_updated_at?: string;
  soft_credit_note?: string;
}

export interface ContactLink {
  id: string;
  external_id: string;
  sync_version: string;
  updated_at: string;
}

export interface ContactLinkRequest {
  action_type: 'update';
  data_type: 'json';
  data: ContactLink[];
}
