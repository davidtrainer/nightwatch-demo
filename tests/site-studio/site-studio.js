// Nightwatch test

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var timestamp = today.toLocaleTimeString('en-US', {
  hour12: true,
  hour: "numeric",
  minute: "numeric"
});
today = mm + '/' + dd + '/' + yyyy;
const pageTitle = today + ' ' + timestamp + ' ' + 'Test Landing Page';

module.exports = {
  'Step 1 - Log in to the Site Studio sandbox' : function (browser) {
    browser
      .url(browser.globals.site_studio_sandbox_url + 'user/login')
      .setValue('input[id=edit-name]', process.env.username)
      .setValue('input[id=edit-pass]', process.env.password)
      .click('form.user-login-form input.form-submit')
      .assert.elementPresent('body.user-logged-in')
  },

  'Step 2 - Create a Landing Page' : function (browser) {
    browser
      .url(browser.globals.site_studio_sandbox_url + 'node/add')
      .click('partial link text', 'Landing page')
      .setValue('input#edit-title-0-value', pageTitle)
      .click('button.coh-default-browser-launcher')
      .click('li[data-title="Text"] button.coh-icon-plus-circle')
      .click('div.coh-layout-canvas-zone ol.coh-layout-canvas-list li button.dropdown-toggle')
      .click('button.coh-edit-btn')
      .click('link text', 'Layout and style')
      .click('button[aria-label="Click to select a color"]')
      .click('div.coh-colour-picker-tab')
      .clearValue('div.sp-input-container.sp-cf input')
      .setValue('div.sp-input-container.sp-cf input', '#ff33ff')
      .click('button.coh-picker-btn--select')
      .click('div.apply button')
      .click('input#edit-submit')
      .assert.cssProperty('article div.coh-component', 'background-color', 'rgba(255, 51, 255, 1)')
      .end();
  },

};
