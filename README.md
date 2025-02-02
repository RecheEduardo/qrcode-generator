<p align="center">
   <img src="https://readme-typing-svg.herokuapp.com?font=Century+Gothic&weight=800&size=40&pause=1000&color=F7F7F7&center=true&vCenter=true&width=435&lines=%E2%99%A6%EF%B8%8F+QR%20Code%20Generator+%E2%99%A6%EF%B8%8F" alt="Typing SVG" />  
</p>

---

### Um aplicativo simples e eficiente para gerar QR Codes a partir de qualquer texto, link ou conteúdo personalizado. Desenvolvido com **React.js** para uma experiência rápida e intuitiva! ⚡

# 🎯 Funcionalidades

- ✅ **Geração de QR Code:** Converta rapidamente qualquer texto ou link em um QR Code.
  
- 📝 **Campo de Entrada:** Insira seu conteúdo de forma simples.
- 🔄 **Botão de Limpar:** Redefina o campo de entrada com um clique.
- 📱 **Visualização Instantânea:** Veja o QR Code gerado em tempo real.

# 🛠️ Tecnologias Utilizadas

- **React.js** ⚛️ - Biblioteca principal para criação da interface.
  
- **HTML & CSS** 🎨 - Estrutura e estilo da aplicação.
- **API externa:** [QR Code Generator API](https://goqr.me/api/) para criação dos QR Codes.

# 📦 Como Executar o Projeto

1. ### **Clone o repositório:**
   ```bash
   git clone https://github.com/RecheEduardo/gerador-qr-code.git
   cd gerador-qr-code
   ```

2. ### **Instale as dependências:**
   ```bash
   npm install
   ```

3. ### **Inicie o projeto:**
   ```bash
   npm run dev
   ```

4. ### Acesse em seu navegador:
   ```
   http://localhost:5173
   ```

# 📋 Estrutura do Projeto

```
├── src
│   ├── assets
│   │   └── components
│   │       ├── DataForm.js   # Formulário de entrada de dados
│   │       └── ResultBox.js  # Exibição do QR Code gerado
│   └── App.js                # Componente principal da aplicação
├── public
└── package.json              # Configurações do projeto
```

# 💡 Como Usar

1. Digite o conteúdo que deseja converter em QR Code.
2. Clique em **"Gerar QR Code"**.
3. O QR Code aparecerá automaticamente.
4. Para limpar o campo, clique em **"Limpar"**.

# 🧩 Explicação do Código

## 📄 **App.js** - Componente Principal

```javascript
const [qrCodeUrl, setQrCodeUrl] = useState("");
```
- **`useState`**: Hook do React usado para controlar o estado do QR Code.
- **`setQrCodeUrl`**: Atualiza o valor do QR Code gerado.

## ✏️ **DataForm.js** - Formulário de Entrada

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  setQrCodeUrl(qrCodeValue);
};
```
- **`handleSubmit`**: Impede o comportamento padrão do formulário e define o conteúdo para gerar o QR Code.

```javascript
const handleChange = (e) => {
  e.preventDefault();
  setQrCodeValue("");
  setQrCodeUrl("");
};
```
- **`handleChange`**: Limpa o campo de entrada e o QR Code gerado.

## 📦 **ResultBox.js** - Exibição do QR Code

```javascript
<img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrCodeUrl}`} />
```
- **API de QR Code**: Gera o QR Code com base no valor fornecido pelo usuário.
- O QR Code é exibido dinamicamente assim que o valor é atualizado.

# 🤝 Contato

- 🌐 [GitHub](https://github.com/RecheEduardo)
- 💼 [LinkedIn](https://www.linkedin.com/in/eduardorechemartins/)
- 📧 [E-mail](mailto:eduardorechemartins2006@gmail.com)

---
