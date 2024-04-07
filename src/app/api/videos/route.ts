import { NextRequest } from 'next/server';
import { Database } from '@/common/db/database';

export async function GET() {
  try {
    const data = await Database.videos();

    return Response.json(data);
  } catch {
    return new Response(`File not found`, { status: 400 })
  }
}