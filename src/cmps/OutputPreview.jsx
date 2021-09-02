import { useRecoilValue } from 'recoil';
import { stringified } from '../state/output';

const OutputPreview = () => {
    const preview = useRecoilValue(stringified);
    
    return (
        <section className="output-preview flex-center">
            <pre>{preview}</pre>
        </section>
    )
}

export default OutputPreview;