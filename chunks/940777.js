n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(16609),
    m = n(540059),
    f = n(276952),
    g = n(682662),
    C = n(674552),
    v = n(593364),
    _ = n(905423),
    x = n(199902),
    I = n(592125),
    b = n(944486),
    E = n(979651),
    S = n(709054),
    Z = n(853856),
    N = n(593214),
    y = n(919755),
    T = n(110977),
    j = n(603274),
    A = n(981631),
    P = n(388032),
    R = n(120555);
let M = {
    analyticsSource: {
        page: A.ZY5.GUILD_CHANNEL,
        section: A.jXE.CHANNEL_LIST,
        object: A.qAy.CHANNEL
    }
};
function L() {
    let e = (0, a.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, N.up)(),
        [L, w] = l.useState(!1),
        { favoriteServerMuted: D, favoriteChannels: O } = (0, s.cj)([Z.Z], () => ({
            favoriteChannels: Z.Z.getFavoriteChannels(),
            favoriteServerMuted: Z.Z.favoriteServerMuted
        })),
        k = (0, s.e7)([b.Z], () => b.Z.getChannelId(A.I_8)),
        G = (0, s.e7)([I.Z], () => I.Z.getChannel(k)),
        U = (0, _.Z)((e) => e.guildId) === A.I_8,
        { badge: B, unread: H } = (0, y.Z)(O),
        V = (function (e) {
            let t = (0, s.e7)([b.Z], () => b.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, s.e7)([x.Z], () => {
                    if (!n) return !1;
                    let t = x.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, s.e7)([x.Z], () => x.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                r = (0, s.e7)([E.Z], () => n && null != t && E.Z.hasVideo(t), [n, t]),
                o = (0, s.Wu)([h.ZP], () => S.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                a = (0, s.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            i = (0, p.p)(n);
                        return null != i && null != e[i];
                    })
                ),
                c = o.length > 0,
                u = !1,
                d = !1,
                m = !1,
                f = !1;
            return (
                n ? ((u = !r), (d = r), (m = i), (f = a)) : ((m = l), (f = c)),
                (0, C.Or)({
                    audio: u,
                    video: d,
                    screenshare: m,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: f
                })
            );
        })(O),
        F = B > 0 ? (0, v.N)(B) : null,
        W = (0, m.Q3)('FavoritesButton'),
        z = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(g.H, {
        children: [
            (0, i.jsx)(f.Z, {
                selected: U,
                hovered: L,
                unread: H && !D,
                className: R.pill
            }),
            (0, i.jsx)(j.Z, {
                onShow: z,
                children: (0, i.jsx)(T.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: W || U || L,
                        upperBadge: V,
                        lowerBadge: F,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: P.intl.formatToPlainString(P.t['/uzRsr'], {
                                guildName: P.intl.string(P.t.wMWycn),
                                mentions: B
                            }),
                            to: {
                                pathname: A.Z5c.CHANNEL(A.I_8, k),
                                state: M
                            },
                            selected: U || L,
                            onMouseEnter: () => w(!0),
                            onMouseLeave: () => w(!1),
                            onMouseDown: function () {
                                if (null != G) u.Z.preload(G.guild_id, G.id);
                            },
                            onContextMenu: function (e) {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)('div', {
                                className: o()(R.ring, { [R.ringActive]: t }),
                                children: (0, i.jsx)(c.StarIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: R.favoriteIcon,
                                    width: 20,
                                    height: 20
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
