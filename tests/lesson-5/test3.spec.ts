import { test } from '@playwright/test';

//Mở trình duyệt: page
test("lesson5", async ({ page }) => {
    await test.step("step1: open browser", async () => {
        //Step1: Đi đến trang web:
        await page.goto("https://material.playwrightvn.com/");

        // Stp2: Go to "Todo page"
        await page.locator('//a[contains(text(), "Bài học 3: Todo page")]').click();

        // St3: enter value
        let a = await page.locator('//input[@placeholder="Enter a new task"]').fill("Todo 1");

        // St3: click on Add Task button
        let b = await page.locator('//button[@id="add-task"]').click();

    });
});