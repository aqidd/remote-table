import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('RemoteTable', module)
    .add('Json Typicode API', () => `
        <remote-table remote-url='https://jsonplaceholder.typicode.com/todos'
        table-title="Json Typicode Table" footer-text="development on progress..."></remote-table>
  `, { notes })
    .add('Given API', () => `
        <remote-table remote-url='https://raw.githubusercontent.com/aqidd/remote-table/master/db.json'
        table-title="Remote Table 0.0.1" footer-text="development on progress..."></remote-table>
  `, { notes });