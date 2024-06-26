"use strict";
n.d(t, {
  V: function() {
    return i
  },
  Z: function() {
    return g
  }
}), n(653041);
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(315263),
  _ = n(100527),
  c = n(906732),
  d = n(688465),
  E = n(617136),
  I = n(497505),
  T = n(626135),
  h = n(785717),
  f = n(221292),
  S = n(290421),
  N = n(318661),
  A = n(228168),
  m = n(981631),
  O = n(689938),
  p = n(131010),
  R = n(839973);

function g(e) {
  let {
    user: t,
    guildId: n,
    className: i,
    shrinkAtCount: r,
    shrinkToSize: o,
    isTryItOutFlow: g,
    onBadgeClick: C,
    size: v = 0
  } = e, L = (0, N.ZP)(t.id, n), {
    analyticsLocations: D
  } = (0, c.ZP)(_.Z.BADGE), {
    trackUserProfileAction: M,
    ...P
  } = (0, h.KZ)(), y = (0, S.Z)(L).map(e => ({
    ...e,
    src: (0, A.jC)(e.icon)
  }));
  if (t.isClyde()) return (0, s.jsx)("div", {
    className: a()(i, p.container, p.clydeBadgeList),
    "aria-label": O.Z.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: (0, s.jsx)(d.Z, {})
  });
  g && null == y.find(e => "premium" === e.id) && y.push({
    id: "premium",
    src: R,
    description: O.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: new Date
    })
  });
  let U = null != r && null != o && y.length > r ? o : v;
  return (0, s.jsx)(c.Gt, {
    value: D,
    children: (0, s.jsx)("div", {
      className: a()(i, y.length > 0 ? p.containerWithContent : p.container),
      "aria-label": O.Z.Messages.PROFILE_USER_BADGES,
      role: "group",
      children: y.map(e => (0, s.jsx)(l.Tooltip, {
        position: "top",
        text: e.description,
        spacing: 12,
        children: t => (0, s.jsx)(l.Anchor, {
          ...t,
          onClick: n => {
            var i;
            M({
              action: "PRESS_BADGE"
            }), (0, f.NE)({
              badge: e.id,
              analyticsLocations: D,
              ...P
            }), null === (i = t.onClick) || void 0 === i || i.call(t);
            let r = null != e.link ? (0, u.default)(e.link, {
              analyticsLocations: D
            }) : null;
            if (null != r) return null == C || C(), r(n)
          },
          onMouseEnter: () => {
            var n;
            e.id === S.i && (T.default.track(m.rMx.QUEST_CONTENT_VIEWED, {
              ...(0, E.mH)(I.jn.QUEST_BADGE)
            }), (0, f.Qf)({
              badge: e.id,
              analyticsLocations: D,
              ...P
            })), null === (n = t.onMouseEnter) || void 0 === n || n.call(t)
          },
          href: e.link,
          children: (0, s.jsx)("img", {
            alt: " ",
            "aria-hidden": !0,
            src: e.src,
            className: a()({
              [p.profileBadge24]: 0 === U,
              [p.profileBadge22]: 1 === U,
              [p.profileBadge20]: 2 === U,
              [p.profileBadge18]: 3 === U
            })
          })
        })
      }, e.id))
    })
  })
}(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_20 = 2] = "SIZE_20", r[r.SIZE_18 = 3] = "SIZE_18"