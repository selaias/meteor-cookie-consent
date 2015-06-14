Package.describe({
  name: 'selaias:cookie-consent',
  version: '0.0.1',
  summary: 'Easily and fully customizable bootstrap EU Cookie Consent Banner.',
  git: 'http://github.com/selaias/meteor-cookie-consent.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
	api.use(['templating', 'check', 'underscore'], 'client');
 
  api.addFiles('cookie_consent.js', 'client');
  
  api.addFiles('client/cookie_consent.css', 'client');
  api.addFiles('client/cookie_consent.html', 'client');
  api.addFiles('client/cookie_consent.js', 'client');
  
  api.export('CookieConsent', 'client');
});