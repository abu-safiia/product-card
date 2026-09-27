export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    getValues() {
        const formData = new FormData(this.form);
        return Object.fromEntries(formData);
    }

    isValid() {
        return this.form.checkValidity();
    }

    reset() {
        this.form.reset();
    }
}