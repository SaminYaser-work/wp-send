/** @format */

import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import Row from "./row";
export default function save() {
    const props = useInnerBlocksProps.save(useBlockProps.save());

    return <Row blockProps={props} />;
}
