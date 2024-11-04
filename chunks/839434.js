n.d(t, {
    Z: function () {
        return es;
    }
}),
    n(47120);
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(692547),
    d = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(765250),
    f = n(13245),
    m = n(872810),
    g = n(586902),
    v = n(835473),
    _ = n(933557),
    E = n(600164),
    x = n(112831),
    I = n(594190),
    Z = n(925329),
    S = n(569545),
    C = n(914923),
    y = n(165393),
    N = n(989941),
    T = n(552282),
    b = n(345243),
    O = n(565799),
    R = n(501655),
    A = n(786915),
    P = n(7188),
    j = n(597998),
    L = n(199902),
    w = n(314897),
    M = n(592125),
    D = n(77498),
    k = n(131951),
    z = n(944486),
    U = n(606304),
    B = n(449224),
    V = n(938475),
    G = n(237997),
    W = n(136015),
    F = n(51144),
    H = n(145597),
    Y = n(658785),
    K = n(244073),
    X = n(876205),
    Q = n(906037),
    q = n(518084),
    J = n(981631),
    $ = n(65154),
    ee = n(388032),
    et = n(5239);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ei(e) {
    let { flipped: t = !1, locked: n = !1, user: i, nick: l, displayNameMode: c, displayUserMode: d, size: u = J.ipw.LARGE, onClick: h, onContextMenu: p, context: f, guildId: m, voiceState: v } = e,
        { showKeybindIndicators: _ } = Y.Z.useExperiment({ location: 'overlay_voice_widget' }),
        E = (0, o.e7)([G.Z], () => G.Z.showKeybindIndicators),
        x = (0, o.e7)([w.default], () => w.default.getId()),
        I = (0, o.e7)([k.Z], () => k.Z.isLocalMute(i.id)),
        Z = (0, o.e7)([L.Z], () => L.Z.getCurrentUserActiveStream()),
        S = (0, o.Wu)([L.Z], () => (null != Z ? L.Z.getViewerIds(Z) : [])),
        C = (0, g.Z)({
            userId: i.id,
            context: f
        }),
        y = (0, o.e7)([U.Z], () => U.Z.isPrioritySpeaker(i.id, f)),
        N = (0, o.e7)([L.Z], () => null != L.Z.getStreamForUser(i.id, m)),
        T = s.useMemo(() => null != Z && Z.ownerId !== i.id && S.includes(i.id), [Z, i.id, S]);
    if (d === J.OYC.ONLY_WHILE_SPEAKING && n && !C) return null;
    let b = i.id === x,
        { mute: O, selfMute: R, suppress: A, deaf: P, selfDeaf: M } = v,
        D = _ && E,
        z = R && (!b || !D);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.Z, {
                guildId: m,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: a()(et.voiceUserWrapper, {
                    [et.faded]: !C,
                    [et.interactive]: !n
                }),
                user: i,
                nick: l,
                speaking: !1,
                flipped: t,
                isStreaming: N,
                iconClassName: a()(et.voiceIcon, { [et.locked]: n }),
                isWatching: T,
                isOverlay: !0,
                size: u,
                priority: y,
                mute: O || z || I,
                localMute: I,
                serverMute: O || A,
                deaf: P || M,
                serverDeaf: P,
                userNameClassName: a()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (c === J.wC$.NEVER || (!C && c === J.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            b &&
                D &&
                (0, r.jsx)(X.Z, {
                    value: R,
                    action: J.kg4.TOGGLE_MUTE,
                    shouldShow: !O && !A
                })
        ]
    });
}
class er extends (i = s.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: s, isPreviewingInGame: l, channel: o, anchor: c, avatarSizeMode: u } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var a;
                let { user: c, voiceState: d, member: p } = t;
                if (null == c || null == o || null == e) return null;
                let f = s || l;
                return (0, r.jsx)(
                    ei,
                    {
                        guildId: null == o ? void 0 : o.guild_id,
                        user: c,
                        nick: null !== (a = null == p ? void 0 : p.nick) && void 0 !== a ? a : F.ZP.getName(c),
                        flipped: h,
                        voiceState: d,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: u,
                        locked: f,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e
                    },
                    c.id
                );
            });
        return (0, r.jsx)(q.ZP.Body, {
            className: a()({
                [d.Z.VOICE_WIDGET_TOP_MARGIN]: s,
                [et.bottomMargin]: s
            }),
            children: (0, r.jsx)(j.e, {
                className: et.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(q.ZP.Bar, {
            className: a()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, r.jsxs)(q.ZP.Content, {
                    dynamicSize: !0,
                    className: a()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, r.jsx)(u.DragIcon, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: a()(et.icon, et.faded, et.dragIcon)
                        }),
                        (0, r.jsx)(u.VoiceNormalIcon, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: a()(et.icon, et.faded, et.speakerIcon)
                        }),
                        (0, r.jsx)(x.Z, {
                            color: c.Z.unsafe_rawColors.PRIMARY_200.css,
                            className: et.title,
                            children: t
                        })
                    ]
                }),
                n
                    ? null
                    : (0, r.jsx)(q.ZP.Icon, {
                          icon: u.SettingsIcon,
                          label: ee.intl.string(ee.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: 'left',
                          size: 18
                      }),
                n
                    ? null
                    : (0, r.jsx)(q.ZP.Icon, {
                          icon: e ? u.PinUprightSlashIcon : u.PinUprightIcon,
                          label: e ? ee.intl.string(ee.t.cSu80t) : ee.intl.string(ee.t.cM8Vnp),
                          onClick: this.handlePin,
                          tooltipPosition: 'left',
                          size: 18,
                          isActive: e
                      })
            ]
        });
    }
    renderStreamerSettings() {
        var e;
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: s, application: l, streamMetadata: o, streamApplication: c, stream: d } = this.props;
        if (t || null == d || null == s) return null;
        let { sanitizedTitle: h, title: p } = (0, C.Z)(o);
        return (0, r.jsx)(q.ZP.Bar, {
            className: a()(et.streamerControls, {
                [et.hidden]: i,
                [et.unpinned]: !n
            }),
            children: (0, r.jsxs)(q.ZP.Content, {
                className: et.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, r.jsxs)('div', {
                        className: et.streamerInner,
                        children: [
                            (null == c ? void 0 : c.id) != null && c.id === (null == l ? void 0 : l.id)
                                ? (0, r.jsx)(Z.Z, {
                                      className: et.gameIcon,
                                      game: l
                                  })
                                : (0, r.jsx)(y.Z, { title: h }),
                            (0, r.jsxs)(E.Z, {
                                direction: E.Z.Direction.VERTICAL,
                                justify: E.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        className: et.streaming,
                                        variant: 'text-sm/normal',
                                        children: ee.intl.string(ee.t.XKYej4)
                                    }),
                                    (0, r.jsx)(b.Z, { children: null !== (e = null == c ? void 0 : c.name) && void 0 !== e ? e : p })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(E.Z, {
                        grow: 0,
                        children: [
                            (0, r.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(A.Z, {
                                    stream: d,
                                    iconClassName: et.streamerIcon,
                                    appContext: J.IlC.OVERLAY
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(P.Z, {
                                    stream: d,
                                    appContext: J.IlC.OVERLAY
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(u.TooltipContainer, {
                                    text: ee.intl.string(ee.t.S5anIS),
                                    children: (0, r.jsx)(u.Button, {
                                        onClick: this.handleStopStream,
                                        look: u.Button.Looks.BLANK,
                                        size: u.Button.Sizes.NONE,
                                        children: (0, r.jsx)(u.ScreenXIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: et.streamerIcon
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
    componentDidMount() {
        (0, Q.m3)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, Q.CR)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: r, channel: s } = e;
        return 0 !== r.length && null != t && null != s && (!n || !!i) && !0;
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: l } = this.props;
        if (null == l || null == e || !this.shouldDisplay()) return null;
        let o = J.t_t.UNPINNED;
        return (
            i && (o = J.t_t.PINNED),
            s && (o = J.t_t.IN_GAME_PREVIEW),
            n && (o = J.t_t.IN_GAME),
            (0, r.jsxs)(q.ZP, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, r.jsx)(K.Z, {
                              className: a()({ [et.preview]: s }),
                              contentClassName: a()({ [et.hidden]: s }),
                              channel: l,
                              lobbyId: t,
                              context: e,
                              pinned: i
                          })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            en(this, 'handleUserContextMenu', (e, t) => {
                let { context: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('5901')]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, r.jsx)(e, {
                            ...n,
                            user: t,
                            showMediaItems: !0,
                            mediaEngineContext: i
                        });
                });
            }),
            en(this, 'handleOpenVoiceSettings', () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, u.openModalLazy)(async () => {
                    let { default: s } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, r.jsx)(s, {
                            ...n,
                            mediaEngineContext: e,
                            title: null != t ? null : i
                        });
                });
            }),
            en(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(J.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: J.Odu.VOICE
                });
                let { id: r } = this.props;
                (0, p.xh)(r);
            }),
            en(this, 'handleStopStream', () => {
                let { stream: e } = this.props;
                if (null != e) m.g((0, S.V9)(e));
            });
    }
}
en(er, 'defaultProps', { context: $.Yn.DEFAULT });
function es(e) {
    var t;
    let n = (0, o.e7)([z.Z, M.Z], () => M.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, _.ZP)(n),
        l = (function () {
            let [e] = (0, o.e7)(
                    [V.ZP, O.Z, z.Z, M.Z],
                    () => {
                        let e = M.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, R.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [V.ZP.getVoiceStatesForChannel(e), V.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.Q
                ),
                t = (0, o.e7)([w.default], () => w.default.getId()),
                { showKeybindIndicators: n } = Y.Z.useExperiment({ location: 'voice_widget' });
            return s.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        a = (0, o.e7)([L.Z], () => L.Z.getStreamerActiveStreamMetadata()),
        c = (0, o.e7)([I.ZP, B.Z, D.Z], () => {
            var e;
            let t = (0, N.Z)(I.ZP, B.Z);
            return null != t ? (null === (e = D.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id) : null;
        }),
        d = (0, v.q)(c),
        u = (0, o.cj)([I.ZP, B.Z, L.Z, G.Z], () => {
            let e = (0, N.Z)(I.ZP, B.Z),
                t = L.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.Z.getDisplayUserMode(),
                displayNameMode: G.Z.getDisplayNameMode(),
                avatarSizeMode: G.Z.getAvatarSizeMode(),
                streamApplication: (null == a ? void 0 : a.pid) === (0, H.QF)() ? (0, T.Z)(e) : null,
                stream: t
            };
        });
    return (0, r.jsx)(er, {
        ...u,
        application: d,
        ...e,
        sortedVoiceStates: l,
        channel: n,
        title: null != i ? i : '',
        streamMetadata: a,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == a ? void 0 : a.sourceName
                  }
    });
}
