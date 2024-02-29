import { expect, test } from "@playwright/test";

test("successfully switch modes", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `mode`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Changed mode to verbose")).toBeVisible();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Changed mode to brief ")).toBeVisible();
});

test("load after mode switch", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `mode`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Changed mode to verbose")).toBeVisible();
  const mock_input1 = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input1);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Output: Loaded dataset1 with 13 rows ")).toBeVisible();
});

test("view after mode switch", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `mode`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Output: Changed mode to verbose ")).toBeVisible();
  const mock_input1 = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input1);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Output: Loaded dataset1 with 13 rows ")).toBeVisible();
  const mock_input2 = `view`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (2)").click();
  await expect(page.getByText("Command: view ")).toBeVisible();
});

test("mode switch after loading", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1 with 13 rows")).toBeVisible();
  const mock_input1 = `mode`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input1);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Output: Changed mode to verbose ")).toBeVisible();
  const mock_input2 = `view`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (2)").click();
  await expect(page.getByText("Command: view ")).toBeVisible();
});