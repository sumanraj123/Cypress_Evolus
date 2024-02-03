/* eslint-disable no-undef */
import { validateAccountAddress, validateAddresses } from '../support/address';
import {
  addressesInput,
  accountAddressInput,
} from '../support/address_outputvalidation';
import { graphql } from '../support/graphql_util';

describe.skip('Verifying Addresses', () => {
  it('Validating addresses', () => {
    graphql(validateAddresses(addressesInput)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Validating Account Addresses', () => {
    graphql(validateAccountAddress(accountAddressInput)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
    });
  });

  it('Validating Facility Addresses', () => {
    graphql(validateAccountAddress(accountAddressInput)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
    });
  });
});
