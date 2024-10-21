var s = n(735250);
n(470079);
var a = n(442837),
    i = n(481060),
    l = n(204418),
    r = n(594174),
    o = n(113434),
    u = n(182294),
    d = n(52539);
let c = (e) => {
    let { questConfig: t, fallback: n, isFocused: c } = e,
        E = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
        { avatarDecoration: m, isFetching: C } = (0, o.DU)(t);
    return C
        ? (0, s.jsx)('div', {
              className: d.questsCollectibleReward,
              children: (0, s.jsx)(i.Spinner, {})
          })
        : null == E || null == m
          ? n
          : (0, s.jsx)('div', {
                className: d.questsCollectibleReward,
                children: (0, s.jsx)(l.Z, {
                    avatarSize: u.EF.SIZE_56,
                    user: E,
                    guildId: null,
                    avatarDecorationOverride: m,
                    animateOnHover: !c
                })
            });
};
t.Z = (e) => (0, s.jsx)(c, { ...e });
