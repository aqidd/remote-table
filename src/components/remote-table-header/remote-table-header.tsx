import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
    tag: 'remote-table-header',
    styleUrl: 'remote-table-header.css'
})
export class RemoteTableHeader {

    @Event() searchEvent: EventEmitter<string>;

    @Prop() titleText: string;

    submitSearch(event: any) {
        if(event.key == "Enter") {
            this.searchEvent.emit(event.target.value);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.titleText}</h1>
                <br />
            </div>
        );
    }
}
