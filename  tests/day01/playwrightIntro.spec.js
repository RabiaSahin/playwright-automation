//const {test} = require('@playwright/test'); // Import the test function from '@playwright/test' module in javascript. we used it in JS module

import { test } from "@playwright/test"; // new version of import statement

// if you import the test function, that you are able to create the test function.
//test("Test Decription", async ({fixtureName}) => {}); //test function with a description and a fixture name parameter

test("Simple playwright test", async ({ page }) => {
  await page.goto("https://www.google.com/"); //navigates the url
  //goto method returns a promise that resolves to the page object. for that reason, we used await. await can be used only inside an async function.

  await page.waitForTimeout(3000); // Waits for the given timeout in milliseconds.

  // Accept all cookies button click
  const acceptAllButton = page.locator("//div[@class='QS5gu sy4vM']");
  await acceptAllButton.nth(1).click(); 

  let searchBox = page.locator("//textarea[@class='gLFyf']"); // locate the search box web element
  // The locator method returns an element locator that can be used to perform actions on this page / frame. Retorn type is not promise. If we want to store the data have to assign it.
  // once you get the locator object, you can use the methods of locator object
  await searchBox.fill("Playwright Automation"); // type all of them at once to

  //await searchBox.type("Playwright Automation"); // each character type one by one

  await page.waitForTimeout(3000);
});

/*

<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwid2NOYlryIAxUxD1kFHVEaHyUQ39UDCAY"></textarea>
*/

//textarea[@class='gLFyf']
