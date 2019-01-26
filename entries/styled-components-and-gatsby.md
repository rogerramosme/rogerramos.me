---
date: 2019-01-26T15:18:18.369Z
title: Styled Components and Gatsby
customUrl: ''
tags:
  - javascript
  - styled-components
  - gatsby
---

After add \`styled-components\` to my website, I've faced this problem:

![Broken css with styled-components](/assets/screen-shot-2019-01-26-at-13.39.15.png 'First access always broke the css')

The first access always broke css :(

## The solution

While use \`styled-components\` you need to install a plugin called [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/) because Gatsby need to compile the css into build.

```javascript
// In gatsby-config.js:

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here if you want
      }
    }
  ]
};
```

Happy codding ;)
