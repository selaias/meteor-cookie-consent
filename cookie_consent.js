if (typeof CookieConsent == 'undefined') {
  CookieConsent = {};
}

const CONFIG_CHECK = {
  cookieTitle: Match.Optional(String),
  acceptButtonText: Match.Optional(String),
  cookieMessage: Match.Optional(String),
  cookieMessageImply: Match.Optional(String),
  position: Match.Optional(String),
  showLink: Match.Optional(Boolean),
  linkText: Match.Optional(String),
  linkRouteName: Match.Optional(String),
  html: Match.Optional(Boolean),
  expirationInDays: Match.Optional(Number),
  className: Match.Optional(String)
};

var _defaults = {
  cookieTitle: "We use Cookies",
  cookieMessage: "We are using cookies to give you the best experience on our site. Cookies are files stored in your browser and are used by most websites to help personalise your web experience.",
  cookieMessageImply: "By continuing to use our website without changing the settings, you are agreeing to our use of cookies.",
  showLink: true,
  position: 'bottom',
  linkText: "Read more",
  linkRouteName: "/cookiePolicy",
  acceptButtonText: "Accept and Continue",
  html: false,
  expirationInDays: 7,
  forceShow: false
};

CookieConsent.getConfig = (paramName) => {
  return _defaults[paramName];
};

CookieConsent.init = (config) => {
  check(config, Object);
  // Update the current configuration
  _.extend(_defaults, config);
};
