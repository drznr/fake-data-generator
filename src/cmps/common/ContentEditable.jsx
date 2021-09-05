import { useRef } from 'react';
 
const ContentEditable = ({ initialValue = '', onChange }) => {
    const value = useRef(initialValue);

    const handleInput = (ev) => {
        if (!onChange) return;
        onChange(ev.target.textContent);
    }

    return (
        <span
            suppressContentEditableWarning
            contentEditable
            onInput={handleInput}
            onBlur={handleInput}
            dangerouslySetInnerHTML={{ __html: value.current }}
        />
    )
}

export default ContentEditable;
