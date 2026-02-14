import { expect, Locator, Page } from "@playwright/test";

export class CommonFunctions {
    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    /**
     * @description Verifies the URL of the current page
     * @param expectedUrl URL to be asserted
     */
    async verifyPageUrl (expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    /**
     * @description Here we use async function and if else for locating expected text and unexpected
     *
     * @param locator 
     * @param expectedText 
     * @param partialMatch 
     */
    async verifyTextOfAnElement (locator: Locator, expectedText: string, partialMatch: boolean = false) {
        if (partialMatch) {
            await expect(locator).toContainText(expectedText);
        } else {
            await expect(locator).toHaveText(expectedText);
        }
    }
}