const { test, expect } = require('@playwright/test');
const {person, url, url_text_box} = require('../helper/variables.js');


test.describe('Elements', () => {
    test('Text Box', async ({page}) => {
        await page.goto(url);

        await page.locator('svg').first().click();

        await page.locator('text=Text Box').click();
        await expect(page).toHaveURL(url_text_box);

        await page.locator('[placeholder="Full Name"]').click();
        await page.locator('[placeholder="Full Name"]').fill(person.full_name);

        await page.locator('[placeholder="name\\@example\\.com"]').click();
        await page.locator('[placeholder="name\\@example\\.com"]').fill(person.email);

        await page.locator('#currentAddress').click();
        await page.locator('#currentAddress').fill(person.current_address);

        await page.locator('#permanentAddress').click();
        await page.locator('#permanentAddress').fill(person.permanent_address);

        await page.locator('text=Submit')

        await expect(page.locator('text=Name:'+person.full_name)).toBeVisible;
        await expect(page.locator('text=Email:'+person.email)).toBeVisible;
        await expect(page.locator('text=Current Address:'+person.current_address)).toBeVisible;
        await expect(page.locator('text=Permanent Address:'+person.permanent_address)).toBeVisible;
    });

    test('Check Box', async ({page}) => {
        await page.goto(url)
        await page.locator('svg').first().click();
        await page.locator('text=Check Box').click();

        await page.locator('#tree-node svg').nth(3).click();
        await expect(page.locator('#tree-node svg')).toBeChecked;
    });
})
