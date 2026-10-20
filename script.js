document.addEventListener('DOMContentLoaded', () => {
    
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');

            
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });    
});


const skillsData = {
    "agiles": [
        { name: "Agile", percent: 90 },
        { name: "Scrum", percent: 80 },
        { name: "Kanban", percent: 70 },
        { name: "Lean", percent: 60 }
    ],
    "gestion": [
        { name: "Gestión de iniciativas", percent: 90 },
        { name: "Gestión de stakeholders", percent: 90 },
        { name: "Levantamiento de requerimientos", percent: 90 },
        { name: "Product Backlog", percent: 80 },
        { name: "User stories", percent: 80 }
    ],
    "crm": [
        { name: "Oracle Sales & Service", percent: 90 },
        { name: "Oracle Sales & Service - Redwood", percent: 80 },
        { name: "Salesforce Sales Cloud", percent: 70 },
        { name: "Salesforce Service Cloud", percent: 70 },
        { name: "Salesforce Marketing Cloud", percent: 40 },
        { name: "Adopción tecnológica", percent: 80 },
        { name: "Integración Core", percent: 70 }
    ],
    "apis": [
        { name: "APIs Rest", percent: 70 },
        { name: "Microservicios", percent: 65 },
        { name: "Lectura de contratos de APIs", percent: 65 },
        { name: "Arq. de solución", percent: 65 },
        { name: "Postman", percent: 60 },
        { name: "Dynatrace", percent: 50 }
    ],
    "ia": [
        { name: "Microsoft Copilot Studio", percent: 80 },
        { name: "Prompt Engineering", percent: 70 },
        { name: "Diseño de agentes IA", percent: 60 },
        { name: "Automatización de procesos", percent: 50 }
    ],
    "datos": [
        { name: "Microsoft Excel", percent: 90 },
        { name: "Power BI", percent: 70 },
        { name: "SQL", percent: 70 },
        { name: "Tableau", percent: 50 },
        { name: "Generación de Dashboards", percent: 50 }
    ],
    "diseno": [
        { name: "Jira", percent: 70 },
        { name: "Confluence", percent: 65 },
        { name: "Notion", percent: 60 },
        { name: "Figma", percent: 50 },
        { name: "Trello", percent: 50 }
    ]
};


function getSkillLevel(percent) {
    if (percent <= 50) return "Básico";
    if (percent <= 80) return "Intermedio";
    return "Avanzado";
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card');
    const modal = document.getElementById('skills-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryKey = card.getAttribute('data-category');
            const categoryTitle = card.querySelector('span').innerText;
            const skillsList = skillsData[categoryKey];

            
            modalTitle.innerText = categoryTitle;

            
            modalBody.innerHTML = '';

            
            skillsList.forEach(skill => {
                const levelText = getSkillLevel(skill.percent);
                const htmlStr = `
                    <div class="skill-bar-container">
                        <div class="skill-info">
                            <span>${skill.name}:</span>
                            <span class="skill-level">${levelText}</span>
                        </div>
                        <div class="progress-bg">
                            <div class="progress-fill" style="width: 0%;" data-target="${skill.percent}%"></div>
                        </div>
                    </div>
                `;
                modalBody.insertAdjacentHTML('beforeend', htmlStr);
            });

            
            modal.classList.add('show');

            
            setTimeout(() => {
                const fills = modalBody.querySelectorAll('.progress-fill');
                fills.forEach(fill => {
                    fill.style.width = fill.getAttribute('data-target');
                });
            }, 50);
        });
    });

    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});


const certificadosData = [
    { 
        titulo: "COPILOT STUDIO", 
        institucion: "HUMAN GROWTH", 
        anio: "2026", 
        pdf: "Copilot IA Human Growth.pdf" 
    },
    { 
        titulo: "MICROSOFT COPILOT STUDIO", 
        institucion: "UDEMY", 
        anio: "2026", 
        pdf: "Copilot IA Udemy.pdf" 
    },
    { 
        titulo: "SALESFORCE IMPLEMENTATION", 
        institucion: "TRAILHEAD ACADEMY", 
        anio: "2024", 
        pdf: "Salesforce Implementation.pdf" 
    },
    { 
        titulo: "SALESFORCE - SERVICE CLOUD", 
        institucion: "TRAILHEAD ACADEMY", 
        anio: "2024", 
        pdf: "Service Cloud.pdf" 
    },
    { 
        titulo: "SALESFORCE - TABLEAU", 
        institucion: "TRAILHEAD ACADEMY", 
        anio: "2024", 
        pdf: "Salesforce Tableau.pdf" 
    },
    { 
        titulo: "PORTUGUÉS BÁSICO", 
        institucion: "CENTRO DE IDIOMAS - UNFV", 
        anio: "2023", 
        pdf: "Portugués.pdf" 
    },
    { 
        titulo: "POWER BI", 
        institucion: "WE EDUCACIÓN EJECUTIVA", 
        anio: "2023", 
        pdf: "Power_BI.pdf" 
    },
    { 
        titulo: "EXCEL - INTERMEDIO", 
        institucion: "SISTEMAS UNI", 
        anio: "2023", 
        pdf: "Excel Intermedio.pdf" 
    },
    { 
        titulo: "EXCEL - BÁSICO", 
        institucion: "SISTEMAS UNI", 
        anio: "2023", 
        pdf: "Excel Básico.pdf" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const btnCertificados = document.getElementById('btn-certificados');
    const certModal = document.getElementById('certificados-modal');
    const closeCertBtn = document.querySelector('.close-cert-btn');
    const certListContainer = document.getElementById('certificados-list');

    
    if (btnCertificados) {
        btnCertificados.addEventListener('click', () => {
            // Limpiar la lista antes de inyectar
            certListContainer.innerHTML = '';

            
            certificadosData.forEach(cert => {
                const htmlStr = `
                    <div class="cert-item">
                        <div class="cert-title">${cert.titulo}</div>
                        <div class="cert-inst">${cert.institucion}</div>
                        <div class="cert-year">${cert.anio}</div>
                        <a href="${cert.pdf}" target="_blank" class="btn-pdf">VER PDF</a>
                    </div>
                `;
                certListContainer.insertAdjacentHTML('beforeend', htmlStr);
            });

            
            certModal.classList.add('show');
        });
    }

    
    if (closeCertBtn) {
        closeCertBtn.addEventListener('click', () => {
            certModal.classList.remove('show');
        });
    }

    
    window.addEventListener('click', (e) => {
        if (e.target === certModal) {
            certModal.classList.remove('show');
        }
    });
});

