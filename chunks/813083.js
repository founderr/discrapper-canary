"use strict";
a.r(t), a("627341");
var s, r, n = a("735250");
a("470079");
var l = a("120356"),
  o = a.n(l),
  i = a("278074"),
  c = a("780384"),
  u = a("410030"),
  d = a("26290"),
  f = a("884697"),
  C = a("689938"),
  p = a("360960");
(r = s || (s = {})).BANNER = "banner", r.MODAL = "modal", r.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: a,
    className: s
  } = e, r = (0, u.default)();
  if (null == t.unpublishedAt) return null;
  let l = (0, f.getDaysRemaining)(t.unpublishedAt);

  function m(e) {
    return (0, n.jsx)(d.TextBadge, {
      disableColor: !0,
      text: e,
      className: o()((0, c.isThemeDark)(r) ? p.badgeDark : p.badgeLight, s)
    })
  }
  return (0, i.match)([a, l > 1]).with(["card", !0], () => null).with(["banner", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: l
  }))).with(["modal", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: l
  }))).otherwise(() => m(C.default.Messages.COLLECTIBLES_LAST_DAY))
}