var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(204418),
    s = n(594174),
    l = n(113434),
    u = n(46140),
    c = n(182294),
    d = n(52539);
let _ = () => (0, r.jsx)('div', { className: d.questsCollectibleReward }),
    E = (e) => {
        let { questConfig: t, fallback: n, isFocused: u } = e,
            _ = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { avatarDecoration: E, isFetching: f } = (0, l.DU)(t);
        return f
            ? (0, r.jsx)('div', {
                  className: d.questsCollectibleReward,
                  children: (0, r.jsx)(a.Spinner, {})
              })
            : null == _ || null == E
              ? n
              : (0, r.jsx)('div', {
                    className: d.questsCollectibleReward,
                    children: (0, r.jsx)(o.Z, {
                        avatarSize: c.EF.SIZE_56,
                        user: _,
                        guildId: null,
                        avatarDecorationOverride: E,
                        animateOnHover: !u
                    })
                });
    },
    f = (e) => (e.questConfig.features.includes(u.S7.FRACTIONS_QUEST) ? (0, r.jsx)(_, {}) : (0, r.jsx)(E, { ...e }));
t.Z = f;
