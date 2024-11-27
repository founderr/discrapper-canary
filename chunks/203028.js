n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(841784),
    s = n(503438),
    o = n(802856),
    c = n(707409),
    d = n(51144),
    u = n(761282),
    h = n(358924),
    m = n(817915),
    p = n(981631),
    g = n(388032);
function f(e) {
    let { party: t, onUserContextMenu: r } = e,
        { priorityMembers: f, guildContext: _ } = t,
        I = f[0],
        E = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                ),
                r = n.filter((e) => !i.has(e.id)),
                l = d.ZP.getName(t[0].user),
                a = null != t[1] ? d.ZP.getName(t[1].user) : null != r[0] ? d.ZP.getName(r[0]) : null;
            switch (n.length) {
                case 1:
                    return l;
                case 2:
                    return g.intl.format(g.t.t1DyCw, {
                        user1: l,
                        user2: a
                    });
                default:
                    return g.intl.format(g.t['5CSEcH'], {
                        user1: l,
                        user2: a,
                        extras: n.length - 2
                    });
            }
        })(t),
        { subtitle: C, icon: v } = (function (e) {
            var t;
            let { priorityMembers: r, partiedMembers: d, voiceChannels: f, currentActivities: _ } = e,
                I = r.length,
                E = d.length - I,
                C = _[0],
                v = null == C ? void 0 : C.activity,
                N = null == C ? void 0 : C.startedPlayingTime,
                S = { name: null !== (t = null == v ? void 0 : v.name) && void 0 !== t ? t : '' };
            if ((0, a.Z)(v) && null != v)
                return {
                    subtitle: (0, i.jsx)(c.ZP, {
                        start: N,
                        location: c.ZP.Locations.ACTIVITY_FEED_NEW,
                        messageProps: S
                    }),
                    icon: null
                };
            if (I + E === 1 && null != C) {
                let { game: e } = C;
                if (null == v)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let t = u.dc(v);
                if (null != t) return t;
                switch (v.type) {
                    case p.IIU.PLAYING:
                        if ((0, o.Z)(v))
                            return {
                                subtitle: g.intl.string(g.t.tO8wOz),
                                icon: (0, i.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.XBOX })
                            };
                        return {
                            subtitle: (0, i.jsx)(c.ZP, {
                                start: N,
                                location: c.ZP.Locations.ACTIVITY_FEED_NEW,
                                messageProps: S
                            }),
                            icon: null != e ? (0, i.jsx)(h.Z.Header.Icon, { src: null != e.getIconURL(m.Z) ? e.getIconURL(m.Z) : n(211827) }) : null
                        };
                    case p.IIU.STREAMING:
                        return {
                            subtitle: g.intl.string(g.t.HyGHj4),
                            icon: null != e && null != e.getIconURL(m.Z) ? (0, i.jsx)(h.Z.Header.Icon, { src: e.getIconURL(m.Z) }) : null
                        };
                    case p.IIU.LISTENING:
                        let r;
                        return (
                            (r = (0, s.Z)(v) ? (0, i.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.SPOTIFY }) : null != e.getIconURL(m.Z) ? (0, i.jsx)(h.Z.Header.Icon, { src: e.getIconURL(m.Z) }) : (0, i.jsx)(h.Z.Header.Icon, { src: n(211827) })),
                            {
                                subtitle: g.intl.formatToPlainString(g.t.NF5xoq, { name: v.name }),
                                icon: r
                            }
                        );
                    case p.IIU.WATCHING:
                        return {
                            subtitle: g.intl.string(g.t['0PyKSU']),
                            icon: null != e && null != e.getIconURL(m.Z) ? (0, i.jsx)(h.Z.Header.Icon, { src: e.getIconURL(m.Z) }) : null
                        };
                    default:
                        return {
                            subtitle: g.intl.string(g.t.grGyaW),
                            icon: null
                        };
                }
            }
            if (0 === _.length) {
                if (f.length > 0)
                    return {
                        subtitle: g.intl.string(g.t.grGyaW),
                        icon: null
                    };
                let e = _[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = u.dc(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === p.IIU.LISTENING)
                        return {
                            subtitle: g.intl.string(g.t.rmnkz8),
                            icon: (0, i.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.SPOTIFY })
                        };
                }
            } else if (1 === _.length) {
                let e = _.find((e) => null != e.activity);
                if (null == e)
                    return {
                        subtitle: null,
                        icon: null
                    };
                let { activity: t, game: n, startedPlayingTime: r } = e;
                return (
                    l()(null != t, 'Activity was null somehow'),
                    {
                        subtitle: (0, i.jsx)(c.ZP, {
                            start: r,
                            location: c.ZP.Locations.ACTIVITY_FEED_NEW,
                            messageProps: S
                        }),
                        icon: null != n && null != n.getIconURL(m.Z) ? (0, i.jsx)(h.Z.Header.Icon, { src: n.getIconURL(m.Z) }) : null
                    }
                );
            }
            return {
                subtitle: g.intl.string(g.t.sau5tr),
                icon: (0, i.jsx)(h.Z.Header.Icon, { src: h.Z.Header.Icon.Src.MULTIPLE })
            };
        })(t);
    return (0, i.jsx)(h.Z.Header, {
        priorityUser: I,
        guildId: null == _ ? void 0 : _.id,
        title: E,
        subtitle: C,
        icon: v,
        onContextMenu: (e) => r(e, I.user)
    });
}
