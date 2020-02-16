import { newE2EPage } from '@stencil/core/testing';

describe('remote-table-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<remote-table-container></remote-table-container>');
    const element = await page.find('remote-table-container');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
