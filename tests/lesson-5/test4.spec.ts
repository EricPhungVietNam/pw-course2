import { test } from '@playwright/test';

//Mở trình duyệt: page
test("lesson5", async ({ page }) => {
    await test.step("step1: open browser", async () => {
        //Step1: Đi đến trang web:
        await page.goto("https://material.playwrightvn.com/");

        // Stp2: Go to "Personal notes"
        await page.locator('//a[contains(text(), "Bài học 4: Personal notes")]').click();

    });
});