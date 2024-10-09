import { test } from "@playwright/test";

test("", async ({ page }) => {
  // go to https://www.google.com
  await page.goto("https://www.google.com");

  // pause the automation for 3 seconds
  await page.waitForTimeout(3000);

  // Accept all cookies button click
const acceptAllButton = page.locator("//div[@class='QS5gu sy4vM']");
await acceptAllButton.nth(1).click();

  let searchBox = page.locator("//textarea[@class='gLFyf']");

  // enter "Cydeo" in the search box
  await searchBox.fill("Cydeo");

  // pause the automation for 3 seconds
  await page.waitForTimeout(3000);
});

//<div class="QS5gu sy4vM" role="none">Accept all</div>
