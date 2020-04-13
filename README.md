# Loggify

> The fastest way to learn logging

## Development

To install dependencies and run the development server execute:

```bash
yarn install
yarn dev
```

## Routes / Pages

We are using Next.JS, so if a new page has to be added, simply create a new file
inside `src/pages/`.

Example: `touch src/pages/about.js`

This will automatically create a new "route" to the "about" page.

## Components

New "shared" components should live in `src/components/`.

They can be imported without using relative paths:

```js
import CenterLayout from "components/CenterLayout";
```

## Styles

For styles we use `SASS`.

Styles should live in `src/styles/` and they should be
imported in `src/pages/_app.js`.
