n(47120);
var s = n(470079),
  i = n(442837),
  l = n(704215),
  a = n(243778),
  r = n(594174),
  o = n(51144),
  c = n(683167),
  u = n(302800),
  d = n(921944);
t.Z = () => {
  let e = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.I)("useCollectiblesShopTabNewBadge"),
    n = s.useMemo(() => {
      if ((0, o.Fc)(e)) {
        if (t === u.LM.TIDE) return [l.z.COLLECTIBLES_SHOP_TIDE_COACHTIP];
        if (t === u.LM.ARCADE) return [l.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP];
        else if (t === u.LM.RETRO_AND_PIRATES) return [l.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP];
        else if (t === u.LM.GALAXY) return [l.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]
      }
      return []
    }, [e, t]),
    [E, h] = (0, a.U)(n, void 0, !0),
    _ = null != E ? u.QQ[E] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: _,
    dismissCollectiblesShopTabNewBadge: () => {
      null != _ && h(d.L.AUTO)
    }
  }
}