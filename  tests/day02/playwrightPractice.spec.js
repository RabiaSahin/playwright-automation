
import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
   await page.goto("https://www.youtube.com/");

   await page.waitForTimeout(3000);

   const acceptAllButton = page.locator("//div[@class='yt-spec-touch-feedback-shape__fill']")
   //<div class="yt-spec-touch-feedback-shape__fill" style=""></div>
   await acceptAllButton.nth(7).click();

   //page.$$(''); // it returns the element handle but does not haveautobility and retry ability. For that it is not good practice for automatin testing

   let searchBox = page.locator("//input[@id='search']");

   //input[@name='search_query' and @id='search'] // bu sekilde 2 li de kullanilabilir unique elementi elde etmek icin

   await searchBox.click();

   await searchBox.fill('Cydeo');

   await page.waitForTimeout(3000);

   await searchBox.press("Enter");

   await page.waitForTimeout(3000);

   //display the first video in the CYDEO page

   let firstResult = page.locator("(//a[@id='video-title'])[1]");

   await firstResult.click();

   // await page.waitForTimeout(10000);

});