const openai = require('openai');
const apiKey = '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';

document.getElementById('question-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const question = document.getElementById('question').value;

    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: question,
            max_tokens: 50
        })
    });

    const data = await response.json();

    const answer = data.choices[0].text;
    document.getElementById('answer').textContent = answer;
});
