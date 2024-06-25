/** @format */

import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    FontSizePicker,
    __experimentalBoxControl as BoxControl,
    __experimentalBorderControl as BorderControl,
    RangeControl,
    ToggleControl,
} from "@wordpress/components";
import Color from "../../fields/Color";
import { __ } from "@wordpress/i18n";
import "../../fields/field-styles.scss";

export default function Settings(props) {
    const { attributes, setAttributes } = props;

    const {
        color,
        backgroundColor,
        padding,
        fontSize,
        border,
        borderRadius,
        width,
    } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody>
                    <ToggleControl
                        label={__("Fixed Width", "wp-send")}
                        checked={width !== "auto"}
                        onChange={(val) => {
                            setAttributes({
                                width: val ? "50" : "auto",
                            });
                        }}
                    />

                    {width !== "auto" && (
                        <RangeControl
                            label={__("Width", "wp-send")}
                            max={500}
                            min={0}
                            value={isNaN(Number(width)) ? 50 : Number(width)}
                            onChange={(width) => setAttributes({ width })}
                        />
                    )}

                    <Color
                        value={[color, backgroundColor]}
                        onChange={(values) => {
                            setAttributes({
                                color: values[0],
                                backgroundColor: values[1],
                            });
                        }}
                        labels={[
                            __("Color", "wp-send"),
                            __("Background Color", "wp-send"),
                        ]}
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
                    <BorderControl
                        colors={[
                            {
                                color: "#72aee6",
                                name: "Blue 20",
                            },
                            {
                                color: "#3582c4",
                                name: "Blue 40",
                            },
                            {
                                color: "#e65054",
                                name: "Red 40",
                            },
                            {
                                color: "#8a2424",
                                name: "Red 70",
                            },
                            {
                                color: "#f2d675",
                                name: "Yellow 10",
                            },
                            {
                                color: "#bd8600",
                                name: "Yellow 40",
                            },
                        ]}
                        label={__("Border", "wp-send")}
                        onChange={(border) => setAttributes({ border })}
                        value={border}
                        disableUnits={true}
                        withSlider={true}
                        __experimentalIsRenderedInSidebar
                        shouldSanitizeBorder
                        style={{
                            paddingBottom: "24px",
                        }}
                    />
                    <RangeControl
                        label={__("Border Radius (px)", "wp-send")}
                        max={100}
                        min={0}
                        value={borderRadius}
                        onChange={(borderRadius) =>
                            setAttributes({ borderRadius })
                        }
                    />
                    <BoxControl
                        label={__("Padding", "wp-send")}
                        values={padding}
                        onChange={(padding) => {
                            console.log(padding);
                            setAttributes({ padding });
                        }}
                        splitOnAxis={true}
                        allowReset={false}
                        units={[{ value: "px", label: "px" }]}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
}
