export function getOpenInvoices(input) {
  return {
    query: `query getAccountOpenInvoices($input: GetInvoicesInput!, $accountId: String!) {
      getOpenInvoicesByAccount(input: $input) {
        totalAmountDueThisWeek
        totalAmountDue
        invoices {
          isDueThisWeek
          __typename
        }
        __typename
      }
      getPaymentMethodsByAccount(accountId: $accountId) {
        paymentMethods {
          type
          sensitive {
            loc {
              limit
              balance
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
    }`,
    queryVariables: input,
  };
}

export function getAccountInvoices(input) {
  return {
    query: `query getInvoiceByAccount($input: GetInvoicesInput!){
      getInvoicesByAccount(input: $input){
          invoices{
              amountDue
              amount
              dueDate
              date
  
              facility {
                  name
              }
              isPastDue
              isDueThisWeek
              invoiceId
              orderId
              status
              jeuveauQuantity
          }
      }
  }`,
    queryVariables: input,
  };
}

export function payInvoice(input) {
  return {
    query: `mutation PayInvoice($input: InvoicePaymentInput!) {
      payInvoices(input: $input) {
        paymentId
        __typename
      }
    }`,
    queryVariables: input,
  };
}
