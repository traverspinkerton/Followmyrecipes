// import { drizzle } from "drizzle-orm/d1"

export async function GET({params, request, locals}) {
  const { results } = await locals.runtime.env.DB.prepare(
        "SELECT * FROM Customers WHERE CompanyName = ?"
      )
        .bind("Bs Beverages")
        .all();
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
  }