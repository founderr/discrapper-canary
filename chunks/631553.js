let i;
t.d(n, {
    Z: function () {
        return eg;
    }
}),
    t(653041);
var a = t(200651),
    o = t(192379),
    r = t(120356),
    l = t.n(r),
    c = t(921738),
    s = t.n(c),
    d = t(954955),
    u = t.n(d),
    p = t(498607),
    _ = t.n(p),
    h = t(442837),
    m = t(481060),
    v = t(668781),
    f = t(239091),
    g = t(13245),
    E = t(425493),
    Z = t(615287),
    b = t(951483),
    y = t(714338),
    C = t(185666),
    I = t(100527),
    x = t(906732),
    S = t(146282),
    k = t(600164);
t(70097);
var L = t(594190),
    N = t(567409),
    A = t(74299),
    T = t(989941),
    P = t(377400),
    w = t(329557),
    O = t(199902),
    j = t(314897),
    D = t(592125),
    R = t(430824),
    M = t(131951),
    G = t(944486),
    U = t(618541),
    z = t(449224),
    F = t(574254),
    K = t(556296),
    V = t(808506),
    Y = t(237997),
    H = t(451478),
    B = t(70956),
    W = t(358085),
    Q = t(998502),
    q = t(13140),
    X = t(145597),
    J = t(658785),
    $ = t(681603),
    ee = t(358446),
    en = t(348733),
    et = t(312178),
    ei = t(708383),
    ea = t(923532),
    eo = t(107200),
    er = t(987650),
    el = t(981631),
    ec = t(206583),
    es = t(388032),
    ed = t(746120);
