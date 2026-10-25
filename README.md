# CodeSec — Repository Security Scanner

CodeSec is a read-only GitHub repository scanner that flags common exposed secrets and selected risky code patterns.

## Stack
- Next.js App Router, React, TypeScript
- Vercel deployment
- GitHub REST API

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Use
Paste a GitHub repository URL, optionally select a branch, and click **Run security scan**. Public repositories can be scanned without a token. For private repositories, use a short-lived, least-privilege GitHub token with read-only repository access.

The token is only sent with the scan request and is not stored by this application. Do not paste tokens you do not own.

## Scope and limitations
The scanner uses pattern matching, scans at most 100 eligible text files (up to 500 KB each), masks matching evidence, and provides JSON/CSV exports. It may produce false positives and miss issues. It is not a substitute for code review, dependency auditing, or a dedicated secret scanner. If a real credential is exposed, revoke or rotate it immediately.
