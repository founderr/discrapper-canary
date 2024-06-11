"use strict";
s.r(t), s("627341");
var a, l, n = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  o = s("278074"),
  u = s("780384"),
  c = s("481060"),
  d = s("410030"),
  f = s("884697"),
  C = s("689938"),
  E = s("360960");
(l = a || (a = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: s,
    className: a
  } = e, l = (0, d.default)();
  if (null == t.unpublishedAt) return null;
  let r = (0, f.getDaysRemaining)(t.unpublishedAt);

  function m(e) {
    return (0, n.jsx)(c.TextBadge, {
      disableColor: !0,
      text: e,
      className: i()((0, u.isThemeDark)(l) ? E.badgeDark : E.badgeLight, a)
    })
  }
  return (0, o.match)([s, r > 1]).with(["card", !0], () => null).with(["banner", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: r
  }))).with(["modal", !0], () => m(C.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: r
  }))).otherwise(() => m(C.default.Messages.COLLECTIBLES_LAST_DAY))
}