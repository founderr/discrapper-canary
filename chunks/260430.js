"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("207561"),
  o = n("373793"),
  l = n("243814"),
  u = n("260034"),
  d = n("993365"),
  _ = n("263704"),
  c = n("465670"),
  E = n("713938"),
  I = n("689938"),
  T = n("361375");

function f(e) {
  let {
    text: t,
    error: n,
    isFake: r
  } = e;
  return (0, i.jsxs)("div", {
    className: T.scope,
    children: [(0, i.jsx)("div", {
      className: s()(T.iconWrapper, r ? T.fakeScopeIcon : T.scopeIcon),
      children: r ? (0, i.jsx)(c.default, {
        className: T.icon
      }) : (0, i.jsx)(_.default, {
        className: T.icon
      })
    }), (0, i.jsxs)("div", {
      className: T.scopeInner,
      children: [(0, i.jsx)(d.Text, {
        variant: "text-md/medium",
        children: t
      }), null != n ? (0, i.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: n
      }) : null]
    })]
  })
}

function S(e) {
  var t;
  let {
    application: n,
    accountScopes: r,
    requestedScopes: s,
    integrationType: d,
    errors: _,
    isTrustedName: c = !1
  } = e, S = (0, a.useLazyValue)(() => E.FAKE_SCOPES[Math.floor(Math.random() * E.FAKE_SCOPES.length)]);
  if (0 === r.length) return null;
  let h = S(),
    A = c ? I.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : I.default.Messages.OAUTH2_SCOPES_LABEL,
    m = d === o.ApplicationIntegrationType.USER_INSTALL && s.includes(l.OAuth2Scopes.APPLICATIONS_COMMANDS);
  return (0, i.jsxs)("div", {
    className: T.scopes,
    children: [(0, i.jsx)(u.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: T.sectionLabel,
      children: A.format({
        application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
      })
    }), r.map(e => {
      var t;
      return (0, i.jsx)(f, {
        text: (0, E.getScopeName)(e, r),
        error: null == _ ? void 0 : null === (t = _[e]) || void 0 === t ? void 0 : t[0]
      }, e)
    }), m && (0, i.jsx)(f, {
      text: I.default.Messages.SCOPE_DM_YOU
    }), (0, i.jsx)(f, {
      text: h,
      isFake: !0
    })]
  })
}