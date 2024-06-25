/** @format */

export default function Label({ children, htmlFor = '' }) {
    return (
        <label className="components-base-control__label" htmlFor={htmlFor}>
            {children}
        </label>
    );
}
