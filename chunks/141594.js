n(47120);
var i = n(470079),
  a = n(442837),
  s = n(704215),
  r = n(243778),
  l = n(594174),
  o = n(51144),
  c = n(599960),
  d = n(683167),
  u = n(302800),
  _ = n(921944);
let h = 'useCollectiblesShopTabNewBadge';
t.Z = () => {
  let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
t = (0, d.I)(h),
n = i.useMemo(() => {
  if ((0, o.Fc)(e)) {
    if (t === u.LM.ROBERT)
      return [s.z.COLLECTIBLES_SHOP_ROBERT_MARKETING];
    if (t === u.LM.DARK_FANTASY)
      return [s.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING];
    else if (t === u.LM.TIDE)
      return [s.z.COLLECTIBLES_SHOP_TIDE_COACHTIP];
  }
  return [];
}, [
  e,
  t
]),
[E, I] = (0, r.U)(n, void 0, !0),
m = (0, c.E)(h),
g = null;
  return null != E && (m === u.k2.COACHTIP ? g = u.fY[E] : m === u.k2.COACHTIP_HEADLINE_ONLY ? g = u.zM[E] : m === u.k2.BADGE && (g = {
type: u.k2.BADGE
  })), {
collectiblesShopTabNewBadgeDisplayOptions: g,
dismissCollectiblesShopTabNewBadge: () => {
  null != g && I(_.L.AUTO);
}
  };
};