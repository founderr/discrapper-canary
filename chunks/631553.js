let i;
n.d(t, {
    Z: function () {
        return eE;
    }
}),
    n(653041);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(921738),
    c = n.n(l),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    _ = n(481060),
    E = n(668781),
    g = n(239091),
    m = n(13245),
    I = n(425493),
    Z = n(951483),
    v = n(714338),
    S = n(185666),
    C = n(100527),
    x = n(906732),
    T = n(146282),
    N = n(600164);
n(70097);
var O = n(594190),
    A = n(567409),
    y = n(74299),
    R = n(989941),
    L = n(377400),
    M = n(329557),
    b = n(199902),
    P = n(314897),
    D = n(592125),
    w = n(430824),
    j = n(131951),
    k = n(944486),
    V = n(618541),
    U = n(449224),
    B = n(574254),
    z = n(556296),
    G = n(237997),
    Y = n(451478),
    W = n(70956),
    F = n(358085),
    H = n(998502),
    K = n(13140),
    X = n(145597),
    Q = n(658785),
    J = n(681603),
    q = n(358446),
    $ = n(348733),
    ee = n(312178),
    et = n(708383),
    en = n(923532),
    ei = n(107200),
    es = n(987650),
    er = n(981631),
    ea = n(206583),
    eo = n(689938),
    el = n(310906);
