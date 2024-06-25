/** @format */

import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

import { __ } from "@wordpress/i18n";

export const basicBlocks = ["button", "link", "heading", "img"].map(
    (name) => "wp-send/" + name
);

/** @format */

export function convertToPx(value) {
    let px = 0;

    if (!value) {
        return px;
    }

    if (typeof value === "number") {
        return value;
    }

    const matches = /^([\d.]+)(px|em|rem|%)$/.exec(value);

    if (matches && matches.length === 3) {
        const numValue = parseFloat(matches[1]);
        const unit = matches[2];

        switch (unit) {
            case "px":
                return numValue;
            case "em":
            case "rem":
                px = numValue * 16;
                return px;
            case "%":
                px = (numValue / 100) * 600;
                return px;
            default:
                return numValue;
        }
    } else {
        return 0;
    }
}

export function parsePadding(padding) {
    return {
        pt: removeUnit(padding.top),
        pr: removeUnit(padding.right),
        pb: removeUnit(padding.bottom),
        pl: removeUnit(padding.left),
    };
}

/**
 *
 * @param {string | number} p
 * @returns {number}
 */
function removeUnit(p) {
    if (typeof p === "number") {
        return p;
    }

    const res = Number(p?.replace("px", ""));
    return isNaN(res) ? 0 : res;
}

export const pxToPt = (px) =>
    typeof px === "number" && !isNaN(Number(px)) ? (px * 3) / 4 : null;

export const parseBorder = (border) => {
    if (!border?.color || !border?.style || !border?.width) {
        return "none";
    }

    return `${border.width} ${border.style} ${border.color}`;
};

export function AlignmentControl({ value, onChange }) {
    return (
        <ToggleGroupControl
            label={__("Alignment", "wp-send")}
            value={value}
            onChange={onChange}
            isBlock
        >
            <ToggleGroupControlOptionIcon
                icon={
                    <span className="dashicons dashicons-editor-alignleft"></span>
                }
                value="left"
                label={__("Left", "wp-send")}
            />
            <ToggleGroupControlOptionIcon
                icon={
                    <span className="dashicons dashicons-editor-aligncenter"></span>
                }
                value="center"
                label={__("Center", "wp-send")}
            />
            <ToggleGroupControlOptionIcon
                icon={
                    <span className="dashicons dashicons-editor-alignright"></span>
                }
                value="right"
                label={__("Right", "wp-send")}
            />
        </ToggleGroupControl>
    );
}
