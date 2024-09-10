describe("hackaton test spec", () => {
  it("passes", () => {
    cy.visit("https://hackthefuture.bignited.be/");
    cy.wait(4000);
    cy.get("#action-button").click();
  });

  it.only("information", () => {
    cy.visit("http://hackthefuture.bignited.be/information", {
      failOnStatusCode: false,
    });
    cy.get("#name").type("naam");
    cy.get("#age").type("20");
    cy.get("#species").select("Reaper");
    cy.get("#planet").type("Rozemaan").type("{enter}");
    cy.wait(8000);
    cy.get(".ski-button").click();
    cy.get("img").click(200, 195);
    let item;
    cy.window().then((window) => {
      item = window.localStorage.getItem("code");
      cy.log(item);
      cy.get("body").click(50, 50);
      cy.get(".ski-button").click();
      cy.get(".ski-button").click();
      cy.get("#numpad").click();
      cy.wait(1000);
      const digits = item.split("");
      digits.forEach((digit) => {
        cy.get(`#${digit}`).click();
      });
      cy.wait(1000);
    });
    cy.get("#enter").click();
    cy.wait(6000);
    cy.get("body").type("{upArrow}");
    cy.wait(6000);
    cy.get(".ski-button").click();
    cy.get("#inputField").type("Magreta").type("{enter}");
    cy.get("p > :nth-child(1)").click();
    cy.get("#inputField").type("Pluto").type("{enter}");
    cy.get(".buttons > :nth-child(1)").click("right");
    cy.get(".buttons > :nth-child(1)").click("right");
    cy.get(".next > .ng-star-inserted").click("right");
    cy.get(".next > .ng-star-inserted").click("right");
    cy.get(".next > .ng-star-inserted").click("right");
    cy.get(".buttons > :nth-child(1)").click("right");
    cy.get(".ski-button").click();
    cy.get(".scan-button").trigger("mousedown", { force: true }).wait(7000);
    cy.get(".ski-button").click();
    cy.window().then((window) => {
      const cure = window.localStorage.getItem("cure");
      cy.log(cure)
      cy.get("#current-reading")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        const current = text;
        const currentS = (current).split('');
        const cureS = (cure).split('');
        currentS.forEach((number, index) => {
          const sum = cureS[index] - number
          if(sum <= 0){
            for (let x = 0; x < Math.abs(sum); x++) {
              cy.wait(500)
              cy.get(`:nth-child(${index + 1}) > .down > .material-symbols-outlined`)
            .click({ force: true })
            }
            
          }
          else{
            for (let y = 0; y < Math.abs(sum); y++) {
              cy.wait(500)
              cy.get(`:nth-child(${index + 1}) > .container-up > .arrow > .material-symbols-outlined`)
            .click({ force: true })
            }
          }
        });
      });
    });
    cy.wait(1000)
    cy.get("body").type("{enter}");
   
  });
});
