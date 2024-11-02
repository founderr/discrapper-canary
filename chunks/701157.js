n(653041);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(165630),
    o = n(771845),
    c = n(11844),
    d = n(300037),
    u = n(388032),
    m = n(826105);
t.Z = function (e) {
    let { hasAppliedGuildBoosts: t, subscriptionIsPausedOrPausePending: n } = e,
        h = (0, r.e7)([a.Z], () => a.Z.affinities),
        g = (0, r.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()),
        p = s.useMemo(() => {
            let e = h.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < g.length && !(e.length >= 3); t++) {
                let n = g[t];
                !e.includes(n) && e.push(n);
            }
            return e;
        }, [h, g]);
    return 0 === p.length
        ? null
        : (0, i.jsxs)('div', {
              className: m.wrapper,
              children: [
                  t &&
                      (0, i.jsx)(l.Heading, {
                          variant: 'heading-lg/semibold',
                          className: m.header,
                          children: u.intl.string(u.t.r90Wgo)
                      }),
                  p.map((e) =>
                      (0, i.jsx)(
                          d.Z,
                          {
                              className: m.recommendedServerCard,
                              guildId: e,
                              boostingVariant: !0
                          },
                          e
                      )
                  ),
                  g.length > 3 && !1 === n && (0, i.jsx)(c.Z, {})
              ]
          });
};
