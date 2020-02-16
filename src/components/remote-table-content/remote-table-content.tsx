import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'remote-table-content',
    styleUrl: 'remote-table-content.css'
})
export class RemoteTableContent {

    @Prop() remoteUrl: string;

    @State() contents: any;

    componentWillLoad() {
        this.contents = this.fetchContent()
        // should be
        // return fetch('/some-data.json')
        // .then(response => response.json())
        // .then(data => {
        //   this.contents = data;
        // });
    }

    render() {
        const id = 'remote_table'
        return (
            <table id={id}>
                {this.renderTableHead()}
                {this.renderTableBody()}
            </table>
        );
    }

    componentDidLoad() {
        $("#remote_table").DataTable()
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
        const css_ = {overflow: 'scroll'}
        return (
            <tbody>
                {this.contents.map((item: any) =>
                    (<tr>
                        {Object.keys(this.contents[0]).map(key =>
                            (
                                <td style={css_}>{this.parseContent(item, key)}</td>
                            )
                        )}
                    </tr>)
                )}
            </tbody>
        )
    }

    parseContent(item: any, key: string) {
        let content = item[key]
        const css_ = { float: 'left', marginRight: '20px'}
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

    fetchContent() {
        return [
            {
                ThisNumber: 'TN 12345',
                ThisItem: 'TI Item 1',
                MMA: 'MMA1',
                SNum: 'SN 01',
                Reference: {
                    'Ref field 1': 'Value 1',
                    'Ref field 2': 'Value 2'
                },
                MultiValue: {
                    'MultiValue 1': {
                        Date1: '010120',
                        date2: '010120',
                        date3: '010120'
                    },
                    'MultiValue 2': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 3': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 4': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 5': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: ''
                    },
                    'MultiValue 6': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: ''
                    },
                    'MultiValue 7': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: ''
                    },
                    'MultiValue 8': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: ''
                    }
                }
            },
            {
                ThisNumber: 'TN 567',
                ThisItem: 'TI Item 2',
                MMA: 'MMA2',
                SNum: 'SN 02',
                Reference: {
                    'Ref field 1': 'Value 3',
                    'Ref field 2': 'Value 4'
                },
                MultiValue: {
                    'MultiValue 10': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 20': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 30': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 40': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: '010120'
                    },
                    'MultiValue 50': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: ''
                    },
                    'MultiValue 60': {
                        Date1: '010120',
                        Date2: '010120',
                        Date3: ''
                    }
                }
            }
        ]
    }
}
