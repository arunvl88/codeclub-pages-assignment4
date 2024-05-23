import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'


export async function GET(request) {
  const responses = [
    'Hello, how are you?',  // English
    'Hola, ¿cómo estás?',   // Spanish
    'Bonjour, comment ça va?', // French
    'Hallo, wie geht es dir?'  // German
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const responseText = responses[randomIndex];

  return new Response(responseText);
}
