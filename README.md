# cookie-consent

Create easily a fully customizable bootstrap EU Law (imply) Cookie consent banner for your website.

## Install

```js
$ meteor add selaias:cookie-consent
```

## Usage

Place `{{> cookieConsent}}` in your main template. Something like:

```handlebars
<body>
    {{> cookieConsent}}
</body>
```

and then place under client/lib/cookie_consent.js file the initialisation code

```js

var options = {
  cookieMessage: "By using our website you are consenting to our use of cookies in accordance with our Cookie Policy",
  showLink: true,
  position: 'top',
  linkText: "More info",
  linkRouteName: "/cookiePolicy",
  html: false,
  className: null,
};

CookieConsent.init(options);

```

## Feedback
This is the most basic setup, customization ideas are always welcome!

## Licence

[MIT License](http://opensource.org/licenses/MIT)