n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    p = n(925549),
    m = n(438139),
    f = n(730749),
    g = n(607070),
    C = n(566620),
    _ = n(317381),
    v = n(316253),
    x = n(835473),
    I = n(933557),
    b = n(194082),
    S = n(436774),
    E = n(594190),
    Z = n(925329),
    N = n(102172),
    y = n(74299),
    T = n(914923),
    A = n(165393),
    P = n(989941),
    j = n(690221),
    R = n(231664),
    M = n(759198),
    L = n(131704),
    w = n(199902),
    D = n(314897),
    O = n(592125),
    k = n(984933),
    U = n(430824),
    G = n(131951),
    B = n(496675),
    H = n(158776),
    V = n(699516),
    F = n(944486),
    W = n(594174),
    z = n(449224),
    Y = n(358085),
    K = n(345243),
    q = n(115530),
    Q = n(339144),
    X = n(441248),
    J = n(981631),
    $ = n(918559),
    ee = n(96480);
let et = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(K.Z, { children: t });
});
class en extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: ee.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: ee.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)(Q.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)(X.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, T.Z)(t);
        return (0, i.jsxs)('div', {
            className: ee.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(A.Z, { title: r })
                    : (0, i.jsx)(b.ZP, {
                          look: b.ZP.Looks.GRAY,
                          size: b.ZP.Sizes.SMALL,
                          className: ee.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: ee.info,
                    children: [
                        (0, i.jsx)(q.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: ee.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: S.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(M.Z, {
                                        className: ee.perksDemoText,
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
        null != a ? ((e = J.Z5c.CHANNEL(a.id, l.id)), (s = ''.concat(s, ' / ').concat(a.name))) : (e = J.Z5c.CHANNEL(J.ME, l.id));
        let c = (0, i.jsx)(j.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(K.Z, {
                className: ee.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: ee.gameWrapper,
            children: [
                (0, i.jsx)(Z.Z, {
                    className: ee.gameIcon,
                    game: t,
                    size: Z.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: ee.info,
                    children: [
                        (0, i.jsx)(j.Z, {
                            href: e,
                            onClick: this.handleApplicationOrChannelLinkClick,
                            children: (0, i.jsx)(q.Z, {
                                className: ee.activityName,
                                children: t.name
                            })
                        }),
                        (0, L.Qm)(l.type) ? c : (0, i.jsx)(et, { timestamps: o })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: o, activity: s, className: c } = this.props;
        return l || (((0, Q.y)(o, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: a()(ee.panel, c),
                  children: (0, i.jsxs)('div', {
                      className: ee.body,
                      children: [(() => (null == n || (l && (null == r ? void 0 : r.pid) == null) ? (null != t ? this.renderEmbeddedActivity() : this.renderScreenshare()) : this.renderGame()))(), this.renderActions()]
                  })
              })
            : null;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleApplicationOrChannelLinkClick'),
            (i = () => {
                var e;
                let { channel: t, embeddedActivity: n } = this.props;
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : J.ME, t.id), (0, v.Z)() ? d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, L.vd)(t.type) && h.Z.selectParticipant(t.id, n.applicationId), (0, L.Qm)(t.type) && (0, C.tg)($.Ez.PANEL));
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
        r = (0, c.e7)([D.default], () => D.default.getId()),
        a = (0, c.e7)([E.ZP, z.Z], () => (0, P.Z)(E.ZP, z.Z)),
        o = (0, c.e7)([F.Z, O.Z], () => O.Z.getChannel(F.Z.getVoiceChannelId())),
        s = (0, c.e7)([_.ZP], () => _.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([O.Z], () => O.Z.getChannel(s)),
        d = (0, c.e7)([U.Z], () => U.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([w.Z], () => [w.Z.getCurrentUserActiveStream(), w.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
        f = (0, c.e7)([_.ZP], () => (null != u ? _.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        C = (0, c.e7)([U.Z, B.Z, k.ZP], () => (null != o ? N.JL(o, U.Z, B.Z, !1) : null != n && N.h_(k.ZP.getChannels(n), U.Z, B.Z).length > 0)),
        [v] = (0, x.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != a && null != a.id) return a.id;
                    if (null != f) return f.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        b = (0, c.e7)([G.Z], () => (0, y.Z)(G.Z) && (0, Y.isWindows)()),
        S = (0, c.e7)([H.Z], () => (null != r ? H.Z.findActivity(r, (e) => e.type === J.IIU.PLAYING) : null)),
        Z = null != h && h.ownerId === r && h.state !== J.jm8.ENDED,
        T = (0, c.e7)([W.default, V.Z], () => (null != u ? (0, I.F6)(u, W.default, V.Z) : void 0)),
        A = (0, R.Z)();
    return (0, i.jsx)(en, {
        ...l,
        guildId: n,
        canGoLive: b,
        activity: S,
        embeddedActivity: f,
        userId: r,
        runningGame: a,
        application: v,
        useReducedMotion: m,
        isStreaming: Z,
        channel: u,
        canStream: C,
        stream: h,
        streamMetadata: p,
        channelName: T,
        guildForConnectedChannel: d,
        streamQualityIndicator: A
    });
});
