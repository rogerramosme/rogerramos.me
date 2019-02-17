---
date: 2019-02-17T13:55:41.546Z
title: Test console.log with Jest
tags:
  - javascript
  - jest
  - console
---
Jest is a beautiful tool for testing, it gives you possibilities to test even the coolest scenarios like console.log. I need to confess my love with console.log, and because of it, [I created a tool for beauty log](https://www.npmjs.com/package/js-pretty-logger) into your console.

Enough talks and lets code!

## The problem
I need to test with my code logged something.

## The solution
```javascript
//my-file.test.js

// create a function into global context for Jest
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}

describe('Tests my console.log', () => {
  it('should console a message', () => {
    console.log('My test is working with console.log')

    expect(global.console.log).toHaveBeenCalledWith(
      'My test is working with console.log'
    )
  })
})

```

## Conclusion
I really love Jest. The learning curve is very low and the possibilities are great!

I suggest reading the Docs because there you can find a bunch of features that you may not know that exists.

Happy Codding!
