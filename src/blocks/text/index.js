/** @format */

import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import "./editor.scss";
import Settings from "../button/Settings";

registerBlockType(metadata.name, {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
        >
            <path
                fill="currentColor"
                d="M3.5 2A1.5 1.5 0 0 0 2 3.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 3.5 1h1a.5.5 0 0 1 0 1zm0 12A1.5 1.5 0 0 1 2 12.5v-1a.5.5 0 0 0-1 0v1A2.5 2.5 0 0 0 3.5 15h1a.5.5 0 0 0 0-1zM14 3.5A1.5 1.5 0 0 0 12.5 2h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 15 3.5v1a.5.5 0 0 1-1 0zM12.5 14a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1zm-8-6a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m.5 2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1zm-.5-4.5A.5.5 0 0 1 5 5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5"
            ></path>
        </svg>
    ),

    edit: (props) => {
        const { attributes, setAttributes } = props;
        const blockProps = useBlockProps();

        return (
            <>
                <Settings {...props} />
                <Text blockProps={blockProps} props={props}>
                    <RichText
                        value={attributes.content}
                        onChange={(content) => setAttributes({ content })}
                        placeholder={__(
                            "Lorem Ipsum Dolor Amet Sit...",
                            "wp-send"
                        )}
                    />
                </Text>
            </>
        );
    },
    save: (props) => {
        const blockProps = useBlockProps.save();

        return (
            <Text blockProps={blockProps} props={props}>
                {props.attributes.content}
            </Text>
        );
    },
});

function Text({ blockProps, children, props }) {
    const { fontSize, color } = props.attributes;

    return (
        <p
            {...blockProps}
            style={{
                fontSize,
                color,
                lineHeight: "24px",
                margin: "16px 0",
            }}
        >
            {children}
        </p>
    );
}
