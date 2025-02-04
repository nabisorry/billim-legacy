// 외부모듈
import axios from "axios";

// 내부모듈
import { IProductApiReturn } from "@type/product";
import sleep from "@lib/utils/sleep";

const BASE_URL = "https://asia-northeast3-billim-93f78.cloudfunctions.net";

export type TOrderby = "priceAsc" | "priceDesc" | "recent";

export interface IfetchProductsOption {
  location: string;
  orderBy?: TOrderby;
  pageSize?: number | string;
  page?: number | string;
  category?: string | null;
}

export interface IRegistationProduct {
  title: string;
  text: string;
  price: number;
  category: string;
  publisherId: string;
  location: string;
}

export const fetchRegistrationProduct = async (product: FormData) => {
  const data = await axios.post(`${BASE_URL}/postProduct`, product, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  // TODO 추후수정
  await sleep(3000);

  return data;
};

export const fetchGetProducts = async ({
  location,
  orderBy = "recent",
  pageSize = 10,
  page = 1,
  category,
}: IfetchProductsOption): Promise<IProductApiReturn[]> => {
  const response = await axios.get(`${BASE_URL}/getProducts`, {
    params: { location, orderBy, pageSize, page, category },
  });

  return response.data.products;
};

export const fetchGetProduct = async (
  id: string
): Promise<IProductApiReturn> => {
  const response = await axios.get(`${BASE_URL}/getProduct`, {
    params: { id },
  });

  return response.data.product;
};

export const fetchUpdateViewCount = async (
  id: string
): Promise<{ result: boolean }> => {
  const response = await axios.patch(`${BASE_URL}/updateViewCount`, { id });

  return response.data.product;
};
