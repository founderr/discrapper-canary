n.d(t, {
    Ag: function () {
        return f;
    },
    I2: function () {
        return p;
    }
}),
    n(47120);
var i = n(192379),
    r = n(399606),
    a = n(704215),
    s = n(211242),
    l = n(605236),
    o = n(706140),
    c = n(581883),
    d = n(494127),
    u = n(687362),
    g = n(526761);
let m = [
        [a.z.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.F_, a.z.WHATS_NEW_AVATAR_DECOS_FLIP],
        [a.z.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.YQ, a.z.WHATS_NEW_PROFILE_EFFECTS_FLIP]
    ],
    f = (e) => {
        let t = m.some((e) => {
                let [t, n, i] = e,
                    { flipped: r } = n.getCurrentConfig({ location: 'useShouldShowNewBadge' });
                return !!r && !(0, l.un)(t);
            }),
            n = (0, u.v)(e);
        return t || !0 === n;
    },
    p = () => {
        let e = (0, s.Q)(),
            t = m
                .map((e) => {
                    let [t, n] = e,
                        { flipped: i } = n.getCurrentConfig({ location: 'useClearNewBadge' });
                    return i ? t : null;
                })
                .filter((e) => null != e),
            [n] = (0, o.cv)(e ? [] : t);
        null != n && t.includes(n) && !e && (0, l.EW)(n);
    };
t.ZP =
    12633 == n.j
        ? () => {
              let e = (0, s.Q)(),
                  t = (0, r.e7)([c.Z], () => c.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS)),
                  n = m
                      .map((e) => {
                          let [t, n, i] = e,
                              { flipped: r } = n.getCurrentConfig({ location: 'useShouldShowNewBadge' }),
                              a = null != i && (0, l.un)(i);
                          return r && !a ? t : null;
                      })
                      .filter((e) => null != e);
              i.useEffect(() => {
                  t &&
                      m.forEach((e) => {
                          let [t, n, i] = e;
                          if (null != i) (0, l.un)(i) && (0, l.EW)(t);
                      });
              }, [n, t]);
              let [a] = (0, o.cv)(e ? [] : n);
              return null != a && n.includes(a) && !e;
          }
        : null;
