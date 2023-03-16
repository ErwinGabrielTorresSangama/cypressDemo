

//Con describe agrupamos nuestro casos de prueba, para ello le damos un nombre
describe("cy.task", () => {
    //cy.task -> es para ejucutar un evento,que se encuentra dentro de cypress.config.js
    //En este caso estamos llamando al metodo comparePdfOnePage que se encuentra en n
    it('Comparar version 1 PDFs', () => {
        cy.task('comparePdfOnePage',
            {
                actual: "archivoO.pdf",
                baseline: "baselineM.pdf"
            })
            .should('equal', true)

    })

})
