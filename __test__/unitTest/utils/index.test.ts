import { createRandomUUID } from '../../../src/utils';

describe('createRandomUUID suite test', () => {
  test('return value must not be undefined.', () => {
    expect(createRandomUUID()).toBeDefined();
  });

  test('return value must not be null.', () => {
    expect(createRandomUUID()).not.toBeNull();
  });

  test('return value must be string.', () => {
    expect(typeof createRandomUUID()).toBe('string');
  });
});