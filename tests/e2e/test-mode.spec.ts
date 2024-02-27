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