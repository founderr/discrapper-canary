n.d(t, {
  Ag: function() {
    return T
  },
  I2: function() {
    return I
  }
}), n(47120);
var s = n(470079),
  a = n(399606),
  i = n(704215),
  r = n(211242),
  l = n(605236),
  o = n(706140),
  c = n(581883),
  d = n(494127),
  _ = n(687362),
  E = n(526761);
let u = [
    [i.z.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.F_, i.z.WHATS_NEW_AVATAR_DECOS_FLIP],
    [i.z.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.YQ, i.z.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  T = e => {
    let t = u.some(e => {
        let [t, n, s] = e, {
          flipped: a
        } = n.getCurrentConfig({
          location: "useShouldShowNewBadge"
        });
        return !!a && !(0, l.un)(t)
      }),
      n = (0, _.v)(e);
    return t || !0 === n
  },
  I = () => {
    let e = (0, r.Q)(),
      t = u.map(e => {
        let [t, n] = e, {
          flipped: s
        } = n.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return s ? t : null
      }).filter(e => null != e),
      [n] = (0, o.c)(e ? [] : t);
    null != n && t.includes(n) && !e && (0, l.EW)(n)
  };
t.ZP = 12633 == n.j ? () => {
  let e = (0, r.Q)(),
    t = (0, a.e7)([c.Z], () => c.Z.hasLoaded(E.yP.PRELOADED_USER_SETTINGS)),
    n = u.map(e => {
      let [t, n, s] = e, {
        flipped: a
      } = n.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), i = null != s && (0, l.un)(s);
      return a && !i ? t : null
    }).filter(e => null != e);
  s.useEffect(() => {
    t && u.forEach(e => {
      let [t, n, s] = e;
      if (null != s)(0, l.un)(s) && (0, l.EW)(t)
    })
  }, [n, t]);
  let [i] = (0, o.c)(e ? [] : n);
  return null != i && n.includes(i) && !e
} : null