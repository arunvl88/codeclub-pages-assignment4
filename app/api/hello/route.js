import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

/*
export async function GET(request) {
  let responseText = 'Hello World'

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  return new Response(responseText)
}
*/
export default {
	async fetch(request, env, ctx) {
	  // Check if the request method is POST
	  if (request.method === 'GET') {
		// Define key value pairs
		const randomMessage = {
			1: "Hola 1",
			2: "Hola 2",
			3: "Hola 3",
			4: "Hola 4",
		  };

		const max = 4;
		
		const random_number = Math.floor(Math.random() * max) + 1;

		const OUTPUT = { Message: randomMessage[random_number]};

		// Set the Content-Type header to application/json
		const headers = {
			'Content-Type': 'application/json'
		};

		// Return a JSON response with status code 200 OK
		return new Response(JSON.stringify(OUTPUT), {
		  status: 200,
		  headers: headers
		});
	  } else {
		// For other request methods, return the default response
		return new Response('Use GET request');
	  }
	},
  };
