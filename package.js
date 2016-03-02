Package.describe({
  name: 'selaias:cookie-consent',
  version: '0.3.0',
  summary: 'Easily and fully customizable EU Cookie Consent alert.',
  git: 'http://github.com/selaias/meteor-cookie-consent.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.1");
	api.use(['templating', 'check', 'underscore', 'ecmascript'], 'client');
 
  api.use('chuangbo:cookie@1.1.0', 'client');
  
  api.addFiles('cookie_consent.js', 'client');
  
  api.addFiles('client/cookie_consent.css', 'client');
  api.addFiles('client/cookie_consent.html', 'client');
  api.addFiles('client/cookie_consent.js', 'client');
  
  api.export('CookieConsent', 'client');
});