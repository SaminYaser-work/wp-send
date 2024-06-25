/** @format */

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import "./editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import { AlignmentControl } from "../utils";

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
                d="M20 20h.01M4 20h.01M8 20h.01M12 20h.01M16 20h.01M20 4h.01M4 4h.01M8 4h.01M12 4h.01M16 4v.01M4 9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
            ></path>
        </svg>
    ),
    edit: (props) => {
        const { attributes, setAttributes } = props;

        const blockProps = useInnerBlocksProps(useBlockProps(), {
            // allowedBlocks: ["wp-send/row", ...basicBlocks],
        });
        return (
            <>
                <InspectorControls>
                    <PanelBody>
                        <AlignmentControl
                            value={attributes.alignment}
                            onChange={(alignment) =>
                                setAttributes({ alignment })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <Section blockProps={blockProps} props={props} />
            </>
        );
    },
    save: (props) => {
        const blockProps = useInnerBlocksProps.save(useBlockProps.save());
        return <Section blockProps={blockProps} props={props} />;
    },
});

function Section({ blockProps, props }) {
    const {
        attributes: { alignment },
    } = props;

    return (
        <table
            align="center"
            width="100%"
            border={0}
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
            style={{
                textAlign: alignment,
            }}
        >
            <tbody>
                <tr>
                    <td {...blockProps} />
                </tr>
            </tbody>
        </table>
    );
}
