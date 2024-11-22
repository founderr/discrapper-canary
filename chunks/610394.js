n(47120), n(411104);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(13245),
    c = n(579806),
    d = n(710845),
    f = n(353926),
    _ = n(594190),
    p = n(928518),
    h = n(314897),
    m = n(998502),
    g = n(145597),
    E = n(454991),
    v = n(32300),
    b = n(388627),
    I = n(987650),
    T = n(501787);
let S = new d.Z('OverlayStore'),
    y = new Set(),
    A = new Set(),
    N = null,
    C = !1,
    R = null,
    O = null,
    D = !1,
    L = null;
function x() {
    let { useOverlayV3: e } = v.Z.getCurrentConfig({ location: 'overlay_store_v3' });
    return e;
}
function w() {
    if (!C) {
        for (let e of y) null == N || N.untrackGame(e);
        y.clear();
        return;
    }
    let e = new Set(
        _.ZP.getRunningGames()
            .filter((e) => {
                var t, n;
                return null !== (n = null === (t = _.ZP.getGameOverlayStatus(e)) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
            })
            .map((e) => e.pid)
    );
    for (let t of y.difference(e)) null == N || N.untrackGame(t), y.delete(t);
    for (let t of e.difference(y)) null == N || N.trackGame(t), y.add(t);
}
function M(e) {
    null == N || N.setInteractionEnabled(!e);
}
async function P(e) {
    var t, n;
    return await (0, b.fK)(), c.Z.window.setBackgroundThrottling(!1), (O = e), (0, g.tB)(O), null !== (n = await (null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(T.OVERLAY_V3_KEY))) && void 0 !== n ? n : '';
}
function k() {
    var e;
    null === c.Z || void 0 === c.Z || null === (e = c.Z.window) || void 0 === e || e.close(T.OVERLAY_V3_KEY), (O = null), (0, g.tB)(null != O ? O : -1), c.Z.window.setBackgroundThrottling(!0);
}
function U(e) {
    let t = _.ZP.getGameForPID(e);
    u.Z.setAssociatedGame(null != O ? O : -1, e, t), A.delete(null != O ? O : -1), (O = e), (0, g.tB)(null != O ? O : -1);
    let n = p.Z.getWindow(T.OVERLAY_V3_KEY),
        r = () =>
            new Promise((e) => {
                null == n ||
                    n.requestAnimationFrame(() => {
                        let t = new MessageChannel();
                        (t.port1.onmessage = () => {
                            e();
                        }),
                            t.port2.postMessage(void 0);
                    });
            }),
        i = 0,
        a = () => {
            15 === i ? null == N || N.readyToShow(e) : ((i += 1), r().then(a));
        };
    a();
}
function B(e, t, n, r) {
    let i = p.Z.getWindow(T.OVERLAY_V3_KEY);
    if (null == i) return;
    let a = Math.ceil(n * i.innerWidth),
        s = Math.ceil(r * i.innerHeight),
        o = new MouseEvent(t, {
            screenX: a,
            screenY: s,
            clientX: a,
            clientY: s,
            bubbles: !0,
            view: i
        }),
        l = i.document.elementFromPoint(a, s);
    if (null == l) throw Error();
    l.dispatchEvent(o);
}
function G(e) {
    (R = e), u.Z.setFocusedPID(R);
}
function Z(e) {
    (R = null), u.Z.setFocusedPID(null);
}
function F(e) {
    u.Z.successfullyShown(e);
}
let V = (() => {
    let e = null;
    async function t() {
        if (!I.iP) throw (S.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(B), r.setHostWindowCallbacks(P, k, U), r.setFocusCallback(G), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, Z), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, F), (N = r), w();
        } catch (e) {
            throw (S.error('failed loading overlay module', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function j(e, t) {
    if (!!I.iP && !!x()) {
        if (
            ((C = e),
            E.v.update({
                enabled: e,
                global: t
            }),
            (0, g.vR)(!0),
            null == N)
        ) {
            V();
            return;
        }
        w();
    }
}
function H() {
    x() ? j(E.v.enabled, E.v.global) : C && ((C = !1), (0, g.vR)(!1), w());
}
class Y extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z);
    }
    isInputLocked(e) {
        return !A.has(e);
    }
    isSupported() {
        return I.iP;
    }
    isOverlayV3Enabled() {
        return x();
    }
    get enabled() {
        return C;
    }
    get clickZoneDebugMode() {
        return D;
    }
    getFocusedPID() {
        return R;
    }
    isReady(e) {
        return y.has(e);
    }
}
(s = 'OverlayStore-v3'),
    (a = 'displayName') in (i = Y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new Y(l.Z, {
        CONNECTION_OPEN: H,
        EXPERIMENT_OVERRIDE_BUCKET: H,
        OVERLAY_SET_ENABLED: function (e) {
            let { enabled: t, global: n } = e;
            j(t, n);
        },
        RUNNING_GAMES_CHANGE: function (e) {
            w();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            if (!!C && 'pid' in e.game) e.newEnabledValue ? (null == N || N.trackGame(e.game.pid), y.add(e.game.pid)) : (null == N || N.untrackGame(e.game.pid), y.delete(e.game.pid));
        },
        OVERLAY_SET_CLICK_ZONES: function (e) {
            let { zones: t } = e;
            if (!!C)
                null == N ||
                    N.setCaptureZones(
                        t.map((e) => ({
                            name: e.name,
                            left: e.left,
                            top: e.top,
                            right: e.right,
                            bottom: e.bottom
                        }))
                    );
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t, pid: n } = e;
            if (!t && !y.has(n)) return;
            if ((t ? A.delete(n) : A.add(n), null == L || (clearTimeout(L), (L = null), !t)))
                t
                    ? M(t)
                    : (L = setTimeout(() => {
                          M(t), (L = null);
                      }, 100));
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
            let { region: t } = e;
            M(!1);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
            M(!0);
        },
        OVERLAY_CLICK_ZONE_DEBUG_MODE: function (e) {
            let { enabled: t } = e;
            D = t;
        }
    }));
