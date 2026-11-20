# Grillit Team – Digital Business Cards

Live site: https://belalsource.github.io/grillit-team/

| Person | Card link |
|---|---|
| Mazen Arkaz | https://belalsource.github.io/grillit-team/#mazen-arkaz |
| Mohaned Arkaz | https://belalsource.github.io/grillit-team/#mohaned-arkaz |
| Amr El-Saadany | https://belalsource.github.io/grillit-team/#amr-el-saadany |
| Mohamed El-Moslemany | https://belalsource.github.io/grillit-team/#mohamed-el-moslemany |
| Mazen Hamdy | https://belalsource.github.io/grillit-team/#mazen-hamdy |

QR codes are in the [`qr/`](qr/) folder: `.svg` for printing, `.png` (1200×1200) for screens.

## ⚠️ Don't rename this repo
The printed QR codes contain the web address, which includes the repo name `grillit-team`.
Renaming the repo (or changing a person's `slug`) breaks the printed codes.

## How to edit a person
1. Open `script.js` on GitHub and click the pencil icon (Edit).
2. Find the `TEAM` list at the top (lines 14–18). Each line is one person.
3. Change the text between the quotes (name, title or phone). Keep the quotes and commas.
4. Click **Commit changes**. The site updates by itself within about a minute.
5. If you changed a phone number or name, also edit that person's file in `vcards/`
   (e.g. `vcards/mazen-hamdy.vcf`) so the "Save contact" button matches.

## Swap the logo
Upload a sharper file named exactly `assets/logo.png` (replace the old one). Nothing else needs to change.

## Files
- `index.html` – page shell, title, link-preview tags
- `styles.css` – colours, fonts, bento grid
- `script.js` – team data + the two views (team page and single-person card)
- `assets/` – logo and favicon
- `vcards/` – one contact file per person
- `qr/` – QR codes
