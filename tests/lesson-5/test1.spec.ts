// import playwright
import { test } from '@playwright/test';

//Mở trình duyệt: page
test("lesson5", async ({ page }) => {
    await test.step("step1: open browser", async () => {
        //Step1: Đi đến trang web:
        await page.goto("https://material.playwrightvn.com/");

        //Step2: click on Register Page
        await page.locator('//a[contains(text(), "Bài học 1: Register Page")]').click();


        //Step3: Form: user name:
        await page.locator('//*[@id="username"]').fill("Võ Minh Phụng");

        //Form: Email:
        await page.locator('//*[@id="email"]').fill("vominhphung.vip@gmail.com");

        //Form: Gender:
        await page.locator('//*[@id="male"]').check();

        //Form: Hobbies:
        await page.locator('//*[@id="traveling"]').click();

        //Form: Interests:
        await page.locator('//*[@id="interests"]/option[4]').click();

        //Form: Country:
        await page.locator('//*[@id="country"]').click();

        //Form: Country selected:
        await page.locator('//*[@id="country"]').selectOption("Canada");


        //Form: Profile picture
        await page.locator('//input[@id="profile"]').setInputFiles("input\image.txt");


        //Form: Biography
        await page.locator('//*[@id="bio"]').click();


        //Form: Rate Us
        await page.locator('//*[@id="rating"]').click();


        //Form: Favorite Color:
        await page.locator('//input[@value="#ff0000"]').click();

        //Form: Register button
        await page.locator('//button[@type="submit"]').click();


    });



});