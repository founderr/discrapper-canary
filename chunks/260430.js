"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(77866),
  a = n(373793),
  l = n(243814),
  u = n(260034),
  _ = n(993365),
  c = n(481060),
  d = n(713938),
  E = n(689938),
  I = n(361375);

function T(e) {
  let {
    text: t,
    error: n,
    isFake: r
  } = e;
  return (0, i.jsxs)("div", {
    className: I.scope,
    children: [(0, i.jsx)("div", {
      className: s()(I.iconWrapper, r ? I.fakeScopeIcon : I.scopeIcon),
      children: r ? (0, i.jsx)(c.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: I.icon
      }) : (0, i.jsx)(c.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: I.icon
      })
    }), (0, i.jsxs)("div", {
      className: I.scopeInner,
      children: [(0, i.jsx)(_.x, {
        variant: "text-md/medium",
        children: t
      }), null != n ? (0, i.jsx)(_.x, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: n
      }) : null]
    })]
  })
}

function h(e) {
  var t;
  let {
    application: n,
    accountScopes: r,
    requestedScopes: s,
    integrationType: _,
    errors: c,
    isTrustedName: h = !1
  } = e, S = (0, o.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
  if (0 === r.length) return null;
  let f = S(),
    N = h ? E.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.Z.Messages.OAUTH2_SCOPES_LABEL,
    A = _ === a.Y.USER_INSTALL && s.includes(l.x.APPLICATIONS_COMMANDS);
  return (0, i.jsxs)("div", {
    className: I.scopes,
    children: [(0, i.jsx)(u.X, {
      variant: "heading-deprecated-12/semibold",
      className: I.sectionLabel,
      children: N.format({
        application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
      })
    }), r.map(e => {
      var t;
      return (0, i.jsx)(T, {
        text: (0, d.jW)(e, r),
        error: null == c ? void 0 : null === (t = c[e]) || void 0 === t ? void 0 : t[0]
      }, e)
    }), A && (0, i.jsx)(T, {
      text: E.Z.Messages.SCOPE_DM_YOU
    }), (0, i.jsx)(T, {
      text: f,
      isFake: !0
    })]
  })
}