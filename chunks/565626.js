s.d(t, {
  Ag: function() {
    return T
  },
  I2: function() {
    return I
  }
}), s(47120);
var n = s(470079),
  a = s(399606),
  i = s(704215),
  r = s(211242),
  l = s(605236),
  o = s(706140),
  c = s(581883),
  E = s(494127),
  _ = s(687362),
  u = s(526761);
let d = [
    [i.z.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, E.F_, i.z.WHATS_NEW_AVATAR_DECOS_FLIP],
    [i.z.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, E.YQ, i.z.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  T = e => {
    let t = d.some(e => {
        let [t, s, n] = e, {
          flipped: a
        } = s.getCurrentConfig({
          location: "useShouldShowNewBadge"
        });
        return !!a && !(0, l.un)(t)
      }),
      s = (0, _.v)(e);
    return t || !0 === s
  },
  I = () => {
    let e = (0, r.Q)(),
      t = d.map(e => {
        let [t, s] = e, {
          flipped: n
        } = s.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return n ? t : null
      }).filter(e => null != e),
      [s] = (0, o.c)(e ? [] : t);
    null != s && t.includes(s) && !e && (0, l.EW)(s)
  };
t.ZP = 12633 == s.j ? () => {
  let e = (0, r.Q)(),
    t = (0, a.e7)([c.Z], () => c.Z.hasLoaded(u.yP.PRELOADED_USER_SETTINGS)),
    s = d.map(e => {
      let [t, s, n] = e, {
        flipped: a
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), i = null != n && (0, l.un)(n);
      return a && !i ? t : null
    }).filter(e => null != e);
  n.useEffect(() => {
    t && d.forEach(e => {
      let [t, s, n] = e;
      if (null != n)(0, l.un)(n) && (0, l.EW)(t)
    })
  }, [s, t]);
  let [i] = (0, o.c)(e ? [] : s);
  return null != i && s.includes(i) && !e
} : null