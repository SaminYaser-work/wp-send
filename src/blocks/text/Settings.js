/** @format */

import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    FontSizePicker,
} from "@wordpress/components";
import Color from "../../fields/Color";
import { __ } from "@wordpress/i18n";
import "../../fields/field-styles.scss";

export default function Settings(props) {
    const { attributes, setAttributes } = props;

    const { color, fontSize } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody>
                    <Color
                        value={color}
                        onChange={(color) => {
                            setAttributes({
                                color,
                            });
                        }}
                    />
                    <FontSizePicker
                        fontSizes={[
                            {
                                name: "S",
                                size: 12,
                                slug: "small",
                            },
                            {
                                name: "M",
                                size: 16,
                                slug: "normal",
                            },
                            {
                                name: "L",
                                size: 26,
                                slug: "big",
                            },
                        ]}
                        onChange={(fontSize) => setAttributes({ fontSize })}
                        value={fontSize}
                        units={["px"]}
                        __next40pxDefaultSize
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
}
