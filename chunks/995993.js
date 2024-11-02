n.d(t, {
    m: function () {
        return E;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(704215),
    o = n(692547),
    s = n(481060),
    c = n(239091),
    u = n(605236),
    d = n(45966),
    h = n(31445),
    p = n(22082),
    f = n(703656),
    m = n(306680),
    g = n(709054),
    C = n(540126),
    _ = n(434479),
    x = n(981631),
    v = n(176505),
    I = n(490897),
    b = n(388032),
    N = n(718317);
function E(e) {
    let { guild: t, selected: E } = e,
        S = (0, h.Z)(t),
        Z = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        y = (0, r.Wu)([p.Z], () => Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))),
        T = (0, r.e7)([m.ZP], () => m.ZP.hasUnread(t.id, I.W.GUILD_ONBOARDING_QUESTION)),
        j = y.length > C.Cb,
        A = (0, r.e7)([d.Z, m.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = m.ZP.lastMessageId(t.id, I.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = g.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        P = l.useCallback(() => {
            (0, f.uL)(x.Z5c.CHANNEL(t.id, S ? v.oC.CUSTOMIZE_COMMUNITY : v.oC.CHANNEL_BROWSER));
        }, [t.id, S]),
        R = l.useCallback(
            (e) => {
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('8926').then(n.bind(n, 156673));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            },
            [t]
        ),
        M = null;
    return (
        (!Z || T || j) &&
            !E &&
            !A &&
            (M = (0, i.jsx)(s.TextBadge, {
                color: o.Z.colors.BADGE_BRAND_BG.css,
                text: b.intl.string(b.t.y2b7CA),
                className: N.newChannel
            })),
        (0, i.jsx)(_.m, {
            id: 'channels-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: S ? b.intl.string(b.t.h9mGOD) : b.intl.string(b.t.et6wam),
            selected: E,
            onClick: P,
            onContextMenu: R,
            trailing: M
        })
    );
}
