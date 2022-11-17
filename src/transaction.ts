import Kindful from '../index';
import { ImportResponse } from '../types/imports';
import { QueryResponse } from '../types/querying';
import {
  ContactWithTransaction,
  TransactionWithContactRequest,
  TransactionQueryRequest,
  TransactionLink,
  TransactionLinkRequest,
  Transaction,
} from '../types/transaction';

const defaults = { data_format: 'contact_with_transaction' as 'contact_with_transaction', data_type: 'json' as 'json' };

export async function link(data: TransactionLink[]) {
  return await Kindful.api.post<TransactionLinkRequest, ImportResponse>('/api/v1/transactions/link', {
    data_type: 'json',
    action_type: 'create',
    data,
  });
}

export async function query(body: TransactionQueryRequest) {
  return await Kindful.api.post<TransactionQueryRequest, QueryResponse<Transaction>>(
    '/api/v1/transactions/query',
    body,
  );
}

export async function withNewContact(data: ContactWithTransaction[]) {
  return await Kindful.api.post<TransactionWithContactRequest, ImportResponse>('/api/v1/imports', {
    ...defaults,
    data,
    action_type: 'create',
  });
}

export async function withContact(data: ContactWithTransaction[]) {
  return await Kindful.api.post<TransactionWithContactRequest, ImportResponse>('/api/v1/imports', {
    ...defaults,
    data,
    action_type: 'update',
  });
}
