var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(287734),
    c = n(579806),
    d = n(695346),
    f = n(70956),
    _ = n(358085),
    p = n(314897),
    h = n(981631),
    m = n(65154);
let g = Date.now(),
    E = !1,
    v = !1,
    I = !1,
    b = !1,
    S = !1;
function T() {
    return I || b || ((0, _.isAndroid)() && S);
}
function y() {
    Date.now() - g > h.OSm || T()
        ? E ||
          l.Z.dispatch({
              type: 'IDLE',
              idle: !0,
              idleSince: g
          })
        : E &&
          l.Z.dispatch({
              type: 'IDLE',
              idle: !1
          }),
        Date.now() - g > Math.min(d.CM.getSetting() * f.Z.Millis.SECOND, h.OSm) || T()
            ? v ||
              l.Z.dispatch({
                  type: 'AFK',
                  afk: !0
              })
            : v &&
              l.Z.dispatch({
                  type: 'AFK',
                  afk: !1
              });
}
!__OVERLAY__ &&
    (_.isPlatformEmbedded && (null === c.Z || void 0 === c.Z ? void 0 : c.Z.remotePowerMonitor) != null
        ? (!(function e() {
              var t;
              let n = (t) => {
                  (g = Math.max(Date.now() - t, g)), y(), setTimeout(e, 10 * f.Z.Millis.SECOND);
              };
              if ((null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
                  let e = c.Z.remotePowerMonitor.getSystemIdleTimeMs();
                  e instanceof Promise ? e.then(n) : n(e);
              }
          })(),
          c.Z.remotePowerMonitor.on('resume', () => {
              (I = !1), A({});
          }),
          c.Z.remotePowerMonitor.on('suspend', () => {
              (I = !0), A({}), u.default.disconnect();
          }),
          c.Z.remotePowerMonitor.on('lock-screen', () => {
              (b = !0), A({});
          }),
          c.Z.remotePowerMonitor.on('unlock-screen', () => {
              (b = !1), A({});
          }))
        : setInterval(y, 0.25 * h.OSm));
function A(e) {
    let { timestamp: t, type: n } = e,
        r = 'OVERLAY_SET_NOT_IDLE' === n && null != t;
    return (
        (!r || !(t <= g)) &&
        ((g = r ? t : Date.now()),
        __OVERLAY__
            ? l.Z.dispatch({
                  type: 'OVERLAY_SET_NOT_IDLE',
                  timestamp: g
              })
            : y(),
        !1)
    );
}
class N extends (s = o.ZP.Store) {
    isIdle() {
        return E;
    }
    isAFK() {
        return v;
    }
    getIdleSince() {
        return E ? g : null;
    }
}
(a = 'IdleStore'),
    (i = 'displayName') in (r = N)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new N(l.Z, {
        IDLE: function (e) {
            E = e.idle;
        },
        AFK: function (e) {
            v = e.afk;
        },
        SPEAKING: function (e) {
            let { userId: t, speakingFlags: n } = e;
            return n !== m.Dg.NONE && t === p.default.getId() && A({}), !1;
        },
        APP_STATE_UPDATE: function (e) {
            let { state: t } = e;
            return (S = t === h.$7l.BACKGROUND), (g = Date.now()), y(), !1;
        },
        OVERLAY_SET_NOT_IDLE: A,
        CHANNEL_SELECT: A,
        VOICE_CHANNEL_SELECT: A,
        WINDOW_FOCUS: A,
        OVERLAY_INITIALIZE: A,
        OVERLAY_SET_INPUT_LOCKED: A,
        USER_SETTINGS_PROTO_UPDATE: A
    }));
