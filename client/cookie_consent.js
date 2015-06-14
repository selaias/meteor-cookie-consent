Template.cookieConsent.helpers({
  className: function(){
    return CookieConsent.getConfig('className');
  },
  cookieMessage: function(){
    return CookieConsent.getConfig('cookieMessage');
  },
  useCookies: function(){
    return true;
  },
  cookiePolicyLinkText: function(){
    return CookieConsent.getConfig('linkText');
  },
  hasPolicyLink : function(){
    return CookieConsent.getConfig('showLink') || false;
  },
  policyLink: function(){
    return CookieConsent.getConfig('linkRouteName');
  },
  position: function(){
    return CookieConsent.getConfig('position') || 'top';
  },
});
