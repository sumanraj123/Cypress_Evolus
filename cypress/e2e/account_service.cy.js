/* eslint-disable no-undef */
import { getUserByIdQuery } from "../support/address";
import { graphql } from "../support/graphql_util";

describe("GraphQL Test", () => {
  it("should retrieve user by ID", () => {
    // const userId = 'U-9496115-DEV';
    // const query = graphql(getUserByIdQuery(userId));

    cy.visit("https://www.amazon.in/");
  });
});
