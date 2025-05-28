import './Modal.css';
import { icons } from '../icons/icons';

function Modal({show, onClose, children, className=''}){
    const CloseIcon = icons.close;

    if(!show) return null;

    return(
        <div className='modal-backdrop' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {/* <button className='close-button' onClick={onClose}> */}
                <CloseIcon className='close-button' onClick={onClose}/>
                {/* </button> */}
                {children}
            </div>
        </div>
    );
}

export default Modal;