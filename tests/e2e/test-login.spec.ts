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


test("logout after commands", async ({ page }) => {
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
  await page.getByLabel("Sign Out").click();
  await expect(page.getByLabel("Login")).toBeVisible();
});

test("login after commands", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1 with 13 rows")).toBeVisible();
  const mock_input1 = `view`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input1);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Brown St")).toBeVisible();
  await page.getByLabel("Sign Out").click();
  await expect(page.getByLabel("Login")).toBeVisible();
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
});

