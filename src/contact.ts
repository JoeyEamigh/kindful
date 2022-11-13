import { Contact, QueriedContact } from '../types/contact';
import { ContactImportRequest, ContactImportResponse } from '../types/imports';
import {
  ContactsRequestQuery as QueryContactsRequestQuery,
  EmailExistResponse,
  QueryContactsRequest,
  QueryContactsRequestColumns,
  QueryResponse,
} from '../types/querying';
import { api } from './wrapper';

const createBody = { data_format: 'contact', action_type: 'create', data_type: 'json' } as ContactImportRequest;
const updateBody = { data_format: 'contact', action_type: 'update', data_type: 'json' } as ContactImportRequest;

export async function emailExists(email: string): Promise<boolean> {
  const response = await api.get<EmailExistResponse>(`/api/v1/contacts/email_exists?email=${email}`);
  return response.exists;
}

export async function query(body: QueryContactsRequest) {
  return await api.post<QueryContactsRequest, QueryResponse<QueriedContact>>('/api/v1/contacts/query', body);
}

/** Kindful will ignore any contacts that match either the match_by parameter or the external_id. */
export async function create(data: Contact[]) {
  return await api.post<ContactImportRequest, ContactImportResponse>('/api/v1/contacts', { ...createBody, data });
}

/**
 * Kindful will ignore any contacts with an updated_time that is older than the existing contact.
 *
 * Kindful will create a new record if match_by is not provided and the external_id does not match an existing contact.
 */
export async function upsert(data: Contact[]) {
  return await api.post<ContactImportRequest, ContactImportResponse>('/api/v1/contacts', { ...updateBody, data });
}
