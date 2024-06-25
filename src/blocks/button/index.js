/** @format */

import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import Settings from "./Settings";
import { parseBorder, parsePadding, pxToPt } from "../utils";

registerBlockType(metadata.name, {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
        >
            <path
                fill="currentColor"
                d="M4 6a3 3 0 0 1 0-6h7a3 3 0 1 1 0 6H9V3.5a2.5 2.5 0 0 0-5 0z"
            ></path>
            <path
                fill="currentColor"
                d="M6.5 2A1.5 1.5 0 0 0 5 3.5v4.55a2.5 2.5 0 0 0-2 2.45A4.5 4.5 0 0 0 7.5 15H8a5 5 0 0 0 5-5v-.853A2.147 2.147 0 0 0 10.853 7H8V3.5A1.5 1.5 0 0 0 6.5 2"
            ></path>
        </svg>
    ),

    edit: (props) => {
        const { attributes, setAttributes } = props;
        const blockProps = useBlockProps();

        return (
            <>
                <Settings {...props} />
                <Button attributes={attributes} blockProps={blockProps}>
                    <RichText
                        value={attributes.content}
                        onChange={(content) => setAttributes({ content })}
                        placeholder={__("Button", "wp-send")}
                    />
                </Button>
            </>
        );
    },

    save: ({ attributes }) => {
        return (
            <Button attributes={attributes} blockProps={useBlockProps.save()}>
                {attributes.content}
            </Button>
        );
    },
});

function Button({ children, attributes, target = "_blank", blockProps }) {
    const {
        color,
        backgroundColor,
        padding,
        fontSize,
        border,
        borderRadius,
        width,
    } = attributes;

    const style = {
        width,
        color,
        backgroundColor,
        fontSize,
        border: parseBorder(border),
        borderRadius: borderRadius + "px",
    };

    const { pt, pr, pl, pb } = parsePadding(padding);

    const y = pt + pb;
    const textRaise = pxToPt(y);

    return (
        <a
            {...blockProps}
            style={buttonStyle({ ...style, pt, pr, pb, pl })}
            target={target}
            rel="noopener"
        >
            <span
                dangerouslySetInnerHTML={{
                    __html: `<!--[if mso]><i style="letter-spacing: ${pl}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`,
                }}
            />
            <span style={buttonTextStyle(pb)}>{children}</span>
            <span
                dangerouslySetInnerHTML={{
                    __html: `<!--[if mso]><i style="letter-spacing: ${pr}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`,
                }}
            />
        </a>
    );
}

const buttonStyle = (style) => {
    const { pt, pr, pb, pl, ...rest } = style || {};

    return {
        lineHeight: "100%",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        maxWidth: "100%",
        textAlign: "center",
        ...rest,
        padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
    };
};

const buttonTextStyle = (pb) => {
    return {
        maxWidth: "100%",
        display: "inline-block",
        lineHeight: "120%",
        msoPaddingAlt: "0px",
        msoTextRaise: pxToPt(pb || 0),
    };
};
