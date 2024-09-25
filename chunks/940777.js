n.d(t, {
    Z: function () {
        return y;
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
    x = n(709054),
    S = n(853856),
    v = n(593214),
    Z = n(919755),
    T = n(110977),
    b = n(603274),
    A = n(981631),
    M = n(689938),
    R = n(599576);
let L = {
    analyticsSource: {
        page: A.ZY5.GUILD_CHANNEL,
        section: A.jXE.CHANNEL_LIST,
        object: A.qAy.CHANNEL
    }
};
function y() {
    let e = (0, s.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, v.up)(),
        [y, P] = l.useState(!1),
        { favoriteServerMuted: O, favoriteChannels: j } = (0, o.cj)([S.Z], () => ({
            favoriteChannels: S.Z.getFavoriteChannels(),
            favoriteServerMuted: S.Z.favoriteServerMuted
        })),
        D = (0, o.e7)([E.Z], () => E.Z.getChannelId(A.I_8)),
        w = (0, o.e7)([I.Z], () => I.Z.getChannel(D)),
        G = (0, g.Z)((e) => e.guildId) === A.I_8,
        { badge: U, unread: k } = (0, Z.Z)(j),
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
                a = (0, o.Wu)([h.ZP], () => x.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
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
        })(j),
        H = U > 0 ? (0, m.N)(U) : null,
        V = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(f.H, {
        children: [
            (0, i.jsx)(p.Z, {
                selected: G,
                hovered: y,
                unread: k && !O,
                className: R.pill
            }),
            (0, i.jsx)(b.Z, {
                onShow: V,
                children: (0, i.jsx)(T.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: G || y,
                        upperBadge: B,
                        lowerBadge: H,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: M.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                                guildName: M.Z.Messages.FAVORITES_GUILD_NAME,
                                mentions: U
                            }),
                            to: {
                                pathname: A.Z5c.CHANNEL(A.I_8, D),
                                state: L
                            },
                            selected: G || y,
                            onMouseEnter: () => P(!0),
                            onMouseLeave: () => P(!1),
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
                                className: a()(R.ring, { [R.ringActive]: t }),
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
