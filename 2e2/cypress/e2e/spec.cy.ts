describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('EVAX')
    cy.get('form').then(($el) => {
      console.log('hhhhhhhhhhhhh')
    })
    cy.get('[id=fname]').type("maissa");
    cy.get('[id=lname]').type("gallah");
    cy.get('[id=email]').type("maissa@gmail.com");
    cy.get('[id=mob]').type("56200797");
    cy.get('[id=job]').type("ariana");
    cy.get('select').select('female').should('have.value', 'female')
    cy.get('[id=birthday]').type("2005-01-01");
    cy.get('button').click();
    cy.get('button').click();
    
    /*
    cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: 'http://localhost:8080/users/create', // baseUrl is prepend to URL
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        firstName: 'jane.lane',
        lastName: 'password123',
        email: 'mm@gmail.com',
        birthday: '04/12/1998',
        city: 'jane.lane',
        sex: 'female',
        phone:'50111222'
      },
    }).then(
      (response) => {
        // response.body is automatically serialized into JSON
        console.log('yeeeeeeeeeeeeeeeeeeeeee')
      }
    )
    */
    /*cy.request('POST', 'http://localhost:8080/users/create', { user1:user}).then(
  (response) => {
    // response.body is automatically serialized into JSON
    expect(response.body).to.have.property('user1', user) // true
  }
)*/
  
  
    
  })
})
