export class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeButton = document.getElementById(`${modalId}-close`);
        this.initCloseButton();
    }

    open() {
        this.modal.classList.add('modal-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    initCloseButton() {
        this.closeButton.addEventListener('click', () => this.close());
    }
}