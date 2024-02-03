export function validateAddresses(input) {
  return {
    query:
      'query' +
      ' VerifyBillingAddress($input: ValidateAddressesInput!) { validateAddresses(input: $input) { addresses { suggestedAddress { addressLine1, addressLine2, city, state, zip5, zip4 }, isValidRequestAddress, isBusinessAddress, isUndeliverableAddress }}}',
    queryVariables: input,
  };
}

export function validateAccountAddress(input) {
  return {
    query: `query BillingAssosiatedAddress($input: VerifyAccountAddressAssociationInput!) {
      verifyAccountAddressAssociation(input: $input) {
        accounts {
          id
          name
        }
      }
    }`,
    queryVariables: input,
  };
}

export function validateFacilityAddress(input) {
  return {
    query: `query FacilityAssosiatedAddress(
      $input: VerifyFacilityAddressAssociationInput!
    ) {
      verifyFacilityAddressAssociation(input: $input) {
        facilities {
          accountId
          accountName
        }
      }
    }`,
    queryVariables: input,
  };
}

export function getUserByIdQuery(userId) {
  return {
    query: `query GetUserById { userById(id: "${userId}") { id, email }}`,
  };
}

export function getSearch(input) {
  return {
    query:
      'query' +
      `
         SearchQuery($input: SearchInput!) {
          search(input: $input) {
            from
            total
            hits {
              id
              score
              entity {
                __typename
              }
            }
          }
        }
      `,
    queryVariables: input,
  };
}

export function getQuote(input) {
  return {
    query:
      'query' +
      `
          getQuote($input: GetQuoteInput!) {
            getJeuveauQuote(input: $input) {
              achDiscountPercentage
              isOrderingDisabledForUser {
                disabled
                message
              }
              credit {
                limit
                available
              }
              jet {
                available
              }
            }
          }
        `,
    queryVariables: input,
  };
}
