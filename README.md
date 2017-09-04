# postcss-ignore-transition-properties

> Gathers all the `transition-*` properties from each parsed rule and bundles them
together at the end of the rule, following an `/* autoprefixer-off */` comment.

autoprefixer has an issue with `transition-*` properties. This plugin allows autoprefixer
to ignore said properties and not break your application.

### Usage

```javascript
const ignoreTransitionProps = require('postcss-ignore-transition-properties');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        ignoreTransitionProps(),
        autoprefixer(/* config */)
    ]
}

```
