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
    f = n(682662),
    m = n(674552),
    g = n(593364),
    C = n(905423),
    _ = n(199902),
    v = n(592125),
    x = n(944486),
    I = n(979651),
    b = n(709054),
    S = n(853856),
    Z = n(593214),
    N = n(919755),
    E = n(110977),
    y = n(603274),
    j = n(981631),
    T = n(388032),
    P = n(534977);
let A = {
    analyticsSource: {
        page: j.ZY5.GUILD_CHANNEL,
        section: j.jXE.CHANNEL_LIST,
        object: j.qAy.CHANNEL
    }
};
function M() {
    let e = (0, o.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, Z.up)(),
        [M, w] = l.useState(!1),
        { favoriteServerMuted: L, favoriteChannels: R } = (0, s.cj)([S.Z], () => ({
            favoriteChannels: S.Z.getFavoriteChannels(),
            favoriteServerMuted: S.Z.favoriteServerMuted
        })),
        D = (0, s.e7)([x.Z], () => x.Z.getChannelId(j.I_8)),
        O = (0, s.e7)([v.Z], () => v.Z.getChannel(D)),
        k = (0, C.Z)((e) => e.guildId) === j.I_8,
        { badge: U, unread: G } = (0, N.Z)(R),
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
                f = !1;
            return (
                n ? ((u = !r), (d = r), (p = i), (f = o)) : ((p = l), (f = c)),
                (0, m.Or)({
                    audio: u,
                    video: d,
                    screenshare: p,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: f
                })
            );
        })(R),
        V = U > 0 ? (0, g.N)(U) : null,
        H = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(f.H, {
        children: [
            (0, i.jsx)(p.Z, {
                selected: k,
                hovered: M,
                unread: G && !L,
                className: P.pill
            }),
            (0, i.jsx)(y.Z, {
                onShow: H,
                children: (0, i.jsx)(E.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: k || M,
                        upperBadge: B,
                        lowerBadge: V,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: T.intl.formatToPlainString(T.t['/uzRsr'], {
                                guildName: T.intl.string(T.t.wMWycn),
                                mentions: U
                            }),
                            to: {
                                pathname: j.Z5c.CHANNEL(j.I_8, D),
                                state: A
                            },
                            selected: k || M,
                            onMouseEnter: () => w(!0),
                            onMouseLeave: () => w(!1),
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
                                className: a()(P.ring, { [P.ringActive]: t }),
                                children: (0, i.jsx)(c.StarIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: P.favoriteIcon,
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
