---
date: 2019-07-06T12:15:51.575Z
title: How to rename local and remote branch on Git
tags:
  - javascript
  - git
---
Have you been on a rush and created a branch with orthographic errors?

I do!

So its very simple gets rid of this mistake. Even if you had pushed into remote

## Renaming local branch

Its very simple, just use the `-m` flag

```ssh
git branch -m old_branch new_branch
```

## But if want to delete pushed branches to?

just run:

```ssh
git push origin : old_branch
```

Then push your new branch to origin

```ssh
git push --set-upstream origin new_branch
```
