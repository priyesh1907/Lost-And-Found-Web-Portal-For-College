# Lost and Found Web Portal for College (ABESIT)
**Project ID:** `2026-27CSEMPID058`  
**Department:** Computer Science & Engineering, ABES Institute of Technology, Ghaziabad  
**Affiliated to:** Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow  
**Session:** December 2026  

---

## 👥 Project Team & Supervision

### Student Developers (B.Tech CSE):
- **Shreyas Upadhyay** (Roll No: 2502900100243)
- **Shekhar Kumar** (Roll No: 2502900100230)
- **Shashank Srivastava** (Roll No: 2502900100227)
- **Priyesh Kumar Singh** (Roll No: 2502900100200)

### Faculty Mentors:
- **Project Supervisor:** Prof. Gagandeep Bhatia, Assistant Professor, Department of CSE
- **Head of Department:** Prof. Dr. Hoshiyar Singh Kanyal, Head of Department, Department of CSE

---

## 🚀 Quick Start / How to Run

### Option 1: Live Server (Currently Running!)
The local web server is currently live on:
👉 **[http://localhost:8000](http://localhost:8000)**

### Option 2: 1-Click Windows Launcher
Double-click [`start.bat`](file:///C:/Users/Shashank%20Srivastava/.gemini/antigravity/scratch/lost-and-found-portal/start.bat) in Windows File Explorer. It automatically starts `server.py` and pops open your default web browser to `http://localhost:8000`.

### Option 3: Direct Python Server
In PowerShell:
```powershell
python server.py
```
Then open `http://localhost:8000` in your web browser.

### Option 4: Direct Browser File Launch
Simply double-click [`index.html`](file:///C:/Users/Shashank%20Srivastava/.gemini/antigravity/scratch/lost-and-found-portal/index.html) in Windows File Explorer or open it in Chrome/Edge/Firefox.

### Option 5: Node.js / Express Backend (When Node.js is installed)
```powershell
npm install
npm start
```

---

## 🌟 Key Features & Implemented Modules

1. **Hero Section:**
   - Official institutional title and project ID branding.
   - Tagline from project report: *"A centralized web-based system designed to improve the reporting, searching, and recovery of misplaced belongings within the ABESIT campus."*
   - Primary Call-to-Actions (CTAs): **Browse Lost Items**, **Report an Item**, and **Download Project Report**.
   - Dynamic campus recovery metrics strip and live activity showcase.

2. **Executive Summary & Problem Statement:**
   - Contrast between fragmented legacy methods (paper notices, proctor registers, WhatsApp groups) and the digital recovery portal.
   - 6 Core Objective UI cards: Centralized Reporting, Structured Entry, Search & Filters, Matching Mechanism, Secure Verification, and Admin Oversight.

3. **Interactive Search & Report Browsing Module:**
   - Tabs for **All Records**, **Lost Items**, and **Found Items**.
   - Real-time multi-criteria filtering by:
     - Search keywords (Title, brand, description, ID)
     - Category (Electronics, ID cards, Books, Wallets & Bags, Keys)
     - Campus location (Central Library, CS Block, Cafeteria, Auditorium, Sports Complex, etc.)
     - Progression status (Reported, Under Claim Review, Recovered)
   - Dynamic cards with status indicators, image previews, and action buttons.

4. **Transparent Weighted Matching Engine & Claim Simulation:**
   - Educational explanation of the 4 weighted parameters:
     - **Category Agreement (40%)**
     - **Keywords & Description Similarity (25%)**
     - **Location Proximity (20%)**
     - **Temporal / Date Proximity (15%)**
   - Interactive live Match Simulator console to test candidate pairs and view confidence gauges.
   - Interactive **"Initiate Claim" modal simulation** capturing confidential ownership evidence (serial number, distinctive marks, lock code hint) for custodian inspection.

5. **System Architecture & Tech Stack Showcase:**
   - Tech stack cards: React.js, Node.js & Express REST APIs, MongoDB, JWT & RBAC.
   - Interactive client-server flowchart and core API endpoint specifications (`POST /api/reports`, `GET /api/search`, `POST /api/claims`, etc.).

6. **Simulated Administrator Dashboard View:**
   - One-click toggle in the navbar to preview the custodian review console.
   - Inspection of pending claims and one-click "Approve & Handover" or "Reject".

7. **Full Project Report Viewer & Downloader:**
   - Modal reading the mini-project report (Abstract, Objectives, Test Plan T01–T08, Literature Survey, References).
   - "Print / Save PDF" and direct `.md` download functionality.

8. **Institutional & Team Footer:**
   - Highlights student roll numbers, faculty mentors, and ABESIT / AKTU affiliations.
