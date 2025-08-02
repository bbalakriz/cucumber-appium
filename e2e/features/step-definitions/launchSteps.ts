import { Given } from '@wdio/cucumber-framework';

Given('the app is launched', async () => {
  const el = await $('~welcome-text'); // <- corresponds to testID="welcome-text"
  await expect(el).toBeDisplayed();
});
