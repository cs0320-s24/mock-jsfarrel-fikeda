import { expect, test } from "@playwright/test";

test("successfully clears after logout", async ({ page }) => {
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
    await page.getByLabel("Command input").click();
    await page.getByLabel("Command input").fill(mock_input1);
    await page.getByText("Submit (0)").click();
    await expect(page.getByText("Error: No file loaded")).toBeVisible();
});