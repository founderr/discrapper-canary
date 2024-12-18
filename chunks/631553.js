let i;
t.d(n, {
    Z: function () {
        return ev;
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
    f = t(668781),
    v = t(239091),
    g = t(13245),
    E = t(425493),
    Z = t(951483),
    b = t(714338),
    y = t(185666),
    C = t(100527),
    I = t(906732),
    x = t(146282),
    S = t(600164);
t(70097);
var k = t(594190),
    L = t(567409),
    N = t(74299),
    A = t(989941),
    T = t(377400),
    P = t(329557),
    w = t(199902),
    O = t(314897),
    j = t(592125),
    D = t(430824),
    R = t(131951),
    M = t(944486),
    G = t(618541),
    U = t(449224),
    z = t(574254),
    F = t(556296),
    K = t(808506),
    V = t(237997),
    Y = t(451478),
    B = t(70956),
    H = t(358085),
    W = t(998502),
    Q = t(13140),
    q = t(145597),
    X = t(658785),
    J = t(681603),
    $ = t(358446),
    ee = t(348733),
    en = t(312178),
    et = t(708383),
    ei = t(923532),
    ea = t(107200),
    eo = t(987650),
    er = t(981631),
    el = t(206583),
    ec = t(388032),
    es = t(746120);
function ed(e, n, t) {
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
let eu = null;
function ep(e) {
    e.preventDefault();
}
function e_(e) {
    (0, v.jW)(e, async () => {
        let { default: e } = await t.e('92780').then(t.bind(t, 930381));
        return (n) => (0, a.jsx)(e, { ...n });
    });
}
H.isPlatformEmbedded;
let eh = (e) => {
        let { keybind: n, onClick: t, isPreviewingInGame: i, locked: o } = e,
            r = o ? m.Clickable : 'div';
        return (0, a.jsx)(r, {
            className: l()(es.overlayBackground, {
                [es.overlayActive]: !o,
                [es.overlayLocked]: o,
                [es.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: n, target: i, button: a } = e;
                a === er.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: e_,
            children: o
                ? null
                : (0, a.jsx)('div', {
                      className: es.closeContainer,
                      children: (0, a.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: n,
                          closeAction: t
                      })
                  })
        });
    },
    em = (e) => {
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
        !(0, m.hasAnyModalOpen)() && !z.Z.isOpen() && g.Z.setInputLocked(!0, (0, q.QF)());
    }
    handleDeactivate() {
        g.Z.deactivateAllRegions();
    }
    componentDidMount() {
        g.Z.startSession(), T.Z.initialize(), y.Z.initialize(), P.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: n } = this.props;
        if (!!n) {
            if (n && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', ep, !1), null != eu)) {
                    let e = Date.now() - eu;
                    g.Z.track(er.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eu = null);
                }
                b.Z.disable(), (this.activeKeyEventShapes = []), V.Z.isPinned(er.Odu.TEXT) && (b.Z.setLayout(Z.Xq), b.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ep, !1), null == eu && ((eu = Date.now()), g.Z.track(er.rMx.OVERLAY_UNLOCKED)), b.Z.disable(), (this.activeKeyEventShapes = []), b.Z.setLayout(Z.Sr), b.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, Q.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && g.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: n, canGoLive: t, isStreaming: i, voiceGuild: a, voiceChannelId: o, game: r, showKeybindNotification: l, dismissKeybindNotification: c } = this.props;
        g.Z.track(er.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: V.Z.isPinned(er.Odu.TEXT)
        }),
            X.Z.trackExposure({ location: 'Overlay' });
        let s = t && !i && null != r,
            d = e && null != a && null != o,
            u = { type: eo.nc.WELCOME };
        if (
            (l
                ? (u = {
                      type: eo.nc.KEYBIND_INDICATORS,
                      markAsDismissed: c
                  })
                : s && d
                  ? (u = {
                        type: eo.nc.GO_LIVE_VOICE,
                        game: r,
                        voiceChannelId: o,
                        voiceGuild: a
                    })
                  : s &&
                    (u = {
                        type: eo.nc.GO_LIVE_NON_VOICE,
                        game: r
                    }),
            g.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            n && window.addEventListener('contextmenu', ep, !1),
            H.isPlatformEmbedded)
        ) {
            let e = W.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    g.Z.track(er.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * B.Z.Millis.MINUTE
                })),
                W.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, n) => {
                    V.Z.getDisableExternalLinkAlert() || n === G.Z.getLastURL()
                        ? W.ZP.send('OPEN_EXTERNAL_URL', n)
                        : f.Z.show({
                              title: ec.intl.string(ec.t.WLx4Fx),
                              body: ec.intl.string(ec.t.H8O1TE),
                              secondaryConfirmText: ec.intl.string(ec.t.IwqGhY),
                              confirmText: ec.intl.string(ec.t['3PatS0']),
                              cancelText: ec.intl.string(ec.t['ETE/oK']),
                              onConfirmSecondary: () => {
                                  g.Z.disableExternalLinkAlert(), W.ZP.send('OPEN_EXTERNAL_URL', n);
                              },
                              onConfirm: () => W.ZP.send('OPEN_EXTERNAL_URL', n)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ep, !1), T.Z.terminate(), y.Z.terminate(), P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, a.jsx)(S.Z, {
            justify: S.Z.Justify.CENTER,
            align: S.Z.Align.CENTER,
            className: es.invalidContainer,
            children: (0, a.jsx)('div', {
                className: es.inactiveContainer,
                children: ec.intl.format(ec.t.ketnW1, q.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: n, incompatibleApp: t, initialized: o, isPreviewingInGame: r, activeRegions: c, windowSize: s, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: p, height: _ } = s;
        if (0 === p || 0 === _ || t || !o) return null;
        let h = e || r,
            m = O.default.getId();
        return (0, a.jsxs)('div', {
            className: es.overlay,
            children: [
                (0, a.jsx)(et.Z, {}),
                r &&
                    (0, a.jsx)('header', {
                        className: es.previewingInGameHeader,
                        children: ec.intl.string(ec.t.iOq96u)
                    }),
                i,
                (!e || c.has(er.O0n.TEXT_WIDGET)) &&
                    (0, a.jsx)(eh, {
                        locked: e,
                        keybind: n,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: r
                    }),
                (0, q.Te)(s)
                    ? (0, a.jsx)(en.Z, {
                          className: l()({
                              [es.layoutLocked]: e,
                              [es.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, a.jsx)(ea.Z, {}),
                null != d &&
                    null != u &&
                    (0, a.jsx)(ei.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, a.jsx)(ee.Z, {
                    locked: h,
                    keybind: n
                }),
                (0, a.jsx)(J.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            ed(this, 'handleWindowResize', () => {
                K.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ed(this, 'activeKeyEventShapes', []),
            ed(this, 'lockEventShape', (0, Q.d2)(this.props.keybindKeyCodes)),
            ed(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((n) => _()(n, e))),
            ed(this, 'onKeyDownGlobal', (e) => {
                let n = em(e),
                    t = this.getActiveKeyEventIndex(n) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !t && !i && this.activeKeyEventShapes.push(n), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((n) => _()(e, n))) && (e.preventDefault(), e.stopPropagation());
                let { locked: a, activeRegions: o } = this.props;
                n.keyCode === s().codes.esc && a && o.has(er.O0n.TEXT_WIDGET) && g.Z.deactivateAllRegions();
            }),
            ed(this, 'onKeyUpGlobal', (e) => {
                let n = em(e),
                    t = this.getActiveKeyEventIndex(n);
                t > -1 && this.activeKeyEventShapes.splice(t, 1);
            });
        let n = e.locked && V.Z.isPinned(er.Odu.TEXT);
        b.Z.setLayout(n ? Z.Xq : Z.Sr), n && b.Z.enable();
    }
}
function ev() {
    let {
            locked: e,
            initialized: n,
            incompatibleApp: t,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, h.cj)([V.Z], () => ({
            locked: V.Z.isLocked((0, q.QF)()),
            initialized: V.Z.initialized,
            incompatibleApp: V.Z.incompatibleApp,
            activeRegions: V.Z.getActiveRegions(),
            isPreviewingInGame: V.Z.isPreviewingInGame()
        })),
        r = (0, h.e7)([Y.Z], () => Y.Z.windowSize()),
        l = (0, h.e7)([F.Z], () => F.Z.getOverlayKeybind()),
        c = (0, h.e7)([M.Z], () => M.Z.getVoiceChannelId()),
        s = (0, h.e7)([j.Z], () => j.Z.getChannel(c)),
        d = (0, h.e7)([D.Z], () => (null != s ? D.Z.getGuild(s.guild_id) : null)),
        u = (0, h.e7)([k.ZP, U.Z], () => (0, A.Z)(k.ZP, U.Z)),
        p = (0, L.Ns)(null == u ? void 0 : u.id),
        _ = (0, h.e7)([x.Z], () => null != x.Z.getLastFeedFetchDate(el.YN.GAME_PROFILE_FEED)),
        f = (0, h.e7)([R.Z], () => (0, N.Z)(R.Z)),
        v = (0, h.e7)([w.Z], () => null != w.Z.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, I.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: E, dismissKeybindNotification: Z } = (0, $.K)();
    return (0, a.jsx)(I.Gt, {
        value: g,
        children: (0, a.jsx)(m.RedesignIconContextProvider, {
            children: (0, a.jsx)(ef, {
                locked: e,
                initialized: n,
                incompatibleApp: t,
                activeRegions: i,
                isPreviewingInGame: o,
                windowSize: r,
                keybind: null != l ? (0, Q.BB)(l.shortcut, !0) : '???',
                keybindKeyCodes: null != l ? l.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != s ? s.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: f,
                isStreaming: v,
                showKeybindNotification: E,
                dismissKeybindNotification: Z,
                contentInventoryEntries: p,
                hasFetchedContentInventory: _
            })
        })
    });
}
