// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Typing animation for hero subtitle
const typingText = document.querySelector('.typing-text');
if (typingText) {
    // Detect language from HTML lang attribute
    const isPortuguese = document.documentElement.lang === 'pt-BR';
    
    const texts = isPortuguese 
        ? ['Thumbnail Designer', 'Video Editor', 'Criador Visual', 'Especialista em Conteúdo']
        : ['Thumbnail Designer', 'Video Editor', 'Visual Creator', 'Content Specialist'];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// Thumbnails Carousel
const carouselTrack = document.getElementById('carouselTrack');

// Array de thumbnails placeholder (você pode substituir por suas imagens reais)
const thumbnails = [
    { url: 'https://i.ytimg.com/vi/nXYfR1ybYKI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCa-WF9NNRI7MrfoYrLGR_zUN--_g', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/gICkvBJzDtw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCATbbhQVomJu5_WVfozL3IXbN-_w', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/GPlNtLINVSo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKfaq6XY6hC9jUUMIDrokWmothiA', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/imHPGbYqaGA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBo5YyOPvflntbRJyLjVexAuQ-hdQ', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/amGWWIcg8X0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDFq8JgrsQoGkY_Vvs0uD5RgXqPuw', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/HP8B6zETqGc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCvTxJsvJgNhT98Xa0TmUjZ6OhEmw', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/urPjZq6gdAc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAyz8GYlVd1S79HiMccNEyhXZoqtA', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/mMeyapoKkdc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAIgLvU39aEGV2PiyWnDiF0yw_6dQ', title: 'Gaming Thumbnail' },
    { url: 'https://i.ytimg.com/vi/mj5SPi8467U/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBDfooLeaMUgwAgG58WJgIqpTbXPg', title: 'Gaming Thumbnail' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/ff0055?text=Thumbnail+10', title: 'Unboxing Video' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/00d9ff?text=Thumbnail+11', title: 'Documentary' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/7b2ff7?text=Thumbnail+12', title: 'Educational' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/00ff88?text=Thumbnail+13', title: 'Live Stream' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/ff6b00?text=Thumbnail+14', title: 'Podcast' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/ff0055?text=Thumbnail+15', title: 'Animation' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/00d9ff?text=Thumbnail+16', title: 'Short Film' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/7b2ff7?text=Thumbnail+17', title: 'Sports Highlight' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/00ff88?text=Thumbnail+18', title: 'Interview' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/ff6b00?text=Thumbnail+19', title: 'Travel Vlog' },
    { url: 'https://via.placeholder.com/400x225/1a1a1a/ff0055?text=Thumbnail+20', title: 'Cooking Video' }
];

// Duplicar thumbnails para criar efeito infinito
const allThumbnails = [...thumbnails, ...thumbnails];

// Renderizar thumbnails
if (carouselTrack) {
    allThumbnails.forEach((thumb, index) => {
        const card = document.createElement('div');
        card.className = 'thumbnail-card';
        card.innerHTML = `
            <img src="${thumb.url}" alt="${thumb.title}">
            <div class="thumbnail-overlay">
                <span class="thumbnail-title">${thumb.title}</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(thumb.url, thumb.title));
        carouselTrack.appendChild(card);
    });
}

// Modal para thumbnails
function openModal(url, title) {
    const modal = document.getElementById('thumbnailModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = url;
    modalCaption.textContent = title;
}

function closeModal() {
    const modal = document.getElementById('thumbnailModal');
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora da imagem
window.addEventListener('click', (e) => {
    const modal = document.getElementById('thumbnailModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Videos Section
const videosGrid = document.getElementById('videosGrid');

// Array de vídeos (você pode adicionar seus links do Google Drive aqui)
let videos = [
    {
        title: document.documentElement.lang === 'pt-BR' ? 'Fã Boy (Paródia Épica) - SHORT': 'fanboy (Epic Parody) - SHORT',
        description: document.documentElement.lang === 'pt-BR' 
            ? 'Edição profissional com efeitos dinâmicos e transições suaves'
            : 'Professional editing with dynamic effects and smooth transitions in music video',
        embedUrl: 'https://www.youtube.com/embed/_ApcBdNRsI0' // Exemplo 1  - shorts
    },
    {
        title: document.documentElement.lang === 'pt-BR' ? 'Fã Boy (Paródia Épica) - SHORT': 'fanboy (Epic Parody) - SHORT',
        description: document.documentElement.lang === 'pt-BR' 
            ? 'Edição profissional com efeitos dinâmicos e transições suaves'
            : 'Professional editing with dynamic effects and smooth transitions in music video',
        embedUrl: 'https://www.youtube.com/embed/aYtrWjvohaU' // Exemplo 2  - shorts
    },
    {
        title: document.documentElement.lang === 'pt-BR' ? 'Fã Boy (Paródia Épica) - SHORT': 'fanboy (Epic Parody) - SHORT',
        description: document.documentElement.lang === 'pt-BR' 
            ? 'Edição profissional com efeitos dinâmicos e transições suaves'
            : 'Professional editing with dynamic effects and smooth transitions in music video',
        embedUrl: 'https://www.youtube.com/embed/PCDtorPX3Yc' // Exemplo 3  - shorts
    },

    {
        title: document.documentElement.lang === 'pt-BR' ? 'Guerra dos Consoles | Xbox vs PlayStation vs Nintendo (Paródia Épica)': 'Console Wars | Xbox vs PlayStation vs Nintendo (Epic Parody) in Portuguese',
        description: document.documentElement.lang === 'pt-BR' 
            ? 'Edição profissional com efeitos dinâmicos e transições suaves'
            : 'Professional editing with dynamic effects and smooth transitions in music video',
        embedUrl: 'https://www.youtube.com/embed/nXYfR1ybYKI?si=jhW-zTF8mGodiSQU' // Exemplo 1
    },
    {
        title: document.documentElement.lang === 'pt-BR' ? 'Xbox Series S Vale a Pena em 2025 | 8 meses depois | Análise Completa!' : 'Is the Xbox Series S Worth It in 2025? | 8 Months Later | Full Review! in Portuguese',
        description: document.documentElement.lang === 'pt-BR'
            ? 'Vídeo promocional com motion graphics e color grading'
            : 'Promotional video with motion graphics and color grading',
        embedUrl: 'https://www.youtube.com/embed/amGWWIcg8X0?si=gAE4dXGM3-zmuhEj' // Exemplo 2
    },
    {
        title: document.documentElement.lang === 'pt-BR' ? 'Projeto de Edição 3' : 'Nintendo Switch 2 in Brazil: Greed speaks louder.',
        description: document.documentElement.lang === 'pt-BR'
            ? 'Montagem cinematográfica com narrativa envolvente'
            : 'Cinematic editing with engaging narrative',
        embedUrl: 'https://www.youtube.com/embed/gICkvBJzDtw?si=GYFwJ6BkHh8lBJps' // Exemplo 3
    },
     {
        title: document.documentElement.lang === 'pt-BR' ? 'Como MINECRAFT faz tanto SUCESSO?' : 'How is Minecraft so successful?',
        description: document.documentElement.lang === 'pt-BR'
            ? 'Montagem cinematográfica com narrativa envolvente no jogo'
            : 'Cinematic editing with engaging narrative in game',
        embedUrl: 'https://www.youtube.com/embed/urPjZq6gdAc?si=7w6SdX0YGjvRntz3' // Exemplo 4
    },
    {
        title: document.documentElement.lang === 'pt-BR' ? 'GAME PASS EM 2025 AINDA VALE A PENA? 🚨 (Preço AUMENTOU, 3 SEGREDOS que ninguém conta!)' : 'Is Game Pass still worth it in 2025? 🚨 (Price INCREASED, 3 SECRETS nobodys telling you!)',
        description: document.documentElement.lang === 'pt-BR'
            ? 'Montagem cinematográfica com narrativa envolvente no jogo'
            : 'Cinematic editing with engaging narrative in game',
        embedUrl: 'https://www.youtube.com/embed/GPlNtLINVSo?si=0IRqG5mw17A-2kdF' // Exemplo 5
    },
    {
        title: document.documentElement.lang === 'pt-BR' ? 'O BOSS que Vai Destruir Seu Orgulho SAYAJIN!' : 'The BOSS that Will Destroy Your Saiyan Pride!',
        description: document.documentElement.lang === 'pt-BR'
            ? 'Montagem cinematográfica com narrativa envolvente no jogo'
            : 'Cinematic editing with engaging narrative in game',
        embedUrl: 'https://www.youtube.com/embed/HP8B6zETqGc?si=evW0FJo7mKM8bZVt' // Exemplo 6
    },
];

// Função para converter link do Google Drive em embed URL
function convertGoogleDriveLink(url) {
    // Exemplo de link: https://drive.google.com/file/d/FILE_ID/view
    // Converter para: https://drive.google.com/file/d/FILE_ID/preview
    
    if (url.includes('drive.google.com')) {
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
            return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
        }
    }
    return url;
}

// Renderizar vídeos
function renderVideos() {
    if (!videosGrid) return;
    
    videosGrid.innerHTML = '';
    
    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="${video.embedUrl}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
            </div>
        `;
        videosGrid.appendChild(videoCard);
    });
}

// Adicionar novo vídeo
function addVideo() {
    const linkInput = document.getElementById('videoLinkInput');
    const titleInput = document.getElementById('videoTitleInput');
    
    const link = linkInput.value.trim();
    const title = titleInput.value.trim();
    
    // Detect language
    const isPortuguese = document.documentElement.lang === 'pt-BR';
    const alertNoLink = isPortuguese 
        ? 'Por favor, insira o link do vídeo do Google Drive'
        : 'Please enter the Google Drive video link';
    const alertNoTitle = isPortuguese
        ? 'Por favor, insira um título para o vídeo'
        : 'Please enter a title for the video';
    const defaultDescription = isPortuguese
        ? 'Projeto de edição profissional'
        : 'Professional editing project';
    
    if (!link) {
        alert(alertNoLink);
        return;
    }
    
    if (!title) {
        alert(alertNoTitle);
        return;
    }
    
    const embedUrl = convertGoogleDriveLink(link);
    
    videos.push({
        title: title,
        description: defaultDescription,
        embedUrl: embedUrl
    });
    
    renderVideos();
    
    // Limpar inputs
    linkInput.value = '';
    titleInput.value = '';
    
    // Scroll suave até o novo vídeo
    setTimeout(() => {
        const lastVideo = videosGrid.lastElementChild;
        if (lastVideo) {
            lastVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            lastVideo.style.animation = 'fadeInUp 0.5s ease';
        }
    }, 100);
}

// Renderizar vídeos iniciais
renderVideos();

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.skill-card, .video-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Particle effect no hero (opcional)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(0, 217, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        if (hero) {
            hero.appendChild(particle);
        }
    }
}

// Descomentar para ativar partículas
// createParticles();

// Contador animado para as estatísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observar stats para animação
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Console log para desenvolvimento
console.log('🎨 Wallace Portfolio - Loaded successfully!');
console.log('💡 Para adicionar suas thumbnails reais, edite o array "thumbnails" em main.js');
console.log('🎬 Para adicionar seus vídeos do Google Drive, use o formulário na página ou edite o array "videos" em main.js');