/**
 * Notice an interesting way that error is handled here.
 * 
 * @param {*} param0 
 * @returns an Input field
 */
export default function Input({ label, id, error, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            <div className="control-error">{error && <p>{error}</p>}</div>
        </div>
    );
}