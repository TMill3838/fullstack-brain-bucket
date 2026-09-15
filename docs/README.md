# Fullstack Web Server Login
> short app tagline

### authorship + version

`@TMill3838` \| `2026-09-14` \| `GOLF`

### deployments, codebase, & repo features 

| | |
| -- | -- |
| Resource |                     Link |
| PROD codebase        |        [`main`](https://github.com/TMill3838/fullstack-brain-bucket) |
|  PROD server          |        [GCP](URL)
|  DEV codebase         |        [`dev`](https://github.com/TMill3838/fullstack-brain-bucket/tree/dev) |
|  DEV server           |        [Render](https://fullstack-brain-bucket.onrender.com/pages/auth.html) |
|  docs                 |        [`docs/`](https://github.com/TMill3838/fullstack-brain-bucket/tree/main/docs) |
|  published docs       |        [GitHub Pages](URL) |
|  CI/CD workflow       |        [`deploy.yml`](URL) |
|  successful PROD deployment |  [GitHub Action](URL) |
|  resolved GOLF issue  |        [issue Permission Denied\1](https://github.com/TMill3838/fullstack-brain-bucket/issues/1) |

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

In 2--4 sentences, briefly describe your GOLF infrastructure and whatyou built/deployed.

### architecture

``` text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`

### project structure

Use `tree` to show your actual project structure.

``` text
repo/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
├── server/
├── .gitignore
└── ...
```

### GCP

external IP: `35.254.195.128`\
Linux user: `rabbitgolden101`\
instructor SSH public key installed: `yes`
