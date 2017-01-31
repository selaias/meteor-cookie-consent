# cookie-consent

Create easily a fully customizable bootstrap EU Law (imply) Cookie consent banner for your website.

## Install

```js
$ meteor add selaias:cookie-consent
```

This packages makes also use of cookies via the `chuangbo:cookie` package.

## Usage

Place `{{> cookieConsent}}`  or `{{> cookieConsentImply}}` in your main template. Something like:

```handlebars
<body>
    {{> cookieConsent}}
    or
    {{> cookieConsentImply}}
</body>
```

and then place under client/lib/cookie_consent.js file the initialisation code

```js

var options = {
  cookieTitle: "We use Cookies",
  cookieMessage: "We are using cookies to give you the best"
     + " experience on our site. Cookies are files stored in your"
     + " browser and are used by most websites to help personalise your web experience.",
  showLink: true,
  linkText: "Read more",
  linkRouteName: "/cookiePolicy",
  acceptButtonText: "Accept and Continue",
  html: false,
  expirationInDays: 7,
  forceShow: false
};

CookieConsent.init(options);

// or

var optionsImply = {
  cookieMessage: "We are using cookies to give you the best"
     + " experience on our site. Cookies are files stored in your"
     + " browser and are used by most websites to help personalise your web experience.",
  cookieMessageImply: "By continuing to use our website without changing the settings,"
    + " you are agreeing to our use of cookies.",
  showLink: true,
  position: 'top',
  linkText: "Read more",
  linkRouteName: "/cookiePolicy",
  html: false,
  className: null,
  expirationInDays: 7,
  forceShow: false
};

CookieConsent.init(optionsImply);

```

## Feedback
This is the most basic setup, customization ideas are always welcome!

## Licence

[MIT License](http://opensource.org/licenses/MIT)
