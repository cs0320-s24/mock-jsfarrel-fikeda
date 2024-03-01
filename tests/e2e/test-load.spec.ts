import { expect, test } from "@playwright/test";

test("successfully loads file", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();

  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1")).toBeVisible();
});

test("error when loading invalid file", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load invaliddataset`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("File invaliddataset not found ")).toBeVisible();
});

test("warning when loading empty file", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset3`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("empty")).toBeVisible();
});

test("error when loading corrupted file", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset4`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("corrupted")).toBeVisible();
});

test("loading different file", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1")).toBeVisible();
  const mock_input2 = `load dataset2`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Loaded dataset2")).toBeVisible();
});
