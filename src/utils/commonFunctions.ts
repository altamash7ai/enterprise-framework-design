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
     * @description Verifies the text of an element
     * @param locator The element whose text is to be verified
     * @param expectedText text to be asserted
     * @param partialMatch Whether to match partially or no
     */
    async verifyTextOfAnElement (locator: Locator, expectedText: string, partialMatch: boolean = false) {
        if (partialMatch) {
            await expect(locator).toContainText(expectedText);
        } else {
            await expect(locator).toHaveText(expectedText);
        }
    }

    //asdfghjkjhgf
    // TODO: Function which clicks an element
}