import { test } from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeEach(async ({ page }) => { 
        await page.goto("https://practice.cydeo.com/");
   });

  test('Check() checks the radio buttons and checkboxes if they havnt been checked yet', async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'");//used text content to locate element

    await checkboxesLink.click();

    let checkBox1 = page.locator("#box1");
    // await page.waitForTimeout(3000);

    await checkBox1.check();
    // await page.waitForTimeout(3000);

  });

  test('unchecked() unchecks the radio buttons and checkboxes if they havnt been unchecked yet', async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'"); //used text content to locate element

    await checkboxesLink.click();

    let checkBox2 = page.locator("#box2"); //ccs selector
    // await page.waitForTimeout(3000);

    await checkBox2.uncheck();
    // await page.waitForTimeout(3000);

  });

  test('selectOption() used for dropdowns', async ({ page }) => {
    
    page.locator("text='Dropdown'").click(); //used text content to locate element

    let simpleDropDown =page.locator("//select[@id='dropdown']");

   // await page.waitForTimeout(3000);

    // select by value
   // await simpleDropDown.selectOption("1");

   // select by visible text
   // await simpleDropDown.selectOption( { label: "Option 1" } ); // the label is visible text

    // select by index
    await simpleDropDown.selectOption( { index: 1 } ); // the index is index number

  //  await page.waitForTimeout(3000);

  });


  test('innerText() retrives the visible text', async ({ page }) => {

     let headerElement = page.locator("//span[@class='h1y']");

     let actualText = await headerElement.innerText();

     console.log(actualText);
    
  });

  
   test('inputValue(): only works with <input>, <textarea>, <select>', async ({ page }) => {

      //  await page.getByText("Inputs").click();
        let inputsLink = page.getByText("Inputs");

      //  await inputsLink.scrollIntoViewIfNeeded();
      //  await page.waitForTimeout(3000);

        await inputsLink.click();

        let inputBox = page.locator("//input[@type='number']");

        await page.waitForTimeout(3000);


        await inputBox.fill("123");

        await page.waitForTimeout(3000);

        let inputValue = await inputBox.inputValue();

        console.log(inputValue);

  });


});