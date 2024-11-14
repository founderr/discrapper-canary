let i;
n.d(t, {
    Z: function () {
        return eg;
    }
}),
    n(653041);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(921738),
    c = n.n(o),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    m = n(481060),
    g = n(668781),
    v = n(239091),
    _ = n(13245),
    E = n(425493),
    x = n(951483),
    Z = n(714338),
    S = n(185666),
    C = n(100527),
    I = n(906732),
    y = n(146282),
    N = n(600164);
n(70097);
var T = n(594190),
    b = n(567409),
    O = n(74299),
    j = n(989941),
    A = n(377400),
    M = n(329557),
    P = n(199902),
    L = n(314897),
    R = n(592125),
    w = n(430824),
    k = n(131951),
    D = n(944486),
    z = n(618541),
    B = n(449224),
    V = n(574254),
    U = n(556296),
    W = n(237997),
    G = n(451478),
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
    es = n(987650),
    er = n(981631),
    ea = n(206583),
    el = n(388032),
    eo = n(310906);
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
        return (t) => (0, s.jsx)(e, { ...t });
    });
}
H.isPlatformEmbedded;
let ep = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? m.Clickable : 'div';
        return (0, s.jsx)(a, {
            className: l()(eo.overlayBackground, {
                [eo.overlayActive]: !r,
                [eo.overlayLocked]: r,
                [eo.previewMode]: !r && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === er.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: r
                ? null
                : (0, s.jsx)('div', {
                      className: eo.closeContainer,
                      children: (0, s.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
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
class em extends r.Component {
    handleLock() {
        !(0, m.hasAnyModalOpen)() && !V.Z.isOpen() && _.Z.setInputLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        _.Z.deactivateAllRegions();
    }
    componentDidMount() {
        _.Z.startSession(), A.Z.initialize(), S.Z.initialize(), M.Z.initialize();
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
                    _.Z.track(er.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ed = null);
                }
                Z.Z.disable(), (this.activeKeyEventShapes = []), W.Z.isPinned(er.Odu.TEXT) && (Z.Z.setLayout(x.Xq), Z.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eu, !1), null == ed && ((ed = Date.now()), _.Z.track(er.rMx.OVERLAY_UNLOCKED)), Z.Z.disable(), (this.activeKeyEventShapes = []), Z.Z.setLayout(x.Sr), Z.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && _.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: s, voiceChannelId: r, game: a, showKeybindNotification: l, dismissKeybindNotification: o } = this.props;
        _.Z.track(er.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: W.Z.isPinned(er.Odu.TEXT)
        }),
            Q.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != a,
            d = e && null != s && null != r,
            u = { type: es.nc.WELCOME };
        if (
            (l
                ? (u = {
                      type: es.nc.KEYBIND_INDICATORS,
                      markAsDismissed: o
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
            _.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eu, !1),
            H.isPlatformEmbedded)
        ) {
            let e = Y.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    _.Z.track(er.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * F.Z.Millis.MINUTE
                })),
                Y.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    W.Z.getDisableExternalLinkAlert() || t === z.Z.getLastURL()
                        ? Y.ZP.send('OPEN_EXTERNAL_URL', t)
                        : g.Z.show({
                              title: el.intl.string(el.t.WLx4Fx),
                              body: el.intl.string(el.t.H8O1TE),
                              secondaryConfirmText: el.intl.string(el.t.IwqGhY),
                              confirmText: el.intl.string(el.t['3PatS0']),
                              cancelText: el.intl.string(el.t['ETE/oK']),
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
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eu, !1), A.Z.terminate(), S.Z.terminate(), M.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, s.jsx)(N.Z, {
            justify: N.Z.Justify.CENTER,
            align: N.Z.Align.CENTER,
            className: eo.invalidContainer,
            children: (0, s.jsx)('div', {
                className: eo.inactiveContainer,
                children: el.intl.format(el.t.ketnW1, X.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: r, isPreviewingInGame: a, activeRegions: o, windowSize: c, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !r) return null;
        let f = e || a,
            m = L.default.getId();
        return (0, s.jsxs)('div', {
            className: eo.overlay,
            children: [
                (0, s.jsx)(et.Z, {}),
                a &&
                    (0, s.jsx)('header', {
                        className: eo.previewingInGameHeader,
                        children: el.intl.string(el.t.iOq96u)
                    }),
                i,
                (!e || o.has(er.O0n.TEXT_WIDGET)) &&
                    (0, s.jsx)(ep, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, X.Te)(c)
                    ? (0, s.jsx)(ee.Z, {
                          className: l()({
                              [eo.layoutLocked]: e,
                              [eo.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(ei.Z, {}),
                null != d &&
                    null != u &&
                    (0, s.jsx)(en.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, s.jsx)($.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, s.jsx)(q.Z, {})
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
                t.keyCode === c().codes.esc && s && r.has(er.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions();
            }),
            ec(this, 'onKeyUpGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && W.Z.isPinned(er.Odu.TEXT);
        Z.Z.setLayout(t ? x.Xq : x.Sr), t && Z.Z.enable();
    }
}
function eg() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: r
        } = (0, f.cj)([W.Z], () => ({
            locked: W.Z.isLocked((0, X.QF)()),
            initialized: W.Z.initialized,
            incompatibleApp: W.Z.incompatibleApp,
            activeRegions: W.Z.getActiveRegions(),
            isPreviewingInGame: W.Z.isPreviewingInGame()
        })),
        a = (0, f.e7)([G.Z], () => G.Z.windowSize()),
        l = (0, f.e7)([U.Z], () => U.Z.getOverlayKeybind()),
        o = (0, f.e7)([D.Z], () => D.Z.getVoiceChannelId()),
        c = (0, f.e7)([R.Z], () => R.Z.getChannel(o)),
        d = (0, f.e7)([w.Z], () => (null != c ? w.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([T.ZP, B.Z], () => (0, j.Z)(T.ZP, B.Z)),
        h = (0, b.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([y.Z], () => null != y.Z.getLastFeedFetchDate(ea.YN.GAME_PROFILE_FEED)),
        g = (0, f.e7)([k.Z], () => (0, O.Z)(k.Z)),
        v = (0, f.e7)([P.Z], () => null != P.Z.getCurrentUserActiveStream()),
        { analyticsLocations: _ } = (0, I.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: E, dismissKeybindNotification: x } = (0, J.K)();
    return (0, s.jsx)(I.Gt, {
        value: _,
        children: (0, s.jsx)(m.RedesignIconContextProvider, {
            children: (0, s.jsx)(em, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: r,
                windowSize: a,
                keybind: null != l ? (0, K.BB)(l.shortcut, !0) : '???',
                keybindKeyCodes: null != l ? l.shortcut : [],
                connectedToVoice: null != o,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: g,
                isStreaming: v,
                showKeybindNotification: E,
                dismissKeybindNotification: x,
                contentInventoryEntries: h,
                hasFetchedContentInventory: p
            })
        })
    });
}
