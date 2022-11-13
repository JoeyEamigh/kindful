import { Contact } from './contact';

export interface ContactImportRequest {
  data_format: 'contact';
  action_type: 'create' | 'update';
  data_type: 'json';
  data: Contact[];
}

export interface ContactImportResponse {
  id: string;
  status: 'pending';
}
