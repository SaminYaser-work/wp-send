/** @format */

export default function Row({ blockProps }) {
    return (
        <table
            align="center"
            width="100%"
            border={0}
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
        >
            <tbody style={{ width: "100%" }}>
                <tr style={{ width: "100%" }} {...blockProps} />
            </tbody>
        </table>
    );
}
