export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.closeButton = this.modal.querySelector("#modal-close-button");
    this.heandleOverlayClose = () => this.close();
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.#initClose();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.closeButton.removeEventListener("click", this.heandleOverlayClose);
    this.overlay.removeEventListener("click", this.heandleOverlayClose);
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      this.open();
    });
  }

  #initClose() {
    this.closeButton.addEventListener("click", this.heandleOverlayClose);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.heandleOverlayClose)
    }
  }
}
