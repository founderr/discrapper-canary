var i,
    a = r(442837),
    s = r(570140),
    o = r(287734),
    l = r(579806),
    u = r(695346),
    c = r(70956),
    d = r(358085),
    f = r(314897),
    _ = r(981631),
    h = r(65154);
function p(e, n, r) {
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
let m = Date.now(),
    g = !1,
    E = !1,
    v = !1,
    I = !1,
    T = !1;
function b() {
    return v || I || ((0, d.isAndroid)() && T);
}
function y() {
    Date.now() - m > Math.min(u.CM.getSetting() * c.Z.Millis.SECOND, _.OSm) || b()
        ? !E &&
          s.Z.dispatch({
              type: 'AFK',
              afk: !0
          })
        : E &&
          s.Z.dispatch({
              type: 'AFK',
              afk: !1
          });
}
function S() {
    Date.now() - m > _.OSm || b()
        ? !g &&
          s.Z.dispatch({
              type: 'IDLE',
              idle: !0,
              idleSince: m
          })
        : g &&
          s.Z.dispatch({
              type: 'IDLE',
              idle: !1
          });
}
function A() {
    S(), y();
}
function N() {
    var e;
    let n = (e) => {
        (m = Math.max(Date.now() - e, m)), A(), setTimeout(N, 10 * c.Z.Millis.SECOND);
    };
    if ((null === l.Z || void 0 === l.Z ? void 0 : null === (e = l.Z.remotePowerMonitor) || void 0 === e ? void 0 : e.getSystemIdleTimeMs) != null) {
        let e = l.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(n) : n(e);
    }
}
function C(e) {
    g = e.idle;
}
function R(e) {
    E = e.afk;
}
function O(e) {
    let { userId: n, speakingFlags: r } = e;
    return r !== h.Dg.NONE && n === f.default.getId() && L({}), !1;
}
function D(e) {
    let { state: n } = e;
    return (T = n === _.$7l.BACKGROUND), (m = Date.now()), A(), !1;
}
function L(e) {
    let { timestamp: n, type: r } = e,
        i = 'OVERLAY_SET_NOT_IDLE' === r && null != n;
    return (
        (!i || !(n <= m)) &&
        ((m = i ? n : Date.now()),
        __OVERLAY__
            ? s.Z.dispatch({
                  type: 'OVERLAY_SET_NOT_IDLE',
                  timestamp: m
              })
            : A(),
        !1)
    );
}
!__OVERLAY__ &&
    (d.isPlatformEmbedded && (null === l.Z || void 0 === l.Z ? void 0 : l.Z.remotePowerMonitor) != null
        ? (N(),
          l.Z.remotePowerMonitor.on('resume', () => {
              (v = !1), L({});
          }),
          l.Z.remotePowerMonitor.on('suspend', () => {
              (v = !0), L({}), o.default.disconnect();
          }),
          l.Z.remotePowerMonitor.on('lock-screen', () => {
              (I = !0), L({});
          }),
          l.Z.remotePowerMonitor.on('unlock-screen', () => {
              (I = !1), L({});
          }))
        : setInterval(A, 0.25 * _.OSm));
class x extends (i = a.ZP.Store) {
    isIdle() {
        return g;
    }
    isAFK() {
        return E;
    }
    getIdleSince() {
        return g ? m : null;
    }
}
p(x, 'displayName', 'IdleStore'),
    (n.Z = new x(s.Z, {
        IDLE: C,
        AFK: R,
        SPEAKING: O,
        APP_STATE_UPDATE: D,
        OVERLAY_SET_NOT_IDLE: L,
        CHANNEL_SELECT: L,
        VOICE_CHANNEL_SELECT: L,
        WINDOW_FOCUS: L,
        OVERLAY_INITIALIZE: L,
        OVERLAY_SET_INPUT_LOCKED: L,
        USER_SETTINGS_PROTO_UPDATE: L
    }));
