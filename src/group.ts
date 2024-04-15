import Kindful from '../index';
import { ContactWithGroup, CreateGroupRequest } from '../types/group';
import { ImportResponse } from '../types/imports';
import { createQueue } from './shared';

/** must include array of group names as TS parameter for type checks :) */
export async function createWithContact<T extends string[]>(raw: ContactWithGroup<T>[], groups: T) {
  return await Promise.all(
    createQueue(raw).map(data =>
      Kindful.api.post<CreateGroupRequest<T>, ImportResponse>('/api/v1/imports', {
        data_format: 'contact',
        data_type: 'json',
        action_type: 'create',
        match_by: { group: 'name' },
        groups,
        data,
      }),
    ),
  );
}

/** must include array of group names as TS parameter for type checks :) */
export async function addContacts<T extends string[]>(id: string[], groups: T) {
  return await Promise.all(
    createQueue(id).map(() =>
      Kindful.api.post<CreateGroupRequest<T>, ImportResponse>('/api/v1/imports', {
        data_format: 'contact',
        data_type: 'json',
        action_type: 'update',
        match_by: { group: 'name' },
        groups,
        // lololololol lets hope this works
        data: id.map(id => ({
          id,
          ...groups.reduce((acc, group) => ({ ...acc, [group]: 'yes' }), {}),
          updated_at: new Date().toISOString(),
        })) as ContactWithGroup<T>[],
      }),
    ),
  );
}

/** must include array of group names as TS parameter for type checks :) */
export async function removeContacts<T extends string[]>(id: string[], groups: T) {
  return await Promise.all(
    createQueue(id).map(() =>
      Kindful.api.post<CreateGroupRequest<T>, ImportResponse>('/api/v1/imports', {
        data_format: 'contact',
        data_type: 'json',
        action_type: 'update',
        match_by: { group: 'name' },
        groups,
        // lololololol lets hope this works
        data: id.map(id => ({
          id,
          ...groups.reduce((acc, group) => ({ ...acc, [group]: 'no' }), {}),
          updated_at: new Date().toISOString(),
        })) as ContactWithGroup<T>[],
      }),
    ),
  );
}
