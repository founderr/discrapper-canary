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
  i = E("95410"),
  a = E("689988"),
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
    let e = i.default.get(L(S.default.getId()));
    !e && l.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
      let _ = !1;
      for (let [E, t] of Object.entries(N.default.getState().settingsByContext)) {
        let o = (0, R.coerceAudioContextForProto)(E);
        if (null == o) continue;
        let n = e[o],
          r = String(Date.now()),
          i = {};
        for (let [e, _] of Object.entries(t.localMutes)) i[e] = {
          muted: _,
          volume: C(E),
          modifiedAt: r,
          soundboardMuted: !1
        };
        for (let [e, _] of Object.entries(t.localVolumes)) i[e] = {
          muted: !1,
          modifiedAt: r,
          ...i[e],
          volume: (0, R.snapVolumeToDefault)(_, E)
        };
        let a = Object.keys(n).length;
        for (let [e, [E, t]] of Object.entries(i).entries()) {
          let o = 300 - a - (e + 1) <= 0;
          if (o) break;
          null == n[E] && (_ = !0, n[E] = t)
        }
      }
      return i.default.set(L(S.default.getId()), !0), _
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
        var o, n, i, a, I;
        let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          T = (0, R.coerceAudioContextForProto)(E);
        if (null == T) return !1;
        let S = e[T];
        if (S[_] = null !== (o = S[_]) && void 0 !== o ? o : (n = E, r.AudioContextSetting.create({
            muted: !1,
            volume: C(n)
          })), t(S[_]), S[_].modifiedAt = String(Date.now()), s) {
          ;
          i = S, a = _, I = E, i[a].volume !== C(I) || i[a].muted || i[a].soundboardMuted || delete i[a]
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
  let i = s.default.getRemoteSessionId();
  null != i && d(i, n, o, {
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
class m extends a.default {
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