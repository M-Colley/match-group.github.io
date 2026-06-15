# Contributing to the MATCH Lab website

You don't need to know how to code to add content. Almost everything on the site is driven by simple
text files in the [`_data/`](_data) folder — you just add a few lines following the templates below.

There are **two ways** to contribute:

- **Easiest — open an issue:** go to the repo's **Issues → New issue** and pick a form
  ("➕ Add a publication", "➕ Add a team member", "➕ Add news"). Fill it in and submit. A maintainer
  copies it into the site. No Git needed.
- **Direct edit (if you have write access):** open the relevant file on GitHub, click the ✏️ **pencil**
  icon, make your change, and **Commit changes** to `main`. The website rebuilds automatically in
  ~1–2 minutes. (Tip: press <kbd>.</kbd> on any repo page to open the full github.dev editor in your browser.)

After any change, check it went live at **https://m-colley.github.io/match-group.github.io/**.

> **Formatting tips that apply everywhere**
> - Indentation is meaningful — copy the templates exactly (2 spaces, a `- ` before each new entry).
> - Wrap text containing a colon `:` in double quotes, e.g. `info: "PhD Student, UCL"`.
> - In author lists, wrap **group members** in `<strong> … </strong>` so they appear in bold.

---

## ➕ Add yourself / a team member

File: [`_data/team_members.yml`](_data/team_members.yml). Add a block at the end:

```yaml
- name: Your Full Name
  photo: Your_Name.jpg          # optional — see "Adding a photo" below. Omit for an auto initials avatar.
  info: "PhD Student, UCL"       # your role line
  website: https://...           # optional
  email: you@ucl.ac.uk           # optional
  scholar: https://...           # optional (Google Scholar)
  github: https://github.com/... # optional
  number_educ: 3                 # how many research-interest bullets to show (0–5)
  education1: First research interest
  education2: Second research interest
  education3: Third research interest
```

Only `name` is required; delete any lines you don't need (and set `number_educ` to how many
`educationN` lines you kept, or remove them all).

## ➕ Add a publication

File: [`_data/publist.yml`](_data/publist.yml). Add a block:

```yaml
- title: "Full Paper Title"
  image: teaser.jpg              # a teaser image in images/pubpic/ (see "Adding a photo")
  preview: clip.preview.mp4      # optional short hover video, in files/videos/previews/
  authors: "Author One, <strong>Group Member</strong>, Author Three"
  note: "* Joint first authors"  # optional footnote
  venue: "ACM CHI"
  year: 2026
  award: "Honorable Mention"     # optional — shows a badge
  selected: true                 # optional — features it on the home page & top of /publications
  links:
    - name: "DOI"
      url: "https://doi.org/..."
    - name: "PDF"
      url: "https://..."
    - name: "Video"
      url: "https://..."
```

Publications are grouped by `year` automatically. Add the year to [`_data/years.yml`](_data/years.yml)
only if it isn't already listed.

## ➕ Add a news item

File: [`_data/news.yml`](_data/news.yml). Newest first, at the top:

```yaml
- date: "June 2026"
  headline: 'What happened. You can use <a href="https://...">links</a> and <em>emphasis</em>.'
```

## ➕ Add an affiliated researcher / visiting researcher

- Affiliated PhD researchers: [`_data/affiliates.yml`](_data/affiliates.yml)
  ```yaml
  - name: Full Name
    affiliation: University Name
    since: 2026
  ```
- Visiting researchers: [`_data/visiting.yml`](_data/visiting.yml)
  ```yaml
  - name: Full Name
    period: "Jan–Mar 2026"
  ```

## ➕ Add a talk, award, or grant

- Invited talks: [`_data/invited_talks.yml`](_data/invited_talks.yml) → `- name: 'Talk title — venue (year)'`
- Awards: [`_data/awards.yml`](_data/awards.yml) → `- name: "Award name, venue year"`
- Grants/fellowships: [`_data/grants.yml`](_data/grants.yml) → `- name: "Grant/fellowship (year)"`

---

## Adding a photo or teaser image

1. Put the image file in the right folder:
   - Team headshots → [`images/teampic/`](images/teampic) (roughly square works best)
   - Publication teasers → [`images/pubpic/`](images/pubpic)
2. Reference just the **filename** in the data file (e.g. `photo: Jane_Doe.jpg`, `image: myproject.jpg`).

To upload via the browser: open the folder on GitHub → **Add file → Upload files**.

---

## Editing page text

The wording of pages lives in [`_pages/`](_pages) (`home.md`, `research.md`, `about.md`, `team.md`, …).
These mix Markdown with a little HTML — edit carefully, and if unsure, open a PR or an issue instead.

## If something breaks

If the site doesn't update after ~5 minutes, the most likely cause is a YAML typo (wrong indentation, a
missing quote, or a stray `-`). Compare your block against the templates above, or ask a maintainer /
open an issue. You can also check the build status under the repo's **Actions** / **Settings → Pages**.
