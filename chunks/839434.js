n.d(t, {
    Z: function () {
        return es;
    }
}),
    n(47120);
var i,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    c = n(692547),
    d = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(765250),
    f = n(13245),
    g = n(872810),
    m = n(586902),
    v = n(835473),
    _ = n(933557),
    E = n(600164),
    Z = n(112831),
    x = n(594190),
    I = n(925329),
    C = n(569545),
    S = n(914923),
    y = n(165393),
    N = n(989941),
    T = n(552282),
    b = n(345243),
    O = n(565799),
    R = n(501655),
    A = n(786915),
    P = n(7188),
    w = n(597998),
    j = n(199902),
    M = n(314897),
    L = n(592125),
    D = n(77498),
    k = n(131951),
    z = n(944486),
    B = n(606304),
    U = n(449224),
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
    let { flipped: t = !1, locked: n = !1, user: i, nick: o, displayNameMode: c, displayUserMode: d, size: u = J.ipw.LARGE, onClick: h, onContextMenu: p, context: f, guildId: g, voiceState: v } = e,
        { showKeybindIndicators: _ } = Y.Z.useExperiment({ location: 'overlay_voice_widget' }),
        E = (0, l.e7)([G.Z], () => G.Z.showKeybindIndicators),
        Z = (0, l.e7)([M.default], () => M.default.getId()),
        x = (0, l.e7)([k.Z], () => k.Z.isLocalMute(i.id)),
        I = (0, l.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
        C = (0, l.Wu)([j.Z], () => (null != I ? j.Z.getViewerIds(I) : [])),
        S = (0, m.Z)({
            userId: i.id,
            context: f
        }),
        y = (0, l.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, f)),
        N = (0, l.e7)([j.Z], () => null != j.Z.getStreamForUser(i.id, g)),
        T = s.useMemo(() => null != I && I.ownerId !== i.id && C.includes(i.id), [I, i.id, C]);
    if (d === J.OYC.ONLY_WHILE_SPEAKING && n && !S) return null;
    let b = i.id === Z,
        { mute: O, selfMute: R, suppress: A, deaf: P, selfDeaf: L } = v,
        D = _ && E,
        z = R && (!b || !D);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.Z, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: a()(et.voiceUserWrapper, {
                    [et.faded]: !S,
                    [et.interactive]: !n
                }),
                user: i,
                nick: o,
                speaking: !1,
                flipped: t,
                isStreaming: N,
                iconClassName: a()(et.voiceIcon, { [et.locked]: n }),
                isWatching: T,
                isOverlay: !0,
                size: u,
                priority: y,
                mute: O || z || x,
                localMute: x,
                serverMute: O || A,
                deaf: P || L,
                serverDeaf: P,
                userNameClassName: a()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (c === J.wC$.NEVER || (!S && c === J.wC$.ONLY_WHILE_SPEAKING))
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
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: s, isPreviewingInGame: o, channel: l, anchor: c, avatarSizeMode: u } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var a;
                let { user: c, voiceState: d, member: p } = t;
                if (null == c || null == l || null == e) return null;
                let f = s || o;
                return (0, r.jsx)(
                    ei,
                    {
                        guildId: null == l ? void 0 : l.guild_id,
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
            children: (0, r.jsx)(w.e, {
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
                        (0, r.jsx)(Z.Z, {
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
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: s, application: o, streamMetadata: l, streamApplication: c, stream: d } = this.props;
        if (t || null == d || null == s) return null;
        let { sanitizedTitle: h, title: p } = (0, S.Z)(l);
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
                            (null == c ? void 0 : c.id) != null && c.id === (null == o ? void 0 : o.id)
                                ? (0, r.jsx)(I.Z, {
                                      className: et.gameIcon,
                                      game: o
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
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: o } = this.props;
        if (null == o || null == e || !this.shouldDisplay()) return null;
        let l = J.t_t.UNPINNED;
        return (
            i && (l = J.t_t.PINNED),
            s && (l = J.t_t.IN_GAME_PREVIEW),
            n && (l = J.t_t.IN_GAME),
            (0, r.jsxs)(q.ZP, {
                type: l,
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
                              channel: o,
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
                if (null != e) g.g((0, C.V9)(e));
            });
    }
}
en(er, 'defaultProps', { context: $.Yn.DEFAULT });
function es(e) {
    var t;
    let n = (0, l.e7)([z.Z, L.Z], () => L.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, _.ZP)(n),
        o = (function () {
            let [e] = (0, l.e7)(
                    [V.ZP, O.Z, z.Z, L.Z],
                    () => {
                        let e = L.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, R.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [V.ZP.getVoiceStatesForChannel(e), V.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.Q
                ),
                t = (0, l.e7)([M.default], () => M.default.getId()),
                { showKeybindIndicators: n } = Y.Z.useExperiment({ location: 'voice_widget' });
            return s.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        a = (0, l.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
        c = (0, l.e7)([x.ZP, U.Z, D.Z], () => {
            var e;
            let t = (0, N.Z)(x.ZP, U.Z);
            return null != t ? (null === (e = D.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id) : null;
        }),
        d = (0, v.q)(c),
        u = (0, l.cj)([x.ZP, U.Z, j.Z, G.Z], () => {
            let e = (0, N.Z)(x.ZP, U.Z),
                t = j.Z.getCurrentUserActiveStream();
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
        sortedVoiceStates: o,
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
