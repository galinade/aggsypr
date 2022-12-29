
it('Should open the books page', () => {
    cy.visit('/');
    cy.contains("Идёмвкино").should("be.visible");
    //cy.get("<h1.page-header__title>").and("have.text", "Идёмвкино");
});
it('Should show correct number of days', () => {
    cy.visit('/');
    cy.get(".page-nav__day").should("have.length", 7);
  });
it('Should to be possible to book', () => {
    cy.visit('/');
    cy.get('.page-nav .page-nav__day:nth-of-type(4)').click();
    cy.get('.movie-seances__list > .movie-seances__time-block > .movie-seances__time').last().click();
    const seats = require("../fixtures/seats.json");
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get('.acceptin-button').should('be.visible').and('not.be.disabled').click();
    cy.get('.ticket__check-title').should('be.visible');
    cy.get('.acceptin-button').should('be.visible').and('not.be.disabled');
});

describe('Pass/fail tests login', () => {
    beforeEach(() => {

        cy.visit('http://qamid.tmweb.ru/admin/index.php');
    });

it('Success login', () => {
    cy.login('qamid@qamid.ru', 'qamid');
    cy.contains("Идёмвкино").should("be.visible");
});

it('Wrong password', () => {
    cy.login('qamid@qamid.ru');
    cy.get('[for="pwd"] > .login__input').then(($el) => $el[0].checkValidity()).should('be.false');
});
 });
 it("Should be possible to book 111", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get("a.page-nav__day:nth-of-type(4)").click();
    cy.get(".movie").first().contains("19:00").click();
    const seats = require("../fixtures/seats.json");
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(".acceptin-button").click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  });
  const PAGE_NAV__DAY_SELECTOR = '.page-nav__day';
  it('Should show correct number of days111', () => {
    cy.visit('/');
    cy.get(PAGE_NAV__DAY_SELECTOR).should("have.length", 7);
  });
  