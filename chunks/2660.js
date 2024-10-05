var s = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    o = n(204418),
    r = n(594174),
    l = n(113434),
    u = n(46140),
    d = n(182294),
    c = n(52539);
let m = () => (0, s.jsx)('div', { className: c.questsCollectibleReward }),
    E = (e) => {
        let { questConfig: t, fallback: n, isFocused: u } = e,
            m = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
            { avatarDecoration: E, isFetching: x } = (0, l.DU)(t);
        return x
            ? (0, s.jsx)('div', {
                  className: c.questsCollectibleReward,
                  children: (0, s.jsx)(i.Spinner, {})
              })
            : null == m || null == E
              ? n
              : (0, s.jsx)('div', {
                    className: c.questsCollectibleReward,
                    children: (0, s.jsx)(o.Z, {
                        avatarSize: d.EF.SIZE_56,
                        user: m,
                        guildId: null,
                        avatarDecorationOverride: E,
                        animateOnHover: !u
                    })
                });
    };
t.Z = (e) => (e.questConfig.features.includes(u.S7.FRACTIONS_QUEST) ? (0, s.jsx)(m, {}) : (0, s.jsx)(E, { ...e }));
