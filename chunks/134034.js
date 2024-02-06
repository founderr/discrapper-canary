"use strict";
t.r(r), t.d(r, {
  default: function() {
    return c
  }
});
var a = t("37983");
t("884691");
var n = t("77078"),
  i = t("484894"),
  l = t("579921"),
  o = t("926622");
let s = () => {
  t.el("776502").then(t.bind(t, "776502")).then(e => {
    let {
      openMFAModal: r
    } = e;
    r({
      ticket: "ticket",
      methods: [{
        type: "webauthn",
        challenge: "{}"
      }, {
        type: "totp",
        backup_codes_allowed: !0
      }, {
        type: "sms"
      }, {
        type: "password"
      }]
    }, console.log, console.error)
  })
};

function c() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: [l.buttonsContainer, o.marginBottom20].join(" "),
      children: (0, a.jsx)(i.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: [l.buttonsContainer, o.marginBottom20].join(" "),
      children: (0, a.jsx)(n.Button, {
        onClick: s,
        children: "Launch MFA"
      })
    })]
  })
}