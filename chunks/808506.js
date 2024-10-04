let r, i;
n.d(t, {
    Y: function () {
        return eO;
    }
});
var a,
    o,
    s = n(47120);
var l = n(411104);
var u = n(518263);
var c = n(970173);
var d = n(520712);
var _ = n(268111);
var E = n(941497);
var f = n(32026);
var h = n(480839);
var p = n(744285);
var m = n(492257);
var I = n(873817);
var T = n(642549);
var g = n(610138);
var S = n(216116);
var A = n(78328);
var v = n(815648);
var N = n(177593);
var O = n(807864),
    R = n(442837),
    C = n(570140),
    y = n(26151),
    L = n(224706),
    b = n(765250),
    D = n(13245),
    M = n(287734),
    P = n(579806),
    U = n(887278),
    w = n(490029),
    x = n(710845),
    G = n(594190),
    k = n(454991),
    B = n(633565),
    F = n(48481),
    Z = n(314897),
    V = n(77498),
    H = n(355863),
    Y = n(449224),
    j = n(626135),
    W = n(866119),
    K = n(671999),
    z = n(998502),
    q = n(145597),
    Q = n(981631),
    X = n(987650);
function $(e, t, n) {
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
!(function (e) {
    (e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED');
})(a || (a = {}));
let J = {},
    ee = new Map(),
    et = !1,
    en = new Set(),
    er = !1,
    ei = !1,
    ea = !1,
    eo = null,
    es = null,
    el = '',
    eu = new Set(),
    ec = !1,
    ed = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'VERIFY_FAILURE', 'VERIFY_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'MENTION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'SEARCH_MODAL_OPEN', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'MENTION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'SEARCH_MODAL_CLOSE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    e_ = new Set(),
    eE = !1,
    ef = !0,
    eh = new x.Z('OverlayBridgeStore');
!ef && (eh.verbose = () => {});
let ep = 'none',
    em = (0, O.H)({
        onContention: (e, t) => eh.verbose('overlayLock contention: lastMutexCall '.concat(ep)),
        onContentionResolved: () => eh.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(ep, '}');
            eh.error(n),
                j.default.track(Q.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n
                });
        },
        timeoutMs: 180000
    });
