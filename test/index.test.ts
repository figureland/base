import { describe, it, expect } from 'bun:test'
import { example } from '../src'

describe('should', () => {
  it('export example', () => {
    expect(example()).toBe('hello')
  })
})
