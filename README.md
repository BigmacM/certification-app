# Certification App

A modern Next.js application for managing and browsing professional trade certifications.

## Features

- ✨ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** with matte UI theme
- 🌓 **Dark/Light mode** support
- 🔐 **Google OAuth** authentication via Auth.js (NextAuth v5)
- 🗄️ **PostgreSQL** database with minimal user data storage
- 📱 **Responsive design** with semantic HTML
- ♿ **Accessibility-first** with ARIA labels and focus states
- 🎯 **TypeScript** for type safety
- 🧩 **shadcn/ui** components

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database
- Google OAuth credentials

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd certification-app
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   - `AUTH_SECRET`: Generate with `openssl rand -base64 32`
   - `GOOGLE_CLIENT_ID`: From Google Cloud Console
   - `GOOGLE_CLIENT_SECRET`: From Google Cloud Console
   - `DATABASE_URL`: Your PostgreSQL connection string

4. **Set up the database:**

   Run the SQL schema on your PostgreSQL database:
   ```bash
   psql -U postgres -d certapp -f lib/db/schema.sql
   ```

   Or manually execute the contents of `lib/db/schema.sql`

5. **Run the development server:**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses a minimal database schema optimized for Google OAuth:

- **users**: Stores user profiles (id, name, email, image, created_at, last_login)
- **accounts**: OAuth provider information (provider, provider_account_id, tokens)
- **sessions**: Active user sessions
- **verification_tokens**: Email verification tokens (optional)

**Note:** No passwords are stored as authentication is handled by Google OAuth.

## Project Structure

```
certification-app/
├── app/                    # Next.js App Router pages
│   ├── api/auth/          # Auth.js API routes
│   ├── auth/              # Authentication pages
│   ├── trades/            # Trades listing page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── container.tsx     # Container wrapper
│   ├── nav.tsx           # Navigation bar
│   ├── page-header.tsx   # Page header component
│   ├── theme-provider.tsx # Theme provider
│   ├── theme-toggle.tsx  # Dark mode toggle
│   └── user-menu.tsx     # User dropdown menu
├── lib/                   # Utilities and configurations
│   ├── auth.ts           # Auth.js configuration
│   ├── utils.ts          # Utility functions
│   └── db/               # Database schemas
└── public/               # Static assets
```

## Authentication

This app uses **Auth.js (NextAuth v5)** with Google OAuth provider:

- **Sign In**: `/auth/signin`
- **Sign Out**: `/api/auth/signout`
- **Error Page**: `/auth/error`
- **Protected Routes**: Routes under `/app/*` require authentication

### Setting up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
4. Copy the Client ID and Client Secret to your `.env` file

## Deployment on Vercel

This project is optimized for Vercel deployment:

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Import your repository on [Vercel](https://vercel.com)
   - Add environment variables from `.env.example`
   - Deploy!

3. **Set up database:**
   - Use Vercel Postgres or any PostgreSQL provider
   - Run the schema from `lib/db/schema.sql`

## Development

### Running Locally

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Key Technologies

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom matte theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Authentication**: Auth.js (NextAuth v5)
- **Database**: PostgreSQL with pg adapter
- **Type Safety**: TypeScript
- **Icons**: Lucide React

## Design System

The app uses a **matte UI theme** with:

- Clean surfaces with subtle shadows
- Consistent spacing and typography
- Accessible color contrast ratios
- Smooth transitions and animations
- Focus states for keyboard navigation
- ARIA labels for screen readers

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
