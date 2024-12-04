n.d(t, {
    Z: function () {
        return es;
    }
}),
    n(47120);
var i,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    o = n.n(a),
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
    x = n(118012),
    Z = n(594190),
    S = n(925329),
    I = n(569545),
    C = n(914923),
    y = n(165393),
    T = n(989941),
    N = n(552282),
    b = n(345243),
    O = n(565799),
    A = n(501655),
    L = n(786915),
    P = n(7188),
    R = n(597998),
    j = n(199902),
    w = n(314897),
    D = n(592125),
    M = n(77498),
    k = n(131951),
    z = n(944486),
    V = n(606304),
    U = n(449224),
    B = n(938475),
    G = n(237997),
    W = n(136015),
    F = n(51144),
    H = n(145597),
    Y = n(244073),
    K = n(876205),
    X = n(906037),
    q = n(518084),
    Q = n(809357),
    J = n(981631),
    $ = n(65154),
    ee = n(388032),
    et = n(734701);
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
    let { flipped: t = !1, locked: n = !1, user: i, nick: a, displayNameMode: c, displayUserMode: d, size: u = J.ipw.LARGE, onClick: h, onContextMenu: p, context: f, guildId: g, voiceState: v } = e,
        _ = (0, Q.Z)({ location: 'overlay_voice_widget' }),
        E = (0, l.e7)([G.Z], () => G.Z.showKeybindIndicators),
        x = (0, l.e7)([w.default], () => w.default.getId()),
        Z = (0, l.e7)([k.Z], () => k.Z.isLocalMute(i.id)),
        S = (0, l.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
        I = (0, l.Wu)([j.Z], () => (null != S ? j.Z.getViewerIds(S) : [])),
        C = (0, m.Z)({
            userId: i.id,
            context: f
        }),
        y = (0, l.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, f)),
        T = (0, l.e7)([j.Z], () => null != j.Z.getStreamForUser(i.id, g)),
        N = s.useMemo(() => null != S && S.ownerId !== i.id && I.includes(i.id), [S, i.id, I]);
    if (d === J.OYC.ONLY_WHILE_SPEAKING && n && !C) return null;
    let b = i.id === x,
        { mute: O, selfMute: A, suppress: L, deaf: P, selfDeaf: D } = v,
        M = _ && E,
        z = A && (!b || !M);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: o()(et.voiceUserWrapper, {
                    [et.faded]: !C,
                    [et.interactive]: !n
                }),
                user: i,
                nick: a,
                speaking: !1,
                flipped: t,
                isStreaming: T,
                iconClassName: o()(et.voiceIcon, { [et.locked]: n }),
                isWatching: N,
                isOverlay: !0,
                size: u,
                priority: y,
                mute: O || z || Z,
                localMute: Z,
                serverMute: O || L,
                deaf: P || D,
                serverDeaf: P,
                userNameClassName: o()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (c === J.wC$.NEVER || (!C && c === J.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            b &&
                M &&
                (0, r.jsx)(K.Z, {
                    value: A,
                    action: J.kg4.TOGGLE_MUTE,
                    shouldShow: !O && !L
                })
        ]
    });
}
class er extends (i = s.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: s, isPreviewingInGame: a, channel: l, anchor: c, avatarSizeMode: u } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var o;
                let { user: c, voiceState: d, member: p } = t;
                if (null == c || null == l || null == e) return null;
                let f = s || a;
                return (0, r.jsx)(
                    ei,
                    {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: c,
                        nick: null !== (o = null == p ? void 0 : p.nick) && void 0 !== o ? o : F.ZP.getName(c),
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
            className: o()({
                [d.Z.VOICE_WIDGET_TOP_MARGIN]: s,
                [et.bottomMargin]: s
            }),
            children: (0, r.jsx)(R.eJ, {
                className: et.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(q.ZP.Bar, {
            className: o()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, r.jsxs)(q.ZP.Content, {
                    dynamicSize: !0,
                    className: o()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, r.jsx)(u.DragIcon, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.dragIcon)
                        }),
                        (0, r.jsx)(u.VoiceNormalIcon, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.speakerIcon)
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
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: s, application: a, streamMetadata: l, streamApplication: c, stream: d } = this.props;
        if (t || null == d || null == s) return null;
        let { sanitizedTitle: h, title: p } = (0, C.Z)(l);
        return (0, r.jsx)(q.ZP.Bar, {
            className: o()(et.streamerControls, {
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
                            (null == c ? void 0 : c.id) != null && c.id === (null == a ? void 0 : a.id)
                                ? (0, r.jsx)(S.Z, {
                                      className: et.gameIcon,
                                      game: a
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
                                children: (0, r.jsx)(L.Z, {
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
        (0, X.m3)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, X.CR)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: r, channel: s } = e;
        return 0 !== r.length && null != t && null != s && (!n || !!i) && !0;
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: a } = this.props;
        if (null == a || null == e || !this.shouldDisplay()) return null;
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
                        : (0, r.jsx)(Y.Z, {
                              className: o()({ [et.preview]: s }),
                              contentClassName: o()({ [et.hidden]: s }),
                              channel: a,
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
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
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
                if (null != e) g.g((0, I.V9)(e));
            });
    }
}
en(er, 'defaultProps', { context: $.Yn.DEFAULT });
function es(e) {
    var t;
    let n = (0, l.e7)([z.Z, D.Z], () => D.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, _.ZP)(n),
        a = (function () {
            let [e] = (0, l.e7)(
                    [B.ZP, O.Z, z.Z, D.Z],
                    () => {
                        let e = D.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, A.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [B.ZP.getVoiceStatesForChannel(e), B.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    W.Q
                ),
                t = (0, l.e7)([w.default], () => w.default.getId()),
                n = (0, Q.Z)({ location: 'voice_widget' });
            return s.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        o = (0, l.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
        c = (0, l.e7)([Z.ZP, U.Z, M.Z], () => {
            var e;
            let t = (0, T.Z)(Z.ZP, U.Z);
            return null != t ? (null === (e = M.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id) : null;
        }),
        d = (0, v.q)(c),
        u = (0, l.cj)([Z.ZP, U.Z, j.Z, G.Z], () => {
            let e = (0, T.Z)(Z.ZP, U.Z),
                t = j.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.Z.getDisplayUserMode(),
                displayNameMode: G.Z.getDisplayNameMode(),
                avatarSizeMode: G.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, H.QF)() ? (0, N.Z)(e) : null,
                stream: t
            };
        });
    return (0, r.jsx)(er, {
        ...u,
        application: d,
        ...e,
        sortedVoiceStates: a,
        channel: n,
        title: null != i ? i : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
