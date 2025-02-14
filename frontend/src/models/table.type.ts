import { JSX } from "react"

export type TableRowProps = {
    row:Record<string,string | number | JSX.Element>
}

export type TableCellProps = {
  value: string | number | JSX.Element; 
};