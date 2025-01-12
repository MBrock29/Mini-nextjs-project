import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type || typeof type !== 'string') {
      return NextResponse.json(
        { error: 'Invalid type provided.' },
        { status: 400 }
      );
    }

    const validTypes = ['posts', 'albums', 'users'];
    if (!validTypes.includes(type)) {
      return NextResponse.json({ error: 'Invalid type.' }, { status: 400 });
    }

    revalidateTag(`data-${type}`);

    return NextResponse.json({
      message: `Cache for ${type} has been invalidated.`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}
