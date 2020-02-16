import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
    tag: 'remote-table-content',
    styleUrl: 'remote-table-content.css'
})
export class RemoteTableContent {

    @Prop() remoteUrl: string;

    @State() contents: any;

    @State() isLoading: boolean = true;

    componentWillLoad() {
        this.fetchContent()
    }

    render() {
        console.log('rendering')
        let content = this.isLoading ? this.renderLoading() : this.renderTable()
        return content;
    }

    componentDidRender() {
        $("#remote-table").DataTable()
    }

    renderLoading() {
        return (
            <div class={'loading'}>
            </div>
        )
    }

    renderTable() {
        return (
            <table id={'remote-table'} class={'display'}>
                {this.renderTableHead()}
                {this.renderTableBody()}
            </table>
        )
    }

    renderTableHead() {
        const heads = Object.keys(this.contents[0])
        return (
            <thead>
                <tr>
                    {heads.map(head =>
                        (<th>
                            <strong>{head}</strong>
                        </th>)
                    )}
                </tr>
            </thead>
        )
    }

    renderTableBody() {
        return (
            <tbody>
                {this.contents.map((item: any) =>
                    (<tr>
                        {Object.keys(this.contents[0]).map(key =>
                            (
                                <td>{this.parseContent(item, key)}</td>
                            )
                        )}
                    </tr>)
                )}
            </tbody>
        )
    }

    parseContent(item: any, key: string) {
        let content = item[key]
        const css_ = { float: 'left', marginRight: '20px' }
        if (typeof content === 'object') {
            //complex object
            if (typeof content[Object.keys(content)[0]] === 'object') {
                // display left-right
                content = Object.keys(content).map(key =>
                    (
                        <div style={css_}>
                            <strong>{key}</strong> <br />
                            {this.stripJSON(content[key])}
                        </div>
                    )
                )
            } else {
                // display top-down
                content = this.stripJSON(content)
            }
        }
        return content
    }

    stripJSON(value: any) {
        return JSON.stringify(value).replace(/{|}|"/gm, '').replace(/,/g, '\n')
    }

    @Watch('remoteUrl')
    fetchContent() {
        this.removeDataTableElements()
        this.isLoading = true;
        fetch(this.remoteUrl)
            .then((response: Response) => response.json())
            .then(response => {
                this.contents = response;
                this.isLoading = false;
            });
    }

    removeDataTableElements() {
        let removedElements = ['.dataTables_length', '.dataTables_filter', '.dataTables_info', '.dataTables_paginate']
        removedElements.forEach(el => $(el).remove())
    }
}
