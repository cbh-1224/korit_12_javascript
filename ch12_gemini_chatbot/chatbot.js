const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loadingIndicator = document.getElementById('loading');
const apiKeyModal = document.getElementById('api-key-modal');
const apiKeyInput = document.getElementById('api-key-input');
const saveKeyBtn = document.getElementById('save-key-btn');

let GOOGLE_API_KEY = '';

// 1. API 키 저장 기능
saveKeyBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if(key) {
    GOOGLE_API_KEY = key;
    apiKeyModal.style.display = 'none';
  } else {
    alert('API Key를 입력해주세요!');
  }
});

// 2. 메시지 전송 기능
async function sendMessage() {
  const message = userInput.value.trim();

  // 빈 메시지 방지
  if(message === '') return;
  
  // 사용자 메시지 화면에 표시
  appendMessage('user', message);
  userInput.value = ''; // 입력창 초기화

  // 로딩 애니메이션 켜기
  showLoading(true);

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: message }]
          }]
        })
      });

      const data = await response.json();

      if (data.error) {
        console.error('API Error Detail:', data.error);
        appendMessage('bot', `에러 발생: ${data.error.message}`);
        return;
      }

      if (data.candidates && data.candidates[0].content) { 
        const botResponse = data.candidates[0].content.parts[0].text;
        appendMessage('bot', botResponse);
      } 
    }
  
    catch(error) {
      console.log('Fetch error: ', error);
      appendMessage('bot', '네트워크 오류가 발생했습니다');
    } finally {
      showLoading(false);
    }
}


function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

  let formattedText = text.replace(/\n/g, '<br>');
  messageDiv.innerHTML = formattedText;

  chatHistory.appendChild(messageDiv);

  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function showLoading(isLoading) {
  if(isLoading) {
    loadingIndicator.style.display = 'block';
    chatHistory.scrollTop = chatHistory.scrollHeight;
  } else {
    loadingIndicator.style.display = 'none';
  }
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', e => {
  if(e.key === 'Enter') sendMessage();
})