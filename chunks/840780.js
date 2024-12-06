n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(512722),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    h = n(475179),
    p = n(925549),
    m = n(438139),
    f = n(730749),
    g = n(607070),
    C = n(636449),
    _ = n(214629),
    v = n(566620),
    x = n(317381),
    I = n(835473),
    b = n(933557),
    S = n(194082),
    E = n(436774),
    Z = n(594190),
    N = n(925329),
    y = n(102172),
    T = n(74299),
    A = n(914923),
    j = n(165393),
    P = n(989941),
    R = n(690221),
    M = n(231664),
    L = n(759198),
    w = n(131704),
    D = n(199902),
    O = n(314897),
    k = n(592125),
    G = n(984933),
    U = n(430824),
    B = n(131951),
    H = n(496675),
    V = n(158776),
    F = n(699516),
    W = n(944486),
    z = n(594174),
    Y = n(449224),
    K = n(358085),
    q = n(345243),
    Q = n(115530),
    X = n(339144),
    J = n(441248),
    $ = n(981631),
    ee = n(918559),
    et = n(395144);
let en = (0, m.Z)(function (e) {
    let { message: t } = e;
    return (0, i.jsx)(q.Z, { children: t });
});
class ei extends l.PureComponent {
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
            return e;
        }
        return (0, i.jsx)('div', {
            className: et.sparkleContainer,
            children: (0, i.jsx)(u.LottieAnimation, {
                importData: t,
                shouldAnimate: !e,
                className: et.sparkles
            })
        });
    }
    renderActions() {
        return (0, i.jsx)(X.J, { ...this.props });
    }
    renderGame() {
        let { isStreaming: e, application: t, runningGame: n } = this.props;
        return (0, i.jsx)(J.k, {
            isStreaming: e,
            application: t,
            game: n
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: l, sanitizedTitle: r } = (0, A.Z)(t);
        return (0, i.jsxs)('div', {
            className: et.gameWrapper,
            children: [
                e
                    ? (0, i.jsx)(j.Z, { title: r })
                    : (0, i.jsx)(S.ZP, {
                          look: S.ZP.Looks.GRAY,
                          size: S.ZP.Sizes.SMALL,
                          className: et.liveIndicator
                      }),
                (0, i.jsxs)('div', {
                    className: et.info,
                    children: [
                        (0, i.jsx)(Q.Z, { children: l }),
                        null != n &&
                            (0, i.jsxs)('div', {
                                className: et.perksDemoContainer,
                                children: [
                                    (0, i.jsx)(u.NitroWheelIcon, {
                                        size: 'xxs',
                                        color: E.JX.PREMIUM_TIER_2
                                    }),
                                    (0, i.jsx)(L.Z, {
                                        className: et.perksDemoText,
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
        let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: o } = this.props;
        if (null == n || null == l || null == t) return null;
        let a = { start: n.connectedSince },
            s = r;
        null != o ? ((e = $.Z5c.CHANNEL(o.id, l.id)), (s = ''.concat(s, ' / ').concat(o.name))) : (e = $.Z5c.CHANNEL($.ME, l.id));
        let c = (0, i.jsx)(R.Z, {
            href: e,
            onClick: this.handleApplicationOrChannelLinkClick,
            children: (0, i.jsx)(q.Z, {
                className: et.channel,
                children: s
            })
        });
        return (0, i.jsxs)('div', {
            className: et.gameWrapper,
            children: [
                (0, i.jsx)(N.Z, {
                    className: et.gameIcon,
                    game: t,
                    size: N.Z.Sizes.SMALL
                }),
                (0, i.jsxs)('div', {
                    className: et.info,
                    children: [
                        (0, i.jsx)(R.Z, {
                            href: e,
                            onClick: this.handleApplicationOrChannelLinkClick,
                            children: (0, i.jsx)(Q.Z, {
                                className: et.activityName,
                                children: t.name
                            })
                        }),
                        (0, w.Qm)(l.type) ? c : (0, i.jsx)(en, { timestamps: a })
                    ]
                })
            ]
        });
    }
    render() {
        let { canGoLive: e, embeddedActivity: t, runningGame: n, isStreaming: l, streamMetadata: r, application: a, activity: s, className: c } = this.props;
        return l || (((0, X.y)(a, s, t) || e) && (null != n || null != t))
            ? (0, i.jsx)('div', {
                  className: o()(et.panel, c),
                  children: (0, i.jsxs)('div', {
                      className: et.body,
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
                s()(null != t, 'Channel is null during navigation click'), s()(null != n, 'Activity null during navigation click'), p.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : $.ME, t.id), (0, C.R)() ? d.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }) : ((0, w.vd)(t.type) && h.Z.selectParticipant(t.id, n.applicationId), (0, w.Qm)(t.type) && (0, v.tg)(ee.Ez.PANEL));
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
        o = (0, c.e7)([Z.ZP, Y.Z], () => (0, P.Z)(Z.ZP, Y.Z)),
        a = (0, c.e7)([W.Z, k.Z], () => k.Z.getChannel(W.Z.getVoiceChannelId())),
        s = (0, c.e7)([x.ZP], () => x.ZP.getConnectedActivityChannelId()),
        u = (0, c.e7)([k.Z], () => k.Z.getChannel(s)),
        d = (0, c.e7)([U.Z], () => U.Z.getGuild(null == u ? void 0 : u.guild_id)),
        [h, p] = (0, c.Wu)([D.Z], () => [D.Z.getCurrentUserActiveStream(), D.Z.getStreamerActiveStreamMetadata()]),
        m = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
        f = (0, c.e7)([x.ZP], () => (null != u ? x.ZP.getSelfEmbeddedActivityForChannel(u.id) : null)),
        v = (0, c.e7)([U.Z, H.Z, G.ZP], () => (null != a ? y.JL(a, U.Z, H.Z, !1) : null != n && y.h_(G.ZP.getChannels(n), U.Z, H.Z).length > 0)),
        [S] = (0, I.Z)([
            null !==
                (t = (function () {
                    if (null != p && null != p.id) return p.id;
                    if (null != o && null != o.id) return o.id;
                    if (null != f) return f.applicationId;
                })()) && void 0 !== t
                ? t
                : ''
        ]),
        E = (0, c.e7)([x.ZP], () => x.ZP.getCurrentEmbeddedActivity()),
        N = (0, _.Z0)() && null != E && (0, C.R)(),
        A = (0, c.e7)([B.Z], () => (0, T.Z)(B.Z) && (0, K.isWindows)()),
        j = (0, c.e7)([V.Z], () => (null != r ? V.Z.findActivity(r, (e) => e.type === $.IIU.PLAYING) : null)),
        R = null != h && h.ownerId === r && h.state !== $.jm8.ENDED,
        L = (0, c.e7)([z.default, F.Z], () => (null != u ? (0, b.F6)(u, z.default, F.Z) : void 0)),
        w = (0, M.Z)();
    return (0, i.jsx)(ei, {
        ...l,
        guildId: n,
        canGoLive: A || N,
        activity: j,
        embeddedActivity: f,
        userId: r,
        runningGame: o,
        application: S,
        useReducedMotion: m,
        isStreaming: R,
        channel: u,
        canStream: v,
        stream: h,
        streamMetadata: p,
        channelName: L,
        guildForConnectedChannel: d,
        streamQualityIndicator: w
    });
});
