import { expect, test } from "@playwright/test";

test("successfully view file", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1")).toBeVisible();
  const mock_input2 = `view`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Brown St")).toBeVisible(); // How else can I test this?
});

test("error when view without loading", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `view`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Error: No file loaded")).toBeVisible();
});
