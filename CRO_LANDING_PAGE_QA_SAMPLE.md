# CRO / A-B test landing-page QA — sample test plan

**Demonstration artifact, not a completed client engagement.** This is a reusable example of how I would test an authorized A/B experiment and conversion landing page for a CRO agency. No third-party site or live experiment was tested to create this document. No PASS/FAIL claims are made.

**Prepared:** 25 October 2026 · **Focus:** web/mobile landing pages, A/B experiments, attribution, conversion flows · **Author:** Nurassyl Bulatuly (Kazakhstan, UTC+5)

## Proposed scope and prerequisites

An authorized staging or preview environment with a known control (A) and variant (B), experiment assignment mechanism, approved test accounts, and a safe test conversion endpoint. The product owner supplies expected analytics event names, consent rules, browser/device matrix, and target audience. Never trigger real payments or submit production personal data.

### Prioritized test checklist (example)

| ID | Priority | Scenario | Expected evidence |
|---|---|---|---|
| CRO-01 | P0 | Force A and B through approved preview links or test flags | Correct variant renders; assignment can be reproduced |
| CRO-02 | P0 | Refresh and navigate within an assigned session | Variant remains consistent per documented bucketing rules |
| CRO-03 | P0 | Open a fresh browser profile | No unintended variant carryover across users |
| CRO-04 | P0 | Load with slow network/CPU throttling | No misleading control-to-variant flash; document any flicker |
| CRO-05 | P0 | Primary CTA from each variant | CTA reaches the intended destination with correct context |
| CRO-06 | P0 | Safe checkout / lead-submit test flow | Validation, success and error states work; no live charge |
| CRO-07 | P0 | Conversion event fires on approved successful action | Event name, variant ID, deduplication and timestamp align with spec |
| CRO-08 | P0 | Consent denied, then granted (if applicable) | Tracking respects approved consent policy; no premature events |
| CRO-09 | P1 | Mobile viewport 360px and 390px | No clipped CTAs, hidden pricing, horizontal scroll or modal traps |
| CRO-10 | P1 | Keyboard-only navigation | Visible focus, reachable CTA, usable forms and dialogs |
| CRO-11 | P1 | Broken image / delayed font / JS error handling | Content remains legible; errors captured without leaking data |
| CRO-12 | P1 | Query strings / UTM propagation | Campaign parameters follow the approved attribution design |
| CRO-13 | P1 | Back/forward and direct deep links | No unexpected experiment reassignment or broken navigation |
| CRO-14 | P1 | Representative Chrome/Firefox/Safari profiles | Material layout and functional differences documented |
| CRO-15 | P2 | Basic page performance snapshot | Record LCP/CLS and conditions; do not imply formal performance certification |

**Execution rule:** each case is marked **PASS / FAIL / BLOCKED / NOT RUN** only after authorized execution. Attach browser, OS, viewport, build/version, variant, exact steps, expected/actual behavior and redacted screenshots or console evidence. Distinguish an observed issue from a speculative risk.

## Hypothetical bug-report examples — NOT observed defects

**EXAMPLE-01 · P0 · Duplicate conversion event after refresh**
- Preconditions: approved staging, test user, experiment B, analytics debug view.
- Steps: open variant B; complete a sandbox conversion; refresh the confirmation page.
- Expected: exactly one conversion per unique successful transaction, as defined by the analytics specification.
- Hypothetical actual: conversion event appears twice for the same transaction ID.
- Evidence needed: redacted event payloads, timestamps, request IDs, test environment and screen recording.
- Suggested investigation: idempotency key or confirmation-page event guard.
- **Status: NOT RUN — illustrative scenario only.**

**EXAMPLE-02 · P1 · CTA obstructed on 360px mobile viewport**
- Preconditions: variant A, browser mobile emulation, 360×800 viewport.
- Steps: open landing page, scroll to sticky CTA, open cookie-consent banner.
- Expected: CTA and consent controls remain visible, operable and non-overlapping.
- Hypothetical actual: fixed banner overlays CTA and traps keyboard focus.
- Evidence needed: screenshot with viewport, CSS state and keyboard steps.
- **Status: NOT RUN — illustrative scenario only.**

## Example handoff for a small pilot

1. Agree on one landing page, two variants, two target viewports and one safe conversion path.
2. Prioritize ~5–8 critical checks within an agreed timebox; record **NOT RUN** for everything outside scope.
3. Deliver a concise case matrix, reproducible issue log, retest notes and release-risk summary.
4. Recommend fixes; **the client retains all release decisions**.

**Indicative discussion only:** a narrowly scoped pilot can be discussed from $45; recurring release QA from $200/month for up to 8 hours, with scope and terms separately agreed. This is not a binding offer or proof of revenue.

[General QA services](SERVICES.md) · [QA CV](QA_CV_EN.md) · [Other report sample](QA_REPORT_SAMPLE.md) · Contact: bulatulynurasyl22@gmail.com
