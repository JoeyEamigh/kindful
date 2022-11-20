import { ImportResponse } from '../types/imports';
import { importStatus } from './meta';

export function createQueue<T>(data: T[], chunkSize: number = 100): T[][] {
  const queue: T[][] = [];
  for (let i = 0; i < data.length; i += chunkSize) queue.push(data.slice(i, i + chunkSize));
  return queue;
}

export async function pollForCompletion(jobs: ImportResponse[]) {
  while (jobs.length) {
    await new Promise(r => setTimeout(r, 10000));
    const statuses = await Promise.all(jobs.map(({ id }) => importStatus(id)));
    statuses.forEach(status => status.status === 'complete' && (jobs = jobs.filter(({ id }) => id !== status.id)));
  }
}
