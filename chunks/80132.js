"use strict";
n.d(t, {
  Z: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(315263),
  l = n(100527),
  u = n(906732),
  _ = n(617136),
  c = n(497505),
  d = n(626135),
  E = n(785717),
  I = n(221292),
  T = n(290421),
  h = n(228168),
  f = n(981631),
  S = n(689938),
  A = n(255693);

function N(e) {
  let {
    badges: t,
    className: n,
    badgeClassName: r,
    onClose: N
  } = e, {
    analyticsLocations: m
  } = (0, u.ZP)(l.Z.BADGE), {
    trackUserProfileAction: O,
    ...p
  } = (0, E.KZ)();
  return (0, i.jsx)("div", {
    className: s()(A.container, n),
    "aria-label": S.Z.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: t.map(e => (0, i.jsx)(o.TooltipContainer, {
      text: e.description,
      delay: h.vB,
      children: (0, i.jsx)(o.Anchor, {
        onClick: t => {
          O({
            action: "PRESS_BADGE"
          }), (0, I.NE)({
            badge: e.id,
            analyticsLocations: m,
            ...p
          });
          let n = null != e.link ? (0, a.default)(e.link, {
            analyticsLocations: m
          }) : null;
          if (null != n) return null == N || N(), n(t)
        },
        onMouseEnter: () => {
          e.id === T.i && d.default.track(f.rMx.QUEST_CONTENT_VIEWED, {
            ...(0, _.mH)(c.jn.QUEST_BADGE)
          }), O({
            action: "HOVER_BADGE"
          }), (0, I.Qf)({
            badge: e.id,
            analyticsLocations: m,
            ...p
          })
        },
        href: e.link,
        children: (0, i.jsx)("img", {
          alt: " ",
          "aria-hidden": !0,
          src: (0, h.jC)(e.icon),
          className: s()(A.badge, r)
        })
      })
    }, e.id))
  })
}