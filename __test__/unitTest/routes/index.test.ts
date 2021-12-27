import validateParamsMiddleware from '../../../src/middlewares/validateParamsMiddleware';

import { req, res, failedResponse, nextFn } from '../../../__mocks__';

describe('routes suite test', () => {
  describe('get handler', () => {
    test('if id param is a string', () => {
      expect(validateParamsMiddleware(req, res, nextFn)).toBe(failedResponse);
    });
  });
});