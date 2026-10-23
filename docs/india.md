# INDIA — Product Proposal & Project System

## 1. WHO — User + Project

* **Project:** **Transformers Collection Archive** — (Name subjected to change) A curated, visual database and digital showcase for cataloging and displaying a personal Transformers collection across all eras and factions that I currently have.
* **Developer:** Tylan Miller — UNA IT Cybersecurity Major 
* **Specific User / Audience:**
  * **Primary User (Curator/Admin):** A dedicated Transformers collector who wants a central, self-managed database to upload, edit, and organize their personal figures across different continuities (G1, Beast Wars, Live-Action, Collabs, and More) without relying on cluttered third-party spreadsheets or rigid community wikis.
  * **Secondary User (Viewer/Enthusiast):** Fellow collectors and fans browsing the public web showcase to explore figure details, alt-modes, and collection highlights.
* **User Stories:**
  * *Curator:* "As a collector, I want to easily upload, update, and delete figure records and photos through a clean web interface so that I can keep my collection catalog accurate without writing raw database queries."
  * *Viewer:* "As a Transformers fan visiting the site, I want to browse and filter the collection in a clean, visually polished gallery so that I can inspect figures across both Autobot and Decepticon lines."

---

## 2. WHY — Problem + Value

* **Problem / Opportunity:** Most existing toy databases are either sprawling crowd-sourced encyclopedias cluttered with ads and aftermarket price charts, or plain spreadsheets that lack visual appeal. Furthermore, evolving my earlier *Decepticon Database* requires expanding beyond a single faction and moving from a raw functional CRUD setup to a polished, neutral-toned Transformers showcase capable of dynamically rendering figure photography.
* **Value Proposition:** *For a dedicated Transformers collector, this archive provides a customizable, full-stack digital showcase because it combines a working CRUD database backend with a clean, faction-neutral UI Designed specifically to highlight personal figure photography and character specs.*

---

## 3. WHAT ALREADY EXISTS — Landscape

| Product / Approach | What is Good? | What is Bad / Missing? | Functionality & Tech Clues | Borrow / Avoid |
| :--- | :--- | :--- | :--- | :--- |
| **[Transformerland](https://www.transformerland.com/)** | Massive identification guide with comprehensive series/year breakdowns. | Dated early-2000s layout; designed primarily as an online store rather than a personal display. | Server-rendered catalog, query filters, static image hosting. | **Borrow:** Era and continuity categorization. **Avoid:** Cluttered storefront UI. |
| **[TFWiki.net](https://tfwiki.net/)** | Deepest lore and release documentation available. | MediaWiki text walls; not built for personal inventory or visual card galleries. | MediaWiki (PHP), public read access, heavy cross-linking. | **Borrow:** Faction/sub-group taxonomy. **Avoid:** Wall-of-text encyclopedia layout. |
| **[ActionFigure411](https://www.actionfigure411.com/)** | Fast visual checklists and mobile-friendly grid views. | Focused heavily on resale/eBay pricing; limited depth for older or obscure Transformers lines. | OAuth accounts, responsive grids, third-party API integrations. | **Borrow:** Clean card grid scanning. **Avoid:** Cluttering cards with price graphs. |
| **Previous *[Decepticon Database](https://github.com/TMill3838/decepticon-database)*** | Working data structure and core CRUD logic already proven. | Locked into a single-faction theme; currently lacks a polished UI and dynamic image loading. | Web forms, CRUD endpoints, custom CSS. | **Borrow:** Core CRUD structure. **Avoid:** Hardcoded single-faction styling. |

* **Why build another one?** None of the existing platforms give a collector full ownership over both the database schema and the visual gallery experience. Upgrading my existing CRUD foundation into a unified, faction-neutral showcase lets me control exactly what information and photos are displayed. Existing platforms also have a dull and less appealing design.

---

## 4. DONE — KILO Success Test

At **KILO**, we should be able to demonstrate that:
1. **Curator CRUD Workflow:** The collection owner can select, add, update, and delete Transformer entries (name, faction, series era, alt-mode, and notes) directly from the web UI and see changes persist immediately.
2. **Dynamic Photo Rendering:** Every figure entry reliably loads and displays its associated figure photograph on both the main gallery grid and its detail view without broken links or layout shifts.
3. **Polished Faction-Neutral Showcase:** A visitor can open the live web URL and browse the collection in a responsive, styled card layout using a neutral Transformers color palette (Cybertronian metallic accents and dynamic Autobot red / Decepticon purple badges) with working search/filter controls.

---

## 5. PLAN — Project System

* **Starting Point:** Not starting from scratch. The core CRUD operations (Select/Read, Insert/Create, Update, and Delete) are already functional, evolving from the structure of my earlier *Decepticon Database*. Currently, the UI is unstyled/raw and does not yet handle loading figure photos.
* **Direction:** Transform the working CRUD skeleton into a polished, visually cohesive Transformers collection showcase with working image loading and faction/era filtering by KILO.
* **Three Initial Capability Directions:**
  1. **UI Overhaul & Neutral Theme:** Redesign the raw CRUD views into a responsive card grid and sleek forms using a neutral Cybertronian palette that supports all factions equally.
  2. **Photo Loading & Media Pipeline:** Establish a reliable method to attach, store, and render figure photos for each database record.
  3. **Collection Filtering & Sorting:** Allow users to filter the rendered cards by Faction (Autobot, Decepticon, Maximal, Predacon, etc.) and Series Era.
* **Biggest Unknowns:**
  * **Photo Loading Strategy:** Deciding the cleanest, most reliable way to load photos into the database/app—specifically whether to host images in a dedicated `/public/images` repo directory or use external image URLs (Imgur/GitHub raw links).
  * **Responsive Image Sizing:** Ensuring uploaded photos of varying aspect ratios (tall robot modes vs. wide vehicle modes) crop or scale cleanly inside uniform UI cards.
* **Project Links:**
  * **Backlog / Issues:** [Issues](https://github.com/TMill3838/fullstack-brain-bucket/issues?q=is%3Aissue+state%3Aopen)
  * **Milestones:** [Milestones](https://github.com/TMill3838/fullstack-brain-bucket/milestones)
  * **DEV Repository:** [Repo](https://github.com/TMill3838/fullstack-brain-bucket)
  * **Production URL:** Currently Not Working

---

## 6. SPRING 99 — Future

* **Next Users:** Multi-user support allowing other collectors to register accounts and publish their own custom collection shelves.
* **Next Features:** G1-style interactive Tech Spec stat bars (Strength, Intelligence, Speed, Firepower), physical media/DVD collection tabs, and wishlist vs. owned toggles.
* **Next Platform / Scale:** Mobile-first PWA view optimized for quick lookup at conventions, flea markets, or retail stores to check owned figures on the spot.
