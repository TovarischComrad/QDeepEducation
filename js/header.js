class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="logo">
                    <img src="source/qdeep_edu.png">
                </div>
            </header>
      `;
    }
}
  
customElements.define('header-component', Header);