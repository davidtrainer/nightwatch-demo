// Nightwatch test

module.exports = {
  'Step 1 - Log in to the Site Studio sandbox' : function (browser) {
    const page = browser.page.login();

    page
      .navigate()
      .loginAs('webadmin')
      .assert.elementPresent('body.user-logged-in')
  },

  'Step 2 - Create a Landing Page' : function (browser) {
    const page = browser.page.createLandingPage();

    page
      .navigate()
      .setTitle()
      .addComponentToLayoutCanvas('Text')
      .setComponentBgColor('#ff33ff')
      .click('@save')
      .assert.cssProperty('article div.coh-component', 'background-color', 'rgba(255, 51, 255, 1)')
      .end();
  },

};
