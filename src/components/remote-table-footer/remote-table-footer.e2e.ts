import { newE2EPage } from '@stencil/core/testing';

describe('remote-table-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<remote-table-footer></remote-table-footer>');
    const element = await page.find('remote-table-footer');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
