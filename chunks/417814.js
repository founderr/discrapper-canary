"use strict";
e.r(n), e.d(n, {
  default: function() {
    return c
  }
}), e("70102");
var r = e("37983");
e("884691");
var o = e("77078"),
  i = e("668596"),
  c = {
    showCaptcha: function(t, n) {
      let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
          sitekey: a,
          captchaService: s,
          options: u
        } = t;
      (0, o.openModalLazy)(async () => {
        let {
          default: t
        } = await e.el("899945").then(e.bind(e, "899945"));
        return e => (0, r.jsx)(t, {
          onCaptchaVerify: (t, e) => n({
            captcha_key: t,
            captcha_rqtoken: e
          }),
          captchaService: s,
          sitekey: a,
          ...c,
          ...u,
          ...e
        })
      }, {
        Layer: i.default
      })
    },
    showCaptchaAsync: function(t) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          sitekey: c,
          captchaService: a,
          options: s
        } = t;
      return new Promise((t, u) => {
        (0, o.openModalLazy)(async () => {
          let {
            default: o
          } = await e.el("899945").then(e.bind(e, "899945"));
          return e => (0, r.jsx)(o, {
            onCaptchaVerify: (n, e) => t({
              captcha_key: n,
              captcha_rqtoken: e
            }),
            captchaService: a,
            sitekey: c,
            onReject: () => u(Error("cancel captcha")),
            ...n,
            ...s,
            ...e
          })
        }, {
          Layer: i.default
        })
      })
    }
  }