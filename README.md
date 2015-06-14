## cookie-consent

Create easily a fully customizable EU Law Cookie consent banner for your websites.

#install

```js
$ meteor add selaias:cookie-consent
```

#Usage

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