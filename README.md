# Dummy Dashboard

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-Rolldown-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A beginner-friendly React dashboard project with routing, authentication context, a collapsible sidebar, and local user management CRUD (add, edit, delete).

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [API / Component Reference](#api--component-reference)
- [Known Issues](#known-issues)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Animated login screen** with simple client-side validation and a light-switch Easter egg
- **Auth-protected routes** using React Router — unauthenticated users are redirected to `/login`
- **Collapsible sidebar** navigation with expand/collapse toggle
- **Dashboard**, **Settings**, and **Profile** pages ready to extend
- **User Management** page with a data table, modal-based add/edit, and delete actions
- **Theme toggle** (light / dark) available from the sidebar
- Redux Toolkit slice scaffolded for global user-management state (ready to wire up)

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Static typing |
| [Vite](https://vitejs.dev) (Rolldown) | latest | Dev server & bundler |
| [React Router DOM](https://reactrouter.com) | 6 | Client-side routing |
| [React Bootstrap](https://react-bootstrap.github.io) + Bootstrap | 5 | Component library & styles |
| [Lucide React](https://lucide.dev) | latest | Icon set |
| [Redux Toolkit](https://redux-toolkit.js.org) | latest | State management (scaffolded) |

---

## Prerequisites

| Requirement | Minimum version |
|---|---|
| [Node.js](https://nodejs.org) | 18 |
| npm | 9 |

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to manage multiple Node versions easily.

---

## Installation

### 1 — Clone the repository

```bash
git clone https://github.com/deepak-dev28/dummy-dashboard.git
cd dummy-dashboard
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually **<http://localhost:5173>**).

### Production build

```bash
# Create an optimized build in the dist/ folder
npm run build

# Preview the optimized production build locally
npm run preview
```

### Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `ENOENT: no such file or directory, open 'package.json'` | Wrong working directory | Run commands from the project root |
| Port 5173 already in use | Another process is listening | Pass `--port <number>` to `npm run dev`, e.g. `npm run dev -- --port 3000` |
| `Cannot find module '...'` after `git pull` | New dependency added | Run `npm install` again |

---

## Usage

### Logging in

1. Open **<http://localhost:5173>** in a browser — you will be redirected to `/login`.
2. On the login page, **click the hanging lamp rope** to switch the light on and reveal the form.
3. Enter any email and password (client-side validation only; no backend is required).
4. Click **Login** — you are redirected to `/dashboard`.

> **Register tab:** Switch to the *Register* tab on the same page to create a new account entry.

### Navigating the app

- Use the **sidebar on the left** to move between Dashboard, User Management, Settings, and Profile.
- Click the **toggle arrow** at the top of the sidebar to collapse/expand it.
- Use the **theme switch** in the sidebar footer to toggle between light and dark mode.

### Managing users

1. Navigate to **Users** (`/users`) in the sidebar.
2. The table lists all current users with their name, email, and role.
3. Click **Add User** to open the modal form and create a new entry.
4. Click the **edit icon** on any row to pre-populate the modal and update that user.
5. Click the **delete icon** on any row to remove the user after confirmation.

> **Note:** User data is held in component state and resets on page refresh. Persistence to `localStorage` or a backend is a planned improvement — see [Roadmap](#roadmap).

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev server | `npm run dev` | Starts Vite with HMR |
| Production build | `npm run build` | Type-checks then bundles to `dist/` |
| Preview | `npm run preview` | Serves the `dist/` folder locally |
| Lint | `npm run lint` | Runs ESLint across the `src/` tree |

---

## Routes

| Route | Access | Description |
|---|---|---|
| `/login` | Public | Login / Register UI |
| `/dashboard` | Protected | Main dashboard overview |
| `/users` | Protected | User management table & modal |
| `/setting` | Protected | Application settings |
| `/profile` | Protected | Current user profile |

All protected routes redirect unauthenticated visitors to `/login` via the `<PrivateRoute>` wrapper in `src/AppRoutes.tsx`.

---

## Project Structure

```text
dummy-dashboard/
├── public/                 # Static assets served as-is
├── src/
│   ├── AppRoutes.tsx       # Route definitions and PrivateRoute guard
│   ├── useAuth.tsx         # AuthContext provider, useAuth hook
│   ├── App.css             # Global styles and page-level CSS
│   ├── Config/
│   │   └── config.ts       # Shared UI string constants / labels
│   ├── Login/
│   │   └── Login.tsx       # Animated login / register screen
│   ├── Page/
│   │   ├── Dashboard.tsx   # Dashboard overview page
│   │   ├── Setting.tsx     # Settings page
│   │   └── Profile.tsx     # Profile page
│   ├── SideBaar/
│   │   └── Sidebar.tsx     # Collapsible sidebar with nav links
│   └── UserManagement/
│       ├── Usermanagement.tsx  # User list with CRUD wiring
│       ├── AddUserModal.tsx    # Add / Edit user modal form
│       ├── types.tsx           # Shared TypeScript types & prop interfaces
│       └── slice.tsx           # Redux Toolkit slice (scaffolded)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## API / Component Reference

### `AuthContext` (`src/useAuth.tsx`)

Provides authentication state to the entire app via React Context.

```tsx
import { useAuth } from './useAuth';

const { user, login, logout, isAuthenticated } = useAuth();
```

| Property / method | Type | Description |
|---|---|---|
| `user` | `User \| null` | Currently logged-in user object, or `null` |
| `isAuthenticated` | `boolean` | `true` when a user is logged in |
| `login(email, password)` | `() => void` | Validates credentials and sets the auth state |
| `logout()` | `() => void` | Clears auth state and redirects to `/login` |

### `<PrivateRoute>` (`src/AppRoutes.tsx`)

Wraps any route that requires authentication. Redirects to `/login` if `isAuthenticated` is `false`.

```tsx
<Route element={<PrivateRoute />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
```

### `<Sidebar>` (`src/SideBaar/Sidebar.tsx`)

| Prop | Type | Default | Description |
|---|---|---|---|
| `collapsed` | `boolean` | `false` | Whether the sidebar is collapsed |
| `onToggle` | `() => void` | — | Callback fired when the toggle button is clicked |
| `theme` | `'light' \| 'dark'` | `'light'` | Current color theme |
| `onThemeChange` | `() => void` | — | Callback fired when the theme switch is toggled |

### `User` type (`src/UserManagement/types.tsx`)

```ts
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
```

### `<AddUserModal>` (`src/UserManagement/AddUserModal.tsx`)

| Prop | Type | Description |
|---|---|---|
| `show` | `boolean` | Controls modal visibility |
| `onHide` | `() => void` | Called when the modal is dismissed |
| `onSave` | `(user: User) => void` | Called with the new or updated user data |
| `editUser` | `User \| null` | Pre-populates the form when editing an existing user |

---

## Known Issues

- **ESLint warning:** `src/useAuth.tsx` triggers `react-refresh/only-export-components` because it exports both a context provider component and a hook from the same file. This is intentional for simplicity; split the file if you need to eliminate the warning.
- **No persistent storage:** User data and auth state reset on page refresh. Tracked in [Roadmap](#roadmap).
- **Redux slice not connected:** `src/UserManagement/slice.tsx` is scaffolded but not yet wired to the Redux store.

---

## Roadmap

- [ ] Connect user management state to the Redux Toolkit slice
- [ ] Add form validation (required fields, email format) in the Add/Edit User modal
- [ ] Persist auth state and user list to `localStorage` or a backend API
- [ ] Add unit tests for route guards and user CRUD logic
- [ ] Add E2E tests (Playwright or Cypress)
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to open issues, submit pull requests, and follow the project's coding standards.

---

## License

This project is licensed under the [MIT License](LICENSE).
