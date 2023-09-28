import axios from 'axios';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.LAMBDA_GETRESPONSE_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }
    console.log(messages);

    let fullUrl = `${BASE_URL}?query=${messages}`


    const response = await axios.get(fullUrl)

    return NextResponse.json(response.data);
  } catch (error) {
    console.log('[CONVERSATION_ERROR: ', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
