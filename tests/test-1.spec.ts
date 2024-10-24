import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Search for a smartphone...').click();
  await page.getByPlaceholder('Search for a smartphone...').fill('sa');
  await page.goto('http://localhost:3000/?query=sa');
  await page.getByPlaceholder('Search for a smartphone...').fill('sas');
  await page.goto('http://localhost:3000/?query=sas');
  await page.getByPlaceholder('Search for a smartphone...').fill('sa');
  await page.goto('http://localhost:3000/?query=sa');
  await page.getByPlaceholder('Search for a smartphone...').fill('sam');
  await page.goto('http://localhost:3000/?query=sam');
  await page.getByPlaceholder('Search for a smartphone...').fill('samsu');
  await page.goto('http://localhost:3000/?query=samsu');
  await page.getByPlaceholder('Search for a smartphone...').fill('samsun');
  await page.goto('http://localhost:3000/?query=samsun');
  await page.getByPlaceholder('Search for a smartphone...').fill('samsung');
  await page.goto('http://localhost:3000/?query=samsung');
  await page.getByRole('link', { name: 'phone image Galaxy A35 5G' }).click();
  await page.getByText('128 GB').click();
  await page.locator('.color-square').first().click();
  await page.getByRole('button', { name: 'AÑADIR' }).click();
});