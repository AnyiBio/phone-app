import { authenticatedFetch } from '../api-client';

export async function GET(req: any, { params }: any) {
  const slug = params.slug;
  let res = { ok: false, message: 'Invalid Request', products: [] };

  if (slug === 'products') {
    try {
      const data = await authenticatedFetch(`${process.env.NEXT_PUBLIC_API_PHONE}`);
      console.log('data auth', data);
      res = {
        ok: true,
        message: 'Success!',
        products: data
      };
    } catch (error) {
      res = {
        ok: false,
        message: 'Something went wrong',
        products: []
      };
    }
  }
  return Response.json(res);
}
