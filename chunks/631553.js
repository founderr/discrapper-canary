let i;
n.d(t, {
    Z: function () {
        return em;
    }
}),
    n(653041);
var r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(921738),
    c = n.n(l),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    g = n(481060),
    m = n(668781),
    v = n(239091),
    _ = n(13245),
    E = n(425493),
    Z = n(951483),
    x = n(714338),
    I = n(185666),
    C = n(100527),
    S = n(906732),
    y = n(146282),
    N = n(600164);
n(70097);
var T = n(594190),
    b = n(567409),
    O = n(74299),
    R = n(989941),
    A = n(377400),
    P = n(329557),
    w = n(199902),
    j = n(314897),
    M = n(592125),
    L = n(430824),
    D = n(131951),
    k = n(944486),
    z = n(618541),
    B = n(449224),
    U = n(574254),
    V = n(556296),
    G = n(237997),
    W = n(451478),
    F = n(70956),
    H = n(358085),
    Y = n(998502),
    K = n(13140),
    X = n(145597),
    Q = n(658785),
    q = n(681603),
    J = n(358446),
    $ = n(348733),
    ee = n(312178),
    et = n(708383),
    en = n(923532),
    ei = n(107200),
    er = n(987650),
    es = n(981631),
    eo = n(206583),
    ea = n(388032),
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
    (0, v.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
H.isPlatformEmbedded;
let ep = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            o = s ? g.Clickable : 'div';
        return (0, r.jsx)(o, {
            className: a()(el.overlayBackground, {
                [el.overlayActive]: !s,
                [el.overlayLocked]: s,
                [el.previewMode]: !s && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === es.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: s
                ? null
                : (0, r.jsx)('div', {
                      className: el.closeContainer,
                      children: (0, r.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ef = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: s } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s
        };
    };
class eg extends s.Component {
    handleLock() {
        !(0, g.hasAnyModalOpen)() && !U.Z.isOpen() && _.Z.setLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        _.Z.deactivateAllRegions();
    }
    componentDidMount() {
        _.Z.startSession(), A.Z.initialize(), I.Z.initialize(), P.Z.initialize();
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
                    _.Z.track(es.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ed = null);
                }
                x.Z.disable(), (this.activeKeyEventShapes = []), G.Z.isPinned(es.Odu.TEXT) && (x.Z.setLayout(Z.Xq), x.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eu, !1), null == ed && ((ed = Date.now()), _.Z.track(es.rMx.OVERLAY_UNLOCKED)), x.Z.disable(), (this.activeKeyEventShapes = []), x.Z.setLayout(Z.Sr), x.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && _.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: s, game: o, showKeybindNotification: a, dismissKeybindNotification: l } = this.props;
        _.Z.track(es.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: G.Z.isPinned(es.Odu.TEXT)
        }),
            Q.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != o,
            d = e && null != r && null != s,
            u = { type: er.nc.WELCOME };
        if (
            (a
                ? (u = {
                      type: er.nc.KEYBIND_INDICATORS,
                      markAsDismissed: l
                  })
                : c && d
                  ? (u = {
                        type: er.nc.GO_LIVE_VOICE,
                        game: o,
                        voiceChannelId: s,
                        voiceGuild: r
                    })
                  : c &&
                    (u = {
                        type: er.nc.GO_LIVE_NON_VOICE,
                        game: o
                    }),
            _.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eu, !1),
            H.isPlatformEmbedded)
        ) {
            let e = Y.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    _.Z.track(es.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * F.Z.Millis.MINUTE
                })),
                Y.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    G.Z.getDisableExternalLinkAlert() || t === z.Z.getLastURL()
                        ? Y.ZP.send('OPEN_EXTERNAL_URL', t)
                        : m.Z.show({
                              title: ea.intl.string(ea.t.WLx4Fx),
                              body: ea.intl.string(ea.t.H8O1TE),
                              secondaryConfirmText: ea.intl.string(ea.t.IwqGhY),
                              confirmText: ea.intl.string(ea.t['3PatS0']),
                              cancelText: ea.intl.string(ea.t['ETE/oK']),
                              onConfirmSecondary: () => {
                                  _.Z.disableExternalLinkAlert(), Y.ZP.send('OPEN_EXTERNAL_URL', t);
                              },
                              onConfirm: () => Y.ZP.send('OPEN_EXTERNAL_URL', t)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eu, !1), A.Z.terminate(), I.Z.terminate(), P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(N.Z, {
            justify: N.Z.Justify.CENTER,
            align: N.Z.Align.CENTER,
            className: el.invalidContainer,
            children: (0, r.jsx)('div', {
                className: el.inactiveContainer,
                children: ea.intl.format(ea.t.ketnW1, X.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: s, isPreviewingInGame: o, activeRegions: l, windowSize: c, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !s) return null;
        let f = e || o,
            g = j.default.getId();
        return (0, r.jsxs)('div', {
            className: el.overlay,
            children: [
                (0, r.jsx)(et.Z, {}),
                o &&
                    (0, r.jsx)('header', {
                        className: el.previewingInGameHeader,
                        children: ea.intl.string(ea.t.iOq96u)
                    }),
                i,
                (!e || l.has(es.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(ep, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, X.Te)(c)
                    ? (0, r.jsx)(ee.Z, {
                          className: a()({
                              [el.layoutLocked]: e,
                              [el.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ei.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(en.Z, {
                        streamerId: g,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, r.jsx)($.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, r.jsx)(q.Z, {})
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
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(es.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions();
            }),
            ec(this, 'onKeyUpGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && G.Z.isPinned(es.Odu.TEXT);
        x.Z.setLayout(t ? Z.Xq : Z.Sr), t && x.Z.enable();
    }
}
function em() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s
        } = (0, f.cj)([G.Z], () => ({
            locked: G.Z.isUILocked((0, X.QF)()),
            initialized: G.Z.initialized,
            incompatibleApp: G.Z.incompatibleApp,
            activeRegions: G.Z.getActiveRegions(),
            isPreviewingInGame: G.Z.isPreviewingInGame()
        })),
        o = (0, f.e7)([W.Z], () => W.Z.windowSize()),
        a = (0, f.e7)([V.Z], () => V.Z.getOverlayKeybind()),
        l = (0, f.e7)([k.Z], () => k.Z.getVoiceChannelId()),
        c = (0, f.e7)([M.Z], () => M.Z.getChannel(l)),
        d = (0, f.e7)([L.Z], () => (null != c ? L.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([T.ZP, B.Z], () => (0, R.Z)(T.ZP, B.Z)),
        h = (0, b.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([y.Z], () => null != y.Z.getLastFeedFetchDate(eo.YN.GAME_PROFILE_FEED)),
        m = (0, f.e7)([D.Z], () => (0, O.Z)(D.Z)),
        v = (0, f.e7)([w.Z], () => null != w.Z.getCurrentUserActiveStream()),
        { analyticsLocations: _ } = (0, S.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: E, dismissKeybindNotification: Z } = (0, J.K)();
    return (0, r.jsx)(S.Gt, {
        value: _,
        children: (0, r.jsx)(g.RedesignIconContextProvider, {
            children: (0, r.jsx)(eg, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: s,
                windowSize: o,
                keybind: null != a ? (0, K.BB)(a.shortcut, !0) : '???',
                keybindKeyCodes: null != a ? a.shortcut : [],
                connectedToVoice: null != l,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: m,
                isStreaming: v,
                showKeybindNotification: E,
                dismissKeybindNotification: Z,
                contentInventoryEntries: h,
                hasFetchedContentInventory: p
            })
        })
    });
}
