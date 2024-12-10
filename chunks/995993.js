n.d(t, {
    m: function () {
        return S;
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
    m = n(703656),
    f = n(306680),
    g = n(709054),
    C = n(540126),
    _ = n(434479),
    v = n(981631),
    x = n(176505),
    I = n(490897),
    b = n(388032),
    E = n(518360);
function S(e) {
    let { guild: t, selected: S } = e,
        Z = (0, h.Z)(t),
        N = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        y = (0, r.Wu)([p.Z], () => Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))),
        T = (0, r.e7)([f.ZP], () => f.ZP.hasUnread(t.id, I.W.GUILD_ONBOARDING_QUESTION)),
        j = y.length > C.Cb,
        A = (0, r.e7)([d.Z, f.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = f.ZP.lastMessageId(t.id, I.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = g.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        P = l.useCallback(() => {
            (0, m.uL)(v.Z5c.CHANNEL(t.id, Z ? x.oC.CUSTOMIZE_COMMUNITY : x.oC.CHANNEL_BROWSER));
        }, [t.id, Z]),
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
        (!N || T || j) &&
            !S &&
            !A &&
            (M = (0, i.jsx)(s.TextBadge, {
                color: o.Z.colors.BADGE_BRAND_BG.css,
                text: b.intl.string(b.t.y2b7CA),
                className: E.newChannel
            })),
        (0, i.jsx)(_.m, {
            id: 'channels-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(s.ChannelListMagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: Z ? b.intl.string(b.t.h9mGOD) : b.intl.string(b.t.et6wam),
            selected: S,
            onClick: P,
            onContextMenu: R,
            trailing: M
        })
    );
}
