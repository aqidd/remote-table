import { Component, h } from '@stencil/core';


@Component({
    tag: 'remote-table',
    styleUrl: 'remote-table-container.css'
})
export class RemoteTableContainer {


    render() {
        return [
            <remote-table-header 
            onSearchEvent={console.log}></remote-table-header>,
            <remote-table-content></remote-table-content>,
            <remote-table-footer></remote-table-footer>
        ];
    }
}
