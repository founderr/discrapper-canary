"use strict";
s(627341);
var n, r, a = s(735250);
s(470079);
var i = s(120356),
  l = s.n(i),
  o = s(278074),
  c = s(780384),
  u = s(481060),
  d = s(410030),
  C = s(884697),
  f = s(689938),
  p = s(833417);
(r = n || (n = {})).BANNER = "banner", r.MODAL = "modal", r.CARD = "card";
t.Z = e => {
  let {
    category: t,
    display: s,
    className: n
  } = e, r = (0, d.ZP)();
  if (null == t.unpublishedAt) return null;
  let i = (0, C.OT)(t.unpublishedAt);

  function g(e) {
    return (0, a.jsx)(u.TextBadge, {
      disableColor: !0,
      text: e,
      className: l()((0, c.wj)(r) ? p.badgeDark : p.badgeLight, n)
    })
  }
  return (0, o.EQ)([s, i > 1]).with(["card", !0], () => null).with(["banner", !0], () => g(f.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: i
  }))).with(["modal", !0], () => g(f.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: i
  }))).otherwise(() => g(f.Z.Messages.COLLECTIBLES_LAST_DAY))
}