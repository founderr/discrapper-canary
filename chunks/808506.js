let r, i;
n.d(t, {
    Y: function () {
        return el;
    }
}),
    n(47120),
    n(411104),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(642549),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(177593);
var a,
    s,
    o,
    l,
    u,
    c,
    d = n(807864),
    f = n(442837),
    _ = n(570140),
    h = n(26151),
    p = n(224706),
    m = n(765250),
    g = n(13245),
    E = n(287734),
    v = n(579806),
    I = n(887278),
    S = n(490029),
    T = n(710845),
    b = n(594190),
    y = n(454991),
    A = n(633565),
    N = n(48481),
    C = n(314897),
    R = n(77498),
    O = n(355863),
    D = n(449224),
    L = n(626135),
    x = n(866119),
    w = n(671999),
    M = n(998502),
    P = n(145597),
    k = n(981631),
    U = n(987650);
((o = a || (a = {})).ATTACHING = 'ATTACHING'), (o.CONNECTING = 'CONNECTING'), (o.CONNECTED = 'CONNECTED'), (o.READY = 'READY'), (o.CRASHED = 'CRASHED'), (o.CONNECT_FAILED = 'CONNECT_FAILED'), (o.HOOK_FAILED = 'HOOK_FAILED');
let G = {},
    B = new Map(),
    Z = !1,
    F = new Set(),
    V = !1,
    j = !1,
    H = !1,
    Y = null,
    W = null,
    K = '',
    z = new Set(),
    q = !1,
    Q = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'VERIFY_FAILURE', 'VERIFY_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'MENTION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'MENTION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    X = new Set(),
    J = new T.Z('OverlayBridgeStore'),
    $ = 'none',
    ee = (0, d.H)({
        onContention: (e, t) => J.verbose('overlayLock contention: lastMutexCall '.concat($)),
        onContentionResolved: () => J.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat($, '}');
            J.error(n),
                L.default.track(k.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                });
        },
        timeoutMs: 180000
    });
