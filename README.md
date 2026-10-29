# Hasti Doc Digest

AI document intelligence and insight extraction toolkit.

## What it does

- turns raw text into clear summaries
- extracts key themes, action items, and stakeholders
- highlights risks, decisions, and open questions
- creates a simple digest for teams reviewing documents

## Quick start

```bash
npm install
npm start
```

Then open http://localhost:3000

## API

### POST /api/analyze

Request body:

```json
{
  "text": "Q3 roadmap update..."
}
```

Response:

```json
{
  "title": "Q3 Roadmap Update",
  "summary": "...",
  "themes": [...],
  "stakeholders": [...],
  "actions": [...],
  "risks": [...],
  "decisions": [...],
  "questions": [...]
}
```

## Features

- plain-text document analysis
- actionable digest creation
- structured extraction for review workflows
- clean browser-based interface

## Development

```bash
npm run dev
npm test
```

## License

MIT
