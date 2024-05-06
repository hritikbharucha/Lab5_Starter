// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Valid phone number should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number with parentheses should return true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

test('Invalid phone number with 2 first numbers should return false', () => {
  expect(isPhoneNumber('56-7890')).toBe(false);
});

// Tests for isEmail function
test('Valid email should return true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(isEmail('test.example.com')).toBe(false);
});

test('Valid email with underscore should return true', () => {
  expect(isEmail('test_user@example.com')).toBe(true);
});

test('Invalid email with missing "@" should return false', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

// Tests for isStrongPassword function
test('Valid strong password should return true', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('Valid strong password with underscore should return true', () => {
  expect(isStrongPassword('My_Password123')).toBe(true);
});

test('Invalid strong password with less than 4 characters should return false', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('Invalid strong password with special character should return false', () => {
  expect(isStrongPassword('Pass!')).toBe(false);
});

// Tests for isDate function
test('Valid date should return true', () => {
  expect(isDate('12/31/2022')).toBe(true);
});

test('Valid date with single digit month and day should return true', () => {
  expect(isDate('1/1/2022')).toBe(true);
});

test('Invalid date with 3 day digits should return false', () => {
  expect(isDate('12/400/2022')).toBe(false);
});

test('Invalid date with alphabets should return false', () => {
  expect(isDate('12/31/abcd')).toBe(false);
});

// Tests for isHexColor function
test('Valid hex color should return true', () => {
  expect(isHexColor('#123abc')).toBe(true);
});

test('Valid hex color with uppercase letters should return true', () => {
  expect(isHexColor('#ABCDEF')).toBe(true);
});

test('Invalid hex color with extra characters should return false', () => {
  expect(isHexColor('123abc17g')).toBe(false);
});

test('Invalid hex color with invalid characters should return false', () => {
  expect(isHexColor('#12gg')).toBe(false);
});