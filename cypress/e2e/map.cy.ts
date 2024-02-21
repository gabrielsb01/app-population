/// <reference types="cypress" />

describe("Aplicação do Mapa de População", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Validação do modal inicial", () => {
    const modal = cy.get("div.modal");
    cy.get(".modal")
      .contains("Bem-vindo ao Mapa de Evolução Populacional!")
      .should("be.visible");
    expect(
      modal.should("have.html", "Bem-vindo ao Mapa de Evolução Populacional!")
    );
    cy.get('[aria-label="Close"]').click();
  });

  it("Aumentando o zoom do mapa várias vezes", () => {
    cy.get(".modal").should("be.visible");
    for (let i = 0; i < 6; i++) {
      cy.get("a.leaflet-control-zoom-in").click();
    }
  });

  it("Diminuindo o zoom do mapa várias vezes", () => {
    cy.get(".modal").should("be.visible");
    for (let i = 0; i < 6; i++) {
      cy.get("a.leaflet-control-zoom-out").click();
    }
  });

  it("Visualizar título ao passar o mouse sobre o bairro Jd. Colinas", () => {
    cy.get("path.leaflet-interactive").eq(0).trigger("mouseover");
    const tooltip = cy.get("div.leaflet-tooltip");
    expect(tooltip).exist;
  });

  it("Visualizar título ao passar o mouse sobre o bairro Jd. das Industrias", () => {
    cy.get("path.leaflet-interactive").eq(1).trigger("mouseover");
    const tooltip = cy.get("div.leaflet-tooltip");
    expect(tooltip).exist;
  });

  it("Visualizar título ao passar o mouse sobre o bairro Jd. Alvorada", () => {
    cy.get("path.leaflet-interactive").eq(2).trigger("mouseover");
    const tooltip = cy.get("div.leaflet-tooltip");
    expect(tooltip).exist;
  });

  it("Visualizar título ao passar o mouse sobre o bairro Pq. Res. Aquarius", () => {
    cy.get("path.leaflet-interactive").eq(3).trigger("mouseover");
    const tooltip = cy.get("div.leaflet-tooltip");
    expect(tooltip).exist;
  });

  it("Clicar no bairro Jd. Colinas para abrir o modal", () => {
    cy.get("path.leaflet-interactive").eq(0).click();
    cy.get("div.modal");
    const nameNeighborhood = cy
      .get(".modal")
      .contains("Jd. Colinas")
      .should("be.visible");
    expect(nameNeighborhood).exist;
  });

  it("Clicar no bairro Jd. das Industrias para abrir o modal", () => {
    cy.get("path.leaflet-interactive").eq(1).click();
    cy.get("div.modal");
    const nameNeighborhood = cy
      .get(".modal")
      .contains("Jd. das Industrias")
      .should("be.visible");
    expect(nameNeighborhood).exist;
  });

  it("Clicar no bairro Jd. Alvorada para abrir o modal", () => {
    cy.get("path.leaflet-interactive").eq(2).click();
    cy.get("div.modal");
    const nameNeighborhood = cy
      .get(".modal")
      .contains("Jd. Alvorada")
      .should("be.visible");
    expect(nameNeighborhood).exist;
  });

  it("Clicar no bairro Pq. Res. Aquarius para abrir o modal e depois fechar", () => {
    cy.get("path.leaflet-interactive").eq(3).click();
    cy.get("div.modal");
    const nameNeighborhood = cy
      .get(".modal")
      .contains("Pq. Res. Aquarius")
      .should("be.visible");
    expect(nameNeighborhood).exist;
    cy.get('[aria-label="Close"]').click();
  });
});
