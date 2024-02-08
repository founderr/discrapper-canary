"use strict";
E.r(_), E.d(_, {
  default: function() {
    return G
  }
}), E("222007");
var t = E("917351"),
  o = E.n(t),
  n = E("938850"),
  r = E("151426"),
  a = E("95410"),
  i = E("689988"),
  I = E("700507"),
  s = E("76393"),
  T = E("235004"),
  S = E("271938"),
  N = E("42887"),
  O = E("891760"),
  A = E("536692"),
  R = E("504385"),
  l = E("872173"),
  u = E("353927");
let L = e => "AudioContextSettingsMigrated:".concat(e),
  C = e => e === u.MediaEngineContextTypes.STREAM ? n.AudioSettingsDefaultVolumes.STREAM : n.AudioSettingsDefaultVolumes.USER;

function D() {
  (0, O.shouldReadWriteAudioSettings)() && ! function() {
    let e = a.default.get(L(S.default.getId()));
    !e && l.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
      let _ = !1;
      for (let [E, t] of Object.entries(N.default.getState().settingsByContext)) {
        let o = (0, R.coerceAudioContextForProto)(E);
        if (null == o) continue;
        let n = e[o],
          r = String(Date.now()),
          a = {};
        for (let [e, _] of Object.entries(t.localMutes)) a[e] = {
          muted: _,
          volume: C(E),
          modifiedAt: r,
          soundboardMuted: !1
        };
        for (let [e, _] of Object.entries(t.localVolumes)) a[e] = {
          muted: !1,
          modifiedAt: r,
          ...a[e],
          volume: (0, R.snapVolumeToDefault)(_, E)
        };
        let i = Object.keys(n).length;
        for (let [e, [E, t]] of Object.entries(a).entries()) {
          let o = 300 - i - (e + 1) <= 0;
          if (o) break;
          null == n[E] && (_ = !0, n[E] = t)
        }
      }
      return a.default.set(L(S.default.getId()), !0), _
    }, l.UserSettingsDelay.AUTOMATED)
  }()
}
let c = o.debounce(() => {
    U()
  }, 2e3),
  d = o.debounce(I.remoteAudioSettingsUpdate, 500, {
    maxWait: 500
  });

function U() {
  l.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
    let _ = !1;
    return (0, A.drainPendingAudioSettings)((E, t, o) => {
      let n = function(e, _, E, t) {
        var o, n, a, i, I;
        let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          T = (0, R.coerceAudioContextForProto)(E);
        if (null == T) return !1;
        let S = e[T];
        if (S[_] = null !== (o = S[_]) && void 0 !== o ? o : (n = E, r.AudioContextSetting.create({
            muted: !1,
            volume: C(n)
          })), t(S[_]), S[_].modifiedAt = String(Date.now()), s) {
          ;
          a = S, i = _, I = E, a[i].volume !== C(I) || a[i].muted || a[i].soundboardMuted || delete a[i]
        }
        return ! function(e) {
          let _ = Object.entries(e),
            E = _.length;
          if (E <= 300) return;
          let t = _.sort((e, _) => {
              let [E, {
                modifiedAt: t
              }] = e, [o, {
                modifiedAt: n
              }] = _;
              return Number(t) - Number(n)
            }),
            o = E - 300;
          for (let _ = 0; _ < o; _++) {
            let [E] = t[_];
            delete e[E]
          }
        }(S), !0
      }(e, t, E, e => {
        Object.assign(e, o)
      });
      _ = _ || n
    }), _
  }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function M(e) {
  var _, E, t;
  let {
    context: o,
    userId: n,
    volume: r
  } = e;
  if (n === S.default.getId() || !(0, O.shouldReadWriteAudioSettings)()) return;
  let a = s.default.getRemoteSessionId();
  null != a && d(a, n, o, {
    muted: N.default.isLocalMute(n, o),
    volume: r
  }), _ = o, E = n, t = r, (0, A.updatePendingSettings)(_, E, {
    volume: t
  }), c()
}

function h(e) {
  let {
    context: _,
    userId: E
  } = e;
  if (E !== S.default.getId()) {
    if ((0, O.shouldReadWriteAudioSettings)()) {
      var t, o, n;
      t = _, o = E, n = N.default.isLocalMute(E, _), (0, A.updatePendingSettings)(t, o, {
        muted: n
      }), c.cancel(), U()
    }
  }
}

function P(e) {
  let {
    context: _,
    userId: E
  } = e;
  if (E !== S.default.getId()) {
    if ((0, O.shouldReadWriteAudioSettings)()) {
      var t, o, n;
      t = _, o = E, n = T.default.isLocalSoundboardMuted(E), (0, A.updatePendingSettings)(t, o, {
        soundboardMuted: n
      }), c.cancel(), U()
    }
  }
}
class m extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: D,
      AUDIO_SET_LOCAL_VOLUME: M,
      AUDIO_TOGGLE_LOCAL_MUTE: h,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: P
    }
  }
}
var G = new m