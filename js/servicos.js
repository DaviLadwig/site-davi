console.log("servicos.js carregou");

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".services-pin");

    const label = document.getElementById("serviceLabel");
    const title = document.getElementById("serviceTitle");
    const description = document.getElementById("serviceDescription");
    const tags = document.getElementById("serviceTags");
    const mockupTitle = document.getElementById("serviceMockupTitle");
    const metric = document.getElementById("serviceMetric");
    const status = document.getElementById("serviceStatus");
    const dots = document.querySelectorAll("[data-service-dot]");

    if (!section || !label || !title || !description || !tags) {
        console.warn("Serviços: elementos não encontrados.");
        return;
    }

    const services = [
        {
            label: "01 - Sites",
            title: "Sites",
            description: "Crio sites modernos, responsivos e estratégicos para empresas que precisam transmitir autoridade, gerar confiança e transformar visitantes em clientes.",
            tags: ["Responsivo", "Design exclusivo", "SEO inicial", "Performance"],
            mockupTitle: "SITE",
            metric: "+42% conversão",
            status: "Online"
        },
        {
            label: "02 - Landing Pages",
            title: "Landing Pages",
            description: "Desenvolvo landing pages focadas em conversão, ideais para campanhas, anúncios, lançamentos e captação de clientes qualificados.",
            tags: ["Alta conversão", "Copy estratégica", "CTA direto", "Leads"],
            mockupTitle: "LANDING",
            metric: "+68% leads",
            status: "Campanha"
        },
        {
            label: "03 - Sistemas Personalizados",
            title: "Sistemas Personalizados",
            description: "Construo sistemas sob medida para organizar processos, controlar informações, automatizar tarefas e profissionalizar operações.",
            tags: ["Painel admin", "Banco de dados", "Automação", "Escalável"],
            mockupTitle: "SYSTEM",
            metric: "-55% processos manuais",
            status: "Gestão"
        },
        {
            label: "04 - UI e UX Design",
            title: "UI/UX Design",
            description: "Crio interfaces modernas, claras e intuitivas, pensadas para melhorar a experiência do usuário e valorizar a percepção da marca.",
            tags: ["Interface", "Usabilidade", "Protótipo", "Experiência"],
            mockupTitle: "UI/UX",
            metric: "+37% retenção",
            status: "Design"
        },
        {
            label: "05 - Manutenção e Personalização",
            title: "Manutenção e Personalização",
            description: "Faço ajustes, correções, melhorias visuais, novas seções e personalizações em sites e sistemas já existentes.",
            tags: ["Correções", "Melhorias", "Suporte", "Novas seções"],
            mockupTitle: "SUPORTE",
            metric: "+80% estabilidade",
            status: "Ativo"
        },
        {
            label: "06 - SEO e Performance",
            title: "SEO e Performance",
            description: "Otimizo estrutura, carregamento, organização e boas práticas para que seu site seja mais rápido, profissional e preparado para o Google.",
            tags: ["Velocidade", "Google", "Otimização", "Boas práticas"],
            mockupTitle: "SEO",
            metric: "+61% velocidade",
            status: "Otimizado"
        }
    ];

    let activeIndex = -1;

    function render(index) {
        if (index === activeIndex) return;

        const service = services[index];

        label.textContent = service.label;
        title.textContent = service.title;
        description.textContent = service.description;

        tags.innerHTML = service.tags.map(tag => `<span>${tag}</span>`).join("");

        if (mockupTitle) mockupTitle.textContent = service.mockupTitle;
        if (metric) metric.textContent = service.metric;
        if (status) status.textContent = service.status;

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");

        activeIndex = index;

        console.log("Mostrando:", index, service.title);
    }

    function handleScroll() {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const start = sectionTop;
        const end = sectionTop + sectionHeight - viewportHeight;

        const scrollY = window.scrollY;

        if (scrollY < start) {
            section.classList.remove("is-fixed", "is-ended");
            render(0);
            return;
        }

        if (scrollY >= start && scrollY <= end) {
            section.classList.add("is-fixed");
            section.classList.remove("is-ended");

            const progress = (scrollY - start) / (end - start);
            const index = Math.min(
                services.length - 1,
                Math.floor(progress * services.length)
            );

            render(index);
            return;
        }

        if (scrollY > end) {
            section.classList.remove("is-fixed");
            section.classList.add("is-ended");
            render(services.length - 1);
        }
    }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = Number(dot.dataset.serviceDot);

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            const end = sectionTop + sectionHeight - viewportHeight;
            const total = end - sectionTop;

            const target = sectionTop + total * (index / services.length);

            window.scrollTo({
                top: target + 4,
                behavior: "smooth"
            });
        });
    });

    render(0);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
});