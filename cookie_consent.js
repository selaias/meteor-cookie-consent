if (typeof CookieConsent == 'undefined'){
  CookieConsent = {};
}

CookieConsent.CONFIG_CHECK = {
  cookieMessage: Match.Optional(String),
  position: Match.Optional(String),
  showLink: Match.Optional(Boolean),
  linkText: Match.Optional(String),
  linkRouteName:Match.Optional(String),
  html: Match.Optional(Boolean)
};

CookieConsent._config = {
  cookieMessage: "By using our website you are consenting to our use of cookies in accordance with our Cookie Policy",
  showLink: true,
  position: 'top',
  linkText: "More info",
  linkRouteName: "/cookiePolicy",
  html: false,
  className: null,
};

CookieConsent.getConfig = function(paramName) {
  return this._config[paramName];
};

CookieConsent.init = function(config) {
  check(config, this.CONFIG_CHECK);
  // Update the current configuration
  this._config = _.defaults(config, this._config);  
};