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
    S = !1,
    g = !1,
    A = !1;
function N() {
    return S || g || ((0, E.isAndroid)() && A);
}
function R() {
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
                  (I = Math.max(Date.now() - t, I)), R(), setTimeout(e, 10 * _.Z.Millis.SECOND);
              };
              if ((null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                  let e = c.Z.remotePowerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(n) : n(e);
              }
          })(),
          c.Z.remotePowerMonitor.on('resume', () => {
              (S = !1), O({});
          }),
          c.Z.remotePowerMonitor.on('suspend', () => {
              (S = !0), O({}), u.default.disconnect();
          }),
          c.Z.remotePowerMonitor.on('lock-screen', () => {
              (g = !0), O({});
          }),
          c.Z.remotePowerMonitor.on('unlock-screen', () => {
              (g = !1), O({});
          }))
        : setInterval(R, 0.25 * h.OSm));
function O(e) {
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
            : R(),
        !1)
    );
}
class v extends (s = o.ZP.Store) {
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
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new v(l.Z, {
        IDLE: function (e) {
            m = e.idle;
        },
        AFK: function (e) {
            T = e.afk;
        },
        SPEAKING: function (e) {
            let { userId: t, speakingFlags: n } = e;
            return n !== p.Dg.NONE && t === f.default.getId() && O({}), !1;
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e;
            return (A = t === h.$7l.BACKGROUND), (I = Date.now()), R(), !1;
        },
        OVERLAY_SET_NOT_IDLE: O,
        CHANNEL_SELECT: O,
        VOICE_CHANNEL_SELECT: O,
        WINDOW_FOCUS: O,
        OVERLAY_INITIALIZE: O,
        OVERLAY_SET_INPUT_LOCKED: O,
        USER_SETTINGS_PROTO_UPDATE: O
    }));