function ec(e, t, n) {
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
(f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
let ed = null;
function eu(e) {
    e.preventDefault();
}
function eh(e) {
    (0, g.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, s.jsx)(e, { ...t });
    });
}
F.isPlatformEmbedded;
let ep = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? _.Clickable : 'div';
        return (0, s.jsx)(a, {
            className: o()(el.overlayBackground, {
                [el.overlayActive]: !r,
                [el.overlayLocked]: r,
                [el.previewMode]: !r && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === er.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: r
                ? null
                : (0, s.jsx)('div', {
                      className: el.closeContainer,
                      children: (0, s.jsx)(I.Z, {
                          variant: I.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ef = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: r } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: s,
            ctrlKey: r
        };
    };
class e_ extends r.Component {
    handleLock() {
        !(0, _.hasAnyModalOpen)() && !B.Z.isOpen() && m.Z.setLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        m.Z.deactivateAllRegions();
    }
    componentDidMount() {
        m.Z.startSession(), L.Z.initialize(), S.Z.initialize(), M.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (!!t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eu, !1), null != ed)) {
                    let e = Date.now() - ed;
                    m.Z.track(er.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ed = null);
                }
                v.Z.disable(), (this.activeKeyEventShapes = []), G.Z.isPinned(er.Odu.TEXT) && (v.Z.setLayout(Z.Xq), v.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eu, !1), null == ed && ((ed = Date.now()), m.Z.track(er.rMx.OVERLAY_UNLOCKED)), v.Z.disable(), (this.activeKeyEventShapes = []), v.Z.setLayout(Z.Sr), v.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && m.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: s, voiceChannelId: r, game: a, showKeybindNotification: o, dismissKeybindNotification: l } = this.props;
        m.Z.track(er.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: G.Z.isPinned(er.Odu.TEXT)
        }),
            Q.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != a,
            d = e && null != s && null != r,
            u = { type: es.nc.WELCOME };
        if (
            (o
                ? (u = {
                      type: es.nc.KEYBIND_INDICATORS,
                      markAsDismissed: l
                  })
                : c && d
                  ? (u = {
                        type: es.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: r,
                        voiceGuild: s
                    })
                  : c &&
                    (u = {
                        type: es.nc.GO_LIVE_NON_VOICE,
                        game: a
                    }),
            m.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eu, !1),
            F.isPlatformEmbedded)
        ) {
            let e = H.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    m.Z.track(er.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * W.Z.Millis.MINUTE
                })),
                H.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    G.Z.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                        ? H.ZP.send('OPEN_EXTERNAL_URL', t)
                        : E.Z.show({
                              title: eo.Z.Messages.OVERLAY_LINK_ALERT_TITLE,
                              body: eo.Z.Messages.OVERLAY_LINK_ALERT_BODY,
                              secondaryConfirmText: eo.Z.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                              confirmText: eo.Z.Messages.CONTINUE,
                              cancelText: eo.Z.Messages.CANCEL,
                              onConfirmSecondary: () => {
                                  m.Z.disableExternalLinkAlert(), H.ZP.send('OPEN_EXTERNAL_URL', t);
                              },
                              onConfirm: () => H.ZP.send('OPEN_EXTERNAL_URL', t)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eu, !1), L.Z.terminate(), S.Z.terminate(), M.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, s.jsx)(N.Z, {
            justify: N.Z.Justify.CENTER,
            align: N.Z.Align.CENTER,
            className: el.invalidContainer,
            children: (0, s.jsx)('div', {
                className: el.inactiveContainer,
                children: eo.Z.Messages.OVERLAY_TOO_SMALL.format(X.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: r, isPreviewingInGame: a, activeRegions: l, windowSize: c, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !r) return null;
        let f = e || a,
            _ = P.default.getId();
        return (0, s.jsxs)('div', {
            className: el.overlay,
            children: [
                (0, s.jsx)(et.Z, {}),
                a &&
                    (0, s.jsx)('header', {
                        className: el.previewingInGameHeader,
                        children: eo.Z.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                    }),
                i,
                (!e || l.has(er.O0n.TEXT_WIDGET)) &&
                    (0, s.jsx)(ep, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, X.Te)(c)
                    ? (0, s.jsx)(ee.Z, {
                          className: o()({
                              [el.layoutLocked]: e,
                              [el.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(ei.Z, {}),
                null != d &&
                    null != u &&
                    (0, s.jsx)(en.Z, {
                        streamerId: _,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, s.jsx)($.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, s.jsx)(J.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            ec(this, 'handleWindowResize', () => {
                (0, X.W2)()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ec(this, 'activeKeyEventShapes', []),
            ec(this, 'lockEventShape', (0, K.d2)(this.props.keybindKeyCodes)),
            ec(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ec(this, 'onKeyDownGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: s, activeRegions: r } = this.props;
                t.keyCode === c().codes.esc && s && r.has(er.O0n.TEXT_WIDGET) && m.Z.deactivateAllRegions();
            }),
            ec(this, 'onKeyUpGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && G.Z.isPinned(er.Odu.TEXT);
        v.Z.setLayout(t ? Z.Xq : Z.Sr), t && v.Z.enable();
    }
}
function eE() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: r
        } = (0, f.cj)([G.Z], () => ({
            locked: G.Z.isUILocked((0, X.QF)()),
            initialized: G.Z.initialized,
            incompatibleApp: G.Z.incompatibleApp,
            activeRegions: G.Z.getActiveRegions(),
            isPreviewingInGame: G.Z.isPreviewingInGame()
        })),
        a = (0, f.e7)([Y.Z], () => Y.Z.windowSize()),
        o = (0, f.e7)([z.Z], () => z.Z.getOverlayKeybind()),
        l = (0, f.e7)([k.Z], () => k.Z.getVoiceChannelId()),
        c = (0, f.e7)([D.Z], () => D.Z.getChannel(l)),
        d = (0, f.e7)([w.Z], () => (null != c ? w.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([O.ZP, U.Z], () => (0, R.Z)(O.ZP, U.Z)),
        h = (0, A.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([T.Z], () => null != T.Z.getLastFeedFetchDate(ea.YN.GAME_PROFILE_FEED)),
        E = (0, f.e7)([j.Z], () => (0, y.Z)(j.Z)),
        g = (0, f.e7)([b.Z], () => null != b.Z.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, x.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: I, dismissKeybindNotification: Z } = (0, q.K)();
    return (0, s.jsx)(x.Gt, {
        value: m,
        children: (0, s.jsx)(_.RedesignIconContextProvider, {
            children: (0, s.jsx)(e_, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: r,
                windowSize: a,
                keybind: null != o ? (0, K.BB)(o.shortcut, !0) : '???',
                keybindKeyCodes: null != o ? o.shortcut : [],
                connectedToVoice: null != l,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: E,
                isStreaming: g,
                showKeybindNotification: I,
                dismissKeybindNotification: Z,
                contentInventoryEntries: h,
                hasFetchedContentInventory: p
            })
        })
    });
}
