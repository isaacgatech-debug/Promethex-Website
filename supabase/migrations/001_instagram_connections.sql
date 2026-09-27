create table if not exists public.instagram_connections (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  instagram_user_id text not null unique,
  access_token text not null,
  token_expires_at timestamptz,
  scopes text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.instagram_connections enable row level security;
