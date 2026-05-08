# Contributing to Dummy Dashboard

Thank you for taking the time to contribute! 🎉  
The following guidelines help keep the project consistent and the review process smooth for everyone.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Report a Bug](#how-to-report-a-bug)
- [How to Request a Feature](#how-to-request-a-feature)
- [Development Setup](#development-setup)
- [Branching Strategy](#branching-strategy)
- [Commit Message Style](#commit-message-style)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Running Tests](#running-tests)

---

## Code of Conduct

Please be respectful and constructive in all interactions. This project follows the general spirit of the [Contributor Covenant](https://www.contributor-covenant.org/). Harassment, discrimination, or hostile behaviour will not be tolerated.

---

## How to Report a Bug

1. **Search existing issues** first to avoid duplicates.
2. If no existing issue covers your problem, [open a new issue](../../issues/new) and include:
   - A clear, descriptive title.
   - Steps to reproduce the bug.
   - Expected versus actual behaviour.
   - Your environment (OS, Node.js version, browser).
   - Any relevant screenshots or error messages.

---

## How to Request a Feature

1. [Open an issue](../../issues/new) with the `enhancement` label.
2. Describe the problem the feature would solve and your proposed solution.
3. Be open to discussion — the feature may be refined or redirected before implementation begins.

---

## Development Setup

```bash
# 1. Fork the repository and clone your fork
git clone https://github.com/<your-username>/dummy-dashboard.git
cd dummy-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

See [README.md](README.md) for full prerequisites and troubleshooting tips.

---

## Branching Strategy

| Branch pattern | Purpose |
|---|---|
| `main` | Stable, production-ready code |
| `feature/<short-description>` | New features |
| `fix/<short-description>` | Bug fixes |
| `docs/<short-description>` | Documentation updates |
| `chore/<short-description>` | Maintenance (deps, config, tooling) |

Always branch off `main` and target `main` in your pull request unless instructed otherwise.

```bash
git checkout main
git pull origin main
git checkout -b feature/my-new-feature
```

---

## Commit Message Style

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short summary>
```

**Types:**

| Type | When to use |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons, etc. (no logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or updating tests |
| `chore` | Dependency updates, build config, tooling |

**Examples:**

```
feat(user-management): add pagination to user table
fix(auth): redirect to login on token expiry
docs(readme): expand installation instructions
```

Keep the summary line under **72 characters** and use the imperative mood ("add", not "added" or "adds").

---

## Pull Request Process

1. Ensure your branch is up to date with `main` before opening a PR:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Run the linter and fix any issues:
   ```bash
   npm run lint
   ```
3. Run the production build to confirm it compiles without errors:
   ```bash
   npm run build
   ```
4. Open a pull request with:
   - A clear title following the commit message style above.
   - A description of **what** changed and **why**.
   - Screenshots or GIFs for any UI changes.
   - A reference to the related issue (e.g. `Closes #42`).
5. At least one project maintainer will review your PR. Address any requested changes promptly.
6. Once approved, a maintainer will merge the PR.

> **Do not** force-push to a branch that already has an open PR unless asked to by a reviewer.

---

## Coding Standards

- **Language:** TypeScript — avoid `any` wherever possible; prefer explicit types or generics.
- **Formatting:** Consistent with the existing code style. Prettier configuration is not committed yet; follow the style of adjacent files.
- **Linting:** All changes must pass `npm run lint` without new errors.
- **Component structure:** Prefer functional components with hooks. Keep components focused on a single responsibility.
- **Imports:** Group imports in this order — React, third-party libraries, local modules — separated by a blank line.
- **CSS:** Place component-specific styles in the nearest `App.css` block or a co-located stylesheet. Avoid inline styles except for genuinely dynamic values.
- **Comments:** Write comments for non-obvious logic only. Prefer self-documenting variable and function names.

---

## Running Tests

The project does not have automated tests yet (see [Roadmap](README.md#roadmap)). When tests are added, this section will be updated with instructions.

For now, please manually verify your changes by:

1. Logging in and out.
2. Navigating to all protected routes.
3. Adding, editing, and deleting users.
4. Toggling the sidebar and theme.
5. Confirming the production build succeeds with `npm run build`.
