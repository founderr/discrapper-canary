n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(475179),
    h = n(925549),
    p = n(438139),
    f = n(730749),
    m = n(607070),
    g = n(566620),
    C = n(317381),
    _ = n(835473),
    x = n(933557),
    v = n(194082),
    I = n(436774),
    b = n(594190),
    N = n(925329),
    E = n(382182),
    S = n(74299),
    Z = n(914923),
    y = n(165393),
    T = n(989941),
    j = n(690221),
    A = n(231664),
    P = n(759198),
    R = n(131704),
    M = n(199902),
    L = n(314897),
    w = n(592125),
    D = n(984933),
    O = n(430824),
    k = n(131951),
    G = n(496675),
    U = n(158776),
    B = n(699516),
    H = n(944486),
    V = n(594174),
    F = n(449224),
    W = n(358085),
    z = n(345243),
    Y = n(115530),
    K = n(339144),
    q = n(441248),
    Q = n(981631),
    X = n(918559),
    J = n(168851);
let $ = (0, p.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(z.Z, { children: t });
});
class ee extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: J.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: J.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)(K.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)(q.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, Z.Z)(t);
        return (0, i.jsxs)('div', {
            className: J.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(y.Z, { title: r })
                    : (0, i.jsx)(v.ZP, {
                          look: v.ZP.Looks.GRAY,
                          size: v.ZP.Sizes.SMALL,
                          className: J.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: J.info,
                    children: [
                        (0, i.jsx)(Y.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: J.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: I.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(P.Z, {
                                        className: J.perksDemoText,
                                        variant: 'text-xxs/semibold',
                                        children: n
                                    })
                                ]
                            })
                    ]
                })
            ]
        });
    }
    renderEmbeddedActivity() {
        let e;
        let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: a } = this.props;
        if (null == n || null == l || null == t) return null;
        let o = { start: n.connectedSince },
            s = r;
        null != a ? ((e = Q.Z5c.CHANNEL(a.id, l.id)), (s = ''.concat(s, ' / ').concat(a.name))) : (e = Q.Z5c.CHANNEL(Q.ME, l.id));
        let c = (0, i.jsx)(j.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(z.Z, {
                className: J.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: J.gameWrapper,
            children: [
                (0, i.jsx)(N.Z, {
                    className: J.gameIcon,
                    game: t,
                    size: N.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: J.info,
                    children: [
                        (0, i.jsx)(j.Z, {
                            href: e,
                            onClick: this.handleApplicationLinkClick,
                            children: (0, i.jsx)(Y.Z, {
                                className: J.activityName,
                                children: t.name
                            })
                        }),
                        (0, R.Qm)(l.type) ? c : (0, i.jsx)($, { timestamps: o })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c } = this.props;
        return l || (((0, K.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(J.panel, c),
                  children: (0, i.jsxs)('div', {
                      className: J.body,
                      children: [(() => (null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame()))(), this.renderActions()]
                  })
              })
            : null;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleApplicationLinkClick'),
            (i = () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), (0, R.vd)(t.type) && d.Z.selectParticipant(t.id, n.applicationId), h.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : Q.ME, t.id), (0, R.Qm)(t.type) && (0, g.tg)(X.Ez.PANEL);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = (0, f.Z)(function (e) {
    var t;
    let { guildId: n, ...l } = e,
        r = (0, c.e7)([L.default], () => L.default.getId()),
        a = (0, c.e7)([b.ZP, F.Z], () => (0, T.Z)(b.ZP, F.Z)),
        o = (0, c.e7)([H.Z, w.Z], () => w.Z.getChannel(H.Z.getVoiceChannelId())),
        s = (0, c.e7)([C.ZP], () => C.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([w.Z], () => w.Z.getChannel(s)),
        d = (0, c.e7)([O.Z], () => O.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([M.Z], () => [M.Z.getCurrentUserActiveStream(), M.Z.getStreamerActiveStreamMetadata()]),
        f = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        g = (0, c.e7)([C.ZP], () => (null != u ? C.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        v = (0, c.e7)([O.Z, G.Z, D.ZP], () => (null != o ? E.JL(o, O.Z, G.Z, !1) : null != n && E.h_(D.ZP.getChannels(n), O.Z, G.Z).length > 0)),
        [I] = (0, _.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != g) return g.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        N = (0, c.e7)([k.Z], () => (0, S.Z)(k.Z) && (0, W.isWindows)()),
        Z = (0, c.e7)([U.Z], () => (null != r ? U.Z.findActivity(r, (e) => e.type === Q.IIU.PLAYING) : null)),
        y = null != h && h.ownerId === r && h.state !== Q.jm8.ENDED,
        j = (0, c.e7)([V.default, B.Z], () => (null != u ? (0, x.F6)(u, V.default, B.Z) : void 0)),
        P = (0, A.Z)();
    return (0, i.jsx)(ee, {
        ...l,
        guildId: n,
        canGoLive: N,
        activity: Z,
        embeddedActivity: g,
        userId: r,
        runningGame: a,
        application: I,
        useReducedMotion: f,
        isStreaming: y,
        channel: u,
        canStream: v,
        stream: h,
        streamMetadata: p,
        channelName: j,
        guildForConnectedChannel: d,
        streamQualityIndicator: P
    });
});
