import { expect, test } from "@playwright/test";

test("successfully searches", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1")).toBeVisible();
  const mock_input2 = `search 1 Brown`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Brown St")).toBeVisible();
});

test("error when search without file loaded", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `search 1 Brown`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Error: No file loaded ")).toBeVisible();
});

test("search invalid term", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1")).toBeVisible();
  const mock_input2 = `search invalid invalid`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("not found in column")).toBeVisible(); //edit this
});

test("search no results", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset1`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Loaded dataset1")).toBeVisible();
  const mock_input2 = `search 0 nonexistant`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("not found in")).toBeVisible();
});

test("search empty dataset", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset3`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Warning")).toBeVisible();
  const mock_input2 = `search 0 nonexistant`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("not found in")).toBeVisible();
});

test("search one input failure", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  const mock_input = `load dataset3`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input);
  await page.getByText("Submit (0)").click();
  await expect(page.getByText("Warning")).toBeVisible();
  const mock_input2 = `search 0`;
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill(mock_input2);
  await page.getByText("Submit (1)").click();
  await expect(page.getByText("Not enough arguments")).toBeVisible();
});
