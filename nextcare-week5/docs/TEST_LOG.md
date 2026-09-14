# Mechanical Test Log — NextCare MX

## Pass 1
Automated structural test checks: fictional-demo label, clinical boundary, owner/deadline/barrier fields, two-attempt escalation rule, unresolved human acceptance, and simulated-AI label.

Result: all eight checks passed.

## Manual scenario test
1. Open fictional Lucía case.
2. Confirm initial attempts = 0.
3. Record first unsuccessful attempt: attempts = 1, automation remains available.
4. Record second unsuccessful attempt: attempts = 2, automation stops, status becomes HUMAN REVIEW REQUIRED.
5. Accept unresolved case: status becomes ACCEPTED — STILL UNRESOLVED.

## Bug found during review
The first interface behavior allowed the barrier selector to change even after the case had been accepted by a human navigator, which could make the escalation context drift after ownership changed.

## Fix
Lock the barrier selector after navigator acceptance and keep a visible note that the accepted case remains unresolved until a valid closing event occurs.
