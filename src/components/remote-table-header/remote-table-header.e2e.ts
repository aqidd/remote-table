import { newE2EPage } from '@stencil/core/testing';

describe('remote-table-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<remote-table-header></remote-table-header>');
    const element = await page.find('remote-table-header');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
