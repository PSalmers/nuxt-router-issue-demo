# nuxt_bug_repro

So if the root component of a page is conditionally empty (eg v-if="false"), navigating to that page breaks the vue-router?

Paths 0-2 are involved in redirection logic that can cause the break and is hard to debug

The Checkboxes are related to the redirection from path 0 to path 2

"Generic Path" is a page with content and no redirects

"Plain empty" is a page with an empty component and no redirects

To reproduce the bug navigate to "An empty page" and then to "A generic page". The content for "A generic page" will not appear. This will break the router until page refresh, making it inmpossible to load the content on "generic page" and "generic page 2"

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
