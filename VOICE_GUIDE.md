# Troy Democratic Committee — Website Voice Guide

This guide covers how to write for every part of troynydems.com. It builds on the Troy Democratic Committee Voice Guide (see `github/troydems/Troy_Democratic_Committee_Voice_Guide.md`) — read that first. Everything in that document applies here. This guide adds website-specific rules on top of it.

---

## The One Rule That Governs Everything

Every sentence on this site should pass this test: **Does this sound like a trusted, knowledgeable neighbor who genuinely cares about Troy?**

If yes — publish. If not — revise.

---

## Voice

Be direct. Have opinions. Use specific examples and names, not vague claims. State your point first, then support it. Trust the reader to recognise what matters without labelling it as "significant" or "important."

---

## Banned Words

Never use these — they are the most flagged AI-writing markers:

delve, dive into, navigate (figurative), underscore, bolster, foster, harness, leverage, unpack, shed light on, pave the way, pivotal, groundbreaking, cutting-edge, transformative, game-changing, innovative, robust, comprehensive, seamless, intricate, nuanced (as empty praise), vibrant, multifaceted, holistic, testament, landscape (figurative), realm

Never use these phrases:

- "In today's [fast-paced/rapidly evolving/digital] world..."
- "It's important/worth noting that..."
- "One of the most [important/significant/crucial]..."
- "When it comes to..." / "At its core..." / "At the end of the day..."
- "This is where X comes in" / "Let's break it down"
- "Plays a crucial role in..." / "It cannot be overstated..."
- "...underscoring the importance of..." / "...highlighting the need for..."
- "...reflecting a broader trend toward..." / "...marking a significant shift in..."

Never use these structures:

- "It's not just X — it's Y"
- "Not only X, but Y"
- "This isn't about X. It's about Y."
- "No X. No Y. Just Z."

These mimic insight without providing any.

---

## Structure

- Vary paragraph and sentence length. Don't write uniform blocks.
- Never use the "Bold term: explanation sentence" list format. It's the single most recognisable AI pattern.
- Don't signpost ("Let's explore," "Now let's turn to"). Just make your point.
- Don't open with a sweeping contextual statement. Don't close with a summary or inspirational wrap-up. Start and end on substance.
- Don't restate the question back before answering it.

---

## Style

- Use contractions. "It's," "don't," "won't."
- Maximum one em dash per response. Use commas or parentheses instead.
- Don't over-format. Plain prose is often clearer than headers and bullet points.
- Drop preamble ("Great question!"), performative enthusiasm ("exciting," "incredible," "powerful"), and unsolicited caveats.
- Match tone to context. Casual question, casual answer.

---

## Before Finishing, Check

1. Read it out loud. Does any sentence sound like a press release? Rewrite it.
2. Are you repeating the same point in different words? Say it once.
3. Does your opening sentence set the scene with a grand statement about the state of the world? Delete it, start with the second sentence.

---

## Writing by Section Type

### Hero Sections (Top of Each Page)

The hero is the first thing a visitor sees. It gets one job: tell them where they are and why it matters.

**Headline:** One clear statement. No questions. No slogans. Say what the page is about.
- Good: "2026 Endorsements"
- Good: "Welcome to the Troy Democratic Committee Website"
- Bad: "Empowering Troy's Future Through Democratic Values"

**Subheading / body line:** One sentence of context. Who we are, what this page covers, or what we want the visitor to do next.

**Buttons:** Maximum two. The primary (red) button is the most important action. The secondary (outlined) button is an alternative. Keep button text short — three words or fewer when possible.
- Good: "Get Involved" / "Register to Vote"
- Bad: "Click Here to Learn More About How to Get Involved"

---

### Page Body Text

Write in paragraphs of three to five sentences. Each paragraph covers one idea. Don't stack ideas.

- Use "we" and "you" — not "the committee" or "residents"
- Lead with the most important information
- If a section has more than three paragraphs, ask whether it needs a heading to break it up
- Plain English only. If you wouldn't say it out loud to a neighbor, don't write it

---

### Cards (News, Events)

Each card has four elements: **category label, headline, excerpt, button.**

**Category label:** One word or short phrase in all caps. Examples: NEWS, STATEMENT, NEWSLETTER, EVENT, MEETING

**Headline:** Short and specific. Name the thing. Don't tease.
- Good: "Council Democrats Condemn Mayor's City Hall Plan"
- Bad: "An Important Update You Need to Read"

