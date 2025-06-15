const template = document.createElement("template");
template.id = "nav-bar-template";
template.innerHTML = `
<style>
    legend {
        margin-left: auto;
    }

    .heading {
        font-size: 3rem;
    }

    a {
        color: #5448c8;
    }
    
    fieldset {
        border-radius: 0.5em;
        box-shadow: 0 0 1em 0.5em black;
    }
</style>

<fieldset>
    <legend>
        <h1>ocrovest</h1>
    </legend>
    <nav>
        <a href="./index.html">home</a>
        <a href="./log.html">log</a>
        <a href="./madness.html">madness</a>
        <a href="./contacts.html">contacts</a>
    </nav>
</fieldset>
<br>
`;

class NavBar extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});

        const templateClone = template.content.cloneNode(true);
        this.shadow.appendChild(templateClone);
    }
}


customElements.define("nav-bar", NavBar);