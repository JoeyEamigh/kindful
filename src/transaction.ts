import { ImportResponse } from '../types/imports';
import { QueryResponse } from '../types/querying';
import {
  ContactWithTransaction,
  TransactionWithContactRequest,
  TransactionQueryRequest,
  TransactionLink,
  TransactionLinkRequest,
} from '../types/transaction';
import { api } from './wrapper';

const defaults = { data_format: 'contact_with_transaction' as 'contact_with_transaction', data_type: 'json' as 'json' };

export async function link(data: TransactionLink[]) {
  return await api.post<TransactionLinkRequest, ImportResponse>('/api/v1/transactions/link', {
    data_type: 'json',
    action_type: 'create',
    data,
  });
}

export async function query(body: TransactionQueryRequest) {
  return await api.post<TransactionQueryRequest, QueryResponse<any>>('/api/v1/contacts/query', body);
}

export async function withNewContact(data: ContactWithTransaction[]) {
  return await api.post<TransactionWithContactRequest, ImportResponse>('/api/v1/imports', {
    ...defaults,
    data,
    action_type: 'create',
  });
}

export async function withContact(data: ContactWithTransaction[]) {
  return await api.post<TransactionWithContactRequest, ImportResponse>('/api/v1/imports', {
    ...defaults,
    data,
    action_type: 'update',
  });
}
