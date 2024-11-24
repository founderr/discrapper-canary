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
    I = n(388627),
    b = n(987650),
    T = n(501787);
let S = new d.Z('OverlayStore'),
    y = new Set(),
    A = new Set(),
    N = null,
    C = !1,
    R = null,
    O = null,
    D = !1,
    L = !1,
    x = null;
function w() {
    let { useOverlayV3: e } = v.Z.getCurrentConfig({ location: 'overlay_store_v3' });
    return e;
}
function M() {
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
function P(e) {
    null == N || N.setInteractionEnabled(!e);
}
async function k(e) {
    var t, n;
    return await (0, I.fK)(), c.Z.window.setBackgroundThrottling(!1), (O = e), (0, g.tB)(O), null !== (n = await (null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.window) || void 0 === t ? void 0 : t.getNativeHandle(T.OVERLAY_V3_KEY))) && void 0 !== n ? n : '';
}
function U() {
    var e;
    null === c.Z || void 0 === c.Z || null === (e = c.Z.window) || void 0 === e || e.close(T.OVERLAY_V3_KEY), (O = null), (0, g.tB)(null != O ? O : -1), c.Z.window.setBackgroundThrottling(!0);
}
function B(e) {
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
function G(e, t, n, r) {
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
function Z(e) {
    (R = e), u.Z.setFocusedPID(R);
}
function F(e) {
    (R = null), u.Z.setFocusedPID(null);
}
function V(e) {
    u.Z.successfullyShown(e);
}
let j = (() => {
    let e = null;
    async function t() {
        if (!b.iP) throw (S.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay v3 is not supported on this platform.'));
        try {
            var e, t, n;
            await m.ZP.ensureModule('discord_desktop_overlay');
            let r = m.ZP.requireModule('discord_desktop_overlay');
            null == r || null === (e = r.init) || void 0 === e || e.call(r), r.setCaptureZoneCallback(G), r.setHostWindowCallbacks(k, U, B), r.setFocusCallback(Z), null === (t = r.setFocusLostCallback) || void 0 === t || t.call(r, F), null === (n = r.setSuccessfullyShownCallback) || void 0 === n || n.call(r, V), (N = r), M();
        } catch (e) {
            throw (S.error('failed loading overlay module', e), e);
        }
    }
    return () => (null == e && (e = t()), e);
})();
function H(e, t) {
    if (!!b.iP && !!w()) {
        if (
            ((C = e),
            E.v.update({
                enabled: e,
                global: t
            }),
            (0, g.vR)(!0),
            null == N)
        ) {
            j();
            return;
        }
        M();
    }
}
function Y() {
    w() ? H(E.v.enabled, E.v.global) : C && ((C = !1), (0, g.vR)(!1), M());
}
class W extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(_.ZP, h.default, f.Z);
    }
    isInputLocked(e) {
        return !A.has(e);
    }
    isSupported() {
        return b.iP;
    }
    isOverlayV3Enabled() {
        return w();
    }
    get enabled() {
        return C;
    }
    get clickZoneDebugMode() {
        return D;
    }
    get renderDebugMode() {
        return L;
    }
    getFocusedPID() {
        return R;
    }
    isReady(e) {
        return y.has(e);
    }
}
(s = 'OverlayStore-v3'),
    (a = 'displayName') in (i = W)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new W(l.Z, {
        CONNECTION_OPEN: Y,
        EXPERIMENT_OVERRIDE_BUCKET: Y,
        OVERLAY_SET_ENABLED: function (e) {
            let { enabled: t, global: n } = e;
            H(t, n);
        },
        RUNNING_GAMES_CHANGE: function (e) {
            M();
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
            if ((t ? A.delete(n) : A.add(n), null == x || (clearTimeout(x), (x = null), !t)))
                t
                    ? P(t)
                    : (x = setTimeout(() => {
                          P(t), (x = null);
                      }, 100));
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
            let { region: t } = e;
            P(!1);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: function () {
            P(!0);
        },
        OVERLAY_CLICK_ZONE_DEBUG_MODE: function (e) {
            let { enabled: t } = e;
            D = t;
        },
        OVERLAY_RENDER_DEBUG_MODE: function (e) {
            let { enabled: t } = e;
            L = t;
        }
    }));
