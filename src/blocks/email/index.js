/** @format */

import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import domReady from "@wordpress/dom-ready";
import { __ } from "@wordpress/i18n";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import "./editor.scss";

const MY_TEMPLATE = [
    [
        "wp-send/container",
        {},
        [["wp-send/section", {}, [["wp-send/text", {}]]]],
    ],
];

registerBlockType(metadata.name, {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
        >
            <path
                fill="#96a9b2"
                d="M511.824 425.007c1.941-5.245-220.916-173.519-220.916-173.519c-27.9-20.589-42.574-20.913-70.164 0c0 0-222.532 168.138-220.659 173.311l-.045.038c.023.045.06.076.091.117a48.482 48.482 0 0 0 8.119 14.157c1.473 1.786 3.248 3.282 4.955 4.837l-.083.064c.136.121.317.177.453.298c7.235 6.454 16.359 10.634 26.495 11.827c.159.019.287.102.446.121h.612c1.541.147 3.006.517 4.584.517h420.721c20.717 0 38.269-13.028 45.241-31.291c.083-.136.211-.234.287-.374z"
            ></path>
            <path
                fill="#b9c5c6"
                d="M256.133 232.176L1.216 423.364V152.515c0-26.4 21.397-47.797 47.797-47.797h414.24c26.4 0 47.797 21.397 47.797 47.797v270.849z"
            ></path>
            <path
                fill="#edece6"
                d="m4.189 135.896l217.645 170.949c27.47 20.271 41.918 20.591 69.083 0L508.22 136.167c-3.77-6.834-9.414-12.233-15.869-16.538l2.989-2.342c-7.295-6.641-16.62-10.946-26.971-12.058l-424.455.015c-10.322 1.097-19.662 5.417-26.942 12.043l2.967 2.313c-6.38 4.245-11.972 9.551-15.75 16.296"
            ></path>
            <path
                fill="#dce2e2"
                d="M4.118 136.254C2.207 141.419 221.63 307.099 221.63 307.099c27.47 20.271 41.918 20.591 69.083 0c0 0 219.103-165.546 217.258-170.64l.045-.037c-.022-.045-.059-.074-.089-.115a47.732 47.732 0 0 0-7.994-13.939c-1.45-1.759-3.198-3.231-4.878-4.763l.082-.063c-.134-.119-.312-.175-.446-.294c-7.124-6.354-16.107-10.47-26.086-11.645c-.156-.019-.283-.1-.439-.119h-.602c-1.517-.145-2.96-.509-4.514-.509H48.81c-20.398 0-37.68 12.828-44.543 30.809c-.082.134-.208.231-.283.368z"
            ></path>
            <path
                fill="#597b91"
                d="M291.401 154.645h-38.632a6.155 6.155 0 0 0-6.155 6.155v21.722a6.155 6.155 0 0 0 6.155 6.155h31.415a6.155 6.155 0 0 1 6.155 6.155v11.616a6.155 6.155 0 0 1-6.155 6.155h-31.415a6.155 6.155 0 0 0-6.155 6.155v23.578a6.155 6.155 0 0 0 6.155 6.155h41.316a6.155 6.155 0 0 1 6.155 6.155v12.441a6.155 6.155 0 0 1-6.155 6.155h-75.76a6.155 6.155 0 0 1-6.155-6.155V136.461a6.155 6.155 0 0 1 6.155-6.155h74.81c3.749 0 6.627 3.322 6.092 7.033l-1.733 12.028a6.156 6.156 0 0 1-6.093 5.278"
            ></path>
        </svg>
    ),
    edit: () => {
        const props = useInnerBlocksProps(useBlockProps(), {
            template: MY_TEMPLATE,
        });

        return <div {...props} />;
    },
    save: () => {
        const doctype =
            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';

        return (
            <>
                <RawHtml html={doctype} />
                <Html>
                    <Head />
                    <Body>
                        <div
                            {...useInnerBlocksProps.save(useBlockProps.save())}
                        />
                    </Body>
                </Html>
            </>
        );
    },
});

// Hack to render html strings without wrapper
const RawHtml = ({ html = "" }) => (
    <script dangerouslySetInnerHTML={{ __html: `</script>${html}<script>` }} />
);

function Html({ children, lang = "en", dir = "ltr" }) {
    return (
        <html dir={dir} lang={lang}>
            {children}
        </html>
    );
}

function Head({ children = null }) {
    return (
        <head>
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta name="x-apple-disable-message-reformatting" />
            {children}
        </head>
    );
}

function Body({ children }) {
    return <body>{children}</body>;
}

Body.displayName = "Body";

domReady(() => {
    let ranOnce = false;

    wp.data.subscribe(() => {
        const postType = wp.data.select("core/editor").getCurrentPostType();

        if (
            postType === null ||
            postType === undefined ||
            ranOnce ||
            typeof postType !== "string"
        ) {
            return;
        }

        ranOnce = true;

        const isEmailPostType = postType === "email";

        wp.blocks.getBlockTypes().forEach(function (blockType) {
            if (
                (isEmailPostType && !blockType.name.startsWith("wp-send")) ||
                (!isEmailPostType && blockType.name.startsWith("wp-send"))
            ) {
                wp.blocks.unregisterBlockType(blockType.name);
            }
        });
    });
});
