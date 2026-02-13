# The Guardian Academy — PWA Product & Technical Blueprint

This repository captures a full implementation blueprint for **The Guardian Academy**, a Progressive Web App (PWA) focused on ethics, civic leadership, and scenario-based learning.

## 1) System Architecture

```text
[Frontend PWA (React/Next.js)]
        |
        v
[API Gateway]
        |
        v
+-------------------------+
| Backend Services        |
+-------------------------+
| Auth Service            |
| User & Profile Service  |
| Dilemma Engine          |
| Scoring & Analytics     |
| CMS / Content Service   |
| Credential Service      |
+-------------------------+
        |
        v
[Data Layer]
- PostgreSQL / MySQL
- Redis (sessions/temp states)
- Optional blockchain/SBT ledger
```

### Architecture Notes
- **Frontend:** Offline-first PWA, installable, resilient on low-bandwidth networks.
- **Backend:** Can be shipped as microservices or a modular monolith.
- **Data:** Minimal and auditable schema with content and scoring versioning.
- **Credentials:** Optional verifiable credentials via SBT/digital badges.

## 2) User Roles & Access

| Role | Key Permissions |
|---|---|
| Learner | Access lessons, answer dilemmas, submit reflections, view scores, earn badges |
| Facilitator | Manage learners/cohorts, moderation, class-level dashboards |
| Admin | Upload/manage curriculum and dilemmas, audit data and decisions |
| Donor / Observer | View aggregate impact dashboards and non-identifying reports |

## 3) Frontend IA & Wireframe Scope (Figma)

### 3.1 Authentication
- Landing: mission statement + Sign Up / Log In.
- Sign Up fields: name, age range, county, email/phone, password, role, consents.
- Onboarding carousel:
  - Guardian Academy purpose
  - Choice-driven scoring model
  - Kenyan case-study orientation
  - Accountability and ethics reminders

### 3.2 Home Dashboard
- Greeting + progress indicator
- Continue module CTA
- Daily dilemma highlight
- Score summary cards (Integrity, Courage, Legal Alignment)
- Community pulse (anonymous trends)

### 3.3 Curriculum Experience
- Module overview (objectives + context)
- Lesson screens (theory, visuals, case studies)
- Decision screens (Dilemma Engine)
- Reflection capture (text/voice)
- Feedback and score breakdown

#### 12-Chapter Curriculum
- **Pillar I: Moral Virtues**
  1. Myth of the Strongman
  2. Ancestral Roots & Modern Law
  3. The Blindfold (Impartiality)
  4. The Scales (Restorative Justice)
- **Pillar II: Institutional Architecture**
  5. Designing for Longevity
  6. Digital Dignity
  7. The Steward’s Voice
  8. The Handover
- **Pillar III: Strategic Sectors**
  9. Steward of the Soil
  10. Steward of the Treasury
  11. Steward of the Digital Commons
  12. Steward of the Global South

### 3.4 Dilemma Engine Flow
- Context panel with story + local case framing
- 2–4 decision cards, optionally time-limited
- Consequence preview (optional pedagogical mode)
- Logic gate + score application
- Reflection/journaling before final feedback

### 3.5 Profile & Progress
- Score dimensions: Integrity, Courage, Empathy, Lawfulness
- Module completion chart
- Badge/credential wallet
- Suggested remediation + unlock recommendations

### 3.6 Impact Dashboard (Admin/Donor)
- Integrity delta and bias-reduction trends
- Completion and retention funnels
- County-level comparisons (aggregated)
- Engagement trends over time

## 4) Backend Service Responsibilities

| Service | Responsibilities |
|---|---|
| Auth Service | JWT/session, RBAC, locale/language preferences |
| User & Profile | Learner profile, progress, cohort mappings |
| Dilemma Engine | Deterministic evaluation, policy/logic gates, rationale trace |
| Scoring & Analytics | Score calculation, trend computation, cohort/region aggregates |
| CMS / Content Service | Curriculum and dilemma CRUD, version history, publishing workflow |
| Credential Service | Badge issuance, optional SBT minting, verification endpoint |

## 5) Data Model (Baseline)

### `users`
- `user_id` (uuid, PK)
- `name` (optional pseudonym)
- `age_range`
- `county`
- `role`
- `created_at`

### `modules`
- `module_id` (PK)
- `title`
- `pillar`
- `objectives`
- `version`

### `dilemmas`
- `dilemma_id` (PK)
- `module_id` (FK)
- `context_story`
- `choices` (json/jsonb)
- `ethical_weights` (json/jsonb)

### `decisions`
- `user_id` (FK)
- `dilemma_id` (FK)
- `choice`
- `timestamp`
- `pressure_context`
- `score_delta` (json/jsonb)

### `civic_indices`
- `user_id` (FK)
- `integrity_score`
- `courage_score`
- `lawfulness_score`
- `empathy_score`
- `updated_at`

### `credentials`
- `user_id` (FK)
- `credential_hash`
- `issued_at`

## 6) Core Product Features
- Offline-capable PWA with service worker caching strategies
- Gamified, scenario-based ethical decision engine
- Time-pressured dilemmas to model real trade-offs
- Reflection capture (text first, voice optional)
- Progress dashboards for learners and facilitators
- Aggregated impact analytics for donors/admins
- Optional blockchain/SBT credential verification

## 7) Security, Trust, and Ethics
- Data minimization and privacy-by-design
- Avoid sensitive political/tribal targeting dimensions
- Immutable decision logs and auditable content history
- Aggregation/anonymization before external dashboard exposure
- Transparent score update rationale for learner trust

## 8) End-to-End User Journey (for Figma + Engineering)
1. Sign up and complete onboarding
2. Resume or select module
3. Consume lesson and contextual case study
4. Submit dilemma choice(s)
5. Receive score + explanation
6. Add personal reflection
7. Complete module and receive badge/credential
8. Review progress dashboard (learner/facilitator/admin views)

## 9) Suggested Build Phases
1. **MVP Foundation**: Auth, learner dashboard, module viewer, dilemma engine v1.
2. **Learning Depth**: Full 12 modules, reflections, facilitator dashboards.
3. **Impact & Governance**: analytics, donor dashboards, content audit trails.
4. **Credential Expansion**: digital badges + optional SBT verification.

## 10) Engineering Handoff Checklist
- [ ] Define API contracts for each service
- [ ] Establish event schema for scoring and analytics
- [ ] Finalize data retention and anonymization policies
- [ ] Draft role-based access matrix and admin workflows
- [ ] Validate low-bandwidth/offline behavior on Android devices
- [ ] Finalize curriculum content versioning and publishing flow

---
This blueprint is ready to drive **Figma wireframing**, **frontend/backend task breakdown**, and **donor impact storytelling**.
