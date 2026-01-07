class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        // TODO Убрать из CSS класс header
        this.innerHTML = `
            <header class="header">
                <div class="logo">
                    <a class="logo_link" href="/QDeepEducation/index.html"><img src="/QDeepEducation/source/qdeep_edu.png"></a>
                </div>
            </header>
      `;
    }
}
  
customElements.define('header-component', Header);