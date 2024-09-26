var r,
    i = n(442837),
    a = n(570140),
    o = n(287734),
    s = n(579806),
    l = n(695346),
    u = n(70956),
    c = n(358085),
    d = n(314897),
    _ = n(981631),
    E = n(65154);
function f(e, t, n) {
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
let h = Date.now(),
    p = !1,
    m = !1,
    I = !1,
    T = !1,
    g = !1;
function S() {
    return I || T || ((0, c.isAndroid)() && g);
}
function A() {
    Date.now() - h > Math.min(l.CM.getSetting() * u.Z.Millis.SECOND, _.OSm) || S()
        ? !m &&
          a.Z.dispatch({
              type: 'AFK',
              afk: !0
          })
        : m &&
          a.Z.dispatch({
              type: 'AFK',
              afk: !1
          });
}
function v() {
    Date.now() - h > _.OSm || S()
        ? !p &&
          a.Z.dispatch({
              type: 'IDLE',
              idle: !0,
              idleSince: h
          })
        : p &&
          a.Z.dispatch({
              type: 'IDLE',
              idle: !1
          });
}
function N() {
    v(), A();
}
function O() {
    var e;
    let t = (e) => {
        (h = Math.max(Date.now() - e, h)), N(), setTimeout(O, 10 * u.Z.Millis.SECOND);
    };
    if ((null === s.Z || void 0 === s.Z ? void 0 : null === (e = s.Z.remotePowerMonitor) || void 0 === e ? void 0 : e.getSystemIdleTimeMs) != null) {
        let e = s.Z.remotePowerMonitor.getSystemIdleTimeMs();
        e instanceof Promise ? e.then(t) : t(e);
    }
}
function R(e) {
    p = e.idle;
}
function C(e) {
    m = e.afk;
}
function y(e) {
    let { userId: t, speakingFlags: n } = e;
    return n !== E.Dg.NONE && t === d.default.getId() && b({}), !1;
}
function L(e) {
    let { state: t } = e;
    return (g = t === _.$7l.BACKGROUND), (h = Date.now()), N(), !1;
}
function b(e) {
    let { timestamp: t, type: n } = e,
        r = 'OVERLAY_SET_NOT_IDLE' === n && null != t;
    return (
        (!r || !(t <= h)) &&
        ((h = r ? t : Date.now()),
        __OVERLAY__
            ? a.Z.dispatch({
                  type: 'OVERLAY_SET_NOT_IDLE',
                  timestamp: h
              })
            : N(),
        !1)
    );
}
!__OVERLAY__ &&
    (c.isPlatformEmbedded && (null === s.Z || void 0 === s.Z ? void 0 : s.Z.remotePowerMonitor) != null
        ? (O(),
          s.Z.remotePowerMonitor.on('resume', () => {
              (I = !1), b({});
          }),
          s.Z.remotePowerMonitor.on('suspend', () => {
              (I = !0), b({}), o.default.disconnect();
          }),
          s.Z.remotePowerMonitor.on('lock-screen', () => {
              (T = !0), b({});
          }),
          s.Z.remotePowerMonitor.on('unlock-screen', () => {
              (T = !1), b({});
          }))
        : setInterval(N, 0.25 * _.OSm));
class D extends (r = i.ZP.Store) {
    isIdle() {
        return p;
    }
    isAFK() {
        return m;
    }
    getIdleSince() {
        return p ? h : null;
    }
}
f(D, 'displayName', 'IdleStore'),
    (t.Z = new D(a.Z, {
        IDLE: R,
        AFK: C,
        SPEAKING: y,
        APP_STATE_UPDATE: L,
        OVERLAY_SET_NOT_IDLE: b,
        CHANNEL_SELECT: b,
        VOICE_CHANNEL_SELECT: b,
        WINDOW_FOCUS: b,
        OVERLAY_INITIALIZE: b,
        OVERLAY_SET_INPUT_LOCKED: b,
        USER_SETTINGS_PROTO_UPDATE: b
    }));
