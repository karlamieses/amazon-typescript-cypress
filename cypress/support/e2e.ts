import './commands/commands'

const cookies = [ {
  "name": "OptanonAlertBoxClosed",
  "value": "2024-03-03T18:41:39.793Z"
  },{
  "name": "ajs_anonymous_id",
  "value": "024198a2-b234-436f-9ee6-30988b3507a8"
  }
]


before(() => {
    cookies.forEach((cookie) => {
    cy.setCookie(cookie.name, cookie.value)
    })
})
