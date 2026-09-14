# Persona Test — NextCare MX

## Synthetic user
Lucía, 55, is an informal worker in Mexico. She mainly uses WhatsApp, reads slowly when stressed, dislikes medical jargon, worries about losing work hours, and distrusts apps that sound like they are making medical decisions for her.

## Walkthrough observations
1. The phrase “abnormal retinal screening” initially feels frightening; Lucía wants immediate confirmation that it is not a diagnosis.
2. She understands “next action” better than “care pathway.”
3. She notices transportation as the concrete reason the process is stuck and understands that this is different from a medical problem.
4. She is confused by the phrase “human escalation” and responds better to “a navigator will review your case.”
5. She wants to know whether accepting the case means an appointment is guaranteed. The product must explicitly say it does not guarantee an appointment or coverage.

## Worst confusion
Human navigator acceptance could be interpreted as “problem solved.”

## Fix made
The navigator state now says “ACCEPTED — STILL UNRESOLVED,” and the interface explains that acceptance only means a human owns the handoff. The case remains unresolved until an approved next action is confirmed, a clinician redirects it, or the patient makes an informed opt-out.
