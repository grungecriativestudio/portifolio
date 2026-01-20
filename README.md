# 🎨 Wallace - Portfolio de Thumbnail Designer & Video Editor

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Languages](https://img.shields.io/badge/languages-EN%20%7C%20PT--BR-green.svg)

## 📋 Sobre o Projeto

Portfolio profissional e moderno para Wallace, especialista em design de thumbnails e edição de vídeos. O site apresenta um design dark elegante com animações suaves, carrossel infinito de thumbnails e integração com vídeos do Google Drive.

**🌐 Bilíngue:** Disponível em Inglês (principal) e Português do Brasil com seletor de idioma elegante com bandeiras.

## 🌍 Idiomas Disponíveis

- **🇺🇸 English (Principal):** `index.html`
- **🇧🇷 Português Brasil:** `index-pt.html`

O seletor de idioma com bandeiras está localizado no header da página, permitindo troca rápida entre os idiomas.

## ✨ Funcionalidades Implementadas

### 🌐 Sistema Bilíngue
- ✅ Versão em Inglês (principal) - `index.html`
- ✅ Versão em Português Brasil - `index-pt.html`
- ✅ Seletor de idioma com bandeiras 🇺🇸 🇧🇷
- ✅ Indicador visual de idioma ativo
- ✅ Animações nas bandeiras ao hover
- ✅ Responsivo em todas as telas

### 🏠 Seção Hero
- ✅ Design moderno com gradientes animados
- ✅ Efeito de digitação animado no subtítulo
- ✅ Estatísticas com contadores animados
- ✅ Botões call-to-action com hover effects
- ✅ Indicador de scroll animado

### 👤 Seção Sobre Mim
- ✅ Cards de habilidades com glassmorphism
- ✅ Ícones do Font Awesome
- ✅ Efeitos hover em 3D
- ✅ Grid responsivo

### 🖼️ Galeria de Thumbnails
- ✅ Carrossel infinito automático (passa de um lado para o outro)
- ✅ 20 thumbnails placeholder (prontas para substituir)
- ✅ Animação pause ao passar o mouse
- ✅ Modal de visualização em tamanho maior
- ✅ Gradientes de fade nas laterais
- ✅ Efeitos hover com escala e borda neon

### 🎬 Seção de Vídeos
- ✅ Grid responsivo de vídeos
- ✅ Players embed do Google Drive
- ✅ Formulário para adicionar novos vídeos
- ✅ Conversão automática de links do Google Drive
- ✅ Animações ao adicionar novo vídeo

### 📞 Seção de Contato
- ✅ Cards de contato com ícones
- ✅ Links para email e WhatsApp
- ✅ Ícones de redes sociais
- ✅ Efeitos hover coloridos

### 🎯 Recursos Adicionais
- ✅ Design 100% responsivo (mobile-first)
- ✅ Menu hambúrguer para mobile
- ✅ Navegação suave entre seções
- ✅ Scroll animations (fade in ao aparecer)
- ✅ Tema dark completo (#0a0a0a, #1a1a1a)
- ✅ Acentos em cores neon (azul, roxo, verde)
- ✅ Efeitos glassmorphism
- ✅ Tipografia moderna (Inter + Poppins)
- ✅ Font Awesome icons

## 🎨 Paleta de Cores

```css
Background: #0a0a0a, #1a1a1a, #242424
Text: #ffffff, #b0b0b0, #707070
Accent Primary: #00d9ff (Azul Neon)
Accent Secondary: #7b2ff7 (Roxo)
Accent Tertiary: #00ff88 (Verde Neon)
Gradient: linear-gradient(135deg, #00d9ff 0%, #7b2ff7 50%, #00ff88 100%)
```

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Página principal (ENGLISH 🇺🇸)
├── index-pt.html       # Página em Português (BRASIL 🇧🇷)
├── css/
│   └── style.css      # Estilos principais (ambos idiomas)
├── js/
│   └── main.js        # JavaScript (detecta idioma automaticamente)
└── README.md          # Documentação
```

## 🚀 Como Usar

### Seletor de Idioma

O seletor de idioma com bandeiras está sempre visível no header:
- **🇺🇸 Clique na bandeira americana** para versão em Inglês
- **🇧🇷 Clique na bandeira brasileira** para versão em Português
- A bandeira ativa possui destaque visual com gradiente neon
- Totalmente responsivo em mobile

### Adicionar Suas Thumbnails Reais

1. Abra o arquivo `js/main.js`
2. Localize o array `thumbnails` (linha ~72)
3. Substitua os URLs placeholder pelas suas thumbnails reais:

```javascript
const thumbnails = [
    { url: 'URL_DA_SUA_THUMBNAIL_1', title: 'Nome do Projeto 1' },
    { url: 'URL_DA_SUA_THUMBNAIL_2', title: 'Nome do Projeto 2' },
    // ... adicione até 20 ou mais
];
```

### Adicionar Vídeos do Google Drive

**Opção 1: Via Interface (Recomendado)**
1. Role até a seção "Portfólio de Vídeos"
2. Cole o link do Google Drive no campo
3. Adicione um título
4. Clique em "Adicionar Vídeo"

**Opção 2: Editando o Código**
1. Abra o arquivo `js/main.js`
2. Localize o array `videos` (linha ~149)
3. Adicione seus vídeos:

```javascript
let videos = [
    {
        title: 'Nome do Seu Vídeo',
        description: 'Descrição do projeto',
        embedUrl: convertGoogleDriveLink('https://drive.google.com/file/d/SEU_FILE_ID/view')
    }
];
```

### Configurar Links de Contato

Edite os arquivos `index.html` E `index-pt.html` nas seguintes seções:

**Email** (linha ~326 em ambos arquivos):
```html
<a href="mailto:seuemail@example.com">seuemail@example.com</a>
```

**WhatsApp** (linha ~334 em ambos arquivos):
```html
<a href="https://wa.me/5511999999999" target="_blank">+55 (11) 99999-9999</a>
```

**Redes Sociais** (linha ~352-368 em ambos arquivos):
```html
<a href="https://youtube.com/seu-canal" class="social-icon" target="_blank">
    <i class="fab fa-youtube"></i>
</a>
```

> **Dica:** Atualize as informações de contato em AMBOS os arquivos (EN e PT-BR) para manter consistência.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1366px)
- ✅ Mobile (320px - 768px)

## 🎭 Animações Incluídas

- **Fade In Up**: Elementos aparecem de baixo para cima
- **Float**: Orbes de gradiente flutuando
- **Scroll Infinito**: Carrossel de thumbnails
- **Typing Effect**: Texto digitando no hero
- **Counter Animation**: Números das estatísticas
- **Hover Effects**: Escala, rotação e brilho
- **Bounce**: Indicador de scroll

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica (2 versões de idioma)
- **CSS3**: Animações, Grid, Flexbox, Glassmorphism
- **JavaScript**: Interatividade, detecção de idioma automática
- **Google Fonts**: Inter & Poppins
- **Font Awesome 6**: Ícones
- **Emojis**: Bandeiras 🇺🇸 🇧🇷 para seleção de idioma

## 🎯 Próximos Passos Recomendados

### Conteúdo
1. ⬜ Substituir thumbnails placeholder pelas suas criações reais
2. ⬜ Adicionar seus vídeos editados do Google Drive
3. ⬜ Atualizar informações de contato em AMBOS arquivos (EN e PT-BR)
4. ⬜ Adicionar links das suas redes sociais em ambas versões
5. ⬜ Personalizar textos sobre você em ambos idiomas

### Design (Opcional)
6. ⬜ Adicionar logo personalizado
7. ⬜ Criar favicon
8. ⬜ Adicionar mais seções (depoimentos, FAQ, preços) em ambos idiomas
9. ⬜ Incluir formulário de contato funcional

### SEO & Performance
10. ⬜ Adicionar meta tags para SEO em ambos idiomas
11. ⬜ Otimizar imagens (comprimir thumbnails)
12. ⬜ Adicionar Open Graph tags para compartilhamento
13. ⬜ Implementar hreflang tags para SEO multilíngue
14. ⬜ Adicionar Google Analytics

### Funcionalidades Extras
15. ⬜ Sistema de filtros para thumbnails (por categoria)
16. ⬜ Modo claro/escuro (toggle)
17. ⬜ Integração com formulário de orçamento
18. ⬜ Galeria com lightbox avançado
19. ⬜ Adicionar mais idiomas (Espanhol, etc.)

## 🌐 Deploy

Para colocar seu portfolio online, use a **aba Publish** desta ferramenta. Com um clique seu site estará disponível na internet com uma URL pública.

## 📞 Suporte

Se precisar de ajuda para customizar algo específico:
- Edição de cores: `css/style.css` (variáveis CSS no topo)
- Adicionar seções: `index.html` (EN) e `index-pt.html` (PT-BR)
- Modificar animações: `css/style.css` e `js/main.js`
- Adicionar novo idioma: Duplicate estrutura e adapte textos
- Seletor de idioma: Estilização em `css/style.css` (seção Language Switcher)

## 🌟 Características Especiais

### Sistema de Idiomas Inteligente
- JavaScript detecta automaticamente o idioma da página (via atributo `lang`)
- Animações de digitação adaptadas ao idioma
- Mensagens de erro/sucesso no idioma correto
- Fácil expansão para novos idiomas

### Seletor Visual de Idioma
- Bandeiras em emoji para melhor visualização
- Efeito grayscale quando inativo
- Animação de pulso na bandeira ativa
- Gradiente neon no botão ativo
- Posicionamento responsivo em mobile

## 📄 Licença

Este projeto foi criado para uso pessoal de Wallace. Sinta-se livre para modificar conforme necessário.

---

**Desenvolvido com 💙 para Wallace Design Studio**

*Professional bilingual portfolio for Wallace - Thumbnail Designer and Video Editor*

🌐 **Languages Available:** English (US) | Português (Brasil)