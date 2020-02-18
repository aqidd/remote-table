import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'remote-table-footer',
    styleUrl: 'remote-table-footer.css'
})
export class RemoteTableFooter {

    @Prop() footerText: string;

    render() {
        return (
            <div>
                <br/>
                {this.footerText}
            </div>
        )
    }
}
