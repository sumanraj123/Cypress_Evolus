/* eslint-disable no-undef */
import { accountId } from '../support/invoice_service_outputvalidation';
import { graphql } from '../support/graphql_util';
import {
  getAccountInvoices,
  getOpenInvoices,
  // payInvoice,
} from '../support/invoice_service';

describe.skip('Verifying Invoice Services', () => {
  it('Validating get open invoices by account graphql', () => {
    graphql(getOpenInvoices(accountId)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
    });
  });
  it('Validating get all invoices by account graphql', () => {
    graphql(getAccountInvoices(accountId)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
    });
  });
  // it('Validating get invoice pdf graphql', () => {
  //   graphql(payInvoice(payInvoicePayload));
  // });
});
