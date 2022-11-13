import {
  ImportStatsResponse,
  MetaCampaignsResponse,
  MetaCustomFieldGroupResponse as MetaCustomFieldGroupsResponse,
  MetaCustomFieldsResponse,
  MetaDetailsResponse,
  MetaFundsResponse,
} from '../types/meta';
import { api } from './wrapper';

export async function campaigns() {
  return await api.get<MetaCampaignsResponse>('/api/v1/campaigns');
}

export async function groups() {
  return await api.get<unknown>('/api/v1/groups');
}

export async function chapters() {
  return await api.get<unknown>('/api/v1/chapters');
}

export async function customFields() {
  return await api.get<MetaCustomFieldsResponse>('/api/v1/custom_fields');
}

export async function customFieldGroups() {
  return await api.get<MetaCustomFieldGroupsResponse>('/api/v1/custom_field_groups');
}

export async function details() {
  return await api.get<MetaDetailsResponse>('/api/v1/details');
}

export async function funds() {
  return await api.get<MetaFundsResponse>('/api/v1/funds');
}

export async function importStats() {
  return await api.get<ImportStatsResponse>('/api/v1/import_stats');
}
