import { EmailExistResponse } from '../types/querying';
import { api } from './wrapper';

export async function emailExists(email: string): Promise<boolean> {
  const response = await api.get<EmailExistResponse>(`/contacts/email_exists?email=${email}`);
  return response.exists;
}
