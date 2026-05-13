document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".services-showcase");

    const number = document.getElementById("serviceNumber");
    const label = document.getElementById("serviceLabel");
    const title = document.getElementById("serviceTitle");
    const description = document.getElementById("serviceDescription");
    const tags = document.getElementById("serviceTags");

    const visuals = document.querySelectorAll(".service-visual");

    const services = [
        {
            number: "01",
            label: "Sites",
            title: "Sites modernos<br>e estratégicos.",
            description:
                "Crio sites modernos, rápidos e responsivos para empresas que precisam transmitir autoridade e converter visitantes em clientes.",
            tags: ["Responsivo", "SEO", "Performance"]
        },

        {
            number: "02",
            label: "Landing Pages",
            title: "Landing pages<br>de alta conversão.",
            description:
                "Páginas estratégicas focadas em anúncios, campanhas e geração de leads qualificados.",
            tags: ["Conversão", "CTA", "Leads"]
        },

        {
            number: "03",
            label: "Sistemas",
            title: "Sistemas<br>personalizados.",
            description:
                "Desenvolvimento de plataformas, painéis administrativos e sistemas internos sob medida.",
            tags: ["Dashboard", "Automação", "Escalável"]
        },

        {
            number: "04",
            label: "UI UX",
            title: "Interfaces<br>claras e modernas.",
            description:
                "Criação de interfaces intuitivas focadas em experiência e percepção visual premium.",
            tags: ["UI", "UX", "Wireframe"]
        },

        {
            number: "05",
            label: "Manutenção",
            title: "Manutenção<br>e melhorias.",
            description:
                "Correções, ajustes, personalizações e suporte contínuo para sites e sistemas.",
            tags: ["Suporte", "Atualizações", "Correções"]
        },

        {
            number: "06",
            label: "SEO",
            title: "SEO e<br>performance.",
            description:
                "Estrutura otimizada para carregamento rápido e melhor posicionamento no Google.",
            tags: ["SEO", "Velocidade", "Google"]
        }
    ];

    let current = 0;

    function render(index) {

        const item = services[index];

        number.textContent = item.number;
        label.textContent = item.label;

        title.innerHTML = item.title;

        description.textContent = item.description;

        tags.innerHTML = item.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");

        visuals.forEach(v => v.classList.remove("active"));

        visuals[index].classList.add("active");
    }

    function updateScroll() {

        const rect = section.getBoundingClientRect();

        const progress =
            Math.min(
                Math.max(-rect.top / (section.offsetHeight - window.innerHeight), 0),
                1
            );

        const index =
            Math.min(
                services.length - 1,
                Math.floor(progress * services.length)
            );

        if (index !== current) {
            current = index;
            render(index);
        }
    }

    render(0);

    window.addEventListener("scroll", updateScroll);
});