const hello = require('./index')

describe('index', () => {
  describe('hello', () => {
    it('should return greeting', () => {
      expect(hello).toBe('Hello, World!')
    })
  })
})
