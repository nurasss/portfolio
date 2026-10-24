# JumpCannon — illustrative QA risk checklist (not an executed audit)

**Prepared 25 October 2026** for a potential conversation about the [Middle QA Engineer opening](https://jobs.dou.ua/companies/trust-sourcing/vacancies/377496/), advertised by Trust Sourcing on 21 October 2026.

**Important:** This is an independent, hypothetical testing proposal derived **only** from the public vacancy description. I have **not** accessed JumpCannon, tested Lucy, inspected any private data, found defects in the product, or been engaged by Trust Sourcing/JumpCannon. No results below are PASS/FAIL findings.

## The first five release risks I would prioritize

| Risk | Synthetic test setup (authorized staging only) | Expected invariant |
| --- | --- | --- |
| Duplicate/overlapping distributor uploads | Upload CSV A, re-upload identical A, then partially overlapping B | Defined deduplication rules prevent double-counted revenue/volume; warnings and reconciliation are visible |
| Reporting-period and unit ambiguity | Mix date formats, missing days, kg vs lb, and a negative return | Aggregates follow explicit business rules; totals reconcile with accepted source rows and units |
| Tenant isolation | Create synthetic tenant Alpha and Beta, attempt to access Beta's report/export with Alpha's authorized test account | No cross-tenant rows, dashboard metrics, search results, export data, or AI context leak |
| Lucy answer grounding | Ask for a metric absent from the uploaded dataset, then request a comparison outside the selected date range | Assistant distinguishes unknown from known, avoids invented figures, and stays within authorized context |
| Dashboard-to-export consistency | Filter a sample report by date/product, export CSV, and compare totals against the filtered UI and a local independent calculation | Same filters, precision, and totals across dashboard and export, or a documented difference |

## A bounded test execution plan

1. **Agree access and data rules.** Use an authorized staging account, synthetic distributor CSVs, documented metric definitions, and separate synthetic tenant accounts. No real customer files or payment credentials.
2. **Baseline smoke (manual).** Sign-in, upload, import status, dashboard, filter, Lucy prompt, export, logout. Record exact environment and coverage.
3. **Data reconciliation (scripted).** Use a small Python or TypeScript fixture calculator to independently recompute sums and counts; compare with UI/API outputs. Explicitly test duplicates, returns, date boundaries, and missing values.
4. **Permissions and AI boundary checks.** With approved test roles, verify company and role separation at UI/API/export/assistant levels. Treat prompt-injection attempts as application-behavior checks, **not** a comprehensive security audit.
5. **Automate only stable critical paths.** If approved, add small Playwright/API regression checks for repeatable workflows; keep variable AI-answer quality in a rubric-based manual evaluation.
6. **Handoff.** Deliver reproducible bug reports (severity, steps, expected/actual, redacted evidence), tested/not-tested list, open risks, and one agreed retest.

## Example hypothetical issue format — NOT a real bug

**ID:** EXAMPLE-01 — Duplicate import inflates a monthly total (hypothetical)

**Preconditions:** Synthetic tenant Alpha; fixture `orders_oct.csv` contains 3 rows totalling 120 units. Import once, then import the same file again.

**Expected:** Product-defined duplicate policy is applied; if duplicate rows are disallowed, the dashboard remains at 120 units and a clear warning appears.

**Hypothetical actual (illustrative only):** Dashboard shows 240 units without a warning.

**Severity if observed:** High — material decision-making risk. **Status:** NOT EXECUTED. Needs the actual product's deduplication specification before assigning a defect.

## Possible commercial scope — non-binding

An **indicative US$45 paid pilot** could cover one agreed upload → dashboard → export workflow using synthetic data, with a brief report. An **indicative US$200/month** could cover up to 8 hours of agreed regression/AI-workflow QA, if a recurring part-time engagement fits the team's needs. Both are discussion starters, not contracts or claims of availability, acceptance, or product access.

**Contact:** bulatulynurasyl22@gmail.com · [QA profile](QA_CV_EN.md) · [General QA services](SERVICES.md)
