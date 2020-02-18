import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'remote-table',
    styleUrl: 'remote-table-container.css'
})
export class RemoteTableContainer {

    @Prop() remoteUrl: string;

    @Prop() tableTitle: string;

    @Prop() footerText: string;

    render() {
        return [
            <remote-table-header
                onSearchEvent={this.appendSearchQuery.bind(this)}
                title-text={this.tableTitle}
            ></remote-table-header>,
            <remote-table-content
                remoteUrl={this.remoteUrl}
            ></remote-table-content>,
            <remote-table-footer
                footer-text={this.footerText}>
            </remote-table-footer>
        ];
    }

    appendSearchQuery(event: any) {
        this.remoteUrl += '?search=' + event.detail;
    }

}
