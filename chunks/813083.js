"use strict";
a.r(t), a("627341");
var s, l, r = a("735250");
a("470079");
var n = a("120356"),
  i = a.n(n),
  o = a("278074"),
  c = a("780384"),
  u = a("410030"),
  d = a("26290"),
  f = a("884697"),
  C = a("689938"),
  p = a("360960");
(l = s || (s = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: a,
    className: s
  } = e, l = (0, u.default)();
  if (null == t.unpublishedAt) return null;
  let n = (0, f.getDaysRemaining)(t.unpublishedAt);

  function m(e) {
    return (0, r.jsx)(d.TextBadge, {
      disableColor: !0,
      text: e,
      className: i()((0, c.isThemeDark)(l) ? p.badgeDark : p.badgeLight, s)
    })
  }
  return (0, o.match)([a, n > 1]).with(["card", !0], () => null).with(["banner", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: n
  }))).with(["modal", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: n
  }))).otherwise(() => m(C.default.Messages.COLLECTIBLES_LAST_DAY))
}