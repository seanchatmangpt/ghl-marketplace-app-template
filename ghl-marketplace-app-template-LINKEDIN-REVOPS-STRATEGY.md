# ghl-marketplace-app-template LinkedIn RevOps Strategy

## Standing and claim ceiling

This repository already demonstrates a GoHighLevel marketplace application boundary with OAuth authorization, company/location installation state, users and contacts API calls, webhooks, SSO, and authenticated API requests. It is therefore a strong **CRM INTEGRATION / PARTIAL_ALIVE** building block for a LinkedIn-originated RevOps pipeline.

It does **not** prove LinkedIn API ingestion or publication. LinkedIn remains an upstream source whose admitted signals must enter through a bounded handoff.

## Role in the revenue system

```text
LinkedIn publication / lead signal
  -> canonical acquisition envelope
  -> GoHighLevel contact/account reconciliation
  -> workflow / conversation / opportunity state
  -> downstream qualification and follow-up
```

The bridge should translate canonical ecosystem objects into GHL-specific resources without making GHL the semantic source of truth.

## Canonical-to-GHL projection

| Canonical object | GHL projection | Constraint |
|---|---|---|
| Person | Contact | idempotent identity reconciliation |
| Account | Company/custom fields | preserve canonical account ID |
| Campaign | source/custom attribution | preserve campaign ID |
| ContentAsset | custom field/note/association | retain exact originating asset |
| Assessment | custom fields/note | version score rubric |
| Opportunity | opportunity/pipeline object | transition only on admitted qualification |
| Interaction | conversation/note/event | preserve source and timestamp |
| Receipt | external evidence reference | never store secrets in receipts |

## August 31 campaign

For `10k_august_2026`, the bridge should accept a handoff from the readiness-assessment layer containing source, campaign, content asset, Person/Account identity, consent, assessment score, identified constraint, and qualification evidence.

The first implementation target is **idempotent contact/account creation or reconciliation plus campaign attribution**, not automated outbound messaging.

## Authority boundary

OAuth scope availability is capability, not authority.

- `SELECT`: choose the admitted CRM projection and target installation/location.
- `CONSTRUCT`: build the GHL mutation intent and deterministic request payload.
- `DO`: make the external GHL API mutation or send a conversation message.

All DO operations should bind installation identity, location/company identity, request digest, authority scope, idempotency key, response identity, and outcome receipt. Webhook ingestion must validate event identity and resist duplicate replay.

## Qualification rules

Do not create an opportunity merely because a LinkedIn lead exists. Suggested transitions:

```text
Lead -> MQL when ICP_fit AND identifiable_problem
MQL -> SQL when subject AND pain AND consequence AND authority_path AND falsifiable_outcome
SQL -> POV_PROPOSED when one bounded experiment is identified
```

GHL pipeline stages should be projections of those predicates rather than independent manual meanings.

## Next admitted increments

1. Define a versioned canonical RevOps handoff schema independent of GHL.
2. Implement idempotent contact/company reconciliation with deterministic external IDs.
3. Persist source=`linkedin`, campaign, content-asset, first-touch, last-touch, assessment and consent fields.
4. Add opportunity-stage projection from explicit MQL/SQL/POV predicates.
5. Add signed/hashed webhook observation receipts and duplicate-event refusal.
6. Add brokered outbound-message intent construction, leaving live send authority separately configured.
7. Add integration tests against an admitted GHL sandbox/test location before claiming `ALIVE`.

## Falsifiers

This repository cannot be called an ALIVE LinkedIn RevOps bridge until a real LinkedIn-originated handoff is projected into an exact admitted GHL installation, independently observed, and replay-verified. Existing example API calls prove integration shape, not campaign-level production standing.
