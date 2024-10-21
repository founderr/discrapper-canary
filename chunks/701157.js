t(653041);
var n = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(481060),
    o = t(165630),
    l = t(771845),
    c = t(11844),
    d = t(300037),
    _ = t(689938),
    u = t(826105);
s.Z = function (e) {
    let { hasAppliedGuildBoosts: s, subscriptionIsPausedOrPausePending: t } = e,
        E = (0, i.e7)([o.Z], () => o.Z.affinities),
        T = (0, i.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
        S = a.useMemo(() => {
            let e = E.slice(0, 3).map((e) => e.guildId);
            for (let s = 0; s < T.length && !(e.length >= 3); s++) {
                let t = T[s];
                !e.includes(t) && e.push(t);
            }
            return e;
        }, [E, T]);
    return 0 === S.length
        ? null
        : (0, n.jsxs)('div', {
              className: u.wrapper,
              children: [
                  s &&
                      (0, n.jsx)(r.Heading, {
                          variant: 'heading-lg/semibold',
                          className: u.header,
                          children: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_RECOMMENDED_SERVERS_HEADING
                      }),
                  S.map((e) =>
                      (0, n.jsx)(
                          d.Z,
                          {
                              className: u.recommendedServerCard,
                              guildId: e,
                              boostingVariant: !0
                          },
                          e
                      )
                  ),
                  T.length > 3 && !1 === t && (0, n.jsx)(c.Z, {})
              ]
          });
};
