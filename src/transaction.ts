import { QueryResponse } from '../types/querying';
import { TransactionQueryRequest } from '../types/transaction';
import { api } from './wrapper';

export async function query(body: TransactionQueryRequest) {
  return await api.post<TransactionQueryRequest, QueryResponse<any>>('/api/v1/contacts/query', body);
}
