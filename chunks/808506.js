let i, a;
r.d(n, {
    Y: function () {
        return eC;
    }
});
var s,
    o,
    l = r(47120);
var u = r(411104);
var c = r(518263);
var d = r(970173);
var f = r(520712);
var _ = r(268111);
var h = r(941497);
var p = r(32026);
var m = r(480839);
var g = r(744285);
var E = r(492257);
var v = r(873817);
var I = r(642549);
var T = r(610138);
var b = r(216116);
var y = r(78328);
var S = r(815648);
var A = r(177593);
var N = r(807864),
    C = r(442837),
    R = r(570140),
    O = r(26151),
    D = r(224706),
    L = r(765250),
    x = r(13245),
    w = r(287734),
    P = r(579806),
    M = r(887278),
    k = r(490029),
    U = r(710845),
    B = r(594190),
    G = r(454991),
    Z = r(633565),
    F = r(610394),
    V = r(48481),
    j = r(314897),
    H = r(77498),
    Y = r(355863),
    W = r(449224),
    K = r(626135),
    z = r(866119),
    q = r(671999),
    Q = r(998502),
    X = r(145597),
    J = r(981631),
    $ = r(987650);
function ee(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED');
})(s || (s = {}));
let et = {},
    en = new Map(),
    er = !1,
    ei = new Set(),
    ea = !1,
    es = !1,
    eo = !1,
    el = null,
    eu = null,
    ec = '',
    ed = new Set(),
    ef = !1,
    e_ = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'VERIFY_FAILURE', 'VERIFY_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'MENTION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'MENTION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    eh = new Set(),
    ep = !1,
    em = !0,
    eg = new U.Z('OverlayBridgeStore');
!em && (eg.verbose = () => {});
let eE = 'none',
    ev = (0, N.H)({
        onContention: (e, n) => eg.verbose('overlayLock contention: lastMutexCall '.concat(eE)),
        onContentionResolved: () => eg.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, n) => {
            let r = 'overlayLock: lastMutexCall '.concat(eE, '}');
            eg.error(r),
                K.default.track(J.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: r
                });
        },
        timeoutMs: 180000
    });
