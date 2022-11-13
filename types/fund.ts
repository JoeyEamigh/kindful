export interface Fund {
  id: number;
  external_id?: string | null;
  sync_version?: number;
  name: string;
  created_at?: string;
  updated_at?: string;
  record_type?: 'fund';
  _links?: {
    self?: string;
  };
}
