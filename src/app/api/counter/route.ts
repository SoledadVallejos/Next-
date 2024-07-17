import { NextResponse } from "next/server";

// API

export async function GET(request: Request) {

  // console.log({ method: request.method });

  return NextResponse.json({
    method: 'GET',
    count: 100, 
  });
}

export async function POST(request: Request) {

  // console.log({ method: request.method });

  return NextResponse.json({
    method: 'POST',
    count: 100,
  });
}




//manejo de rutas --> route.ts , no tener en la ruta un  page.ts, sino se ejecuta ese y no mi ruta

// use in postman : localhost:3000/api/counter
/* respuesta :  
    method: 'POST',
    count: 100,  
*/


// https://nextjs.org/docs/app/building-your-application/routing/route-handlers