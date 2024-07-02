const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Desenvolvedor Fluig", "Desenvolvedor Tableau", "Desenvolvedor Front End", "UI Design", "UX Design"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    } 
    else {
    cursorSpan.classList.remove("typing");
setTimeout(erase, newTextDelay);
    }
}
function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
} 
else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Apresentação Experiencia
const clicado = document.querySelectorAll(".li");

function descricao(index) {
	const titulo = document.querySelector(".titulo");
	const data = document.querySelector(".data");
	const local = document.querySelector(".local");
	const desc = document.querySelector(".desc2");
	if (index == 0) {
		titulo.innerHTML = "Loxam";
		data.innerHTML = "Ago 2022 - O momento";
		local.innerHTML = "São José dos Campos, São Paulo, Brasil";
		desc.innerHTML =
			"- Desenvolvedor Fluig utilizando a linguagem de Javascript em conjunto com o framework JQuery e Bootstrap com a IDE Eclipse. - Desenvolvimento de formulários. - Controle e acesso de documentos. - Desenvolvimento e gerenciamento de portais corporativos. - Criação e implementação de processos BPM e processos de workflow monitorando o fluxo de trabalho customizado. - Utilização de API's REST e SOAP para integração de sistemas e webservices. - Análise de Dados com o software Tableau, interpretação e análise de informações, criando dashboards com painéis interativos e identificando métricas e KPIs que constatam tendências e resultados para uma melhor tomada de decisão.";
	} else if (index == 1) {
		titulo.innerHTML = "Avibras - Industria Aeroespacial";
		data.innerHTML = "Jul 2021 - Ago 2022";
		local.innerHTML = "Jacarei, São Paulo, Brasil";
		desc.innerHTML =
			"Analise da aplicação e suporte a usuários ERP – TOTVS, com participação no desenvolvimento de projetos e melhorias do sistema Protheus. Suporte a usuários dos sistemas Legados. Desenvolvimento web com HTML e CSS para manutenção da intranet. Elaboração de procedimentos técnicos e operacionais dos serviços exercidos na área de TI. Criação de automações com Visual Basic Applications (VBA) para análise de dados. Utilização do banco de dados SQL Server para a montagem de Query's com o propósito de criar relatórios personalizados no Report Services.";
	} else if (index == 2) {
		titulo.innerHTML = "Eipro Tecnologia";
		data.innerHTML = "Jan 2020 - Jul 2020 ";
		local.innerHTML = "São José dos Campos, São Paulo, Brasil";
		desc.innerHTML =
			"Prestar suporte aos clientes via remoto, instalação e configuração de softwares. Acompanhar as atividades relacionadas ao departamento de informática, tais como, suporte a Software, Windows, Office, Antivírus. Elaborar relatórios com as atividades exercidas, ajudar a criar os procedimentos operacionais dos serviços executados. ";
	} else if (index == 3) {
		titulo.innerHTML = "Estudante de Ciência da Computação";
		data.innerHTML = "Ago 2019 - O momento";
		local.innerHTML = "UNIP, São José dos Campos, Brasil";
		desc.innerHTML =
			"Estou cursando Ciência da Computação na Universidade Paulista - UNIP, atualmente estou no 8º Semestre.";
	} else {
		titulo.innerHTML = "Cursos realizados";
        data.innerHTML = "";
		local.innerHTML = "Plataformas Online";
		desc.innerHTML =
			"Realizo cursos voltados para o desenvolvimento Fluig na plataforma TOTVS Fluig Academy. - Cursos voltados para o Tableau na plataforma Alura. - Cursos voltados para o desenvolvimento Front - End na plataforma Origamid e Alura. - Cursos voltados para o SQL Server na plataforma Alura e Udemy. - Cursos para o Adobe XD, JavaScript, Bootstrap e JQuery na plataforma Origamid e Alura. - Cursos voltados para o VBA na plataforma Data7Academy e Udemy";
	}
}
for (let i = 0; i < clicado.length; i++) {
	clicado[i].addEventListener("click", () => {
		for (let j = 0; j < clicado.length; j++) {
			clicado[j].classList.remove("ativo");
		}
		clicado[i].classList.add("ativo");
		descricao(i);
	});
}

// Função para rolar suavemente para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Exibir ou ocultar o botão de rolar para o topo conforme a posição da página
window.onscroll = function () {
    toggleScrollToTopButton();
};

// Função para mostrar ou ocultar o botão de rolar para o topo
function toggleScrollToTopButton() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}
