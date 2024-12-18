var i,
    a = r(47120);
var s = r(411104);
var o = r(442837),
    l = r(570140),
    u = r(13245),
    c = r(615287),
    d = r(579806),
    f = r(710845),
    _ = r(353926),
    h = r(594190),
    p = r(928518),
    m = r(314897),
    g = r(998502),
    E = r(145597),
    v = r(454991),
    I = r(32300),
    T = r(388627),
    b = r(987650),
    y = r(501787);
function S(e, n, r) {
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
let A = new f.Z('OverlayStoreV3'),
    N = new Set(),
    C = new Set(),
    R = null,
    O = !1,
    D = null,
    L = null,
    x = !1,
    w = !1,
    P = null;
function M(e) {
    if ((null == R || R.trackGame(e), !N.has(e))) N.add(e), u.Z.updateOverlayState(e, c.mM.WAITING_FOR_OVERLAY_OPEN);
}
function k(e) {
    null == R || R.untrackGame(e), N.delete(e), A.verbose('Removing tracked game '.concat(e));
}
function U() {
    for (let e of N) null == R || R.untrackGame(e);
    N.clear(), A.verbose('Cleared all tracked games');
}
function B() {
    return (0, I.NW)('overlay_store_v3', !1);
}
function G() {
    if (!O) {
        U();
        return;
    }
    let e = new Set(
        h.ZP.getRunningGames()
            .filter((e) => {
                var n, r;
                return null !== (r = null === (n = h.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
            })
            .map((e) => e.pid)
    );
    for (let n of N.difference(e)) k(n);
    for (let e of N) M(e);
}
function Z(e) {
    null == R || R.setInteractionEnabled(!e);
}
async function F(e) {
    var n, r;
    A.verbose('Creating OOP Host Window for pid '.concat(e)), await (0, T.fK)(), d.Z.window.setBackgroundThrottling(!1), (L = e), (0, E.tB)(L);
    let i = null !== (r = await (null === d.Z || void 0 === d.Z ? void 0 : null === (n = d.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(y.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
    return u.Z.updateOverlayState(e, c.mM.OVERLAY_RENDERING), i;
}
function V() {
    var e;
    A.verbose('Destroying OOP host window'), null === d.Z || void 0 === d.Z || null === (e = d.Z.window) || void 0 === e || e.close(y.OVERLAY_V3_KEY), (L = null), (0, E.tB)(null != L ? L : E.R2), d.Z.window.setBackgroundThrottling(!0);
}
function j(e) {
    let n = h.ZP.getGameForPID(e);
    A.verbose('Refreshing OOP host window for pid '.concat(e)), u.Z.setAssociatedGame(null != L ? L : E.R2, e, n), C.delete(null != L ? L : E.R2), (L = e), (0, E.tB)(null != L ? L : E.R2);
    let r = p.Z.getWindow(y.OVERLAY_V3_KEY),
        i = () =>
            new Promise((e) => {
                null == r ||
                    r.requestAnimationFrame(() => {
                        let n = new MessageChannel();
                        (n.port1.onmessage = () => {
                            e();
                        }),
                            n.port2.postMessage(void 0);
                    });
            }),
        a = 0,
        s = () => {
            15 === a ? (null == R || R.readyToShow(e), A.verbose('Showing overlay v3 for pid '.concat(e))) : ((a += 1), i().then(s));
        };
    s();
}
function H(e, n, r, i) {
    let a = p.Z.getWindow(y.OVERLAY_V3_KEY);
    if (null == a) return;
    let s = Math.ceil(r * a.innerWidth),
        o = Math.ceil(i * a.innerHeight),
        l = new MouseEvent(n, {
            screenX: s,
            screenY: o,
            clientX: s,
            clientY: o,
            bubbles: !0,
            view: a
        }),
        u = a.document.elementFromPoint(s, o);
    if (null == u) throw Error();
    u.dispatchEvent(l);
}
function Y(e) {
    (D = e), u.Z.setFocusedPID(D);
}
function W(e) {
    (D = null), u.Z.setFocusedPID(null);
}
function K(e) {
    u.Z.successfullyShown(e);
}
let z = (() => {
    let e = null;
    async function n() {
        if (!b.iP) throw (A.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await g.ZP.ensureModule('discord_desktop_overlay');
            let i = g.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(H), i.setHostWindowCallbacks(F, V, j), i.setFocusCallback(Y), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, W), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, K), (R = i), (0, E.vR)(!0), G();
        } catch (e) {
            throw (A.error('failed loading overlay module', e), (0, E.vR)(!1), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function q(e, n) {
    if (!!b.iP) {
        if (
            ((O = e),
            v.v.update({
                enabled: e,
                global: n
            }),
            null == R)
        ) {
            z();
            return;
        }
    }
}
function Q(e) {}
function X(e) {}
function J(e) {}
function $(e) {
    A.verbose('Updating OverlayMethod', e), e.overlayMethod === c.gl.OutOfProcess ? M(e.pid) : k(e.pid);
}
function ee() {
    A.verbose('Maybe Enable Overlay'), B() ? q(v.v.enabled, v.v.global) : O && ((O = !1), (0, E.vR)(!1));
}
function et(e) {
    let { enabled: n, global: r } = e;
    q(n, r);
}
function en(e) {
    let { zones: n } = e;
    if (!!O)
        null == R ||
            R.setCaptureZones(
                n.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }))
            );
}
function er(e) {
    let { locked: n, pid: r } = e;
    if (!n && !N.has(r)) return;
    if ((n ? C.delete(r) : C.add(r), null == P || (clearTimeout(P), (P = null), !n)))
        n
            ? Z(n)
            : (P = setTimeout(() => {
                  Z(n), (P = null);
              }, 100));
}
function ei(e) {
    let { region: n } = e;
    Z(!1);
}
function ea() {
    Z(!0);
}
function es(e) {
    let { enabled: n } = e;
    x = n;
}
function eo(e) {
    let { enabled: n } = e;
    w = n;
}
class el extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, m.default, _.Z);
    }
    isInputLocked(e) {
        return !C.has(e);
    }
    isSupported() {
        return b.iP;
    }
    isOverlayV3Enabled() {
        return B();
    }
    isOverlayV3EnabledForPID(e) {
        return N.has(e);
    }
    get enabled() {
        return O;
    }
    get clickZoneDebugMode() {
        return x;
    }
    get renderDebugMode() {
        return w;
    }
    getFocusedPID() {
        return D;
    }
    isReady(e) {
        return N.has(e);
    }
}
S(el, 'displayName', 'OverlayStore-v3'),
    (n.Z = new el(l.Z, {
        CONNECTION_OPEN: ee,
        EXPERIMENT_OVERRIDE_BUCKET: ee,
        OVERLAY_SET_ENABLED: et,
        GAME_LAUNCH_SUCCESS: Q,
        RUNNING_GAMES_CHANGE: X,
        RUNNING_GAME_TOGGLE_OVERLAY: J,
        OVERLAY_SET_CLICK_ZONES: en,
        OVERLAY_SET_INPUT_LOCKED: er,
        OVERLAY_ACTIVATE_REGION: ei,
        OVERLAY_DEACTIVATE_ALL_REGIONS: ea,
        OVERLAY_CLICK_ZONE_DEBUG_MODE: es,
        OVERLAY_RENDER_DEBUG_MODE: eo,
        OVERLAY_UPDATE_OVERLAY_METHOD: $
    }));
