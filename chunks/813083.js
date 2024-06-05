"use strict";
s.r(t), s("627341");
var a, l, r = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  o = s("278074"),
  c = s("780384"),
  u = s("410030"),
  d = s("26290"),
  f = s("884697"),
  C = s("689938"),
  p = s("360960");
(l = a || (a = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: s,
    className: a
  } = e, l = (0, u.default)();
  if (null == t.unpublishedAt) return null;
  let n = (0, f.getDaysRemaining)(t.unpublishedAt);

  function m(e) {
    return (0, r.jsx)(d.TextBadge, {
      disableColor: !0,
      text: e,
      className: i()((0, c.isThemeDark)(l) ? p.badgeDark : p.badgeLight, a)
    })
  }
  return (0, o.match)([s, n > 1]).with(["card", !0], () => null).with(["banner", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: n
  }))).with(["modal", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: n
  }))).otherwise(() => m(C.default.Messages.COLLECTIBLES_LAST_DAY))
}