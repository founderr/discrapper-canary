"use strict";
t(627341);
var n, a, r = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  o = t(278074),
  c = t(780384),
  u = t(481060),
  d = t(410030),
  C = t(884697),
  f = t(689938),
  E = t(833417);
(a = n || (n = {})).BANNER = "banner", a.MODAL = "modal", a.CARD = "card";
s.Z = e => {
  let {
    category: s,
    display: t,
    className: n
  } = e, a = (0, d.ZP)();
  if (null == s.unpublishedAt) return null;
  let i = (0, C.OT)(s.unpublishedAt);

  function p(e) {
    return (0, r.jsx)(u.TextBadge, {
      disableColor: !0,
      text: e,
      className: l()((0, c.wj)(a) ? E.badgeDark : E.badgeLight, n)
    })
  }
  return (0, o.EQ)([t, i > 1]).with(["card", !0], () => null).with(["banner", !0], () => p(f.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: i
  }))).with(["modal", !0], () => p(f.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: i
  }))).otherwise(() => p(f.Z.Messages.COLLECTIBLES_LAST_DAY))
}