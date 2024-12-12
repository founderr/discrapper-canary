var i,
    a = r(47120);
var s = r(411104);
var o = r(442837),
    l = r(570140),
    u = r(13245),
    c = r(579806),
    d = r(710845),
    f = r(353926),
    _ = r(594190),
    h = r(928518),
    p = r(314897),
    m = r(998502),
    g = r(145597),
    E = r(454991),
    v = r(32300),
    I = r(388627),
    T = r(987650),
    b = r(501787);
function y(e, n, r) {
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
let S = new d.Z('OverlayStore'),
    A = new Set(),
    N = new Set(),
    C = null,
    R = !1,
    O = null,
    D = null,
    L = !1,
    x = !1,
    w = null;
function P() {
    let { useOverlayV3: e } = v.Z.getCurrentConfig({ location: 'overlay_store_v3' });
    return e;
}
function M() {
    if (!R) {
        for (let e of A) null == C || C.untrackGame(e);
        A.clear();
        return;
    }
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => {
                var n, r;
                return null !== (r = null === (n = _.ZP.getGameOverlayStatus(e)) || void 0 === n ? void 0 : n.enabled) && void 0 !== r && r;
            })
            .map((e) => e.pid)
    );
    for (let n of A.difference(e)) null == C || C.untrackGame(n), A.delete(n);
    for (let n of e.difference(A)) null == C || C.trackGame(n), A.add(n);
}
function k(e) {
    null == C || C.setInteractionEnabled(!e);
}
async function U(e) {
    var n, r;
    return await (0, I.fK)(), c.Z.window.setBackgroundThrottling(!1), (D = e), (0, g.tB)(D), null !== (r = await (null === c.Z || void 0 === c.Z ? void 0 : null === (n = c.Z.window) || void 0 === n ? void 0 : n.getNativeHandle(b.OVERLAY_V3_KEY))) && void 0 !== r ? r : '';
}
function B() {
    var e;
    null === c.Z || void 0 === c.Z || null === (e = c.Z.window) || void 0 === e || e.close(b.OVERLAY_V3_KEY), (D = null), (0, g.tB)(null != D ? D : -1), c.Z.window.setBackgroundThrottling(!0);
}
function G(e) {
    let n = _.ZP.getGameForPID(e);
    u.Z.setAssociatedGame(null != D ? D : -1, e, n), N.delete(null != D ? D : -1), (D = e), (0, g.tB)(null != D ? D : -1);
    let r = h.Z.getWindow(b.OVERLAY_V3_KEY),
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
            15 === a ? null == C || C.readyToShow(e) : ((a += 1), i().then(s));
        };
    s();
}
function Z(e, n, r, i) {
    let a = h.Z.getWindow(b.OVERLAY_V3_KEY);
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
function F(e) {
    (O = e), u.Z.setFocusedPID(O);
}
function V(e) {
    (O = null), u.Z.setFocusedPID(null);
}
function j(e) {
    u.Z.successfullyShown(e);
}
let H = (() => {
    let e = null;
    async function n() {
        if (!T.iP) throw (S.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, n, r;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let i = m.ZP.requireModule('discord_desktop_overlay');
            null == i || null === (e = i.init) || void 0 === e || e.call(i), i.setCaptureZoneCallback(Z), i.setHostWindowCallbacks(U, B, G), i.setFocusCallback(F), null === (n = i.setFocusLostCallback) || void 0 === n || n.call(i, V), null === (r = i.setSuccessfullyShownCallback) || void 0 === r || r.call(i, j), (C = i), M();
        } catch (e) {
            throw (S.error('failed loading overlay module', e), e);
        }
    }
    return () => (null == e && (e = n()), e);
})();
function Y(e, n) {
    if (!!T.iP && !!P()) {
        if (
            ((R = e),
            E.v.update({
                enabled: e,
                global: n
            }),
            (0, g.vR)(!0),
            null == C)
        ) {
            H();
            return;
        }
        M();
    }
}
function W() {
    P() ? Y(E.v.enabled, E.v.global) : R && ((R = !1), (0, g.vR)(!1), M());
}
function K(e) {
    let { enabled: n, global: r } = e;
    Y(n, r);
}
function z(e) {
    M();
}
function q(e) {
    if (!!R && 'pid' in e.game) e.newEnabledValue ? (null == C || C.trackGame(e.game.pid), A.add(e.game.pid)) : (null == C || C.untrackGame(e.game.pid), A.delete(e.game.pid));
}
function Q(e) {
    let { zones: n } = e;
    if (!!R)
        null == C ||
            C.setCaptureZones(
                n.map((e) => ({
                    name: e.name,
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom
                }))
            );
}
function X(e) {
    let { locked: n, pid: r } = e;
    if (!n && !A.has(r)) return;
    if ((n ? N.delete(r) : N.add(r), null == w || (clearTimeout(w), (w = null), !n)))
        n
            ? k(n)
            : (w = setTimeout(() => {
                  k(n), (w = null);
              }, 100));
}
function J(e) {
    let { region: n } = e;
    k(!1);
}
function $() {
    k(!0);
}
function ee(e) {
    let { enabled: n } = e;
    L = n;
}
function et(e) {
    let { enabled: n } = e;
    x = n;
}
class en extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, p.default, f.Z);
    }
    isInputLocked(e) {
        return !N.has(e);
    }
    isSupported() {
        return T.iP;
    }
    isOverlayV3Enabled() {
        return P();
    }
    get enabled() {
        return R;
    }
    get clickZoneDebugMode() {
        return L;
    }
    get renderDebugMode() {
        return x;
    }
    getFocusedPID() {
        return O;
    }
    isReady(e) {
        return A.has(e);
    }
}
y(en, 'displayName', 'OverlayStore-v3'),
    (n.Z = new en(l.Z, {
        CONNECTION_OPEN: W,
        EXPERIMENT_OVERRIDE_BUCKET: W,
        OVERLAY_SET_ENABLED: K,
        RUNNING_GAMES_CHANGE: z,
        RUNNING_GAME_TOGGLE_OVERLAY: q,
        OVERLAY_SET_CLICK_ZONES: Q,
        OVERLAY_SET_INPUT_LOCKED: X,
        OVERLAY_ACTIVATE_REGION: J,
        OVERLAY_DEACTIVATE_ALL_REGIONS: $,
        OVERLAY_CLICK_ZONE_DEBUG_MODE: ee,
        OVERLAY_RENDER_DEBUG_MODE: et
    }));
