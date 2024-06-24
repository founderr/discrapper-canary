t.d(s, {
  Ag: function() {
    return d
  },
  I2: function() {
    return I
  }
}), t(47120);
var n = t(470079),
  a = t(399606),
  r = t(704215),
  i = t(211242),
  l = t(605236),
  o = t(706140),
  _ = t(581883),
  c = t(494127),
  E = t(687362),
  u = t(526761);
let R = [
    [r.z.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, c.F_, r.z.WHATS_NEW_AVATAR_DECOS_FLIP],
    [r.z.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, c.YQ, r.z.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  d = e => {
    let s = R.some(e => {
        let [s, t, n] = e, {
          flipped: a
        } = t.getCurrentConfig({
          location: "useShouldShowNewBadge"
        });
        return !!a && !(0, l.un)(s)
      }),
      t = (0, E.v)(e);
    return s || !0 === t
  },
  I = () => {
    let e = (0, i.Q)(),
      s = R.map(e => {
        let [s, t] = e, {
          flipped: n
        } = t.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return n ? s : null
      }).filter(e => null != e),
      [t] = (0, o.c)(e ? [] : s);
    null != t && s.includes(t) && !e && (0, l.EW)(t)
  };
s.ZP = 12633 == t.j ? () => {
  let e = (0, i.Q)(),
    s = (0, a.e7)([_.Z], () => _.Z.hasLoaded(u.yP.PRELOADED_USER_SETTINGS)),
    t = R.map(e => {
      let [s, t, n] = e, {
        flipped: a
      } = t.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), r = null != n && (0, l.un)(n);
      return a && !r ? s : null
    }).filter(e => null != e);
  n.useEffect(() => {
    s && R.forEach(e => {
      let [s, t, n] = e;
      if (null != n)(0, l.un)(n) && (0, l.EW)(s)
    })
  }, [t, s]);
  let [r] = (0, o.c)(e ? [] : t);
  return null != r && t.includes(r) && !e
} : null