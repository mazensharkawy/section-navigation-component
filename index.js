class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", () => {
      this.style.color === "red"
        ? (this.style.color = "blue")
        : (this.style.color = "red");
    });
  }
  connectedCallback() {
    /*called when the element is 
    connected to the page
  */
    this.style.color = "blue";

    const template = document.querySelector("template");

    const clone = document.importNode(template.content, true);

    //this.appendChild(clone);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(clone);
  }
}
customElements.define("cool-navbar", MyComponent);
