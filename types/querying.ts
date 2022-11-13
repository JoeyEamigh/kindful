export interface EmailExistResponse {
  exists: boolean;
}

export interface QueryContactsRequest {
  query: ContactsRequestQuery[];
  per_page?: number;
  custom_fields?: string[];
  columns?: QueryContactsRequestColumns;
}

export interface QueryContactsRequestColumns {
  contact?: string[];
}

/** near_postal format: zipcode and range (in miles) */
export type ContactsRequestQuery =
  | 'linked'
  | 'not_linked'
  | 'changed'
  | { or: ContactsRequestQuery[] }
  | { and: ContactsRequestQuery[] }
  | { not: ContactsRequestQuery[] }
  | { by_group_id: string[] }
  | { near_postal: [string, number] }
  | { has_email: string };

/**
 * before and after format: yyyy/mm/dd or yyyy-mm-dd
 *
 * near_postal format: zipcode and range (in miles)
 * */
export type TransactionRequestQuery =
  | 'linked'
  | 'not_linked'
  | 'changed'
  | { after: string }
  | { before: string }
  | { or: TransactionRequestQuery[] }
  | { and: TransactionRequestQuery[] }
  | { not: TransactionRequestQuery[] }
  | { campaign_id: string }
  | { near_postal: [string, number] }
  | { has_email: string };

export interface QueryResponse<T> {
  page: number;
  query_token: string;
  results: T[];
  has_more: boolean;
  _links?: {
    next?: {
      /** This is a relative URL from '/api/v1' */
      href?: string;
    };
  };
}
