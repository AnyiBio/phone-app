import { Phone } from '@/app/models/product-detail.model';
import { authenticatedFetch } from '../api-client';

export async function GET(req: any, { params }: any) {
  const slug = params.slug;
  let res = { ok: false, message: 'Invalid Request', products: [] };

  if (slug === 'products') {
    try {
      const data = await authenticatedFetch(`${process.env.NEXT_PUBLIC_API_PHONE}`);

      const uniqueProducts = data.filter(
        (product: Phone, index: number, self: Phone[]) =>
          index === self.findIndex((p) => p.id === product.id)
      );

      const limitedProducts = uniqueProducts.slice(0, 20);
      res = {
        ok: true,
        message: 'Success!',
        products: limitedProducts
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
