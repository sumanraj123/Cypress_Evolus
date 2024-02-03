/* eslint-disable no-undef */
import { getQuote } from '../support/address';
import { graphql } from '../support/graphql_util';
import quote_input from '../support/QuoteInput/quote_input';

describe('Quote Service', () => {
  it('get Quotes', () => {
    graphql(getQuote(quote_input)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data.getJeuveauQuote).to.have.property('credit');
    });
  });
});
