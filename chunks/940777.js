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
    o = n.n(r),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(16609),
    m = n(276952),
    f = n(682662),
    g = n(674552),
    C = n(593364),
    v = n(905423),
    _ = n(199902),
    x = n(592125),
    I = n(944486),
    b = n(979651),
    E = n(709054),
    S = n(853856),
    Z = n(593214),
    N = n(919755),
    y = n(110977),
    T = n(603274),
    j = n(981631),
    A = n(388032),
    P = n(120555);
let R = {
    analyticsSource: {
        page: j.ZY5.GUILD_CHANNEL,
        section: j.jXE.CHANNEL_LIST,
        object: j.qAy.CHANNEL
    }
};
function M() {
    let e = (0, a.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, Z.up)(),
        [M, L] = l.useState(!1),
        { favoriteServerMuted: w, favoriteChannels: D } = (0, s.cj)([S.Z], () => ({
            favoriteChannels: S.Z.getFavoriteChannels(),
            favoriteServerMuted: S.Z.favoriteServerMuted
        })),
        O = (0, s.e7)([I.Z], () => I.Z.getChannelId(j.I_8)),
        k = (0, s.e7)([x.Z], () => x.Z.getChannel(O)),
        G = (0, v.Z)((e) => e.guildId) === j.I_8,
        { badge: U, unread: B } = (0, N.Z)(D),
        H = (function (e) {
            let t = (0, s.e7)([I.Z], () => I.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, s.e7)([_.Z], () => {
                    if (!n) return !1;
                    let t = _.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, s.e7)([_.Z], () => _.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                r = (0, s.e7)([b.Z], () => n && null != t && b.Z.hasVideo(t), [n, t]),
                o = (0, s.Wu)([h.ZP], () => E.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
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
                (0, g.Or)({
                    audio: u,
                    video: d,
                    screenshare: m,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: f
                })
            );
        })(D),
        V = U > 0 ? (0, C.N)(U) : null,
        F = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(f.H, {
        children: [
            (0, i.jsx)(m.Z, {
                selected: G,
                hovered: M,
                unread: B && !w,
                className: P.pill
            }),
            (0, i.jsx)(T.Z, {
                onShow: F,
                children: (0, i.jsx)(y.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: G || M,
                        upperBadge: H,
                        lowerBadge: V,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: A.intl.formatToPlainString(A.t['/uzRsr'], {
                                guildName: A.intl.string(A.t.wMWycn),
                                mentions: U
                            }),
                            to: {
                                pathname: j.Z5c.CHANNEL(j.I_8, O),
                                state: R
                            },
                            selected: G || M,
                            onMouseEnter: () => L(!0),
                            onMouseLeave: () => L(!1),
                            onMouseDown: function () {
                                if (null != k) u.Z.preload(k.guild_id, k.id);
                            },
                            onContextMenu: function (e) {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)('div', {
                                className: o()(P.ring, { [P.ringActive]: t }),
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
