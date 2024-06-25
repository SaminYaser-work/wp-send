/**
 * WordPress dependencies
 *
 * @format
 */

import { Path, SVG } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
    {
        name: "one-column-full",
        title: __("100"),
        description: __("One column"),
        icon: (
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
            >
                <Path d="M0 10a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Z" />
            </SVG>
        ),
        innerBlocks: [["wp-send/column", {}, [["wp-send/text"]]]],
        scope: ["block"],
    },
    {
        name: "two-columns-equal",
        title: __("50 / 50"),
        description: __("Two columns; equal split"),
        icon: (
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
            >
                <Path d="M0 10a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm25 0a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2V10Z" />
            </SVG>
        ),
        isDefault: true,
        innerBlocks: [
            ["wp-send/column", {}, [["wp-send/text"]]],
            ["wp-send/column", {}, [["wp-send/text"]]],
        ],
        scope: ["block"],
    },
    {
        name: "two-columns-one-third-two-thirds",
        title: __("33 / 66"),
        description: __("Two columns; one-third, two-thirds split"),
        icon: (
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
            >
                <Path d="M0 10a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm17 0a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V10Z" />
            </SVG>
        ),
        innerBlocks: [
            ["wp-send/column", { width: "33.33%" }, [["wp-send/text"]]],
            ["wp-send/column", { width: "66.66%" }, [["wp-send/text"]]],
        ],
        scope: ["block"],
    },
    {
        name: "two-columns-two-thirds-one-third",
        title: __("66 / 33"),
        description: __("Two columns; two-thirds, one-third split"),
        icon: (
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
            >
                <Path d="M0 10a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10Zm33 0a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35a2 2 0 0 1-2-2V10Z" />
            </SVG>
        ),
        innerBlocks: [
            ["wp-send/column", { width: "66.66%" }, [["wp-send/text"]]],
            ["wp-send/column", { width: "33.33%" }, [["wp-send/text"]]],
        ],
        scope: ["block"],
    },
    {
        name: "three-columns-equal",
        title: __("33 / 33 / 33"),
        description: __("Three columns; equal split"),
        icon: (
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
            >
                <Path d="M0 10a2 2 0 0 1 2-2h10.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm16.5 0c0-1.105.864-2 1.969-2H29.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H18.47c-1.105 0-1.969-.895-1.969-2V10Zm17 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H35.469c-1.105 0-1.969-.895-1.969-2V10Z" />
            </SVG>
        ),
        innerBlocks: [
            ["wp-send/column", {}, [["wp-send/text"]]],
            ["wp-send/column", {}, [["wp-send/text"]]],
            ["wp-send/column", {}, [["wp-send/text"]]],
        ],
        scope: ["block"],
    },
    {
        name: "three-columns-wider-center",
        title: __("25 / 50 / 25"),
        description: __("Three columns; wide center column"),
        icon: (
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
            >
                <Path d="M0 10a2 2 0 0 1 2-2h7.531c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H2a2 2 0 0 1-2-2V10Zm13.5 0c0-1.105.864-2 1.969-2H32.53c1.105 0 1.969.895 1.969 2v28c0 1.105-.864 2-1.969 2H15.47c-1.105 0-1.969-.895-1.969-2V10Zm23 0c0-1.105.864-2 1.969-2H46a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2h-7.531c-1.105 0-1.969-.895-1.969-2V10Z" />
            </SVG>
        ),
        innerBlocks: [
            ["wp-send/column", { width: "25%" }, [["wp-send/text"]]],
            ["wp-send/column", { width: "50%" }, [["wp-send/text"]]],
            ["wp-send/column", { width: "25%" }, [["wp-send/text"]]],
        ],
        scope: ["block"],
    },
];

export default variations;
