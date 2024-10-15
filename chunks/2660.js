var s = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    l = n(204418),
    r = n(594174),
    o = n(113434),
    u = n(46140),
    d = n(182294),
    c = n(52539);
let E = () => (0, s.jsx)('div', { className: c.questsCollectibleReward }),
    m = (e) => {
        let { questConfig: t, fallback: n, isFocused: u } = e,
            E = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
            { avatarDecoration: m, isFetching: C } = (0, o.DU)(t);
        return C
            ? (0, s.jsx)('div', {
                  className: c.questsCollectibleReward,
                  children: (0, s.jsx)(i.Spinner, {})
              })
            : null == E || null == m
              ? n
              : (0, s.jsx)('div', {
                    className: c.questsCollectibleReward,
                    children: (0, s.jsx)(l.Z, {
                        avatarSize: d.EF.SIZE_56,
                        user: E,
                        guildId: null,
                        avatarDecorationOverride: m,
                        animateOnHover: !u
                    })
                });
    };
t.Z = (e) => (e.questConfig.features.includes(u.S7.FRACTIONS_QUEST) ? (0, s.jsx)(E, {}) : (0, s.jsx)(m, { ...e }));
