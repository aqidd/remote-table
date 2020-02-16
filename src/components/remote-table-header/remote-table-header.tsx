import { Component, h, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'remote-table-header',
    styleUrl: 'remote-table-header.css'
})
export class RemoteTableHeader {

    @Event() searchEvent: EventEmitter<string>;

    submitSearch(event: any) {
        if(event.key == "Enter") {
            this.searchEvent.emit(event.target.value);
        }
    }

    render() {
        return (
            <div>
                <h1>Remote Table 0.0.1</h1>
                <span>
                    <label>Search Remotely: </label>
                    <input onKeyUp={this.submitSearch.bind(this)}></input>
                </span>
                <br /><br />
            </div>
        );
    }
}
