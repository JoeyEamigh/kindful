import { Contact } from './contact';

export type ContactWithGroup<T extends string[]> = Contact & { [key in keyof T]: 'yes' | 'no' };

export interface CreateGroupRequest<T extends string[]> {
  data_format: 'contact';
  data_type: 'json';
  action_type: 'create' | 'update';
  match_by: { group: 'name' };
  groups: T;
  data: ContactWithGroup<T>[];
}
