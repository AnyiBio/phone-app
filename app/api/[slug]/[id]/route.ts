import { PhoneDetail } from '@/app/models/product-detail.model';
import { authenticatedFetch } from '../../api-client';

interface ApiResponse {
  ok: boolean;
  message: string;
  productDetail?: PhoneDetail;
}

export async function GET(req: Request, { params }: any) {
  const { slug, id } = params;
  console.log(id, slug);
  let res: ApiResponse = { ok: false, message: 'Invalid Request', productDetail: undefined };

  if (slug === 'products' && !!id) {
    try {
      const data = await authenticatedFetch(`${process.env.NEXT_PUBLIC_API_PHONE}/${id}`);
      res = {
        ok: true,
        message: 'Success!',
        productDetail: data
      };
    } catch (error) {
      res = {
        ok: false,
        message: 'Something went wrong',
        productDetail: undefined
      };
    }
  }
  return Response.json(res);
}
