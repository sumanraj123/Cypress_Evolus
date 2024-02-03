/* eslint-disable no-undef */
// export function commonGraphlValidation(response) {
//   expect(response.status).to.equal(200)
//   expect(response.body.data).to.not.equal(null)
//   expect(response.body).to.not.equal('OK')
//   expect(response.body).to.not.have.own.property('errors')
// }

export function graphql(getQuery) {
  const { query, queryVariables } = getQuery;

  // Define constants
  const CUSTOM_URL = `https://api.dev-sandbox.evolus-dev.com/staff-graphql`;

  return cy.request({
    method: 'POST',
    url: CUSTOM_URL,
    body: {
      query,
      variables: queryVariables,
    },
    headers: {
      Authorization:
        'eyJraWQiOiJ1bVVYUHc0emw5YVFpeEZvVTBNQ3dGQ0ZHRTVMT3hFc0hkZ3VyQVwvSDREUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiTzAxRnZiOEdkdTI5b0UzZ1dVR2xjUSIsInN1YiI6ImZlYTk4NjY4LTI0NmItNGI3Zi04MjBiLTlkNzIzNjI5NjIxYiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9XRWlocThHdXBfZXZvbHVzLmNvbSJdLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1dFaWhxOEd1cCIsImNvZ25pdG86dXNlcm5hbWUiOiJldm9sdXMuY29tX0hlbWF0aC5LdW1hci5jQGV2b2x1cy5jb20iLCJhdWQiOiJpbGtjMDU4N2s2MTdhdDRscnMxOGxxcGo1IiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiSGVtYXRoLkt1bWFyLmNAZXZvbHVzLmNvbSIsInByb3ZpZGVyTmFtZSI6ImV2b2x1cy5jb20iLCJwcm92aWRlclR5cGUiOiJTQU1MIiwiaXNzdWVyIjoiaHR0cHM6XC9cL3N0cy53aW5kb3dzLm5ldFwvODRlNmNmOTctNTc2NS00MjM2LTg2ZmEtMDUyM2QzNGI4YzVlXC8iLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTcwNTU2NDc4MzcxNSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDY4ODc3NzAsImV4cCI6MTcwNjg5MTQxMiwiaWF0IjoxNzA2ODg3ODEyLCJlbWFpbCI6IkhlbWF0aC5LdW1hci5jQGV2b2x1cy5jb20ifQ.ofVxwTlJXJouEwO5DpkX7LRgke43-2P2E4vTZciuZS8OCmLn-IJixOk8U_V4s76In_WroJXvIgfPA6n_BGnyaUHdmnpqFsN_SYeYVciQPUtveXegNpr6puf-KrcS-gJ5jYY7umR1cNefKF0iW1iEWl4dXX-RWjcSxdXfhZYnPNTAA_a0K-kqkqXCF3KgmCv_SKYFLrjYSCZgH0KR6NotnIGAUa4kYkC5khCv-Q7oGTsai410JTXe_5Wask8_oJDMPP2hsHj_8-rm4Vd4cP_g9-76mMzdzoY4Szo26EUUEeKjM0KIF9sN1tpjWFMIB21MCNJNIVluTXXRTE3zbDklcA',
    },
  });
}