**Excerpt:** One or two sentences. Enough to tell the reader what they get if they click. No cliffhangers.

**Button:** "Read More" or "Details" — keep it consistent across the page.

---

### Endorsement Cards

Each endorsement card uses the social media copy from the endorsements file (`github/troydems/Troy_Dem_Endorsements_2026.md`). That copy is already written in the right tone: warm, specific, punchy.

When adding a new endorsement:
1. Pull the **Social Media** section from the endorsements file
2. Use it as-is — don't water it down or make it more formal
3. Include the hashtags as tag badges
4. Link every source at the bottom of the card

---

### Office Holders Table

Names only — no commentary, no adjectives. Titles should match the official title exactly.

---

### Letter from the Chair

This is the most personal piece of writing on the site. It should sound like a real person wrote it — because one did.

- Write in first person plural ("we") not first person singular ("I")
- Three paragraphs maximum
- Each paragraph covers one of the committee's three core purposes: supporting elected officials, electing candidates, serving Troy residents
- End with a direct invitation: a meeting, a social hour, a way to reach out
- Sign with the Chair's full name and title

---

## Navigation Labels

Navigation labels are not headlines. They are signposts. Keep them short and literal.

| Page | Label |
|---|---|
| Homepage | Home |
| endorsements.html | Endorsements |
| about.html | About Us |
| our-goals.html | Our Goals |
| priorities.html | Priorities |
| office-holders.html | Office Holders |
| take-action.html | Take Action |
| vote.html | Vote |
| volunteer.html | Volunteer |
| events.html | Events |
| news.html | News |

Don't rename nav labels to be clever. "The Latest" is acceptable. "Civic Engagement Hub" is not.

---

## Buttons and Calls to Action

Every page should have at least one clear next step for the visitor. Use the following standard CTAs — don't invent new ones unless you have a specific reason.

| Action | Button Text | Color |
|---|---|---|
| Donate | Donate on ActBlue | Red |
| Register to vote | Get Registered | Outlined |
| Volunteer | Volunteer | Red or Blue |
| Read a post | Read More | Blue |
| See event details | Details | Blue |
| View full schedule | View Full Schedule | Blue |
| Go to external site | [Specific label] | Blue |

Button text should always describe what happens when you click it — not what you want the visitor to feel.

---

## Adding a News Post

Open `news.html`. Find the comment block that reads `TEMPLATE — copy and fill in to add a new post`. Copy the block, fill in:

1. **Image:** Add a photo to the `images/` folder and reference it here. If no photo is available, use `images/news-thumb-1.webp` as a placeholder.
2. **Category label:** NEWS, STATEMENT, NEWSLETTER, or FACT CHECK
3. **Title:** Specific and direct — what happened?
4. **Excerpt:** One to two sentences. What does the reader need to know?
5. **Link:** Point to the full post URL (troynydems.com/post/... or an external source)

---

## Adding an Event

Open `events.html`. Find the comment block that reads `TEMPLATE — copy and fill in to add a new event`. Copy the block, fill in:

1. **Image:** Flyer or photo for the event. Add it to `images/` first.
2. **Date/time label:** Format as "Day, Month Date · Time" — example: "Tuesday, June 3rd · 6–8 PM"
3. **Title:** The name of the event
4. **Venue:** Bold the venue name, then line-break the address
5. **Description:** Two to three sentences. What happens there, who should come, what to expect.

---

## Image Alt Text

Every image needs alt text. Alt text describes what the image shows — it is not a caption and not a keyword list.

- Good: `alt="Mary Pat Donnelly, Rensselaer County District Attorney"`
- Good: `alt="Troy Democratic Committee volunteers at a canvassing event"`
- Bad: `alt="image1"` or `alt=""` (unless the image is purely decorative)

---

## What to Update After Each Election Cycle

- **endorsements.html** — Replace all cards with new endorsements from the updated endorsements file
- **office-holders.html** — Update every name in the table to reflect who actually won
- **news.html** — Add post-election recap as the top card
- **index.html** — Update the Letter from the Chair if the chair changes

---

## What Never Changes

- The three core purposes of the committee (support officials, elect candidates, serve Trojans)
- The voice: warm, authoritative, informative
- Plain English
- Active voice
- No banned words or phrases (see the main voice guide)
- Sources linked for every factual claim in endorsements

---

*Last updated: May 2026*
