import { getTalents } from '@/services/talents';

export async function GET() {
  const data = await getTalents();
  return Response.json(data);
}
