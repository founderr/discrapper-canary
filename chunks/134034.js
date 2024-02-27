"use strict";
r.r(t), r.d(t, {
  default: function() {
    return h
  }
});
var a = r("37983");
r("884691");
var n = r("414456"),
  i = r.n(n),
  o = r("77078"),
  l = r("15408"),
  s = r("484894"),
  c = r("769284"),
  d = r("890957");
let u = () => {
  r.el("776502").then(r.bind(r, "776502")).then(e => {
    let {
      openMFAModal: t
    } = e;
    t({
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

function h() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(s.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: i(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: u,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: i(c.buttonsContainer, d.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: () => (0, l.default)(),
        children: "Launch Vibing Wumpus"
      })
    })]
  })
}