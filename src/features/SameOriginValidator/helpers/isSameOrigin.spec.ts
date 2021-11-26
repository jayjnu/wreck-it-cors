import { isSameOrigin } from './isSameOrigin';

describe('isSameOrigin', () => {
  describe.each([
    ['http://myawesome.origin.com', 'http://myawesome.origin.com'],
    ['http://localhost:3000/a', 'http://localhost:3000/b']
  ])('same origin: origin: %s, resource: %s', (a, b) => {
    const result = isSameOrigin(a, b);

    describe('result.isValid', () => {
      it('should return true', () => {
        expect(result.isValid).toBe(true);
      });
    });

    describe('result.protocol', () => {
      it('should return true', () => {
        expect(result.protocol).toBe(true);
      });
    });

    describe('result.port', () => {
      it('should return true', () => {
        expect(result.port).toBe(true);
      });
    });

    describe('result.hostname', () => {
      it('should return true', () => {
        expect(result.hostname).toBe(true);
      });
    });
  });

  describe('cross origin', () => {
    describe('protocol', () => {
      const a = 'http://myawesome.origin.com';
      const b = 'https://myawesome.origin.com';

      const result = isSameOrigin(a, b);
      describe('result.isValid', () => {
        it('should return false', () => {
          expect(result.isValid).toBe(false);
        });
      });

      describe('result.protocol', () => {
        it('should return false', () => {
          expect(result.protocol).toBe(false);
        });
      });
      describe('result.hostname', () => {
        it('should return true', () => {
          expect(result.hostname).toBe(true);
        });
      });
      describe('result.port', () => {
        it('should return true', () => {
          expect(result.port).toBe(true);
        });
      });
    });

    describe('port', () => {
      const a = 'https://myawesome.origin.com:8080';
      const b = 'https://myawesome.origin.com';

      const result = isSameOrigin(a, b);
      describe('result.isValid', () => {
        it('should return false', () => {
          expect(result.isValid).toBe(false);
        });
      });
      describe('result.port', () => {
        it('should return false', () => {
          expect(result.port).toBe(false);
        });
      });
      describe('result.protocol', () => {
        it('should return true', () => {
          expect(result.protocol).toBe(true);
        });
      });
      describe('result.hostname', () => {
        it('should return true', () => {
          expect(result.hostname).toBe(true);
        });
      });
    });

    describe('hostname', () => {
      const a = 'https://myawesome.origin.com';
      const b = 'https://mymediocre.origin.com';

      const result = isSameOrigin(a, b);

      describe('result.isValid', () => {
        it('should return false', () => {
          expect(result.isValid).toBe(false);
        });
      });
      describe('result.hostname', () => {
        it('should return false', () => {
          expect(result.hostname).toBe(false);
        });
      });
      describe('result.protocol', () => {
        it('should return true', () => {
          expect(result.protocol).toBe(true);
        });
      });
      describe('result.port', () => {
        it('should return true', () => {
          expect(result.port).toBe(true);
        });
      });
    });
  });
});
