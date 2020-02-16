import { newE2EPage } from '@stencil/core/testing';

describe('remote-table-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<remote-table-content></remote-table-content>');
    const element = await page.find('remote-table-content');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
