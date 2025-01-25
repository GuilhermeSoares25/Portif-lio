class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles ());

        build(); {
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card");


            const card_left = document.createElement("div");
            cardleft.setAttribute("cardleft", "card_left");

            const autor = document.createElement("span");
            autor.textContent = "By " + (this.getAttribute("autor") || "By Anonymous");
             
            const linkTitle = document.createElement("a");
            linkTitle.textContent = this.getAttribute("title");

            const newsContents = document.createElement("p");
            newsContents.textContent = this.getAttribute("content");

            cardleft.appendChild(autor);
            cardleft.appendChild(linkTitle);
            cardleft.appendChild(newsContents);


            const card_right = document.createElement("div");
            cardright.setAttribute("cardright", "card_right");
            const newsImage = document.createElement("img");
            cardRight.appendChild(newsImage);

            componentRoot.appendChild(cardleft);
            componentRoot.appendChild(cardright);

            return componentRoot;
        };
        
        styles();{


        }

    }
}
customElements.define("card-news", Cardnews);