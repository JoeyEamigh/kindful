import { ImportStatusResponse } from '../types/imports';
import {
  ImportStatsResponse,
  MetaCampaignsResponse,
  MetaCustomFieldGroupResponse as MetaCustomFieldGroupsResponse,
  MetaCustomFieldsResponse,
  MetaDetailsResponse,
  MetaFundsResponse,
} from '../types/meta';
import Kindful from '../index';

export async function campaigns() {
  return await Kindful.api.get<MetaCampaignsResponse>('/api/v1/campaigns');
}

export async function groups() {
  return await Kindful.api.get<unknown>('/api/v1/groups');
}

export async function chapters() {
  return await Kindful.api.get<unknown>('/api/v1/chapters');
}

export async function customFields() {
  return await Kindful.api.get<MetaCustomFieldsResponse>('/api/v1/custom_fields');
}

export async function customFieldGroups() {
  return await Kindful.api.get<MetaCustomFieldGroupsResponse>('/api/v1/custom_field_groups');
}

export async function details() {
  return await Kindful.api.get<MetaDetailsResponse>('/api/v1/details');
}

export async function funds() {
  return await Kindful.api.get<MetaFundsResponse>('/api/v1/funds');
}

export async function importStats() {
  return await Kindful.api.get<ImportStatsResponse>('/api/v1/imports/stats');
}

export async function importStatus(id: string) {
  return await Kindful.api.get<ImportStatusResponse>(`/api/v1/import/${id}`);
}
