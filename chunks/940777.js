n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(276952),
    m = n(682662),
    f = n(674552),
    g = n(593364),
    C = n(905423),
    _ = n(199902),
    v = n(592125),
    x = n(944486),
    I = n(979651),
    b = n(709054),
    E = n(853856),
    S = n(593214),
    Z = n(919755),
    N = n(110977),
    y = n(603274),
    T = n(981631),
    j = n(388032),
    A = n(534977);
let P = {
    analyticsSource: {
        page: T.ZY5.GUILD_CHANNEL,
        section: T.jXE.CHANNEL_LIST,
        object: T.qAy.CHANNEL
    }
};
function M() {
    let e = (0, o.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, S.up)(),
        [M, R] = l.useState(!1),
        { favoriteServerMuted: w, favoriteChannels: L } = (0, s.cj)([E.Z], () => ({
            favoriteChannels: E.Z.getFavoriteChannels(),
            favoriteServerMuted: E.Z.favoriteServerMuted
        })),
        D = (0, s.e7)([x.Z], () => x.Z.getChannelId(T.I_8)),
        O = (0, s.e7)([v.Z], () => v.Z.getChannel(D)),
        k = (0, C.Z)((e) => e.guildId) === T.I_8,
        { badge: U, unread: G } = (0, Z.Z)(L),
        B = (function (e) {
            let t = (0, s.e7)([x.Z], () => x.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, s.e7)([_.Z], () => {
                    if (!n) return !1;
                    let t = _.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, s.e7)([_.Z], () => _.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                r = (0, s.e7)([I.Z], () => n && null != t && I.Z.hasVideo(t), [n, t]),
                a = (0, s.Wu)([h.ZP], () => b.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                o = (0, s.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { channelId: n } = t;
                        return null != e[n];
                    })
                ),
                c = a.length > 0,
                u = !1,
                d = !1,
                p = !1,
                m = !1;
            return (
                n ? ((u = !r), (d = r), (p = i), (m = o)) : ((p = l), (m = c)),
                (0, f.Or)({
                    audio: u,
                    video: d,
                    screenshare: p,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: m
                })
            );
        })(L),
        H = U > 0 ? (0, g.N)(U) : null,
        V = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(m.H, {
        children: [
            (0, i.jsx)(p.Z, {
                selected: k,
                hovered: M,
                unread: G && !w,
                className: A.pill
            }),
            (0, i.jsx)(y.Z, {
                onShow: V,
                children: (0, i.jsx)(N.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: k || M,
                        upperBadge: B,
                        lowerBadge: H,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: j.intl.formatToPlainString(j.t['/uzRsr'], {
                                guildName: j.intl.string(j.t.wMWycn),
                                mentions: U
                            }),
                            to: {
                                pathname: T.Z5c.CHANNEL(T.I_8, D),
                                state: P
                            },
                            selected: k || M,
                            onMouseEnter: () => R(!0),
                            onMouseLeave: () => R(!1),
                            onMouseDown: function () {
                                if (null != O) u.Z.preload(O.guild_id, O.id);
                            },
                            onContextMenu: function (e) {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)('div', {
                                className: a()(A.ring, { [A.ringActive]: t }),
                                children: (0, i.jsx)(c.StarIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: A.favoriteIcon,
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
