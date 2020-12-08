const loginCommands = {
  loginAs: function (user) {
    this.waitForElementVisible('@userName')
    switch (user) {
    case 'webadmin':
      this
        .setValue('@password', process.env.password)
        .setValue('@userName', process.env.username)
      break;
  }
  return this
    .click('@submit')
    .pause(5000);
  },
};

module.exports = {
  url: function () {
    return this.api.globals.site_studio_sandbox_url + 'user/login';
  },
  commands: [loginCommands],
  elements: {
    userName: "input#edit-name",
    password: "input#edit-pass",
    submit: "form.user-login-form input.form-submit"
  }
};
