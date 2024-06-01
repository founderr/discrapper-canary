"use strict";
l.r(t), l("627341");
var a, s, r = l("735250");
l("470079");
var n = l("120356"),
  i = l.n(n),
  o = l("278074"),
  c = l("780384"),
  u = l("410030"),
  d = l("26290"),
  f = l("884697"),
  C = l("689938"),
  p = l("360960");
(s = a || (a = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: l,
    className: a
  } = e, s = (0, u.default)();
  if (null == t.unpublishedAt) return null;
  let n = (0, f.getDaysRemaining)(t.unpublishedAt);

  function m(e) {
    return (0, r.jsx)(d.TextBadge, {
      disableColor: !0,
      text: e,
      className: i()((0, c.isThemeDark)(s) ? p.badgeDark : p.badgeLight, a)
    })
  }
  return (0, o.match)([l, n > 1]).with(["card", !0], () => null).with(["banner", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: n
  }))).with(["modal", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: n
  }))).otherwise(() => m(C.default.Messages.COLLECTIBLES_LAST_DAY))
}