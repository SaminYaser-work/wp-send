/** @format */

import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";

registerBlockType(metadata.name, {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01M8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01"
            ></path>
        </svg>
    ),
    edit: () => {
        const props = useInnerBlocksProps(useBlockProps(), {
            allowedBlocks: ["wp-send/section"],
        });

        return <Container blockProps={props} />;
    },
    save: () => {
        const props = useInnerBlocksProps.save(useBlockProps.save());
        return <Container blockProps={props} />;
    },
});

function Container({ blockProps }) {
    return (
        <table
            align="center"
            width="100%"
            border={0}
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
            style={{ maxWidth: "37.5em" }}
        >
            <tbody>
                <tr style={{ width: "100%" }}>
                    <td {...blockProps} />
                </tr>
            </tbody>
        </table>
    );
}
