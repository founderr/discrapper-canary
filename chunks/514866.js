t.d(r, {
  Z: function() {
    return m
  }
});
var a = t(735250);
t(470079);
var i = t(120356),
  n = t.n(i),
  o = t(481060),
  l = t(45114),
  c = t(423932),
  s = t(601948),
  d = t(737126),
  u = t(331651);
let h = () => {
  Promise.all([t.e("99387"), t.e("52030"), t.e("85281")]).then(t.bind(t, 24031)).then(e => {
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

function m() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: n()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(s.S, {
        isDevTools: !0
      })
    }), (0, a.jsx)("div", {
      className: n()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: h,
        children: "Launch MFA"
      })
    }), (0, a.jsx)("div", {
      className: n()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: () => (0, c.Z)(),
        children: "Launch Vibing Wumpus"
      })
    }), (0, a.jsx)("div", {
      className: n()(d.buttonsContainer, u.marginBottom20),
      children: (0, a.jsx)(o.Button, {
        onClick: l.YJ,
        children: "Clear Message Requests Read State"
      })
    })]
  })
}