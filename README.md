# Production-Ready Node.js Deployment on AWS EC2

A production-ready Node.js application deployed on AWS EC2 using Docker, Docker Compose, Nginx Reverse Proxy, HTTPS (Let's Encrypt), PM2, and automated CI/CD pipelines with GitHub Actions.

##  Live Demo

https://manthewiseworld.duckdns.org

---

#  Project Overview

This project demonstrates how to deploy and manage a Node.js application in a production-like environment using modern DevOps practices.

The application is containerized with Docker, served through Nginx as a reverse proxy, secured with SSL certificates from Let's Encrypt, and automatically deployed through GitHub Actions.

The goal of this project was to gain hands-on experience with:

- Linux Server Administration
- AWS EC2 Deployment
- Docker Containerization
- Docker Compose Orchestration
- Nginx Reverse Proxy
- HTTPS/SSL Configuration
- CI/CD Automation
- GitHub Actions
- Process Management

---

#  Architecture

```text    
       [ Public Internet ]
               │
      https:// (Port 443)
               ▼
┌──────────────────────────────┐
│     Nginx Reverse Proxy      │  <-- Handles SSL/TLS Certificates
│ (manthewiseworld.duckdns.org)│
└──────────────┬───────────────┘
               │
       http:// (Port 3000)
               ▼
┌──────────────────────────────┐
│    Docker Bridge Network     │  <-- Isolated Container Space
│  ┌────────────────────────┐  │
│  │   Node.js Application  │  │  <-- Monitored by Docker Healthcheck
│  └────────────────────────┘  │
└──────────────────────────────┘

```

---

#   Technologies Used

## Cloud

- AWS EC2

## Backend

- Node.js


## Web Server

- Nginx

## Containerization

- Docker
- Docker Compose

## CI/CD

- GitHub Actions

## Security

- Let's Encrypt SSL
- Certbot

## Process Management

- PM2

## Version Control

- Git
- GitHub

---

#  Features

- Containerized Node.js application
- Nginx reverse proxy configuration
- HTTPS enabled with Let's Encrypt SSL certificates
- Docker Compose orchestration
- Automated deployment using GitHub Actions
- Cloud-hosted on AWS EC2
- Automatic application restart using PM2
- Custom domain configuration using DuckDNS

---

#  Deployment Workflow

## Development

Code is written and tested locally.

```bash
git add .
git commit -m "new feature"
git push origin main
```

---

## Continuous Deployment

Whenever code is pushed to GitHub:

1. GitHub Actions workflow is triggered
2. Workflow connects to EC2 through SSH
3. Latest changes are pulled
4. Docker containers are rebuilt
5. Application is restarted automatically

Deployment process:

```text
Developer
    │
    ▼
 GitHub
    │
    ▼
GitHub Actions
    │
    ▼
AWS EC2
    │
    ▼
Docker Compose
    │
    ▼
Live Application
```

---

#  Docker Setup

Build image:

```bash
docker build -t node-devops-app .
```

Run container:

```bash
docker run -d -p 3000:3000 node-devops-app
```

Using Docker Compose:

```bash
docker compose up -d
```

View running containers:

```bash
docker ps
```

---

#   Nginx Reverse Proxy

Nginx listens on ports 80 and 443 and forwards requests to the Node.js application running inside Docker.

Example:

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
}
```

Benefits:

- Improved security
- SSL termination
- Better scalability
- Separation of concerns

---

#  HTTPS Configuration

SSL certificates were generated using Certbot and Let's Encrypt.

Certificate installation:

```bash
sudo certbot --nginx
```

Certificate renewal test:

```bash
sudo certbot renew --dry-run
```

---

#   Project Structure

```text
.
├-─ .github
│   └── workflows
│       └── deploy.yml
├── Dockerfile
├── docker-compose.yml
├── app.js
├── package.json
├── README.md
└── nginx/
```

---

#   Key DevOps Concepts Demonstrated

- Infrastructure Provisioning
- Linux Administration
- Reverse Proxy Configuration
- SSL/TLS Security
- Containerization
- Container Orchestration
- Continuous Integration
- Continuous Deployment
- Cloud Deployment
- Process Management
- Domain Configuration

---

#   Lessons Learned

Through this project I learned:

- How Nginx acts as a reverse proxy
- How Docker packages applications and dependencies
- How to secure applications using HTTPS
- How GitHub Actions automates deployments
- How to troubleshoot networking and firewall issues
- How AWS Security Groups impact application accessibility
- How to deploy production-ready applications on cloud infrastructure

---

#   Future Improvements

- PostgreSQL Integration
- Monitoring with Grafana
- Metrics Collection with Prometheus
- Docker Registry Integration
- Zero-Downtime Deployments
- Infrastructure as Code using Terraform
- Kubernetes Deployment

---
#   Screenshots


<img width="1357" height="653" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/cdd059fd-efaa-499c-9212-f2b8a56ec1ed" />
 - GitHub Actions successful deployment



<img width="1366" height="768" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/e59e782d-0d41-4069-9e39-d3b5d5ab1a32" />
 - EC2 instance running, Docker container running



<img width="1366" height="768" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/9a8cb316-3229-490c-bf3d-8451f6c659e3" />
 - Website loading over HTTPS


#  Author

Akinsanya Wisdom

Aspiring Cloud Engineer | DevOps Engineer | Software Engineer

