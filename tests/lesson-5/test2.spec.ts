import { test } from '@playwright/test';

//Mở trình duyệt: page
test("lesson5", async ({ page }) => {
    await test.step("step1: open browser", async () => {
        //Step1: Đi đến trang web:
        await page.goto("https://material.playwrightvn.com/");

        // Stp2: Go to Bai hoc 2
        await page.locator('//a[contains(text(), "Bài học 2: Product page")]').click();

        // Add to cart_Product1: 2
        await page.locator('//button[@data-product-id="1"=contains(text(), "Add to Cart")]').click({ clickCount: 2 });

        // Add to cart_Product2: 3
        await page.locator('//button[@data-product-id="2"]').click({ clickCount: 3 });

        // Add to cart_Product3: 1
        await page.locator('//button[@data-product-id="3"]').click({ clickCount: 1 });


    });



});