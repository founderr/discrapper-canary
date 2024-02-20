"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var i = n("917351"),
  a = n.n(i),
  l = n("938850"),
  s = n("151426"),
  r = n("95410"),
  o = n("689988"),
  u = n("700507"),
  d = n("76393"),
  c = n("235004"),
  f = n("271938"),
  E = n("42887"),
  h = n("891760"),
  _ = n("536692"),
  C = n("504385"),
  S = n("872173"),
  g = n("353927");
let T = e => "AudioContextSettingsMigrated:".concat(e),
  m = e => e === g.MediaEngineContextTypes.STREAM ? l.AudioSettingsDefaultVolumes.STREAM : l.AudioSettingsDefaultVolumes.USER;

function p() {
  (0, h.shouldReadWriteAudioSettings)() && ! function() {
    let e = r.default.get(T(f.default.getId()));
    !e && S.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
      let t = !1;
      for (let [n, i] of Object.entries(E.default.getState().settingsByContext)) {
        let a = (0, C.coerceAudioContextForProto)(n);
        if (null == a) continue;
        let l = e[a],
          s = String(Date.now()),
          r = {};
        for (let [e, t] of Object.entries(i.localMutes)) r[e] = {
          muted: t,
          volume: m(n),
          modifiedAt: s,
          soundboardMuted: !1
        };
        for (let [e, t] of Object.entries(i.localVolumes)) r[e] = {
          muted: !1,
          modifiedAt: s,
          ...r[e],
          volume: (0, C.snapVolumeToDefault)(t, n)
        };
        let o = Object.keys(l).length;
        for (let [e, [n, i]] of Object.entries(r).entries()) {
          let a = 300 - o - (e + 1) <= 0;
          if (a) break;
          null == l[n] && (t = !0, l[n] = i)
        }
      }
      return r.default.set(T(f.default.getId()), !0), t
    }, S.UserSettingsDelay.AUTOMATED)
  }()
}
let I = a.debounce(() => {
    N()
  }, 2e3),
  A = a.debounce(u.remoteAudioSettingsUpdate, 500, {
    maxWait: 500
  });

function N() {
  S.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
    let t = !1;
    return (0, _.drainPendingAudioSettings)((n, i, a) => {
      let l = function(e, t, n, i) {
        var a, l, r, o, u;
        let d = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          c = (0, C.coerceAudioContextForProto)(n);
        if (null == c) return !1;
        let f = e[c];
        if (f[t] = null !== (a = f[t]) && void 0 !== a ? a : (l = n, s.AudioContextSetting.create({
            muted: !1,
            volume: m(l)
          })), i(f[t]), f[t].modifiedAt = String(Date.now()), d) {
          ;
          r = f, o = t, u = n, r[o].volume !== m(u) || r[o].muted || r[o].soundboardMuted || delete r[o]
        }
        return ! function(e) {
          let t = Object.entries(e),
            n = t.length;
          if (n <= 300) return;
          let i = t.sort((e, t) => {
              let [n, {
                modifiedAt: i
              }] = e, [a, {
                modifiedAt: l
              }] = t;
              return Number(i) - Number(l)
            }),
            a = n - 300;
          for (let t = 0; t < a; t++) {
            let [n] = i[t];
            delete e[n]
          }
        }(f), !0
      }(e, i, n, e => {
        Object.assign(e, a)
      });
      t = t || l
    }), t
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function O(e) {
  var t, n, i;
  let {
    context: a,
    userId: l,
    volume: s
  } = e;
  if (l === f.default.getId() || !(0, h.shouldReadWriteAudioSettings)()) return;
  let r = d.default.getRemoteSessionId();
  null != r && A(r, l, a, {
    muted: E.default.isLocalMute(l, a),
    volume: s
  }), t = a, n = l, i = s, (0, _.updatePendingSettings)(t, n, {
    volume: i
  }), I()
}

function v(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== f.default.getId()) {
    if ((0, h.shouldReadWriteAudioSettings)()) {
      var i, a, l;
      i = t, a = n, l = E.default.isLocalMute(n, t), (0, _.updatePendingSettings)(i, a, {
        muted: l
      }), I.cancel(), N()
    }
  }
}

function R(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== f.default.getId()) {
    if ((0, h.shouldReadWriteAudioSettings)()) {
      var i, a, l;
      i = t, a = n, l = c.default.isLocalSoundboardMuted(n), (0, _.updatePendingSettings)(i, a, {
        soundboardMuted: l
      }), I.cancel(), N()
    }
  }
}
class M extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: p,
      AUDIO_SET_LOCAL_VOLUME: O,
      AUDIO_TOGGLE_LOCAL_MUTE: v,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: R
    }
  }
}
var L = new M