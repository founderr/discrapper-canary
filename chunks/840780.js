n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(475179),
    h = n(925549),
    p = n(438139),
    f = n(730749),
    _ = n(607070),
    m = n(566620),
    g = n(317381),
    C = n(835473),
    I = n(933557),
    E = n(194082),
    N = n(436774),
    x = n(594190),
    S = n(925329),
    v = n(382182),
    Z = n(74299),
    T = n(914923),
    b = n(165393),
    A = n(989941),
    M = n(690221),
    R = n(231664),
    L = n(759198),
    y = n(131704),
    P = n(199902),
    O = n(314897),
    j = n(592125),
    D = n(984933),
    w = n(430824),
    U = n(131951),
    G = n(496675),
    k = n(158776),
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
            { title: l, sanitizedTitle: r } = (0, T.Z)(t);
        return (0, i.jsxs)('div', {
            className: J.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(b.Z, { title: r })
                    : (0, i.jsx)(E.ZP, {
                          look: E.ZP.Looks.GRAY,
                          size: E.ZP.Sizes.SMALL,
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
                                        color: N.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(L.Z, {
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
        let s = { start: n.connectedSince },
            o = r;
        null != a ? ((e = Q.Z5c.CHANNEL(a.id, l.id)), (o = ''.concat(o, ' / ').concat(a.name))) : (e = Q.Z5c.CHANNEL(Q.ME, l.id));
        let c = (0, i.jsx)(M.Z, {
            href: e,
            onClick: this.handleApplicationLinkClick,
            children: (0, i.jsx)(z.Z, {
                className: J.channel,
                children: o
            })
        });
        return (0, i.jsxs)('div', {
            className: J.gameWrapper,
            children: [
                (0, i.jsx)(S.Z, {
                    className: J.gameIcon,
                    game: t,
                    size: S.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: J.info,
                    children: [
                        (0, i.jsx)(M.Z, {
                            href: e,
                            onClick: this.handleApplicationLinkClick,
                            children: (0, i.jsx)(Y.Z, {
                                className: J.activityName,
                                children: t.name
                            })
                        }),
                        (0, y.Qm)(l.type) ? c : (0, i.jsx)($, { timestamps: s })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: s, activity: o, className: c } = this.props;
        return l || (((0, K.y)(s, o, t) || e) && (null != n || null != t))
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
                o()(null != t, 'Channel is null during navigation click'), o()(null != n, 'Activity null during navigation click'), (0, y.vd)(t.type) && d.Z.selectParticipant(t.id, n.applicationId), h.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : Q.ME, t.id), (0, y.Qm)(t.type) && (0, m.tg)(X.Ez.PANEL);
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
        r = (0, c.e7)([O.default], () => O.default.getId()),
        a = (0, c.e7)([x.ZP, F.Z], () => (0, A.Z)(x.ZP, F.Z)),
        s = (0, c.e7)([H.Z, j.Z], () => j.Z.getChannel(H.Z.getVoiceChannelId())),
        o = (0, c.e7)([g.ZP], () => g.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([j.Z], () => j.Z.getChannel(o)),
        d = (0, c.e7)([w.Z], () => w.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([P.Z], () => [P.Z.getCurrentUserActiveStream(), P.Z.getStreamerActiveStreamMetadata()]),
        f = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
        m = (0, c.e7)([g.ZP], () => (null != u ? g.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        E = (0, c.e7)([w.Z, G.Z, D.ZP], () => (null != s ? v.JL(s, w.Z, G.Z, !1) : null != n && v.h_(D.ZP.getChannels(n), w.Z, G.Z).length > 0)),
        [N] = (0, C.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != m) return m.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        S = (0, c.e7)([U.Z], () => (0, Z.Z)(U.Z) && (0, W.isWindows)()),
        T = (0, c.e7)([k.Z], () => (null != r ? k.Z.findActivity(r, (e) => e.type === Q.IIU.PLAYING) : null)),
        b = null != h && h.ownerId === r && h.state !== Q.jm8.ENDED,
        M = (0, c.e7)([V.default, B.Z], () => (null != u ? (0, I.F6)(u, V.default, B.Z) : void 0)),
        L = (0, R.Z)();
    return (0, i.jsx)(ee, {
        ...l,
        guildId: n,
        canGoLive: S,
        activity: T,
        embeddedActivity: m,
        userId: r,
        runningGame: a,
        application: N,
        useReducedMotion: f,
        isStreaming: b,
        channel: u,
        canStream: E,
        stream: h,
        streamMetadata: p,
        channelName: M,
        guildForConnectedChannel: d,
        streamQualityIndicator: L
    });
});
