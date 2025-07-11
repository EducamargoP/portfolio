# 🌐 Portfólio Pessoal — Eduardo Camargo Paulino

Este repositório apresenta o projeto do meu **portfólio pessoal**, criado para destacar minha trajetória acadêmica, minhas habilidades técnicas e os projetos desenvolvidos ao longo dos estudos.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica e acessível
- **CSS3**: Estilização responsiva com design limpo e moderno
- **JavaScript (vanilla)**: Funcionalidades dinâmicas, validação de formulário e interatividade sem bibliotecas externas
- **Google Fonts**: Tipografia personalizada
- **Bootstrap Icons**: Ícones vetoriais leves e escaláveis

## 🎓 Aprendizados em Andamento

Estou aprimorando meus conhecimentos em:
- Desenvolvimento Front-end puro (sem frameworks)
- Validação de formulários com segurança
- Boas práticas de acessibilidade e usabilidade
- Segurança em aplicações web (CSP, XSS, Honeypot)
- Versionamento com Git e publicação em Netlify
- Integração com serviços externos como FormSubmit

## 🧩 Estrutura do Site

O projeto é organizado em seções intuitivas:

- **Cabeçalho fixo** com menu responsivo (hambúrguer mobile)
- **Apresentação pessoal** com imagem, biografia e botão de contato
- **Cards interativos** para especialidades técnicas
- **Seção "Sobre mim"** com trajetória acadêmica e visão profissional
- **Galeria de projetos** com efeito hover visual
- **Formulário de contato estilizado** com validação personalizada
- **Rodapé com links sociais** (LinkedIn, GitHub, YouTube)

## 🔐 Segurança Implementada

O site possui múltiplas camadas de proteção:

- **Validação de formulário via JavaScript**:
  - Regex para nome, número e e-mail
  - Bloqueio de links maliciosos e scripts via expressão regular
- **Campo honeypot oculto** para detectar robôs automatizados
- **Política CSP ajustada**:
  - `img-src` libera domínios externos confiáveis para imagens
  - `script-src`, `style-src` e `font-src` restritos a fontes seguras
- **Cabeçalhos HTTP configurados via `_headers` (Netlify)**:
  ```plaintext
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Content-Security-Policy: default-src 'self'; img-src 'self' https://*.netlify.app https://cdn.jsdelivr.net https://res.cloudinary.com; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none';
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

