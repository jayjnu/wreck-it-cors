import {isSameOrigin} from './isSameOrigin';

describe('isSameOrigin', () => {

  describe('same origin', () => {
    it.each([
      ['http://myawesome.origin.com', 'http://myawesome.origin.com'],
      ['http://localhost:3000/a', 'http://localhost:3000/b']
    ])('should return true', (a, b) => {

      const result = isSameOrigin(a, b);

      expect(result).toBe(true);
    });
  });

  describe('cross origin', () => {
    it('should return false if protocol is not same', () => {
      const a = 'http://myawesome.origin.com';
      const b = 'https://myawesome.origin.com';

      const result = isSameOrigin(a, b);

      expect(result).toBe(false);
    });
    it('should return false if port is not same', () => {
      const a = 'https://myawesome.origin.com:8080';
      const b = 'https://myawesome.origin.com';

      const result = isSameOrigin(a, b);

      expect(result).toBe(false);
    });
    it('should return false if subdomain is not same', () => {
      const a = 'https://myawesome.origin.com';
      const b = 'https://mymediocre.origin.com';
      
      const result = isSameOrigin(a, b);

      expect(result).toBe(false);
    });
  });
})