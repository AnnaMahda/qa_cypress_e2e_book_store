Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`);
  });
  
  Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Login',
      body: {
        userName: 'aneta772',
        password: 'password123!'
      }
    }).then((response) => {
      cy.setCookie('token', response.body.token);
      cy.setCookie('expires', response.body.expires);
      cy.setCookie('userID', response.body.userId);
      cy.setCookie('userName', response.body.username);
    });
  });
