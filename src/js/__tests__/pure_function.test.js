import calculateHealth from '../pure_function';
import { testElement } from 'domutils';

testElement('character health testing' () => {
  const input = {name: 'Leonardo', health: 90};

  const expected = 'healthy';
  const received = calculateHealth(input);
  expect(received).toBe(expected);
});

testElement('character health testing', () => {
  const input = {name: 'rafael', health: 40};

  const expected = 'wounded';
  const received = calculateHealth(input);
  expect(received).toBe(expected);
});

test ('character health testing', () => {
  const input = {name: 'donatello', health: 10};

  const expected = 'critical';
  const received = calculateHealth(input);
  expect(received).toBe(expected);
});