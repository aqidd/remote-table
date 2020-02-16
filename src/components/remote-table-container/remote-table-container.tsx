import { Component, h, State } from '@stencil/core';


@Component({
    tag: 'remote-table',
    styleUrl: 'remote-table-container.css'
})
export class RemoteTableContainer {

    @State() remoteUrl: string;

    componentWillLoad() {
        this.remoteUrl = 'https://raw.githubusercontent.com/aqidd/remote-table/master/db.json'
    }

    render() {
        return [
            <remote-table-header
                onSearchEvent={this.appendSearchQuery.bind(this)}
            ></remote-table-header>,
            <remote-table-content
                remoteUrl={this.remoteUrl}
            ></remote-table-content>,
            <remote-table-footer></remote-table-footer>
        ];
    }

    appendSearchQuery(event: any) {
        this.remoteUrl += '?search=' + event.detail;
    }

}
