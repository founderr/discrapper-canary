"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("580552"),
  u = n("240991"),
  d = n("278297"),
  _ = n("596401"),
  c = n("689938"),
  E = n("946278");

function I(e) {
  let {
    userBio: t,
    className: n,
    animateOnHover: a = !1,
    isHovering: I = !1,
    lineClamp: T = 6,
    setLineClamp: f = !0,
    textColor: S,
    userId: h
  } = e, A = r.useMemo(() => null != t ? (0, u.parseBioReact)(t) : null, [t]);
  return null == t && null == h ? null : ((0, l.default)(h) && (A = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("span", {
      children: c.default.Messages.SYSTEM_DM_CHANGELOG_BIO
    }), (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), (0, i.jsx)(o.Anchor, {
      title: c.default.Messages.SYSTEM_DM_CHANGELOG_BIO_CTA,
      target: "_blank",
      rel: "noreferrer noopener",
      href: _.CHANGELOG_URL,
      children: c.default.Messages.SYSTEM_DM_CHANGELOG_BIO_CTA
    })]
  })), (0, i.jsx)("div", {
    className: s()(n, E.markup),
    children: (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      lineClamp: f ? T : void 0,
      color: void 0 !== S ? S : void 0,
      children: (0, i.jsx)(d.MessagesInteractionContext.Provider, {
        value: {
          disableAnimations: a && !I,
          disableInteractions: !1
        },
        children: A
      })
    })
  }))
}