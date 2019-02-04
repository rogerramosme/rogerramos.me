---
date: 2019-02-04T19:22:25.542Z
title: 'How to fix "create-react-app: command not found"'
tags:
  - javascript
  - react
  - react-create-app
  - macOs
---
And there I go. Creating a simple app with `react-create-app` to test some nice tool, running `react-create-app my-nice-app` and boom!

```bash
-bash: gulp: command not found
```

## The problem
This happen because `npm` was installed in the wrong directory. The sadness 😞

If you look for the global install location, probably you will find it into `/Users/USERNAME/node_modules`. You can check this by running `npm root` or `npm root -g`.

## The solution
To fix it you need to change `npm config prefix` by running:

```bash
npm config set prefix /usr/local
```

Then reinstall `react-create-app`

```bash
npm i -g react-create-app
```

Now you can run `create-react-app my-nice-app` and be happy 😝

### References
* [Create React App Github Issue](https://github.com/facebook/create-react-app/issues/138)
* [Stackoverflow Question](https://stackoverflow.com/questions/25090452/gulp-command-not-found-after-install)
* [Benoît Boucart Blog](http://blog.webbb.be/command-not-found-node-npm/)
