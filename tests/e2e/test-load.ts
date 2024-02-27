import { expect, test } from "@playwright/test";

test("successfully loads file", async ({ page }) => {
    await page.goto("http://localhost:8000/");
    await page.getByLabel("Login").click();
    await expect(page.getByLabel("Sign Out")).toBeVisible();
  
    const mock_input = `load dataset1`;
    await page.getByLabel("Command input").click();
    await page.getByLabel("Command input").fill(mock_input);
    await page.getByText("Submit (0)").click();
    await expect(page.getByText("load: Loaded dataset from dataset1")).toBeVisible();
  });

  test("error when loading invalid file", async ({ page }) => {
    await page.goto("http://localhost:8000/");
    await page.getByLabel("Login").click();
    await expect(page.getByLabel("Sign Out")).toBeVisible();
    const mock_input = `load invaliddataset`;
    await page.getByLabel("Command input").click();
    await page.getByLabel("Command input").fill(mock_input);
    await page.getByText("Submit (0)").click();
    await expect(page.getByText("load: Error: File 'invaliddataset' not found")).toBeVisible();
  });

  test("loading different file", async ({ page }) => {
    await page.goto("http://localhost:8000/");
    await page.getByLabel("Login").click();
    await expect(page.getByLabel("Sign Out")).toBeVisible();
    const mock_input = `load dataset1`;
    await page.getByLabel("Command input").click();
    await page.getByLabel("Command input").fill(mock_input);
    await page.getByText("Submit (0)").click();
    await expect(page.getByText("load: Loaded dataset from dataset1")).toBeVisible();
    const mock_input2 = `load dataset2`;
    await page.getByLabel("Command input").click();
    await page.getByLabel("Command input").fill(mock_input2);
    await page.getByText("Submit (1)").click();
    await expect(page.getByText("load: Loaded dataset from dataset2")).toBeVisible();
  });
