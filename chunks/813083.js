"use strict";
n(627341);
var r, i, a = n(735250);
n(470079);
var o = n(120356),
  s = n.n(o),
  c = n(278074),
  l = n(780384),
  d = n(481060),
  u = n(410030),
  p = n(884697),
  f = n(689938),
  g = n(833417);
(i = r || (r = {})).BANNER = "banner", i.MODAL = "modal", i.CARD = "card";
t.Z = e => {
  let {
    category: t,
    display: n,
    className: r
  } = e, i = (0, u.ZP)();
  if (null == t.unpublishedAt) return null;
  let o = (0, p.OT)(t.unpublishedAt);

  function _(e) {
    return (0, a.jsx)(d.TextBadge, {
      disableColor: !0,
      text: e,
      className: s()((0, l.wj)(i) ? g.badgeDark : g.badgeLight, r)
    })
  }
  return (0, c.EQ)([n, o > 1]).with(["card", !0], () => null).with(["banner", !0], () => _(f.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: o
  }))).with(["modal", !0], () => _(f.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: o
  }))).otherwise(() => _(f.Z.Messages.COLLECTIBLES_LAST_DAY))
}