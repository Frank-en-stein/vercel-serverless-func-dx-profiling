import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { squareNumber, canBeConvertedToNumber } from './squarer';
export const runtime = 'edge';
export function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const param = searchParams.get("num");
  const result = !canBeConvertedToNumber(param) ? "No number provided" : squareNumber(Number(param));
  return NextResponse.json(
    {
      Result: result
    },
    {
      status: 200,
    },
  );
}
