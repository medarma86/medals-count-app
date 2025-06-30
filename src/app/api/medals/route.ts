import { MedalService } from '@/services/MedalService';
import { NextResponse } from 'next/server';

const medalService = new MedalService();

export async function GET() {
  try {
    const data = await medalService.fetchMedals();

    if (!data || data.length === 0) {
      return NextResponse.json(
        { message: 'No medal data found.' },
        { status: 204 } // No Content
      );
    }

    return NextResponse.json(data, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Error fetching medals:', error); //remove this before pushing to production
}
}
