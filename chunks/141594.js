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
let E = 'useCollectiblesShopTabNewBadge';
t.Z = () => {
  let e = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
t = (0, d.I)(E),
n = i.useMemo(() => {
  if ((0, o.Fc)(e)) {
    if (t === u.LM.DARK_FANTASY)
      return [s.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING];
    if (t === u.LM.TIDE)
      return [s.z.COLLECTIBLES_SHOP_TIDE_COACHTIP];
    else if (t === u.LM.ARCADE)
      return [s.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP];
    else if (t === u.LM.RETRO_AND_PIRATES)
      return [s.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP];
    else if (t === u.LM.GALAXY)
      return [s.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP];
  }
  return [];
}, [
  e,
  t
]),
[h, I] = (0, r.U)(n, void 0, !0),
m = (0, c.E)(E),
g = null;
  return null != h && (m === u.k2.COACHTIP ? g = u.fY[h] : m === u.k2.COACHTIP_HEADLINE_ONLY ? g = u.zM[h] : m === u.k2.BADGE && (g = {
type: u.k2.BADGE
  })), {
collectiblesShopTabNewBadgeDisplayOptions: g,
dismissCollectiblesShopTabNewBadge: () => {
  null != g && I(_.L.AUTO);
}
  };
};