function et(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ee(() => t(...r), e);
    };
}
function en(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = B.get(e);
    if ((null === n || r === n) && r !== t) {
        if ((null == t ? B.delete(e) : B.set(e, t), null == t || 'CRASHED' === t)) {
            var i;
            Y = null;
            let e = null === v.Z || void 0 === v.Z ? void 0 : null === (i = v.Z.fileManager) || void 0 === i ? void 0 : i.uploadDiscordHookCrashes;
            null != e &&
                e().then((e) => {
                    if (!!Array.isArray(e) && 0 !== e.length)
                        for (let l of (J.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                            var t, n, r, i, a, s, o;
                            if (null == l) continue;
                            let e = null != l.processName ? R.Z.getGameByExecutable(l.processName) : null;
                            L.default.track(k.rMx.OVERLAY_HOOK_CRASHED, {
                                process_name: null == l ? void 0 : l.processName,
                                game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                minidump_exception_type: null !== (r = l.exceptionString) && void 0 !== r ? r : null,
                                minidump_exception_module_name: null !== (i = l.exceptionModuleName) && void 0 !== i ? i : null,
                                minidump_relative_crash_address: null !== (a = l.relativeCrashAddress) && void 0 !== a ? a : null,
                                minidump_exception_module_version: null !== (s = l.exceptionModuleVersion) && void 0 !== s ? s : null,
                                minidump_exception_module_code_id: null !== (o = l.exceptionModuleCodeId) && void 0 !== o ? o : null
                            });
                        }
                });
        }
        z.delete(e),
            J.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                    .concat(null != t ? t : 'DISCONNECTED'),
                B
            ),
            (Z = Array.from(B.values()).some((e) => 'READY' === e));
    }
}
async function er(e) {
    if (M.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH)) {
        if (B.size > 0) {
            $ = 'reconcile.getOverlayURL';
            let t = await el();
            ($ = 'reconcile.createHostProcess'), e.createHostProcess(t, ev, em);
        } else ($ = 'reconcile.destroyHostProcess'), e.destroyHostProcess();
    } else if (V) {
        let t = await el();
        e.createHostProcess(t, ev, em);
    } else e.destroyHostProcess();
}
async function ei(e) {
    !ee.isMutexHeld() && J.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let t = B.get(e);
    if (null != t) {
        J.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(t));
        return;
    }
    $ = 'attach.getOverlayModule';
    let n = await eu();
    ($ = 'attach.transitionOverlayPIDStatus'), en(e, 'ATTACHING'), ($ = 'attach.attachToProcess');
    let r = await I.YT(e);
    null == r ? (($ = 'attach.transitionOverlayPIDStatus (CONNECTING)'), en(e, 'CONNECTING', 'ATTACHING'), ($ = 'attach.reconcileHostProcess'), await er(n), n.connectProcess(e)) : (($ = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), en(e, 'HOOK_FAILED', 'ATTACHING'), J.warn('Could not hook to pid='.concat(e, ', error=').concat(r)));
}
async function ea(e) {
    if ((!ee.isMutexHeld() && J.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !B.has(e))) {
        J.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    $ = 'detach.getOverlayModule';
    let t = await eu();
    ($ = 'detach.transitionOverlayPIDStatus'), en(e, null), e !== P.Js && (($ = 'detach.cancelAttachToProcess'), I.pn(e), ($ = 'detach.disconnectProcess'), t.disconnectProcess(e)), ($ = 'detach.reconcileHostProcess'), await er(t);
}
async function es(e) {
    var t;
    if (
        (J.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: H,
            action: e
        }),
        !ee.isMutexHeld() && J.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !H && null != e)
    ) {
        J.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function n(t) {
        if (!(t in G)) {
            J.error('Unexpected. '.concat(t, ' is not a tracked game?'), G, e);
            return;
        }
        let n = G[t];
        delete G[t];
        try {
            await n.deconstructor();
        } catch (e) {
            J.error('Failed to deconstruct tracked game '.concat(t), e);
        }
    }
    if (null == e || !V) {
        for (let t of (J.verbose('updateIntendedOverlayPIDs: Removing all.', G, e), Object.keys(G))) await n(Number(t));
        return;
    }
    for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
        let t = b.ZP.getGameOverlayStatus(n);
        if ((J.verbose('updateIntendedOverlayPIDs: newGame', n, t), null != t && t.enabled))
            switch ((n.pid in G && J.error('Unexpected. '.concat(n.pid, ' is being added twice?'), G, e), t.overlayMethod)) {
                case U.gl.OutOfProcess:
                    let r = await e_();
                    await r.trackGame(n.pid),
                        (G[n.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                let e = await e_();
                                await e.untrackGame(n.pid);
                            }
                        });
                    break;
                case U.gl.Hook:
                    !B.has(n.pid) && (await ei(n.pid)),
                        (G[n.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                await ea(n.pid);
                            }
                        });
                    break;
                case U.gl.Disabled:
                    J.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    J.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(t.overlayMethod));
            }
    }
    for (let t of e.removed) J.verbose('updateIntendedOverlayPIDs: removedGame', t), await n(t.pid);
}
let eo = et('updateIntendedOverlayPIDs', (e) => es(e));
function el() {
    return new Promise((e) => {
        eL.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eu = (() => {
    let e = null;
    async function t() {
        if (!U.iP) throw (J.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
        try {
            return (
                await M.ZP.ensureModule('discord_overlay2'),
                (function (e) {
                    for (let t of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[t] && (J.info('polyfilling OverlayModule.'.concat(t, '(); Overlay module is probably out of date.')), (e[t] = () => void 0));
                    return e;
                })(M.ZP.requireModule('discord_overlay2'))
            );
        } catch (e) {
            throw (J.error('failed ensuring discord_overlay2', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
async function ec(e) {
    var t, n, r, i, a, s, o;
    try {
        let t = (await el()) + '&oop=true&pid='.concat(e);
        await (null === v.Z || void 0 === v.Z ? void 0 : null === (i = v.Z.globalOverlay) || void 0 === i ? void 0 : null === (r = i.openWindow) || void 0 === r ? void 0 : r.call(i, t));
    } catch (e) {
        J.log('globalOverlay: Failed to open overlay: '.concat(e), e), null === v.Z || void 0 === v.Z || null === (s = v.Z.window) || void 0 === s || s.close(null === v.Z || void 0 === v.Z ? void 0 : null === (a = v.Z.globalOverlay) || void 0 === a ? void 0 : a.WINDOW_KEY);
    }
    return (W = e), null !== (o = await (null === v.Z || void 0 === v.Z ? void 0 : null === (n = v.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(null === v.Z || void 0 === v.Z ? void 0 : null === (t = v.Z.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== o ? o : '';
}
function ed() {
    var e, t;
    null === v.Z || void 0 === v.Z || null === (t = v.Z.window) || void 0 === t || t.close(null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), (W = null);
}
function ef(e) {
    let t = D.Z.getGameForPID(e);
    g.Z.setAssociatedGame(null != W ? W : -1, e, t);
}
let e_ = (() => {
    let e = null;
    async function t() {
        if (!U.iP || !(0, P.VS)()) throw (J.error('Attempted to load out of process overlay on an unsupported platform.'), Error('Out of Process Overlay is not supported on this platform.'));
        try {
            var e, t, n;
            let { OutOfProcess: r } = await eu();
            return null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setClickZoneCallback(ey), r.setHostWindowCallbacks(ec, ed, ef), r.setFocusCallback(em), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, eg), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, eE), r;
        } catch (e) {
            throw (J.error('failed loading out of process overlay', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eh() {
    return eo({
        added: b.ZP.getRunningGames(),
        removed: []
    });
}
let ep = et('setOverlayEnabled', async (e, t) => {
    if (!U.iP || (V === e && j === t)) return;
    (V = e),
        (j = t),
        y.v.update({
            enabled: e,
            legacyEnabled: t
        }),
        eL.emitChange();
    let n = await eu(),
        { OutOfProcess: r } = n;
    (0, P.vR)(null != r), await es(void 0), await er(n), V && eh();
});
function em(e) {
    if (0 === e) {
        var t, n;
        if ((null !== (n = null === (t = G[null != Y ? Y : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : U.gl.Disabled) === U.gl.OutOfProcess) return;
    }
    g.Z.setFocusedPID(0 === e ? null : e);
}
function eg(e) {
    Y = null;
}
function eE(e) {
    g.Z.successfullyShown(e);
}
function ev(e, t, n) {
    var r;
    let i = null === (r = b.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
        a = R.Z.getGameByName(i),
        s = {
            game_name: i,
            game_id: null == a ? null : a.id,
            success: t,
            ...n
        };
    (0, m.te)(P.qU, O.Z.getDefaultLayout(P.qU), {
        width: n.graphics_width,
        height: n.graphics_height
    }),
        L.default.track(k.rMx.OVERLAY_HOOK_RESULT, s),
        J.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s),
        t ? en(e, 'CONNECTED', 'CONNECTING') : en(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eI() {
    let e = C.default.getToken(),
        t = C.default.getId();
    if (null != e)
        S.lW({
            type: k.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: 'UPDATE_TOKEN',
                    token: e,
                    userId: t
                }
            ]
        });
}
async function eS(e) {
    let t = await eu();
    null != Y &&
        Y !== P.Js &&
        t.sendCommand(Y, {
            message: 'intercept_input',
            intercept: !e
        }),
        (0, P.VS)() && (await e_()).setInteractionEnabled(!e);
}
function eT(e) {
    if (e) {
        let t = b.ZP.getVisibleGame(),
            n = null == t ? null : b.ZP.getGameOverlayStatus(t);
        (null == n ? void 0 : n.overlayMethod) === U.gl.OutOfProcess ? eS(e) : setTimeout(() => eS(e), 200);
    } else eS(e);
}
let eb = null;
function ey(e, t, n) {
    g.Z.relayClickZoneClicked(e, t, n);
}
async function eA(e) {
    if (!!(0, P.VS)())
        (await e_()).setClickZones(
            e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }))
        );
}
function eN(e) {
    return (
        !(q || !Z || Q.has(e.type)) &&
        ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
            (e = {
                ...e,
                settings: {
                    type: e.settings.type,
                    proto: (0, N.cv)(e.settings.type, e.settings.proto)
                }
            }),
        F.add(e),
        null == i && (i = setTimeout(eC, 1)),
        !1)
    );
}
function eC() {
    if ((null != i && (clearTimeout(i), (i = null)), !Z)) {
        F.clear();
        return;
    }
    F.size > 0 &&
        (S.lW({
            type: k.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(F)
        }),
        F.clear());
}
function eR(e) {
    return null != e && (0, x.y)(e, K);
}
function eO(e) {
    switch ((0, e.type)) {
        case k.BmY.CONNECT:
            let t = C.default.getToken();
            if (null == t) break;
            (0, m.te)(P.qU, O.Z.getDefaultLayout(P.qU)),
                Promise.all([(0, A.Z)(t, e.pid), f.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    S.lW({
                        type: k.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r
                    }),
                        S.lW({
                            type: k.BmY.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n]
                        }),
                        en(i, 'READY'),
                        g.Z.overlayReady(i);
                });
            break;
        case k.BmY.DISPATCH:
            if (null != e.payloads) {
                var n;
                (n = e.payloads), (q = !0), n.forEach((e) => _.Z.dispatch(e)), (q = !1);
            }
            break;
        case k.BmY.LOG_MESSAGES:
            J.info('[overlay data received]', e.payload);
    }
}
class eD extends (s = f.ZP.Store) {
    initialize() {
        if (!(!U.iP || __OVERLAY__)) this.waitFor(b.ZP, C.default), S.sr(eO, eR), C.default.addChangeListener(eI), ep(y.v.enabled, y.v.legacyEnabled), _.Z.addInterceptor(eN);
    }
    isInputLocked(e) {
        return !z.has(e);
    }
    isSupported() {
        return U.iP;
    }
    get enabled() {
        return V;
    }
    get legacyEnabled() {
        return j;
    }
    getFocusedPID() {
        return Y;
    }
    isReady(e) {
        return 'READY' === B.get(e);
    }
    isCrashed(e) {
        return 'CRASHED' === B.get(e);
    }
}
(c = 'OverlayBridgeStore'),
    (u = 'displayName') in (l = eD)
        ? Object.defineProperty(l, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = c);
let eL = new eD(
    _.Z,
    __OVERLAY__
        ? {
              OVERLAY_RELAY_CLICK_ZONE_CLICKED: function (e) {
                  let { normalizedMouseX: t, normalizedMouseY: n } = e;
                  setTimeout(() => {
                      let e = Math.ceil(t * window.innerWidth),
                          r = Math.ceil(n * window.innerHeight),
                          i = (0, w.B)('click', e, r);
                      (0, w.J)(i, e, r);
                  }, 50);
              },
              OVERLAY_SET_ASSOCIATED_GAME: function (e) {
                  if (!(0, P.W2)()) return;
                  (0, P.tB)(e.associatedGamePID);
                  let t = () =>
                          new Promise((e) => {
                              requestAnimationFrame(() => {
                                  let t = new MessageChannel();
                                  (t.port1.onmessage = () => {
                                      e();
                                  }),
                                      t.port2.postMessage(void 0);
                              });
                          }),
                      n = 0,
                      r = () => {
                          15 === n ? g.Z.notifyReadyToShow(e.associatedGamePID) : ((n += 1), t().then(r));
                      };
                  r();
              }
          }
        : {
              CONNECTION_OPEN: function () {
                  (H = !0), eh();
              },
              CONNECTION_CLOSED: function () {
                  (H = !1), (Y = null), eo(void 0);
              },
              OVERLAY_SET_ENABLED: function (e) {
                  let { enabled: t, legacyEnabled: n } = e;
                  return ep(t, n), !1;
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  Y = t;
              },
              RUNNING_GAMES_CHANGE: function (e) {
                  eo(e);
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t, pid: n } = e,
                      r = B.get(n);
                  if (!t && !('READY' === r || 'CRASHED' === r)) return;
                  if ((t ? z.delete(n) : z.add(n), X.clear(), null == eb || (clearTimeout(eb), (eb = null), !t)))
                      t
                          ? eT(t)
                          : (eb = setTimeout(() => {
                                eT(t), (eb = null);
                            }, 100));
              },
              OVERLAY_ACTIVATE_REGION: function (e) {
                  let { region: t } = e;
                  X.add(t), eT(!1);
              },
              OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
                  X.clear(), eT(!0);
              },
              RPC_SERVER_READY: function (e) {
                  let { port: t } = e;
                  K = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
                  let n = new URLSearchParams();
                  n.append('build_id', '08f62501e62582d7ee1c8fe5fed4e046fbc7ca4b'), n.append('rpc', String(t)), n.append('rpc_auth_token', K), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
              },
              OVERLAY_CALL_PRIVATE_CHANNEL: function (e) {
                  let { channelId: t, ring: n } = e;
                  setImmediate(() => {
                      E.default.selectPrivateChannel(t), h.Z.call(t, !1, !!n);
                  });
              },
              OVERLAY_JOIN_GAME: function (e) {
                  let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
                  setImmediate(() => {
                      p.Z.join({
                          userId: t,
                          sessionId: n,
                          applicationId: r,
                          channelId: i,
                          messageId: a
                      }),
                          null != Y && g.Z.setLocked(!0, Y);
                  });
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t } = e;
                  en(t, 'CRASHED');
              },
              RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                  if ((J.verbose('handleGameToggleOverlay', e), !('pid' in e.game))) {
                      J.verbose('handleGameToggleOverlay: Game was not a RunningGame.', e);
                      return;
                  }
                  let t = [e.game];
                  eo({
                      added: e.newEnabledValue ? t : [],
                      removed: e.newEnabledValue ? [] : t
                  });
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  eA(t);
              },
              OVERLAY_SET_ASSOCIATED_GAME: function (e) {
                  var t, n;
                  if ((null !== (n = null === (t = G[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : U.gl.Disabled) !== U.gl.OutOfProcess) return;
                  let r = B.get(e.previousAssociatedGamePID);
                  null != r && (B.delete(e.previousAssociatedGamePID), B.set(e.associatedGamePID, r)), z.delete(e.previousAssociatedGamePID), (W = e.associatedGamePID);
              },
              OVERLAY_NOTIFY_READY_TO_SHOW: function (e) {
                  e_().then((t) => {
                      null == t || t.readyToShow(e.pid);
                  });
              }
          }
);
t.Z = eL;
