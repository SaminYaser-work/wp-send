/** @format */

import { __ } from "@wordpress/i18n";
import "./editor.scss";
import { useSelect, useDispatch } from "@wordpress/data";
import {
    createBlocksFromInnerBlocksTemplate,
    store as blocksStore,
} from "@wordpress/blocks";

import {
    useInnerBlocksProps,
    __experimentalBlockVariationPicker,
    useBlockProps,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import Row from "./row";

export default function Edit(props) {
    const { clientId } = props;

    const blockProps = useInnerBlocksProps(useBlockProps(), {
        allowedBlocks: ["wp-send/column"],
    });

    const hasInnerBlocks = useSelect(
        (select) => select(blockEditorStore).getBlocks(clientId).length > 0,
        [clientId]
    );

    if (hasInnerBlocks) {
        return <Row blockProps={blockProps} />;
    }

    return <Placeholder {...props} />;
}

function Placeholder({ clientId, name, setAttributes }) {
    const { blockType, defaultVariation, variations } = useSelect(
        (select) => {
            const {
                getBlockVariations,
                getBlockType,
                getDefaultBlockVariation,
            } = select(blocksStore);

            return {
                blockType: getBlockType(name),
                defaultVariation: getDefaultBlockVariation(name, "block"),
                variations: getBlockVariations(name, "block"),
            };
        },
        [name]
    );
    const { replaceInnerBlocks } = useDispatch(blockEditorStore);
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <__experimentalBlockVariationPicker
                icon={blockType?.icon?.src}
                label={blockType?.title}
                variations={variations}
                instructions={__("Divide into columns. Select a layout:")}
                onSelect={(nextVariation = defaultVariation) => {
                    if (nextVariation.attributes) {
                        setAttributes(nextVariation.attributes);
                    }
                    if (nextVariation.innerBlocks) {
                        replaceInnerBlocks(
                            clientId,
                            createBlocksFromInnerBlocksTemplate(
                                nextVariation.innerBlocks
                            ),
                            true
                        );
                    }
                }}
                allowSkip
            />
        </div>
    );
}
