# jekyll-theme-be-prepared

by Alex Paterson

Copyright © 2024 1st New Longton Scouts

---

be-prepared is a Jekyll theme for Scout group websites based on the UK Scout Association's brand guidelines.

I created this theme as part of a project to upgrade [newlongtonscouts.com](https://newlongtonscouts.com) to run on Jekyll and GitHub pages in an effort to make the site cheaper to run, easier to edit, prettier and more responsive. When I'd finished, I was impressed by how the site looked and functioned compared to other Scout sites I'd see, so I converted it into a Jekyll theme and publicly available in the hope it may help other volunteers who also want websites for their groups.

**WARNING!** - this theme was initially made for a specific site, so it does have a few quirks (weird CSS class names etc). This is just a by-product of how the theme came to be. You can always extend the CSS as described below. You could even add some contributions yourself - I'd be glad to see the the theme succeed.

Documentation is available [here](https://github.com/newlongtonscouts/be-prepared-template/wiki).

## Template Installation (Recommended)

This the easiest way of getting started with be-prepared, as it comes with some sample pages and premade config files.

To install the template, see the documentation [here](https://github.com/newlongtonscouts/be-prepared-template/wiki).

## Remote Version Installation

Install [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme).

Add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: newlongtonscouts/jekyll-theme-be-prepared
```

Now, see the Configuration section for the next steps.

## Gem Version Installation

Download a gem from [the Releases page](https://github.com/newlongtonscouts/jekyll-theme-be-prepared/releases).

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-be-prepared"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-be-prepared
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-be-prepared

Now, see the Configuration section for the next steps.

## Configuration

Open your site's `_config.yml` and add this line:

```yaml
stylesheet: be-prepared.css
```

This pulls in the stock stylesheet from the be-prepared theme. You can change it to be any stylesheet located in `/assets/css` by changing the stylesheet variable in `_config.yml`, but make sure it includes the following line:

```css
@import "/assets/css/be-prepared.css"
```

Each page on your site needs to include the following front matter:
```yaml
title: Your Page Title
heading: The Page Heading that is displayed. A HTML image tag can also be used instead with the class set to "HeadingImage"
layout: Either "default", or "textpage". Textpages have the text aligned to the left. "page" and "home" are included for compatibility too, but are identical to default.
authors: Your Name Here
colour: A hex colour value for the header and footer. The Scout brand purple is 7413dc.
```

With these steps complete, you should have the start of a usable site, although features like the default socials bar will need configuring too.