function eu(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
(h.ZP.PersistedStore.disableWrites = __OVERLAY__), h.ZP.initialize();
let ep = null;
function e_(e) {
    e.preventDefault();
}
function eh(e) {
    (0, f.jW)(e, async () => {
        let { default: e } = await t.e('92780').then(t.bind(t, 930381));
        return (n) => (0, a.jsx)(e, { ...n });
    });
}
W.isPlatformEmbedded;
let em = (e) => {
        let { keybind: n, onClick: t, isPreviewingInGame: i, locked: o } = e,
            r = o ? m.Clickable : 'div';
        return (0, a.jsx)(r, {
            className: l()(ed.overlayBackground, {
                [ed.overlayActive]: !o,
                [ed.overlayLocked]: o,
                [ed.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: a } = e;
                a === el.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: eh,
            children: o
                ? null
                : (0, a.jsx)('div', {
                      className: ed.closeContainer,
                      children: (0, a.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: n,
                          closeAction: t
                      })
                  })
        });
    },
    ev = (e) => {
        let { keyCode: n, shiftKey: t, metaKey: i, altKey: a, ctrlKey: o } = e;
        return {
            keyCode: n,
            shiftKey: t,
            metaKey: i,
            altKey: a,
            ctrlKey: o
        };
    };
class ef extends o.Component {
    handleLock() {
        !(0, m.hasAnyModalOpen)() && !F.Z.isOpen() && g.Z.setInputLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        g.Z.deactivateAllRegions();
    }
    componentDidMount() {
        g.Z.startSession(), P.Z.initialize(), C.Z.initialize(), w.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: n } = this.props;
        if (!!n) {
            if (n && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', e_, !1), null != ep)) {
                    let e = Date.now() - ep;
                    g.Z.track(el.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ep = null);
                }
                y.Z.disable(), (this.activeKeyEventShapes = []), Y.Z.isPinned(el.Odu.TEXT) && (y.Z.setLayout(b.Xq), y.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', e_, !1), null == ep && ((ep = Date.now()), g.Z.track(el.rMx.OVERLAY_UNLOCKED)), y.Z.disable(), (this.activeKeyEventShapes = []), y.Z.setLayout(b.Sr), y.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, q.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && g.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: n, canGoLive: t, isStreaming: i, voiceGuild: a, voiceChannelId: o, game: r, showKeybindNotification: l, dismissKeybindNotification: c } = this.props;
        g.Z.track(el.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Y.Z.isPinned(el.Odu.TEXT),
            overlay_render_method: Z.gl[Z.gl.Hook]
        }),
            J.Z.trackExposure({ location: 'Overlay' });
        let s = t && !i && null != r,
            d = e && null != a && null != o,
            u = { type: er.nc.WELCOME };
        if (
            (l
                ? (u = {
                      type: er.nc.KEYBIND_INDICATORS,
                      markAsDismissed: c
                  })
                : s && d
                  ? (u = {
                        type: er.nc.GO_LIVE_VOICE,
                        game: r,
                        voiceChannelId: o,
                        voiceGuild: a
                    })
                  : s &&
                    (u = {
                        type: er.nc.GO_LIVE_NON_VOICE,
                        game: r
                    }),
            g.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            n && window.addEventListener('contextmenu', e_, !1),
            W.isPlatformEmbedded)
        ) {
            let e = Q.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    g.Z.track(el.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * B.Z.Millis.MINUTE
                })),
                Q.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, n) => {
                    Y.Z.getDisableExternalLinkAlert() || n === U.Z.getLastURL()
                        ? Q.ZP.send('OPEN_EXTERNAL_URL', n)
                        : v.Z.show({
                              title: es.intl.string(es.t.WLx4Fx),
                              body: es.intl.string(es.t.H8O1TE),
                              secondaryConfirmText: es.intl.string(es.t.IwqGhY),
                              confirmText: es.intl.string(es.t['3PatS0']),
                              cancelText: es.intl.string(es.t['ETE/oK']),
                              onConfirmSecondary: () => {
                                  g.Z.disableExternalLinkAlert(), Q.ZP.send('OPEN_EXTERNAL_URL', n);
                              },
                              onConfirm: () => Q.ZP.send('OPEN_EXTERNAL_URL', n)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', e_, !1), P.Z.terminate(), C.Z.terminate(), w.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, a.jsx)(k.Z, {
            justify: k.Z.Justify.CENTER,
            align: k.Z.Align.CENTER,
            className: ed.invalidContainer,
            children: (0, a.jsx)('div', {
                className: ed.inactiveContainer,
                children: es.intl.format(es.t.ketnW1, X.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: n, incompatibleApp: t, initialized: o, isPreviewingInGame: r, activeRegions: c, windowSize: s, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: p, height: _ } = s;
        if (0 === p || 0 === _ || t || !o) return null;
        let h = e || r,
            m = j.default.getId();
        return (0, a.jsxs)('div', {
            className: ed.overlay,
            children: [
                (0, a.jsx)(ei.Z, {}),
                r &&
                    (0, a.jsx)('header', {
                        className: ed.previewingInGameHeader,
                        children: es.intl.string(es.t.iOq96u)
                    }),
                i,
                (!e || c.has(el.O0n.TEXT_WIDGET)) &&
                    (0, a.jsx)(em, {
                        locked: e,
                        keybind: n,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: r
                    }),
                (0, X.Te)(s)
                    ? (0, a.jsx)(et.Z, {
                          className: l()({
                              [ed.layoutLocked]: e,
                              [ed.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, a.jsx)(eo.Z, {}),
                null != d &&
                    null != u &&
                    (0, a.jsx)(ea.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, a.jsx)(en.Z, {
                    locked: h,
                    keybind: n
                }),
                (0, a.jsx)($.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eu(this, 'handleWindowResize', () => {
                V.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eu(this, 'activeKeyEventShapes', []),
            eu(this, 'lockEventShape', (0, q.d2)(this.props.keybindKeyCodes)),
            eu(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((n) => _()(n, e))),
            eu(this, 'onKeyDownGlobal', (e) => {
                let n = ev(e),
                    t = this.getActiveKeyEventIndex(n) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !t && !i && this.activeKeyEventShapes.push(n), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((n) => _()(e, n))) && (e.preventDefault(), e.stopPropagation());
                let { locked: a, activeRegions: o } = this.props;
                n.keyCode === s().codes.esc && a && o.has(el.O0n.TEXT_WIDGET) && g.Z.deactivateAllRegions();
            }),
            eu(this, 'onKeyUpGlobal', (e) => {
                let n = ev(e),
                    t = this.getActiveKeyEventIndex(n);
                t > -1 && this.activeKeyEventShapes.splice(t, 1);
            });
        let n = e.locked && Y.Z.isPinned(el.Odu.TEXT);
        y.Z.setLayout(n ? b.Xq : b.Sr), n && y.Z.enable();
    }
}
function eg() {
    let {
            locked: e,
            initialized: n,
            incompatibleApp: t,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, h.cj)([Y.Z], () => ({
            locked: Y.Z.isLocked((0, X.QF)()),
            initialized: Y.Z.initialized,
            incompatibleApp: Y.Z.incompatibleApp,
            activeRegions: Y.Z.getActiveRegions(),
            isPreviewingInGame: Y.Z.isPreviewingInGame()
        })),
        r = (0, h.e7)([H.Z], () => H.Z.windowSize()),
        l = (0, h.e7)([K.Z], () => K.Z.getOverlayKeybind()),
        c = (0, h.e7)([G.Z], () => G.Z.getVoiceChannelId()),
        s = (0, h.e7)([D.Z], () => D.Z.getChannel(c)),
        d = (0, h.e7)([R.Z], () => (null != s ? R.Z.getGuild(s.guild_id) : null)),
        u = (0, h.e7)([L.ZP, z.Z], () => (0, T.Z)(L.ZP, z.Z)),
        p = (0, N.Ns)(null == u ? void 0 : u.id),
        _ = (0, h.e7)([S.Z], () => null != S.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED)),
        v = (0, h.e7)([M.Z], () => (0, A.Z)(M.Z)),
        f = (0, h.e7)([O.Z], () => null != O.Z.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, x.ZP)(I.Z.OVERLAY),
        { showKeybindIndicators: E, dismissKeybindNotification: Z } = (0, ee.K)();
    return (0, a.jsx)(x.Gt, {
        value: g,
        children: (0, a.jsx)(m.RedesignIconContextProvider, {
            children: (0, a.jsx)(ef, {
                locked: e,
                initialized: n,
                incompatibleApp: t,
                activeRegions: i,
                isPreviewingInGame: o,
                windowSize: r,
                keybind: null != l ? (0, q.BB)(l.shortcut, !0) : '???',
                keybindKeyCodes: null != l ? l.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != s ? s.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: v,
                isStreaming: f,
                showKeybindNotification: E,
                dismissKeybindNotification: Z,
                contentInventoryEntries: p,
                hasFetchedContentInventory: _
            })
        })
    });
}
