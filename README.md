# Dummy Dashboard

A beginner-friendly React dashboard project with routing, authentication context, a collapsible sidebar, and local user management CRUD (add, edit, delete).

## Features

- Login screen with simple client-side validation
- Auth-protected routes using React Router
- Sidebar navigation with collapse/expand toggle
- Dashboard, Settings, and Profile pages
- User Management page with modal-based add/edit and delete actions
- Theme toggle and animated login scene

## Tech Stack

- React 19
- TypeScript
- Vite (Rolldown)
- React Router DOM
- React Bootstrap + Bootstrap
- Lucide React icons

## Prerequisites

- Node.js 18 or higher
- npm 9 or higher

## Getting Started

From the project root (the folder that contains this README):

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint checks

## Login and Navigation

1. Open the app.
2. On the login page, pull the lamp rope to turn the light on.
3. Enter an email and password.
4. After login, you are redirected to the dashboard.
5. Use the sidebar to move between sections.

## Routes

| Route | Access | Description |
| --- | --- | --- |
| `/login` | Public | Login/Register UI |
| `/dashboard` | Protected | Dashboard page |
| `/users` | Protected | User management table and modal |
| `/setting` | Protected | Settings page |
| `/profile` | Protected | Profile page |

## Project Structure

```text
src/
  AppRoutes.tsx           # Router and route guards
  useAuth.tsx             # Auth context provider and hooks
  App.css                 # Global and page styles
  Config/
    config.ts             # Shared UI labels
  Login/
    Login.tsx             # Login/Register screen
  Page/
    Dashboard.tsx
    Setting.tsx
    Profile.tsx
  SideBaar/
    Sidebar.tsx           # Collapsible sidebar
  UserManagement/
    Usermanagement.tsx    # User list and CRUD wiring
    AddUserModal.tsx      # Add/Edit user modal
    types.tsx             # User and component prop types
```

## Current Notes

- Build currently succeeds (`npm run build`).
- Lint currently reports one error in `src/useAuth.tsx` related to `react-refresh/only-export-components`.
- A Redux slice exists in `src/UserManagement/slice.tsx`, but it is not wired into app state yet.

## Suggested Next Improvements

- Connect user management state to Redux Toolkit or another global store
- Add form validation in Add/Edit User modal
- Persist auth state and user list to local storage or backend API
- Add unit tests for route guards and user CRUD logic
