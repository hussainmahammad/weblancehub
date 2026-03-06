## Project Overview

WebLanceHub is a web platform designed to provide affordable web solutions for small businesses.  
It allows users to explore service offerings, view pricing plans, review previous work, and contact the team for website development services.

The application is deployed using the same DevOps infrastructure and deployment strategy implemented in the **PetCart Store project**.

This project demonstrates :

- Jenkins CI/CD automation
- Infrastructure provisioning using Terraform
- Immutable infrastructure with Packer + Ansible
- Containerization using Docker + Amazon ECR
- Kubernetes orchestration using Amazon EKS
- AWS Load Balancer Controller for traffic routing
- Auto Scaling policies for high availability
- CloudWatch for monitoring and logging
- Fully automated deployment and destroy workflows

---

## Infrastructure Architecture

WebLanceHub is deployed using the same three infrastructure strategies used in the **PetCart Store project**.

### 1️⃣ EC2 + Auto Scaling + Application Load Balancer

Traditional AWS infrastructure deployment where:

- EC2 instances are created using **Packer-built AMIs**
- Server configuration is done using **Ansible**
- Instances are managed by **Auto Scaling Groups**
- Traffic is distributed using an **Application Load Balancer**

---

### 2️⃣ Amazon EKS with EC2 Worker Nodes

A managed Kubernetes deployment where:

- The application runs inside **Docker containers**
- Images are stored in **Amazon ECR**
- Pods run on **EC2 worker nodes**
- Traffic is managed through **AWS Load Balancer Controller**

---

### 3️⃣ Amazon EKS with Fargate

A serverless Kubernetes deployment where:

- Pods run directly on **AWS Fargate**
- No EC2 worker nodes are required
- Kubernetes manages scaling automatically

---

<img width="1228" height="737" alt="image" src="https://github.com/user-attachments/assets/8338f959-c6bb-487a-9afa-96e51beed610" />

---

## Reference

The deployment architecture, CI/CD pipeline, Terraform infrastructure setup, Kubernetes manifests, and automation workflows used in **WebLanceHub** are the same as those implemented in the **PetCart Store project**.

For a complete and detailed understanding of the deployment architecture and implementation, please refer to the **PetCart Store project documentation**.


