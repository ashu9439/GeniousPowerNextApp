import { NextResponse } from 'next/server';
import axios from 'axios';
import * as XLSX from 'xlsx';
import type { Product } from "@/app/types/product";

const EXCEL_URL =
  process.env.PRODUCTS_EXCEL_URL ||
  'https://docs.google.com/spreadsheets/d/1ohqkeBL_wUDgk5tzwnbAzXLjZhMQaDIDAyGit8O_E0M/export?format=xlsx';

export async function GET() {
  try {
    const response = await axios.get(EXCEL_URL, { responseType: 'arraybuffer' });
    const workbook = XLSX.read(response.data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    const products: Product[] = json.map((row: any, idx: number) => ({
      id: Number(row.id ?? row.ID ?? idx + 1),
      name: row.name ?? row.Name ?? '',
      sku: row.sku ?? row.SKU ?? '',
      category: row.category ?? row.Category ?? '',
      price: row.price ? Number(row.price) : undefined,
      currency: row.currency ?? 'USD',
      description: row.description ?? '',
      specs: row.specs ?? '',
      image_url: row.image_url ?? row.image ?? '',
      stock: row.stock ? Number(row.stock) : undefined,
      tags: (row.tags ?? '').toString().split(',').map((t: string) => t.trim()).filter(Boolean),
      usage_instructions: row.usage_instructions ?? ''
    }));

    const cleaned = products.filter(p => p.name && p.id);
    return NextResponse.json({ ok: true, count: cleaned.length, data: cleaned });
  } catch (err: any) {
    console.error('Failed to load Excel', err?.message ?? err);
    return NextResponse.json(
      { ok: false, error: 'Failed to fetch or parse Excel file' },
      { status: 500 }
    );
  }
}
