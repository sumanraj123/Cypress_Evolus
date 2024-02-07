/* eslint-disable no-undef */
import { getSearch } from '../support/address';
import { graphql } from '../support/graphql_util';
import user_input from '../support/searchInput/user_input';
import account_input from '../support/searchInput/account_input';

describe.skip('Dashboard Search', () => {
  it('get Users', () => {
    graphql(getSearch(user_input)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('search');
    });
  });

  it('get Accounts', () => {
    graphql(getSearch(account_input)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('search');
    });
  });

  it('get Groups', () => {
    graphql(getSearch(account_input)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('search');
    });
  });
  
});
