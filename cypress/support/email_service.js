export function isWhiteListed(input) {
  return {
    query: `query FinancialAgEmailValidation($input: IsWhitelistedInput!) {
      isWhitelisted(input: $input) {
        isWhitelisted
        stage
      }
    }
    `,
    queryVariables: input,
  };
}
