"use client";

import './index.css';

export function ApiTable() {
    return (
        <table id="fields">
            <tbody>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Title</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Title of the field. Above the selection element</td>
                </tr>
                <tr>
                    <td>Options</td>
                    <td>String[]</td>
                    <td>Yes</td>
                    <td>Menu items in the dropdown</td>
                </tr>
                <tr>
                    <td>SelectionMode</td>
                    <td>enum SelectionMode (SingleSelect | MultiSelect)</td>
                    <td>No</td>
                    <td>Whether multi-select or single-select is enabled. Default to single-select</td>
                </tr>
                <tr>
                    <td>Required</td>
                    <td>Boolean</td>
                    <td>No</td>
                    <td>Determines if dropdown selection is required. Enables error message if no value is provided. Default to false</td>
                </tr>
                <tr>
                    <td>DefaultText</td>
                    <td>String</td>
                    <td>No</td>
                    <td>Default text displayed when no selection is made</td>
                </tr>
                <tr>
                    <td>onSelectionChange</td>
                    <td>{"(options: string[]) => void"}</td>
                    <td>No</td>
                    <td>Callback to receive value of dropdown selection </td>
                </tr>
            </tbody>
        </table>
    )
}