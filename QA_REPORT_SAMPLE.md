# QA deliverable example — public CI coverage review

**Reviewed:** 2026-10-24 · **Source:** [Cashback ONE CI workflow](https://github.com/nurasss/cashback-one/blob/main/.github/workflows/ci.yml) · **Scope:** static inspection of one public GitHub Actions YAML file only.

> This is a transparent **portfolio demonstration on the author's own code**, not a paid client engagement, a completed release certification, or evidence that the current workflow passes. No application was deployed, no CI job was executed, and no private data was accessed for this review.

## Executive summary

The workflow **defines** backend, admin, mobile, agent, Docker, and integration-harness checks. It also provisions PostgreSQL and Redis for relevant test jobs. This is useful baseline coverage. The YAML alone cannot establish that the current build passes or that end-user flows work in a deployed environment.

**Assessment:** CI test coverage is documented; release readiness is **NOT ASSESSED**. A green pipeline, if independently verified, would still need a small staging smoke test for the most important customer journeys.

## Evidence matrix

| ID | Area | Evidence visible in CI file | Assessment |
|---|---|---|---|
| CI-01 | Backend | Python 3.11, Ruff, mypy, compileall, pytest; PostgreSQL 16 and Redis 7 services | Automated checks **configured**; run result not inspected |
| CI-02 | Admin web | npm ci, typecheck, lint, tests, build, npm audit | Checks **configured**; browser E2E not visible in this workflow |
| CI-03 | Mobile | npm ci, typecheck, lint, npm test | Checks **configured**; physical-device or emulator execution not visible |
| CI-04 | Agent | Ruff, mypy, compileall, pytest | Checks **configured**; behavior on production external systems not proven |
| CI-05 | Packaging | Docker build jobs and compose config validation | Build/syntax validation **configured**; deployment smoke test not visible |
| CI-06 | Integration | Pre-ONE E2E harness with PostgreSQL and Redis | Harness **invoked**; tested scenarios and pass/fail not established from YAML alone |

**Source of evidence:** [single inspected CI definition](https://github.com/nurasss/cashback-one/blob/main/.github/workflows/ci.yml). These are observations about *declared jobs*, not execution outcomes.

## Risk register and recommended follow-up

| Priority | Risk / evidence gap | Next verification step | Acceptance criterion |
|---|---|---|---|
| P1 | Release-critical web journeys are not visibly covered by browser automation in this workflow | Inspect test suites and run agreed sign-in → core action → confirmation flow on staging | Steps recorded, expected vs actual documented, no unresolved blocker |
| P1 | Role and tenant authorization may require negative-case verification | Check API tests for cross-tenant resource access, invalid role, expired token | All agreed unauthorized requests denied without data leakage |
| P1 | Retries and repeated requests may affect loyalty/financial operations | Inspect idempotency tests and run controlled duplicate-request scenarios against test data | One intended state transition, no duplicate credit/debit |
| P2 | Mobile tests may not represent real device behavior | Run agreed smoke paths on named Android/iOS device profiles | Results recorded with OS/device/browser versions |
| P2 | Docker builds do not prove a deployed service is reachable | Execute health check plus one representative staging API flow | Service responds correctly and logs show no unexpected errors |

**Important:** these are hypotheses and test gaps from limited evidence, **not confirmed defects**.

## What a paid pilot report would add

1. **Scope and environment:** exact build SHA, staging URL, browser/device, test-account permissions, date/time.
2. **Checklist:** each agreed flow marked PASS / FAIL / BLOCKED / NOT RUN, with evidence links.
3. **Defect records:** severity, exact reproduction steps, expected vs actual behavior, screenshots/logs (with secrets redacted).
4. **Retest notes:** fix version and whether the reported issue reproduces.
5. **Release-risk summary:** open blockers and recommendations; product owner retains release decision.

### Defect format illustration (synthetic; NOT a discovered bug)

- **ID:** DEMO-001 · **Severity:** High · **Status:** EXAMPLE ONLY
- **Scenario:** submitting a form twice while the first request is pending.
- **Steps:** (1) Open a *test* checkout form. (2) Enter sandbox data. (3) Submit twice rapidly. (4) Inspect resulting test orders.
- **Expected:** one order and a clear confirmation.
- **Actual:** *placeholder — to be filled only after observation.*
- **Evidence:** *placeholder — screenshot, sanitized network trace, and build ID.*

## Offer and next step

For a small SaaS, agency, or e-commerce team, a **$45 indicative scoped pilot** can produce a checklist, reproducible findings, and a concise release-risk summary. **$200/month indicative retainer** covers up to eight hours of agreed QA checks and retests. Prices and scope are discussed before any engagement; no work or financial commitment is accepted automatically.

**Contact:** [bulatulynurasyl22@gmail.com](mailto:bulatulynurasyl22@gmail.com?subject=QA%20pilot%20%2F%20monthly%20release%20checks) · [Full service description](SERVICES.md)

---

### Кратко по-русски

Это **публичный образец QA-отчёта**, подготовленный по собственному открытому CI-файлу. Показаны фактически настроенные проверки и пробелы в доказательствах. Запуск тестов, реальные дефекты и готовность релиза **не подтверждаются**. Для заказчика результатом пилота будут согласованный чек-лист, воспроизводимые дефекты, ретест и краткое заключение о рисках.
