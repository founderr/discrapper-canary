n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(276952),
    f = n(682662),
    _ = n(674552),
    m = n(593364),
    g = n(905423),
    C = n(199902),
    I = n(592125),
    E = n(944486),
    N = n(979651),
    S = n(709054),
    x = n(853856),
    v = n(593214),
    T = n(919755),
    Z = n(110977),
    A = n(603274),
    b = n(981631),
    R = n(689938),
    M = n(599576);
let L = {
    analyticsSource: {
        page: b.ZY5.GUILD_CHANNEL,
        section: b.jXE.CHANNEL_LIST,
        object: b.qAy.CHANNEL
    }
};
function P() {
    let e = (0, s.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, v.up)(),
        [P, O] = l.useState(!1),
        { favoriteServerMuted: y, favoriteChannels: D } = (0, o.cj)([x.Z], () => ({
            favoriteChannels: x.Z.getFavoriteChannels(),
            favoriteServerMuted: x.Z.favoriteServerMuted
        })),
        j = (0, o.e7)([E.Z], () => E.Z.getChannelId(b.I_8)),
        w = (0, o.e7)([I.Z], () => I.Z.getChannel(j)),
        U = (0, g.Z)((e) => e.guildId) === b.I_8,
        { badge: G, unread: k } = (0, T.Z)(D),
        B = (function (e) {
            let t = (0, o.e7)([E.Z], () => E.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, o.e7)([C.Z], () => {
                    if (!n) return !1;
                    let t = C.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, o.e7)([C.Z], () => C.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                r = (0, o.e7)([N.Z], () => n && null != t && N.Z.hasVideo(t), [n, t]),
                a = (0, o.Wu)([h.ZP], () => S.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                s = (0, o.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { channelId: n } = t;
                        return null != e[n];
                    })
                ),
                c = a.length > 0,
                u = !1,
                d = !1,
                p = !1,
                f = !1;
            return (
                n ? ((u = !r), (d = r), (p = i), (f = s)) : ((p = l), (f = c)),
                (0, _.Or)({
                    audio: u,
                    video: d,
                    screenshare: p,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: f
                })
            );
        })(D),
        V = G > 0 ? (0, m.N)(G) : null,
        H = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(f.H, {
        children: [
            (0, i.jsx)(p.Z, {
                selected: U,
                hovered: P,
                unread: k && !y,
                className: M.pill
            }),
            (0, i.jsx)(A.Z, {
                onShow: H,
                children: (0, i.jsx)(Z.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: U || P,
                        upperBadge: B,
                        lowerBadge: V,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: R.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                                guildName: R.Z.Messages.FAVORITES_GUILD_NAME,
                                mentions: G
                            }),
                            to: {
                                pathname: b.Z5c.CHANNEL(b.I_8, j),
                                state: L
                            },
                            selected: U || P,
                            onMouseEnter: () => O(!0),
                            onMouseLeave: () => O(!1),
                            onMouseDown: function () {
                                if (null != w) u.Z.preload(w.guild_id, w.id);
                            },
                            onContextMenu: function (e) {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)('div', {
                                className: a()(M.ring, { [M.ringActive]: t }),
                                children: (0, i.jsx)(c.StarIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: M.favoriteIcon,
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
