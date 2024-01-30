# jekyll-theme-be-prepared

TODO: Write a better description.

## Template Installation (Recommended)

TODO: Make the template

## Remote Version Installation

Install [jekyll-remote-theme](https://github.com/benbalter/jekyll-remote-theme).

Add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: newlongtonscouts/jekyll-theme-be-prepared
```

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