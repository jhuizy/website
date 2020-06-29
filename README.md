# Website

My personal website for blogging, built with [gatsby](https://www.gatsbyjs.org/) using the [lumen starter](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/).

# Development

To spin up a development instance, simply run `yarn && yarn develop` to install dependencies and launch the gastby development server. This assumes you have yarn installed, if you prefer the nix approach of doing things you can run it via the nix shell using `nix-shell --command "yarn develop"`

# Deployment

The site is deployed via netlify automatically on pushes to master. It can be configured in the [netlify.toml](./netlify.toml) configuration file.

