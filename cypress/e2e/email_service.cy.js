/* eslint-disable no-undef */
import { isWhitelistedInput } from '../support/email_service_outputvalidation';
import { isWhiteListed } from '../support/email_service';
import { graphql } from '../support/graphql_util';

describe.skip('Verifying Email Services', () => {
  it('Validating isWhiteListed graphql', () => {
    graphql(isWhiteListed(isWhitelistedInput)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
    });
  });
});
