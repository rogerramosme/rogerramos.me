---
date: 2019-07-29T13:18:30.148Z
title: Mocking Date in Jest
tags:
  - javascript
  - jest
  - date
---
Someday I had to test a function that uses the Date to show or not a component. Well, that's not too simple as I've imagined, but after some googling, I manage to get it done [with this issue](https://github.com/facebook/jest/issues/2234).

## The Problem
Test cases with Date manipulation

## The Solution
``` javascript
describe('getTimestamp', () => {
  const RealDate = Date

  function mockDate (isoDate) {
    global.Date = class extends RealDate {
      constructor () {
        return new RealDate(isoDate)
      }
    }
  }

  afterEach(() => {
    global.Date = RealDate
  })

  it('should return timestamp', () => {
    mockDate('2017-11-25T12:34:56z')
    expect(getTimestamp()).toEqual('20171125123456')
  })
})
```

## Conclusion
There are a lot of discussions about the most underground scenarios and some are difficult to find. If I could give you advice, just be patient. 😂
