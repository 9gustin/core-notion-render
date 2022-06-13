import { slugify } from './slugify';

it('random test', () => {
  expect(slugify('my test')).toBe('my-test');
});
