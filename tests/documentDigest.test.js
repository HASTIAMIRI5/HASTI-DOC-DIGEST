const form = document.getElementById('digest-form');
const output = document.getElementById('output');
const status = document.getElementById('status');

function renderResult(result) {
  const themes = (result.themes || []).map((item) => `<li>${item}</li>`).join('');
  const stakeholders = (result.stakeholders || []).map((item) => `<li>${item}</li>`).join('');
  const actions = (result.actions || []).map((item) => `<li>${item}</li>`).join('');
  const risks = (result.risks || []).map((item) => `<li>${item}</li>`).join('');
  const decisions = (result.decisions || []).map((item) => `<li>${item}</li>`).join('');
  const questions = (result.questions || []).map((item) => `<li>${item}</li>`).join('');
  const keywords = (result.keywords || []).map((item) => `<li>${item}</li>`).join('');

  output.innerHTML = `
    <div class="card">
      <h3>${result.title}</h3>
      <p>${result.summary}</p>
    </div>

    <div class="card">
      <h3>Key themes</h3>
      <ul>${themes || '<li>No themes detected</li>'}</ul>
    </div>

    <div class="card">
      <h3>Stakeholders</h3>
      <ul>${stakeholders || '<li>No stakeholders identified</li>'}</ul>
    </div>

    <div class="card">
      <h3>Action items</h3>
      <ul>${actions || '<li>No action items identified</li>'}</ul>
    </div>

    <div class="card">
      <h3>Risks</h3>
      <ul>${risks || '<li>No major risks identified</li>'}</ul>
    </div>

    <div class="card">
      <h3>Decisions</h3>
      <ul>${decisions || '<li>No decisions identified</li>'}</ul>
    </div>

    <div class="card">
      <h3>Open questions</h3>
      <ul>${questions || '<li>No open questions identified</li>'}</ul>
    </div>

    <div class="card">
      <h3>Keywords</h3>
      <ul>${keywords || '<li>No keywords extracted</li>'}</ul>
    </div>
  `;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const text = formData.get('text')?.toString().trim();
  const title = formData.get('title')?.toString().trim();

  if (!text) {
    status.textContent = 'Please paste document text before analyzing.';
    return;
  }

  status.textContent = 'Analyzing document...';
  output.innerHTML = '';

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, title }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Unknown error');
    }

    renderResult(data);
    status.textContent = 'Document analysis complete.';
  } catch (error) {
    output.innerHTML = `<div class="card"><strong>Error:</strong> ${error.message}</div>`;
    status.textContent = 'Analysis failed.';
  }
});
