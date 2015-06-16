if (typeof CookieConsent == 'undefined'){
  CookieConsent = {};
}

CookieConsent.CONFIG_CHECK = {
  cookieTitle: Match.Optional(String),
  acceptButtonText: Match.Optional(String),
  cookieMessage: Match.Optional(String),
  position: Match.Optional(String),
  showLink: Match.Optional(Boolean),
  linkText: Match.Optional(String),
  linkRouteName:Match.Optional(String),
  html: Match.Optional(Boolean),
  expirationInDays: Match.Optional(Number)
};

CookieConsent._config = {
  cookieTitle: "We use Cookies",
  cookieMessage: "We are using cookies to give you the best experience on our site. Cookies are files stored in your browser and are used by most websites to help personalise your web experience.",
  cookieMessageImply: "By continuing to use our website without changing the settings, you are agreeing to our use of cookies.",
  showLink: true,
  position: 'top',
  linkText: "Read more",
  linkRouteName: "/cookiePolicy",
  acceptButtonText: "Accept and Continue",
  html: false,
  className: null,
  expirationInDays: 7
};

CookieConsent.getConfig = function(paramName) {
  return this._config[paramName];
};

CookieConsent.init = function(config) {
  check(config, this.CONFIG_CHECK);
  // Update the current configuration
  this._config = _.defaults(config, this._config);  
};