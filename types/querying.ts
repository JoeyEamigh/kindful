import { DonorContact } from './contact';

export interface EmailExistResponse {
  exists: boolean;
}

export interface QueryContactsRequest {
  query: QueryContactsRequestQuery[];
  per_page?: number;
  custom_fields?: string[];
  columns?: QueryContactsRequestColumns;
}

export interface QueryContactsRequestColumns {
  contact?: string[];
}

export type QueryContactsRequestQuery =
  | 'linked'
  | 'not_linked'
  | 'changed'
  | { or: QueryContactsRequestQuery[] }
  | { and: QueryContactsRequestQuery[] }
  | { not: QueryContactsRequestQuery[] }
  | { by_group_id: string[] }
  | { near_postal: string[] }
  | { has_email: string };

export interface QueryContactsResponse {
  data_format: 'contact';
  action_type: 'update' | 'create';
  data_type: 'json';
  data: DonorContact[];
}
