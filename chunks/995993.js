n.d(t, {
    m: function () {
        return v;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(399606),
    a = n(704215),
    s = n(692547),
    o = n(481060),
    c = n(239091),
    u = n(605236),
    d = n(45966),
    h = n(31445),
    p = n(22082),
    f = n(703656),
    _ = n(306680),
    m = n(709054),
    g = n(540126),
    C = n(434479),
    I = n(981631),
    E = n(176505),
    N = n(490897),
    S = n(689938),
    x = n(718317);
function v(e) {
    let { guild: t, selected: v } = e,
        Z = (0, h.Z)(t),
        T = (0, u.wE)(a.z.CHANNEL_BROWSER_NEW_BADGE_NUX),
        b = (0, r.Wu)([p.Z], () => Array.from(p.Z.getNewChannelIds(t.id)).filter((e) => p.Z.shouldIndicateNewChannel(t.id, e))),
        A = (0, r.e7)([_.ZP], () => _.ZP.hasUnread(t.id, N.W.GUILD_ONBOARDING_QUESTION)),
        M = b.length > g.Cb,
        R = (0, r.e7)([d.Z, _.ZP], () => {
            let e = d.Z.lastFetchedAt(t.id),
                n = _.ZP.lastMessageId(t.id, N.W.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = m.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        L = l.useCallback(() => {
            (0, f.uL)(I.Z5c.CHANNEL(t.id, Z ? E.oC.CUSTOMIZE_COMMUNITY : E.oC.CHANNEL_BROWSER));
        }, [t.id, Z]),
        y = l.useCallback(
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
        P = null;
    return (
        (!T || A || M) &&
            !v &&
            !R &&
            (P = (0, i.jsx)(o.TextBadge, {
                color: s.Z.colors.BADGE_BRAND_BG.css,
                text: S.Z.Messages.NEW,
                className: x.newChannel
            })),
        (0, i.jsx)(C.m, {
            id: 'channels-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(o.ChannelListMagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            text: Z ? S.Z.Messages.CHANNELS_AND_ROLES : S.Z.Messages.CHANNEL_BROWSER_TITLE,
            selected: v,
            onClick: L,
            onContextMenu: y,
            trailing: P
        })
    );
}
