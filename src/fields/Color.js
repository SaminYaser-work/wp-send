/** @format */

import { __ } from "@wordpress/i18n";
import Label from "./Label";
import {
    TabPanel,
    ColorPicker,
    Dropdown,
    DuotoneSwatch,
} from "@wordpress/components";

const DEF_TABS = [
    {
        name: "color1",
        title: __("Color", "wp-send"),
    },
];

export default function Color({ value, onChange, labels = [] }) {
    const isMultiple = Array.isArray(value);

    const _onChange = (val, tab) => {
        const newValue = isMultiple
            ? value.map((v, i) => {
                  if (i === +tab.name) {
                      return val;
                  }
                  return v;
              })
            : val;
        onChange(newValue);
    };

    const _getTabs = () => {
        if (!Array.isArray(value)) {
            return DEF_TABS;
        }

        if (labels.length === value.length) {
            return labels.map((label, index) => {
                return {
                    name: String(index),
                    title: label,
                };
            });
        }

        if (labels.length === value.length) {
            return labels.map((label, index) => {
                return {
                    name: String(index),
                    title: label,
                };
            });
        }

        if (value.length === 2) {
            return [
                {
                    name: "0",
                    title: __("Normal Color", "wp-send"),
                },
                {
                    name: "1",
                    title: __("Hover Color", "wp-send"),
                },
            ];
        }

        return value.map((_, index) => {
            return {
                name: String(index),
                title: "Color " + index + 1,
            };
        });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "24px",
            }}
        >
            <Label htmlFor="color">{__("Color", "wp-send")}</Label>
            <Dropdown
                name={"color"}
                renderToggle={({ onToggle }) => {
                    const Swatches = [];

                    if (Array.isArray(value)) {
                        for (let i = 0; i < value.length; i += 2) {
                            const values = [value[i], value[i + 1]].filter(
                                (v) => v
                            );
                            Swatches.push(
                                <DuotoneSwatch key={i} values={values} />
                            );
                        }
                    } else {
                        Swatches.push(
                            <DuotoneSwatch key={0} values={[value]} />
                        );
                    }

                    return (
                        <div
                            onClick={onToggle}
                            style={{
                                display: "flex",
                                gap: "3px",
                            }}
                        >
                            {Swatches.map((swatch) => {
                                return swatch;
                            })}
                        </div>
                    );
                }}
                renderContent={() => {
                    return (
                        <TabPanel
                            onSelect={function noRefCheck() {}}
                            tabs={_getTabs()}
                        >
                            {(tab) => {
                                return (
                                    <ColorPicker
                                        color={
                                            Array.isArray(value)
                                                ? value[+tab.name]
                                                : value
                                        }
                                        enableAlpha
                                        onChange={(val) => _onChange(val, tab)}
                                    />
                                );
                            }}
                        </TabPanel>
                    );
                }}
            />
        </div>
    );
}
