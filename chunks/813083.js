s(627341);
var n, r, a = s(735250);
s(470079);
var o = s(120356),
  i = s.n(o),
  l = s(278074),
  c = s(780384),
  d = s(481060),
  u = s(410030),
  p = s(884697),
  g = s(689938),
  f = s(353517);
(r = n || (n = {})).BANNER = 'banner', r.MODAL = 'modal', r.CARD = 'card';
t.Z = e => {
  let {
category: t,
display: s,
className: n
  } = e, r = (0, u.ZP)();
  if (null == t.unpublishedAt)
return null;
  let o = (0, p.OT)(t.unpublishedAt);

  function C(e) {
return (0, a.jsx)(d.TextBadge, {
  disableColor: !0,
  text: e,
  className: i()((0, c.wj)(r) ? f.badgeDark : f.badgeLight, n)
});
  }
  return (0, l.EQ)([
s,
o > 1
  ]).with([
'card',
!0
  ], () => null).with([
'banner',
!0
  ], () => C(g.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
days: o
  }))).with([
'modal',
!0
  ], () => C(g.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
days: o
  }))).otherwise(() => C(g.Z.Messages.COLLECTIBLES_LAST_DAY));
};