const createLandingPageCommands = {
  setTitle: function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var timestamp = today.toLocaleTimeString('en-US', {
      hour12: true,
      hour: "numeric",
      minute: "numeric"
    });
    var today = mm + '/' + dd + '/' + yyyy;
    var pageTitle = today + ' ' + timestamp + ' ' + 'Test Landing Page';
    return this
      .setValue('@titleField', pageTitle)
  },
  addComponentToLayoutCanvas: function (componentName) {
    return this
      .click('button.coh-default-browser-launcher')
      .click('li[data-title="' + componentName + '"] button.coh-icon-plus-circle')
  },
  setComponentBgColor: function (colorCode) {
    return this
      .click('div.coh-layout-canvas-zone ol.coh-layout-canvas-list li button.dropdown-toggle')
      .click('button.coh-edit-btn')
      .click('link text', 'Layout and style')
      .click('button[aria-label="Click to select a color"]')
      .click('div.coh-colour-picker-tab')
      .clearValue('div.sp-input-container.sp-cf input')
      .setValue('div.sp-input-container.sp-cf input', colorCode)
      .click('button.coh-picker-btn--select')
      .click('div.apply button')
  }
};

module.exports = {
  url: function () {
    return this.api.globals.site_studio_sandbox_url + 'node/add/landing_page';
  },
  commands: [createLandingPageCommands],
  elements: {
    titleField: 'input#edit-title-0-value',
    save: 'input#edit-submit'
  }
};