function eI(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        em(() => t(...r), e);
    };
}
function eT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = ee.get(e);
    if ((null === n || r === n) && r !== t) {
        if ((null == t ? ee.delete(e) : ee.set(e, t), null == t || 'CRASHED' === t)) {
            var i;
            eo = null;
            let e = null === P.Z || void 0 === P.Z ? void 0 : null === (i = P.Z.fileManager) || void 0 === i ? void 0 : i.uploadDiscordHookCrashes;
            null != e &&
                e().then((e) => {
                    if (!!Array.isArray(e) && 0 !== e.length)
                        for (let l of (eh.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                            var t, n, r, i, a, o, s;
                            if (null == l) continue;
                            let e = null != l.processName ? V.Z.getGameByExecutable(l.processName) : null;
                            j.default.track(Q.rMx.OVERLAY_HOOK_CRASHED, {
                                process_name: null == l ? void 0 : l.processName,
                                game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                                game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                                minidump_exception_type: null !== (r = l.exceptionString) && void 0 !== r ? r : null,
                                minidump_exception_module_name: null !== (i = l.exceptionModuleName) && void 0 !== i ? i : null,
                                minidump_relative_crash_address: null !== (a = l.relativeCrashAddress) && void 0 !== a ? a : null,
                                minidump_exception_module_version: null !== (o = l.exceptionModuleVersion) && void 0 !== o ? o : null,
                                minidump_exception_module_code_id: null !== (s = l.exceptionModuleCodeId) && void 0 !== s ? s : null
                            });
                        }
                });
        }
        eu.delete(e),
            eh.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                    .concat(null != t ? t : 'DISCONNECTED'),
                ee
            ),
            (et = Array.from(ee.values()).some((e) => 'READY' === e));
    }
}
async function eg(e) {
    if (z.ZP.supportsFeature(Q.eRX.CREATE_HOST_ON_ATTACH)) {
        if (ee.size > 0) {
            ep = 'reconcile.getOverlayURL';
            let t = await eO();
            (ep = 'reconcile.createHostProcess'), e.createHostProcess(t, eG, eU);
        } else (ep = 'reconcile.destroyHostProcess'), e.destroyHostProcess();
    } else if (er) {
        let t = await eO();
        e.createHostProcess(t, eG, eU);
    } else e.destroyHostProcess();
}
async function eS(e) {
    !em.isMutexHeld() && eh.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let t = ee.get(e);
    if (null != t) {
        eh.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(t));
        return;
    }
    ep = 'attach.getOverlayModule';
    let n = await eR();
    (ep = 'attach.transitionOverlayPIDStatus'), eT(e, 'ATTACHING'), (ep = 'attach.attachToProcess');
    let r = await U.YT(e);
    null == r ? ((ep = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eT(e, 'CONNECTING', 'ATTACHING'), (ep = 'attach.reconcileHostProcess'), await eg(n), n.connectProcess(e)) : ((ep = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eT(e, 'HOOK_FAILED', 'ATTACHING'), eh.warn('Could not hook to pid='.concat(e, ', error=').concat(r)));
}
async function eA(e) {
    if ((!em.isMutexHeld() && eh.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !ee.has(e))) {
        eh.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    ep = 'detach.getOverlayModule';
    let t = await eR();
    (ep = 'detach.transitionOverlayPIDStatus'), eT(e, null), e !== q.Js && ((ep = 'detach.cancelAttachToProcess'), U.pn(e), (ep = 'detach.disconnectProcess'), t.disconnectProcess(e)), (ep = 'detach.reconcileHostProcess'), await eg(t);
}
async function ev(e) {
    var t;
    if (
        (eh.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: ea,
            action: e
        }),
        !em.isMutexHeld() && eh.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !ea && null != e)
    ) {
        eh.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function n(t) {
        if (!(t in J)) {
            eh.error('Unexpected. '.concat(t, ' is not a tracked game?'), J, e);
            return;
        }
        let n = J[t];
        delete J[t];
        try {
            await n.deconstructor();
        } catch (e) {
            eh.error('Failed to deconstruct tracked game '.concat(t), e);
        }
    }
    if (null == e || !er) {
        for (let t of (eh.verbose('updateIntendedOverlayPIDs: Removing all.', J, e), Object.keys(J))) await n(Number(t));
        return;
    }
    for (let n of null !== (t = e.added) && void 0 !== t ? t : []) {
        let t = G.ZP.getGameOverlayStatus(n);
        if ((eh.verbose('updateIntendedOverlayPIDs: newGame', n, t), null != t && t.enabled))
            switch ((n.pid in J && eh.error('Unexpected. '.concat(n.pid, ' is being added twice?'), J, e), t.overlayMethod)) {
                case X.gl.OutOfProcess:
                    let r = await eD();
                    await r.trackGame(n.pid),
                        (J[n.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                let e = await eD();
                                await e.untrackGame(n.pid);
                            }
                        });
                    break;
                case X.gl.Hook:
                    !ee.has(n.pid) && (await eS(n.pid)),
                        (J[n.pid] = {
                            method: t.overlayMethod,
                            deconstructor: async () => {
                                await eA(n.pid);
                            }
                        });
                    break;
                case X.gl.Disabled:
                    eh.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    eh.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(t.overlayMethod));
            }
    }
    for (let t of e.removed) eh.verbose('updateIntendedOverlayPIDs: removedGame', t), await n(t.pid);
}
let eN = eI('updateIntendedOverlayPIDs', (e) => ev(e));
function eO() {
    return new Promise((e) => {
        tr.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eR = (() => {
    let e = null;
    function t(e) {
        for (let t of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[t] && (eh.info('polyfilling OverlayModule.'.concat(t, '(); Overlay module is probably out of date.')), (e[t] = () => void 0));
        return e;
    }
    async function n() {
        if (!X.iP) throw (eh.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
        try {
            return await z.ZP.ensureModule('discord_overlay2'), t(z.ZP.requireModule('discord_overlay2'));
        } catch (e) {
            throw (eh.error('failed ensuring discord_overlay2', e), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
async function eC(e) {
    var t, n, r, i, a, o, s;
    try {
        let t = (await eO()) + '&oop=true&pid='.concat(e);
        await (null === P.Z || void 0 === P.Z ? void 0 : null === (i = P.Z.globalOverlay) || void 0 === i ? void 0 : null === (r = i.openWindow) || void 0 === r ? void 0 : r.call(i, t));
    } catch (e) {
        eh.log('globalOverlay: Failed to open overlay: '.concat(e), e), null === P.Z || void 0 === P.Z || null === (o = P.Z.window) || void 0 === o || o.close(null === P.Z || void 0 === P.Z ? void 0 : null === (a = P.Z.globalOverlay) || void 0 === a ? void 0 : a.WINDOW_KEY);
    }
    return (es = e), null !== (s = await (null === P.Z || void 0 === P.Z ? void 0 : null === (n = P.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(null === P.Z || void 0 === P.Z ? void 0 : null === (t = P.Z.globalOverlay) || void 0 === t ? void 0 : t.WINDOW_KEY))) && void 0 !== s ? s : '';
}
function ey() {
    var e, t;
    null === P.Z || void 0 === P.Z || null === (t = P.Z.window) || void 0 === t || t.close(null === P.Z || void 0 === P.Z ? void 0 : null === (e = P.Z.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), (es = null);
}
function eL(e) {
    let t = Y.Z.getGameForPID(e);
    D.Z.setAssociatedGame(null != es ? es : -1, e, t);
}
function eb(e) {
    eD().then((t) => {
        null == t || t.readyToShow(e.pid);
    });
}
let eD = (() => {
    let e = null;
    async function t() {
        if (!X.iP || !(0, q.VS)()) throw (eh.error('Attempted to load out of process overlay on an unsupported platform.'), Error('Out of Process Overlay is not supported on this platform.'));
        try {
            var e, t, n;
            let { OutOfProcess: r } = await eR();
            return null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setClickZoneCallback(e3), r.setHostWindowCallbacks(eC, ey, eL), r.setFocusCallback(eU), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, ew), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, ex), r;
        } catch (e) {
            throw (eh.error('failed loading out of process overlay', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function eM() {
    return eN({
        added: G.ZP.getRunningGames(),
        removed: []
    });
}
let eP = eI('setOverlayEnabled', async (e, t) => {
    if (!X.iP || (er === e && ei === t)) return;
    (er = e),
        (ei = t),
        k.v.update({
            enabled: e,
            legacyEnabled: t
        }),
        tr.emitChange();
    let n = await eR(),
        { OutOfProcess: r } = n;
    (0, q.vR)(null != r), await ev(void 0), await eg(n), er && eM();
});
function eU(e) {
    if (0 === e) {
        var t, n;
        if ((null !== (n = null === (t = J[null != eo ? eo : 0]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : X.gl.Disabled) === X.gl.OutOfProcess) return;
    }
    D.Z.setFocusedPID(0 === e ? null : e);
}
function ew(e) {
    eo = null;
}
function ex(e) {
    D.Z.successfullyShown(e);
}
function eG(e, t, n) {
    var r;
    let i = null === (r = G.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
        a = V.Z.getGameByName(i),
        o = {
            game_name: i,
            game_id: null == a ? null : a.id,
            success: t,
            ...n
        };
    (0, b.te)(q.qU, H.Z.getDefaultLayout(q.qU), {
        width: n.graphics_width,
        height: n.graphics_height
    }),
        j.default.track(Q.rMx.OVERLAY_HOOK_RESULT, o),
        eh.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), o),
        t ? eT(e, 'CONNECTED', 'CONNECTING') : eT(e, 'CONNECT_FAILED', 'CONNECTING');
}
function ek(e) {
    let { pid: t } = e;
    eo = t;
}
function eB(e) {
    let { pid: t } = e;
    eT(t, 'CRASHED');
}
function eF() {
    (ea = !0), eM();
}
function eZ() {
    (ea = !1), (eo = null), eN(void 0);
}
function eV() {
    let e = Z.default.getToken(),
        t = Z.default.getId();
    if (null != e)
        w.lW({
            type: Q.BmY.DISPATCH,
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
function eH(e) {
    let { enabled: t, legacyEnabled: n } = e;
    return eP(t, n), !1;
}
function eY(e) {
    eN(e);
}
async function ej(e) {
    let t = await eR();
    null != eo &&
        eo !== q.Js &&
        t.sendCommand(eo, {
            message: 'intercept_input',
            intercept: !e
        }),
        (0, q.VS)() && (await eD()).setInteractionEnabled(!e);
}
function eW(e) {
    if (e) {
        let t = G.ZP.getVisibleGame(),
            n = null == t ? null : G.ZP.getGameOverlayStatus(t);
        (null == n ? void 0 : n.overlayMethod) === X.gl.OutOfProcess ? ej(e) : setTimeout(() => ej(e), 200);
    } else ej(e);
}
let eK = null;
function ez(e) {
    let { locked: t, pid: n } = e,
        r = ee.get(n);
    if (!t && !('READY' === r || 'CRASHED' === r)) return;
    if ((t ? eu.delete(n) : eu.add(n), e_.clear(), null == eK || (clearTimeout(eK), (eK = null), !t)))
        t
            ? eW(t)
            : (eK = setTimeout(() => {
                  eW(t), (eK = null);
              }, 100));
}
function eq(e) {
    let { region: t } = e;
    e_.add(t), eW(!1);
}
function eQ() {
    e_.clear(), eW(!0);
}
function eX(e) {
    let { port: t } = e;
    el = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', 'b045f103003d1b7a5ad26cbe06e640efd28e443f'), n.append('rpc', String(t)), n.append('rpc_auth_token', el), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function e$(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        M.default.selectPrivateChannel(t), y.Z.call(t, !1, !!n);
    });
}
function eJ(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        L.Z.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a
        }),
            null != eo && D.Z.setLocked(!0, eo);
    });
}
function e0(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, K.B)('click', e, r);
        (0, K.J)(i, e, r);
    }, 50);
}
function e1(e) {
    if (!(0, q.W2)()) return;
    (0, q.tB)(e.associatedGamePID);
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
            15 === n ? D.Z.notifyReadyToShow(e.associatedGamePID) : ((n += 1), t().then(r));
        };
    r();
}
function e2(e) {
    var t, n;
    if ((null !== (n = null === (t = J[e.previousAssociatedGamePID]) || void 0 === t ? void 0 : t.method) && void 0 !== n ? n : X.gl.Disabled) !== X.gl.OutOfProcess) return;
    let r = ee.get(e.previousAssociatedGamePID);
    null != r && (ee.delete(e.previousAssociatedGamePID), ee.set(e.associatedGamePID, r)), eu.delete(e.previousAssociatedGamePID), (es = e.associatedGamePID);
}
function e3(e, t, n) {
    D.Z.relayClickZoneClicked(e, t, n);
}
async function e4(e) {
    if (!!(0, q.VS)())
        (await eD()).setClickZones(
            e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }))
        );
}
function e5(e) {
    let { zones: t } = e;
    e4(t);
}
function e6(e) {
    (ec = !0), e.forEach((e) => C.Z.dispatch(e)), (ec = !1);
}
function e7(e) {
    return (
        !(ec || !et || ed.has(e.type)) &&
        ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
            (e = {
                ...e,
                settings: {
                    type: e.settings.type,
                    proto: (0, F.cv)(e.settings.type, e.settings.proto)
                }
            }),
        en.add(e),
        null == i && (i = setTimeout(e8, 1)),
        !1)
    );
}
function e8() {
    if ((null != i && (clearTimeout(i), (i = null)), !et)) {
        en.clear();
        return;
    }
    en.size > 0 &&
        (w.lW({
            type: Q.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(en)
        }),
        en.clear());
}
function e9(e) {
    return null != e && (0, W.y)(e, el);
}
function te(e) {
    switch ((eE && eh.info('[app data received]', e), e.type)) {
        case Q.BmY.CONNECT:
            let t = Z.default.getToken();
            if (null == t) break;
            (0, b.te)(q.qU, H.Z.getDefaultLayout(q.qU)),
                Promise.all([(0, B.Z)(t, e.pid), R.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    w.lW({
                        type: Q.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r
                    }),
                        w.lW({
                            type: Q.BmY.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n]
                        }),
                        eT(i, 'READY'),
                        D.Z.overlayReady(i);
                });
            break;
        case Q.BmY.DISPATCH:
            null != e.payloads && e6(e.payloads);
            break;
        case Q.BmY.LOG_MESSAGES:
            eh.info('[overlay data received]', e.payload);
    }
}
function tt(e) {
    if ((eh.verbose('handleGameToggleOverlay', e), !('pid' in e.game))) {
        eh.verbose('handleGameToggleOverlay: Game was not a RunningGame.', e);
        return;
    }
    let t = [e.game];
    eN({
        added: e.newEnabledValue ? t : [],
        removed: e.newEnabledValue ? [] : t
    });
}
class tn extends (o = R.ZP.Store) {
    initialize() {
        if (!(!X.iP || __OVERLAY__)) this.waitFor(G.ZP, Z.default), w.sr(te, e9), Z.default.addChangeListener(eV), eP(k.v.enabled, k.v.legacyEnabled), C.Z.addInterceptor(e7);
    }
    isInputLocked(e) {
        return !eu.has(e);
    }
    isSupported() {
        return X.iP;
    }
    get enabled() {
        return er;
    }
    get legacyEnabled() {
        return ei;
    }
    getFocusedPID() {
        return eo;
    }
    isReady(e) {
        return 'READY' === ee.get(e);
    }
    isCrashed(e) {
        return 'CRASHED' === ee.get(e);
    }
}
$(tn, 'displayName', 'OverlayBridgeStore');
let tr = new tn(
    C.Z,
    __OVERLAY__
        ? {
              OVERLAY_RELAY_CLICK_ZONE_CLICKED: e0,
              OVERLAY_SET_ASSOCIATED_GAME: e1
          }
        : {
              CONNECTION_OPEN: eF,
              CONNECTION_CLOSED: eZ,
              OVERLAY_SET_ENABLED: eH,
              OVERLAY_FOCUSED: ek,
              RUNNING_GAMES_CHANGE: eY,
              OVERLAY_SET_INPUT_LOCKED: ez,
              OVERLAY_ACTIVATE_REGION: eq,
              OVERLAY_DEACTIVATE_ALL_REGIONS: eQ,
              RPC_SERVER_READY: eX,
              OVERLAY_CALL_PRIVATE_CHANNEL: e$,
              OVERLAY_JOIN_GAME: eJ,
              OVERLAY_CRASHED: eB,
              RUNNING_GAME_TOGGLE_OVERLAY: tt,
              OVERLAY_SET_CLICK_ZONES: e5,
              OVERLAY_SET_ASSOCIATED_GAME: e2,
              OVERLAY_NOTIFY_READY_TO_SHOW: eb
          }
);
t.Z = tr;
