/** @format */

import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import variations from "./variants";
registerBlockType(metadata.name, {
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M22 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM4 14h4v-4H4zm6 0h4v-4h-4zm6 0h4v-4h-4z"
            ></path>
        </svg>
    ),
    edit: Edit,
    save,
    variations,
});
