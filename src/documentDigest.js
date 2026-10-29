const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeDocument } = require('../src/documentDigest');

test('analyzeDocument returns a structured digest', () => {
  const text = `
    Q3 roadmap update.
    The product team will launch a new onboarding workflow.
    Leadership approved the customer growth plan and agreed to prioritize research.
    There is a risk of delays due to dependency on engineering and design.
    Questions remain about launch timing and security review.
  `;

  const result = analyzeDocument(text, 'Q3 Roadmap');

  assert.equal(result.title, 'Q3 Roadmap');
  assert.ok(result.summary.length > 20);
  assert.ok(Array.isArray(result.themes));
  assert.ok(Array.isArray(result.actions));
  assert.ok(Array.isArray(result.risks));
  assert.ok(Array.isArray(result.decisions));
  assert.ok(Array.isArray(result.questions));
});
