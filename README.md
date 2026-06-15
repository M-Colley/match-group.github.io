# MATCH Lab — Website

Source for the **MATCH Lab & Friends** website (*MATCH = Mobility, Accessibility, and Computational HCI*),
led by Dr. Mark Colley at the [UCL Interaction Centre](https://www.ucl.ac.uk/uclic).
Built with [Jekyll](https://jekyllrb.com/) and served via GitHub Pages at
[match-group.github.io](https://match-group.github.io).

## Editing content

Most content is data-driven — edit these files, no templating needed:

| What | Where |
|------|-------|
| Group lead / contact | `_data/pi.yml` |
| Team members | `_data/team_members.yml` (alumni: `_data/alumni_members.yml`) |
| Publications (with teaser images in `images/pubpic/`) | `_data/publist.yml` |
| News feed | `_data/news.yml` |
| Awards / fellowships | `_data/awards.yml`, `_data/grants.yml` |
| Talks | `_data/invited_talks.yml`, `_data/conference_talks.yml` |
| Page copy (home, research, about, team, …) | `_pages/*.md` |
| Navigation, title, tagline | `_config.yml` |
| Visual design | `css/main.scss` |

Set `selected: true` on a publication in `_data/publist.yml` to feature it on the home page and at the
top of `/publications`.

## Building locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Credits

Design adapted (with substantial customization) from an academic group-website template by
[Ethan Pickering](https://github.com/ethan-pickering/sbryngelson.github.io), itself derived from work by
Spencer H. Bryngelson.
