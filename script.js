document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.querySelector("#chat-container #chat-box");
    const chatForm = document.querySelector("#chat-container #chat-form");
    const chatInput = document.querySelector("#chat-container #chat-input");

    // Mapeamento de palavras-chave para respostas automáticas
    const responses = {
        "oi": "Olá! Como posso ajudar você hoje?",
        "ajuda": "Claro! Estou aqui para ajudar. Sobre o que você precisa de ajuda?",
        "horário": "Nosso horário de funcionamento é das 9h às 18h, de segunda a sexta-feira.",
        "contato": "Você pode nos contatar pelo e-mail contato@empresa.com ou pelo telefone (11) 1234-5678.",
        "obrigado": "De nada! Estou aqui para ajudar.",
        "tchau": "Até logo! Volte sempre que precisar.",
        "whatsapp": "Clique aqui!" 
    };

    function addMessage(text, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", type === "user" ? "user-message" : "bot-message");
        messageElement.textContent = text;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Verificar se alguma palavra-chave está presente na mensagem do usuário
        for (let keyword in responses) {
            if (userMessage.toLowerCase().includes(keyword)) {
                return responses[keyword];
            }
        }
        // Resposta padrão se nenhuma palavra-chave for encontrada
        return "Desculpe, não entendi. Pode reformular a pergunta?";
    }

    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            chatInput.value = "";
            
            // Obter a resposta automática com base na mensagem do usuário
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => {
                addMessage(botResponse, "bot");
            }, 1000);
        }
    });
});
