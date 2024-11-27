document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("last-modified");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    const hamburgerButton = document.getElementById("hamburger-button");
    const navMenu = document.querySelector("nav ul");

    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
        hamburgerButton.textContent = navMenu.classList.contains("visible") ? "X" : "☰";
    });

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52560,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/800x1280/tokyo_japan_temple-main.jpeg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 37720,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/5-Rome-Temple-2160345.jpg"
        }
    ];

    const templeCards = document.getElementById("templeCards");

    function renderTemples(templeArray) {
        templeCards.innerHTML = "";

        templeArray.forEach((temple) => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            const name = document.createElement("h2");
            name.textContent = temple.templeName;
            card.appendChild(name);

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;
            card.appendChild(location);

            const dedicated = document.createElement("p");
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;
            card.appendChild(dedicated);

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area} sq ft`;
            card.appendChild(area);

            const image = document.createElement("img");
            image.src = temple.imageUrl;
            image.alt = `${temple.templeName}`;
            image.loading = "lazy";
            card.appendChild(image);

            templeCards.appendChild(card);
        });
    }

    function filterTemples(criteria) {
        let filtered;

        switch (criteria) {
            case "old":
                filtered = temples.filter(
                    (temple) => new Date(temple.dedicated).getFullYear() < 1900
                );
                break;
            case "new":
                filtered = temples.filter(
                    (temple) => new Date(temple.dedicated).getFullYear() > 2000
                );
                break;
            case "large":
                filtered = temples.filter((temple) => temple.area > 90000);
                break;
            case "small":
                filtered = temples.filter((temple) => temple.area < 10000);
                break;
            default:
                filtered = temples;
        }

        renderTemples(filtered);
    }

    document.querySelector("#home").addEventListener("click", () => filterTemples());
    document.querySelector("#old").addEventListener("click", () => filterTemples("old"));
    document.querySelector("#new").addEventListener("click", () => filterTemples("new"));
    document.querySelector("#large").addEventListener("click", () => filterTemples("large"));
    document.querySelector("#small").addEventListener("click", () => filterTemples("small"));

    renderTemples(temples);
});