function eI(e, n) {
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        ev(() => n(...i), e);
    };
}
function eT(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = en.get(e);
    if ((null === r || i === r) && i !== n) {
        if ((null == n ? en.delete(e) : en.set(e, n), null == n || 'CRASHED' === n)) {
            var a;
            el = null;
            let e = null === P.Z || void 0 === P.Z ? void 0 : null === (a = P.Z.fileManager) || void 0 === a ? void 0 : a.uploadDiscordHookCrashes;
            null != e &&
                e().then((e) => {
                    if (!!Array.isArray(e) && 0 !== e.length)
                        for (let u of (eg.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                            var n, r, i, a, s, o, l;
                            if (null == u) continue;
                            let e = null != u.processName ? H.Z.getGameByExecutable(u.processName) : null;
                            K.default.track(J.rMx.OVERLAY_HOOK_CRASHED, {
                                process_name: null == u ? void 0 : u.processName,
                                game_name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : null,
                                game_id: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : null,
                                minidump_exception_type: null !== (i = u.exceptionString) && void 0 !== i ? i : null,
                                minidump_exception_module_name: null !== (a = u.exceptionModuleName) && void 0 !== a ? a : null,
                                minidump_relative_crash_address: null !== (s = u.relativeCrashAddress) && void 0 !== s ? s : null,
                                minidump_exception_module_version: null !== (o = u.exceptionModuleVersion) && void 0 !== o ? o : null,
                                minidump_exception_module_code_id: null !== (l = u.exceptionModuleCodeId) && void 0 !== l ? l : null
                            });
                        }
                });
        }
        ed.delete(e),
            eg.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                    .concat(null != n ? n : 'DISCONNECTED'),
                en
            ),
            (er = Array.from(en.values()).some((e) => 'READY' === e));
    }
}
async function eb(e) {
    if (Q.ZP.supportsFeature(J.eRX.CREATE_HOST_ON_ATTACH)) {
        if (en.size > 0) {
            eE = 'reconcile.getOverlayURL';
            let n = await eC();
            (eE = 'reconcile.createHostProcess'), e.createHostProcess(n, eG, ek);
        } else (eE = 'reconcile.destroyHostProcess'), e.destroyHostProcess();
    } else if (ea) {
        let n = await eC();
        e.createHostProcess(n, eG, ek);
    } else e.destroyHostProcess();
}
async function ey(e) {
    !ev.isMutexHeld() && eg.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = en.get(e);
    if (null != n) {
        eg.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(n));
        return;
    }
    eE = 'attach.getOverlayModule';
    let r = await eR();
    (eE = 'attach.transitionOverlayPIDStatus'), eT(e, 'ATTACHING'), (eE = 'attach.attachToProcess');
    let i = await M.YT(e);
    null == i ? ((eE = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eT(e, 'CONNECTING', 'ATTACHING'), (eE = 'attach.reconcileHostProcess'), await eb(r), r.connectProcess(e)) : ((eE = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eT(e, 'HOOK_FAILED', 'ATTACHING'), eg.warn('Could not hook to pid='.concat(e, ', error=').concat(i)));
}
async function eS(e) {
    if ((!ev.isMutexHeld() && eg.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !en.has(e))) {
        eg.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    eE = 'detach.getOverlayModule';
    let n = await eR();
    (eE = 'detach.transitionOverlayPIDStatus'), eT(e, null), e !== X.Js && ((eE = 'detach.cancelAttachToProcess'), M.pn(e), (eE = 'detach.disconnectProcess'), n.disconnectProcess(e)), (eE = 'detach.reconcileHostProcess'), await eb(n);
}
async function eA(e) {
    var n;
    if (
        (eg.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: eo,
            action: e
        }),
        !ev.isMutexHeld() && eg.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !eo && null != e)
    ) {
        eg.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function r(n) {
        if (!(n in et)) {
            eg.error('Unexpected. '.concat(n, ' is not a tracked game?'), et, e);
            return;
        }
        let r = et[n];
        delete et[n];
        try {
            await r.deconstructor();
        } catch (e) {
            eg.error('Failed to deconstruct tracked game '.concat(n), e);
        }
    }
    if (null == e || !ea || F.Z.isOverlayV3Enabled()) {
        for (let n of (eg.verbose('updateIntendedOverlayPIDs: Removing all.', et, e), Object.keys(et))) await r(Number(n));
        return;
    }
    for (let r of null !== (n = e.added) && void 0 !== n ? n : []) {
        let n = B.ZP.getGameOverlayStatus(r);
        if ((eg.verbose('updateIntendedOverlayPIDs: newGame', r, n), null != n && n.enabled))
            switch ((r.pid in et && eg.error('Unexpected. '.concat(r.pid, ' is being added twice?'), et, e), n.overlayMethod)) {
                case $.gl.OutOfProcess:
                    let i = await ew();
                    null == i || i.trackGame(r.pid),
                        (et[r.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                let e = await ew();
                                null == e || e.untrackGame(r.pid);
                            }
                        });
                    break;
                case $.gl.Hook:
                    !en.has(r.pid) && (await ey(r.pid)),
                        (et[r.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eS(r.pid);
                            }
                        });
                    break;
                case $.gl.Disabled:
                    eg.verbose('updateIntendedOverlayPIDs: disabled', r);
                    break;
                default:
                    eg.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod));
            }
    }
    for (let n of e.removed) eg.verbose('updateIntendedOverlayPIDs: removedGame', n), await r(n.pid);
}
let eN = eI('updateIntendedOverlayPIDs', (e) => eA(e));
function eC() {
    return new Promise((e) => {
        ts.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let eR = (() => {
    let e = null;
    function n(e) {
        for (let n of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[n] && (eg.info('polyfilling OverlayModule.'.concat(n, '(); Overlay module is probably out of date.')), (e[n] = () => void 0));
        return e;
    }
    async function r() {
        if (!$.iP) throw (eg.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
        try {
            return await Q.ZP.ensureModule('discord_overlay2'), n(Q.ZP.requireModule('discord_overlay2'));
        } catch (e) {
            throw (eg.error('failed ensuring discord_overlay2', e), e);
        }
    }
    return () => (null == e && (e = r()), e);
})();
async function eO(e) {
    var n, r, i, a, s, o, l;
    try {
        let n = (await eC()) + '&oop=true&pid='.concat(e);
        await (null === P.Z || void 0 === P.Z ? void 0 : null === (a = P.Z.globalOverlay) || void 0 === a ? void 0 : null === (i = a.openWindow) || void 0 === i ? void 0 : i.call(a, n));
    } catch (e) {
        eg.log('globalOverlay: Failed to open overlay: '.concat(e), e), null === P.Z || void 0 === P.Z || null === (o = P.Z.window) || void 0 === o || o.close(null === P.Z || void 0 === P.Z ? void 0 : null === (s = P.Z.globalOverlay) || void 0 === s ? void 0 : s.WINDOW_KEY);
    }
    return (eu = e), null !== (l = await (null === P.Z || void 0 === P.Z ? void 0 : null === (r = P.Z.window) || void 0 === r ? void 0 : r.getNativeHandle(null === P.Z || void 0 === P.Z ? void 0 : null === (n = P.Z.globalOverlay) || void 0 === n ? void 0 : n.WINDOW_KEY))) && void 0 !== l ? l : '';
}
function eD() {
    var e, n;
    null === P.Z || void 0 === P.Z || null === (n = P.Z.window) || void 0 === n || n.close(null === P.Z || void 0 === P.Z ? void 0 : null === (e = P.Z.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY), (eu = null);
}
function eL(e) {
    let n = W.Z.getGameForPID(e);
    x.Z.setAssociatedGame(null != eu ? eu : -1, e, n);
}
function ex(e) {
    ew().then((n) => {
        null == n || n.readyToShow(e.pid);
    });
}
let ew = (() => {
    let e = null;
    async function n() {
        if (F.Z.isOverlayV3Enabled()) return null;
        if (!$.iP || !(0, X.VS)()) throw (eg.error('Attempted to load out of process overlay on an unsupported platform.'), Error('Out of Process Overlay is not supported on this platform.'));
        try {
            var e, n, r;
            let { OutOfProcess: i } = await eR();
            return null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setClickZoneCallback(e5), i.setHostWindowCallbacks(eO, eD, eL), i.setFocusCallback(ek), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, eU), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, eB), i;
        } catch (e) {
            throw (eg.error('failed loading out of process overlay', e), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function eP() {
    return eN({
        added: B.ZP.getRunningGames(),
        removed: []
    });
}
let eM = eI('setOverlayEnabled', async (e, n, r) => {
    if (!$.iP || F.Z.isOverlayV3Enabled() || (ea === e && es === n)) return;
    (ea = e),
        (es = n),
        G.v.update({
            enabled: e,
            legacyEnabled: n,
            global: r
        }),
        ts.emitChange();
    let i = await eR(),
        { OutOfProcess: a } = i;
    (0, X.vR)(null != a), await eA(void 0), await eb(i), ea && eP();
});
function ek(e) {
    if (0 === e) {
        var n, r;
        if ((null !== (r = null === (n = et[null != el ? el : 0]) || void 0 === n ? void 0 : n.method) && void 0 !== r ? r : $.gl.Disabled) === $.gl.OutOfProcess) return;
    }
    x.Z.setFocusedPID(0 === e ? null : e);
}
function eU(e) {
    el = null;
}
function eB(e) {
    x.Z.successfullyShown(e);
}
function eG(e, n, r) {
    var i;
    let a = null === (i = B.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        s = H.Z.getGameByName(a),
        o = {
            game_name: a,
            game_id: null == s ? null : s.id,
            success: n,
            ...r
        };
    (0, L.te)(X.qU, Y.Z.getDefaultLayout(X.qU), 0, {
        width: r.graphics_width,
        height: r.graphics_height
    }),
        K.default.track(J.rMx.OVERLAY_HOOK_RESULT, o),
        eg.info('Overlay connection to '.concat(e, ' ').concat(n ? 'succeeded' : 'failed'), o),
        n ? eT(e, 'CONNECTED', 'CONNECTING') : eT(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eZ(e) {
    let { pid: n } = e;
    el = n;
}
function eF(e) {
    let { pid: n } = e;
    eT(n, 'CRASHED');
}
function eV() {
    (eo = !0), eP();
}
function ej() {
    (eo = !1), (el = null), eN(void 0);
}
function eH() {
    return !0;
}
function eY() {
    let e = j.default.getToken(),
        n = j.default.getId();
    if (null != e)
        k.lW({
            type: J.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: 'UPDATE_TOKEN',
                    token: e,
                    userId: n
                }
            ]
        });
}
function eW(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    return eM(n, r, i), !1;
}
function eK(e) {
    eN(e);
}
async function ez(e) {
    let n = await eR();
    if (
        (null != el &&
            el !== X.Js &&
            n.sendCommand(el, {
                message: 'intercept_input',
                intercept: !e
            }),
        (0, X.VS)())
    ) {
        let n = await ew();
        null == n || n.setInteractionEnabled(!e);
    }
}
function eq(e) {
    if (e) {
        let n = B.ZP.getVisibleGame(),
            r = null == n ? null : B.ZP.getGameOverlayStatus(n);
        (null == r ? void 0 : r.overlayMethod) === $.gl.OutOfProcess ? ez(e) : setTimeout(() => ez(e), 200);
    } else ez(e);
}
let eQ = null;
function eX(e) {
    let { locked: n, pid: r } = e,
        i = en.get(r);
    if (!n && !('READY' === i || 'CRASHED' === i)) return;
    if ((n ? ed.delete(r) : ed.add(r), eh.clear(), null == eQ || (clearTimeout(eQ), (eQ = null), !n)))
        n
            ? eq(n)
            : (eQ = setTimeout(() => {
                  eq(n), (eQ = null);
              }, 100));
}
function eJ(e) {
    let { region: n } = e;
    eh.add(n), eq(!1);
}
function e$() {
    eh.clear(), eq(!0);
}
function e0(e) {
    let { port: n } = e;
    ec = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let r = new URLSearchParams();
    r.append('build_id', '6bdd71b0f43da1a288499c2ec8018b9711962d47'), r.append('rpc', String(n)), r.append('rpc_auth_token', ec), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(r.toString()));
}
function e1(e) {
    let { channelId: n, ring: r } = e;
    setImmediate(() => {
        w.default.selectPrivateChannel(n), O.Z.call(n, !1, !!r);
    });
}
function e2(e) {
    let { userId: n, sessionId: r, applicationId: i, channelId: a, messageId: s } = e;
    setImmediate(() => {
        D.Z.join({
            userId: n,
            sessionId: r,
            applicationId: i,
            channelId: a,
            messageId: s
        }),
            null != el && x.Z.setInputLocked(!0, el);
    });
}
function e3(e) {
    let { normalizedMouseX: n, normalizedMouseY: r } = e;
    setTimeout(() => {
        let e = Math.ceil(n * window.innerWidth),
            i = Math.ceil(r * window.innerHeight),
            a = (0, q.B)('click', e, i);
        (0, q.J)(a, e, i);
    }, 50);
}
function e4(e) {
    if (!(0, X.W2)()) return;
    (0, X.tB)(e.associatedGamePID);
    let n = () =>
            new Promise((e) => {
                requestAnimationFrame(() => {
                    let n = new MessageChannel();
                    (n.port1.onmessage = () => {
                        e();
                    }),
                        n.port2.postMessage(void 0);
                });
            }),
        r = 0,
        i = () => {
            15 === r ? x.Z.notifyReadyToShow(e.associatedGamePID) : ((r += 1), n().then(i));
        };
    i();
}
function e6(e) {
    var n, r;
    if ((null !== (r = null === (n = et[e.previousAssociatedGamePID]) || void 0 === n ? void 0 : n.method) && void 0 !== r ? r : $.gl.Disabled) !== $.gl.OutOfProcess) return;
    let i = en.get(e.previousAssociatedGamePID);
    null != i && (en.delete(e.previousAssociatedGamePID), en.set(e.associatedGamePID, i)), ed.delete(e.previousAssociatedGamePID), (eu = e.associatedGamePID);
}
function e5(e, n, r) {
    x.Z.relayClickZoneClicked(e, n, r);
}
async function e7(e) {
    if (!(0, X.VS)()) return;
    let n = await ew();
    null == n ||
        n.setClickZones(
            e.map((e) => ({
                name: e.name,
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }))
        );
}
function e8(e) {
    let { zones: n } = e;
    e7(n);
}
function e9(e) {
    (ef = !0), e.forEach((e) => R.Z.dispatch(e)), (ef = !1);
}
function te(e) {
    return (
        !(ef || !er || e_.has(e.type)) &&
        ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
            (e = {
                ...e,
                settings: {
                    type: e.settings.type,
                    proto: (0, V.cv)(e.settings.type, e.settings.proto)
                }
            }),
        ei.add(e),
        null == a && (a = setTimeout(tt, 1)),
        !1)
    );
}
function tt() {
    if ((null != a && (clearTimeout(a), (a = null)), !er)) {
        ei.clear();
        return;
    }
    ei.size > 0 &&
        (k.lW({
            type: J.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(ei)
        }),
        ei.clear());
}
function tn(e) {
    return null != e && (0, z.y)(e, ec);
}
function tr(e) {
    switch ((ep && eg.info('[app data received]', e), e.type)) {
        case J.BmY.CONNECT:
            let n = j.default.getToken();
            if (null == n) break;
            (0, L.te)(X.qU, Y.Z.getDefaultLayout(X.qU), 0),
                Promise.all([(0, Z.Z)(n, e.pid), C.ZP.PersistedStore.getAllStates()]).then((n) => {
                    let [r, i] = n,
                        { pid: a, token: s } = e;
                    k.lW({
                        type: J.BmY.STORAGE_SYNC,
                        pid: a,
                        token: s,
                        states: i
                    }),
                        k.lW({
                            type: J.BmY.DISPATCH,
                            pid: a,
                            token: s,
                            payloads: [r]
                        }),
                        eT(a, 'READY'),
                        x.Z.overlayReady(a);
                });
            break;
        case J.BmY.DISPATCH:
            null != e.payloads && e9(e.payloads);
            break;
        case J.BmY.LOG_MESSAGES:
            eg.info('[overlay data received]', e.payload);
    }
}
function ti(e) {
    if ((eg.verbose('handleGameToggleOverlay', e), !('pid' in e.game))) {
        eg.verbose('handleGameToggleOverlay: Game was not a RunningGame.', e);
        return;
    }
    let n = [e.game];
    eN({
        added: e.newEnabledValue ? n : [],
        removed: e.newEnabledValue ? [] : n
    });
}
class ta extends (o = C.ZP.Store) {
    initialize() {
        if (!(!$.iP || __OVERLAY__)) this.waitFor(B.ZP, j.default, F.Z), k.sr(tr, tn), j.default.addChangeListener(eY), eM(G.v.enabled, G.v.legacyEnabled, G.v.global), R.Z.addInterceptor(te);
    }
    isInputLocked(e) {
        return F.Z.isOverlayV3Enabled() ? F.Z.isInputLocked(e) : !ed.has(e);
    }
    isSupported() {
        return !!F.Z.isOverlayV3Enabled() || $.iP;
    }
    get enabled() {
        return F.Z.isOverlayV3Enabled() ? F.Z.enabled : ea;
    }
    get legacyEnabled() {
        return !F.Z.isOverlayV3Enabled() && es;
    }
    getFocusedPID() {
        return F.Z.isOverlayV3Enabled() ? F.Z.getFocusedPID() : el;
    }
    isReady(e) {
        return F.Z.isOverlayV3Enabled() ? F.Z.isReady(e) : 'READY' === en.get(e);
    }
    isCrashed(e) {
        return !F.Z.isOverlayV3Enabled() && 'CRASHED' === en.get(e);
    }
}
ee(ta, 'displayName', 'OverlayBridgeStore');
let ts = new ta(
    R.Z,
    __OVERLAY__
        ? {
              OVERLAY_RELAY_CLICK_ZONE_CLICKED: e3,
              OVERLAY_SET_ASSOCIATED_GAME: e4
          }
        : {
              CONNECTION_OPEN: eV,
              CONNECTION_CLOSED: ej,
              EXPERIMENT_OVERRIDE_BUCKET: eH,
              OVERLAY_SET_ENABLED: eW,
              OVERLAY_FOCUSED: eZ,
              RUNNING_GAMES_CHANGE: eK,
              OVERLAY_SET_INPUT_LOCKED: eX,
              OVERLAY_ACTIVATE_REGION: eJ,
              OVERLAY_DEACTIVATE_ALL_REGIONS: e$,
              RPC_SERVER_READY: e0,
              OVERLAY_CALL_PRIVATE_CHANNEL: e1,
              OVERLAY_JOIN_GAME: e2,
              OVERLAY_CRASHED: eF,
              RUNNING_GAME_TOGGLE_OVERLAY: ti,
              OVERLAY_SET_CLICK_ZONES: e8,
              OVERLAY_SET_ASSOCIATED_GAME: e6,
              OVERLAY_NOTIFY_READY_TO_SHOW: ex
          }
);
n.Z = ts;
