/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface RemoteTable {
    'footerText': string;
    'remoteUrl': string;
    'tableTitle': string;
  }
  interface RemoteTableContent {
    'remoteUrl': string;
  }
  interface RemoteTableFooter {
    'footerText': string;
  }
  interface RemoteTableHeader {
    'titleText': string;
  }
}

declare global {


  interface HTMLRemoteTableElement extends Components.RemoteTable, HTMLStencilElement {}
  var HTMLRemoteTableElement: {
    prototype: HTMLRemoteTableElement;
    new (): HTMLRemoteTableElement;
  };

  interface HTMLRemoteTableContentElement extends Components.RemoteTableContent, HTMLStencilElement {}
  var HTMLRemoteTableContentElement: {
    prototype: HTMLRemoteTableContentElement;
    new (): HTMLRemoteTableContentElement;
  };

  interface HTMLRemoteTableFooterElement extends Components.RemoteTableFooter, HTMLStencilElement {}
  var HTMLRemoteTableFooterElement: {
    prototype: HTMLRemoteTableFooterElement;
    new (): HTMLRemoteTableFooterElement;
  };

  interface HTMLRemoteTableHeaderElement extends Components.RemoteTableHeader, HTMLStencilElement {}
  var HTMLRemoteTableHeaderElement: {
    prototype: HTMLRemoteTableHeaderElement;
    new (): HTMLRemoteTableHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'remote-table': HTMLRemoteTableElement;
    'remote-table-content': HTMLRemoteTableContentElement;
    'remote-table-footer': HTMLRemoteTableFooterElement;
    'remote-table-header': HTMLRemoteTableHeaderElement;
  }
}

declare namespace LocalJSX {
  interface RemoteTable {
    'footerText'?: string;
    'remoteUrl'?: string;
    'tableTitle'?: string;
  }
  interface RemoteTableContent {
    'remoteUrl'?: string;
  }
  interface RemoteTableFooter {
    'footerText'?: string;
  }
  interface RemoteTableHeader {
    'onSearchEvent'?: (event: CustomEvent<string>) => void;
    'titleText'?: string;
  }

  interface IntrinsicElements {
    'remote-table': RemoteTable;
    'remote-table-content': RemoteTableContent;
    'remote-table-footer': RemoteTableFooter;
    'remote-table-header': RemoteTableHeader;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'remote-table': LocalJSX.RemoteTable & JSXBase.HTMLAttributes<HTMLRemoteTableElement>;
      'remote-table-content': LocalJSX.RemoteTableContent & JSXBase.HTMLAttributes<HTMLRemoteTableContentElement>;
      'remote-table-footer': LocalJSX.RemoteTableFooter & JSXBase.HTMLAttributes<HTMLRemoteTableFooterElement>;
      'remote-table-header': LocalJSX.RemoteTableHeader & JSXBase.HTMLAttributes<HTMLRemoteTableHeaderElement>;
    }
  }
}


