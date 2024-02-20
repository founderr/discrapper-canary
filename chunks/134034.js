"use strict";
t.r(r), t.d(r, {
  default: function() {
    return h
  }
});
var a = t("37983");
t("884691");
var n = t("414456"),
  i = t.n(n),
  l = t("77078"),
  o = t("484894"),
  s = t("769284"),
  c = t("890957");
let d = () => {
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
  },
  u = () => {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await t.el("166260").then(t.bind(t, "166260"));
      return r => (0, a.jsx)(e, {
        ...r
      })
    })
  };

function h() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i(s.buttonsContainer, c.marginBottom20),
      children: (0, a.jsx)(o.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: i(s.buttonsContainer, c.marginBottom20),
      children: (0, a.jsx)(l.Button, {
        onClick: d,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: i(s.buttonsContainer, c.marginBottom20),
      children: (0, a.jsx)(l.Button, {
        onClick: u,
        children: "Launch Vibing Wumpus"
      })
    })]
  })
}