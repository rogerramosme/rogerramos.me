---
date: 2019-01-29T20:41:21.324Z
title: How to delete a git tag locally and remote
tags:
  - git
---
Today I've a mistake of publishing a wrong `git` tag and asked to my self: What that fuck I do now?

So I did a little research and [this gist](https://gist.github.com/mobilemind/7883996) from [mobilemind](https://gist.github.com/mobilemind) appeared with the solution.
# The solution

```sh
# to delete a local tag just run e.g.: v1.9.1
git tag -d v1.9.1

# if you already published (like me) just run (after delete local)
git push origin :refs/tags/v1.9.1

# another approach
git push --delete origin v1.9.1
git tag -d v1.9.1
```

# Conclusion
Always double-check before push something to remote 😂

Happy codding
