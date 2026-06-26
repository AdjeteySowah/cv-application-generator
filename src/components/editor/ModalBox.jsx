import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

export default function ModalBox({
  pdfHeight,
  onCloseModal,
  onDecreasePdfHeight,
  onIncreasePdfHeight,
  onDone,
}) {
  return (
    <div className="modal-box">
      <Button
        className="modal-box__close"
        onClick={onCloseModal}
        aria-label="Close"
      >
        <Icon name="x" />
      </Button>

      <p className="modal-box__description">
        If there was too much blank space at the bottom of the PDF,
        try adjusting the PDF height.
      </p>

      <div className="modal-box__controls">
        <Button className="inc-pdf-height" onClick={onDecreasePdfHeight}>−</Button>

        <span className="modal-box__height">
          {pdfHeight}in
        </span>

        <Button className="dec-pdf-height" onClick={onIncreasePdfHeight}>+</Button>
      </div>

      <Button className="modal-done" onClick={onDone}>
        Done
      </Button>
    </div>
  );
}
