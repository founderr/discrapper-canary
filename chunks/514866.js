"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
});
var a = r("735250");
r("470079");
var i = r("120356"),
  l = r.n(i),
  n = r("481060"),
  o = r("45114"),
  s = r("423932"),
  c = r("601948"),
  d = r("139128"),
  u = r("611273");
let h = () => {
  Promise.all([r.e("99387"), r.e("52030"), r.e("85281")]).then(r.bind(r, "24031")).then(e => {
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

function m() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: l()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(c.OverridePremiumTypeDropDown, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: l()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(n.Button, {
        onClick: h,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: l()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(n.Button, {
        onClick: () => (0, s.default)(),
        children: "Launch Vibing Wumpus"
      })
    }), (0, a.jsx)("div", {
      className: l()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(n.Button, {
        onClick: o.ackMessageRequestClear,
        children: "Clear Message Requests Read State"
      })
    })]
  })
}