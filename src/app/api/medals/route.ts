import { MedalService } from '@/services/MedalService';
import { ValidationError } from '@/utils/api/errors/validationError';
import { logError } from '@/utils/api/logger';
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
    logError('GET /api/medals failed', error); // can change the error message to be more specific

    if (error instanceof ValidationError) {
      return NextResponse.json(
        { error: error.message },
        { status: 422 } // Unprocessable Entity
      );
    }

    if (error instanceof Error && error.message.includes('ENOENT')) {
      return NextResponse.json(
        { error: 'Medal data file not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Unexpected server error. Please try again later.' },
      { status: 500 }
    );
  }
}

