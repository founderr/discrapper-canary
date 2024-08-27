var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(287734),
    c = n(579806),
    d = n(695346),
    _ = n(70956),
    E = n(358085),
    f = n(314897),
    h = n(981631),
    p = n(65154);
let I = Date.now(),
    m = !1,
    T = !1,
    g = !1,
    S = !1,
    A = !1;
function N() {
    return g || S || ((0, E.isAndroid)() && A);
}
function O() {
    Date.now() - I > h.OSm || N()
        ? m ||
          l.Z.dispatch({
              type: 'IDLE',
              idle: !0,
              idleSince: I
          })
        : m &&
          l.Z.dispatch({
              type: 'IDLE',
              idle: !1
          }),
        Date.now() - I > Math.min(d.CM.getSetting() * _.Z.Millis.SECOND, h.OSm) || N()
            ? T ||
              l.Z.dispatch({
                  type: 'AFK',
                  afk: !0
              })
            : T &&
              l.Z.dispatch({
                  type: 'AFK',
                  afk: !1
              });
}
!__OVERLAY__ &&
    (E.isPlatformEmbedded && (null === c.Z || void 0 === c.Z ? void 0 : c.Z.remotePowerMonitor) != null
        ? (!(function e() {
              var t;
              let n = (t) => {
                  (I = Math.max(Date.now() - t, I)), O(), setTimeout(e, 10 * _.Z.Millis.SECOND);
              };
              if ((null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                  let e = c.Z.remotePowerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(n) : n(e);
              }
          })(),
          c.Z.remotePowerMonitor.on('resume', () => {
              (g = !1), v({});
          }),
          c.Z.remotePowerMonitor.on('suspend', () => {
              (g = !0), v({}), u.default.disconnect();
          }),
          c.Z.remotePowerMonitor.on('lock-screen', () => {
              (S = !0), v({});
          }),
          c.Z.remotePowerMonitor.on('unlock-screen', () => {
              (S = !1), v({});
          }))
        : setInterval(O, 0.25 * h.OSm));
function v(e) {
    let { timestamp: t, type: n } = e,
        r = 'OVERLAY_SET_NOT_IDLE' === n && null != t;
    return (
        (!r || !(t <= I)) &&
        ((I = r ? t : Date.now()),
        __OVERLAY__
            ? l.Z.dispatch({
                  type: 'OVERLAY_SET_NOT_IDLE',
                  timestamp: I
              })
            : O(),
        !1)
    );
}
class R extends (s = o.ZP.Store) {
    isIdle() {
        return m;
    }
    isAFK() {
        return T;
    }
    getIdleSince() {
        return m ? I : null;
    }
}
(a = 'IdleStore'),
    (i = 'displayName') in (r = R)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new R(l.Z, {
        IDLE: function (e) {
            m = e.idle;
        },
        AFK: function (e) {
            T = e.afk;
        },
        SPEAKING: function (e) {
            let { userId: t, speakingFlags: n } = e;
            return n !== p.Dg.NONE && t === f.default.getId() && v({}), !1;
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e;
            return (A = t === h.$7l.BACKGROUND), (I = Date.now()), O(), !1;
        },
        OVERLAY_SET_NOT_IDLE: v,
        CHANNEL_SELECT: v,
        VOICE_CHANNEL_SELECT: v,
        WINDOW_FOCUS: v,
        OVERLAY_INITIALIZE: v,
        OVERLAY_SET_INPUT_LOCKED: v,
        USER_SETTINGS_PROTO_UPDATE: v
    }));
