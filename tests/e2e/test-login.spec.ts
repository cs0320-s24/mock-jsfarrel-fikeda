import { expect, test } from "@playwright/test";

test("successfully logs in and signs out", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();

  await page.getByLabel("Sign Out").click();
  await expect(page.getByLabel("Login")).toBeVisible();

  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
});
