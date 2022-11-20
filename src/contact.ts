import Kindful from '../index';
import { Contact, ContactLink, ContactLinkRequest, QueriedContact } from '../types/contact';
import { ContactImportRequest, ImportResponse, ContactMatchBy } from '../types/imports';
import { EmailExistResponse, ContactQueryRequest, QueryResponse } from '../types/querying';
import { WithRequired } from '../types/utils';
import { createQueue } from './shared';

const createBody = { data_format: 'contact', action_type: 'create', data_type: 'json' } as ContactImportRequest;
const updateBody = { data_format: 'contact', action_type: 'update', data_type: 'json' } as ContactImportRequest;

export async function emailExists(email: string): Promise<boolean> {
  const response = await Kindful.api.get<EmailExistResponse>(`/api/v1/contacts/email_exist?email=${email}`);
  return response.exists;
}

export async function link(data: ContactLink[]) {
  return await Kindful.api.post<ContactLinkRequest, ImportResponse>('/api/v1/contacts/link', {
    data_type: 'json',
    action_type: 'update',
    data,
  });
}

export async function query(body: ContactQueryRequest) {
  return await Kindful.api.post<ContactQueryRequest, QueryResponse<QueriedContact>>('/api/v1/contacts/query', body);
}

/** Kindful will ignore any contacts that match either the match_by parameter or the external_id. */
export async function create(contacts: Contact[], match_by?: ContactMatchBy) {
  return await Promise.all(
    createQueue(contacts).map(data =>
      Kindful.api.post<ContactImportRequest, ImportResponse>('/api/v1/imports', {
        ...createBody,
        match_by,
        data,
      }),
    ),
  );
}

/**
 * Kindful will ignore any contacts with an updated_time that is older than the existing contact.
 *
 * Kindful will create a new record if match_by is not provided and the external_id does not match an existing contact.
 */
export async function update(contacts: WithRequired<Contact, 'updated_at'>[], match_by?: ContactMatchBy) {
  return await Promise.all(
    createQueue(contacts).map(data =>
      Kindful.api.post<ContactImportRequest, ImportResponse>('/api/v1/imports', {
        ...updateBody,
        match_by,
        data,
      }),
    ),
  );
}
