"use strict";
n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(51407),
  o = n(524437),
  a = n(433517),
  l = n(147913),
  u = n(254238),
  _ = n(258609),
  c = n(763296),
  d = n(314897),
  E = n(131951),
  I = n(709054),
  T = n(815016),
  h = n(725380),
  f = n(340332),
  S = n(675478),
  A = n(65154);
let N = e => "AudioContextSettingsMigrated:".concat(e),
  m = e => e === A.Yn.STREAM ? s.h.STREAM : s.h.USER;

function O() {
  (0, T.R)() && (a.K.get(N(d.default.getId())) || S.hW.updateAsync("audioContextSettings", e => {
    let t = !1;
    for (let [n, i] of Object.entries(E.Z.getState().settingsByContext)) {
      let r = (0, f.z)(n);
      if (null == r) continue;
      let s = e[r],
        o = String(Date.now()),
        a = {};
      for (let [e, t] of Object.entries(i.localMutes)) a[e] = {
        muted: t,
        volume: m(n),
        modifiedAt: o,
        soundboardMuted: !1
      };
      for (let [e, t] of Object.entries(i.localVolumes)) a[e] = {
        muted: !1,
        modifiedAt: o,
        ...a[e],
        volume: (0, f.r)(t, n)
      };
      let l = Object.keys(s).length;
      for (let [e, [n, i]] of Object.entries(a).entries()) {
        if (300 - l - (e + 1) <= 0) break;
        null == s[n] && (t = !0, s[n] = i)
      }
    }
    return a.K.set(N(d.default.getId()), !0), t
  }, S.fy.AUTOMATED))
}
let R = r().debounce(() => {
    g()
  }, 2e3),
  p = r().debounce(u.On, 500, {
    maxWait: 500
  });

function g() {
  S.hW.updateAsync("audioContextSettings", e => {
    let t = !1;
    return (0, h.$E)((n, i, r) => {
      let s = function(e, t, n, i) {
        var r, s, a, l, u;
        let _ = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          c = (0, f.z)(n);
        if (null == c) return !1;
        let d = e[c];
        if (d[t] = null !== (r = d[t]) && void 0 !== r ? r : (s = n, o.JY.create({
            muted: !1,
            volume: m(s)
          })), i(d[t]), d[t].modifiedAt = String(Date.now()), _) {
          ;
          a = d, l = t, u = n, a[l].volume !== m(u) || a[l].muted || a[l].soundboardMuted || delete a[l]
        }
        return ! function(e) {
          let t = I.default.entries(e),
            n = t.length;
          if (n <= 300) return;
          let i = t.sort((e, t) => {
              let [n, {
                modifiedAt: i
              }] = e, [r, {
                modifiedAt: s
              }] = t;
              return Number(i) - Number(s)
            }),
            r = n - 300;
          for (let t = 0; t < r; t++) {
            let [n] = i[t];
            delete e[n]
          }
        }(d), !0
      }(e, i, n, e => {
        Object.assign(e, r)
      });
      t = t || s
    }), t
  }, S.fy.INFREQUENT_USER_ACTION)
}

function C(e) {
  var t, n, i;
  let {
    context: r,
    userId: s,
    volume: o
  } = e;
  if (s === d.default.getId() || !(0, T.R)()) return;
  let a = _.Z.getRemoteSessionId();
  null != a && p(a, s, r, {
    muted: E.Z.isLocalMute(s, r),
    volume: o
  }), t = r, n = s, i = o, (0, h.RF)(t, n, {
    volume: i
  }), R()
}

function v(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== d.default.getId()) {
    if ((0, T.R)()) {
      var i, r, s;
      i = t, r = n, s = E.Z.isLocalMute(n, t), (0, h.RF)(i, r, {
        muted: s
      }), R.cancel(), g()
    }
  }
}

function L(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== d.default.getId()) {
    if ((0, T.R)()) {
      var i, r, s;
      i = t, r = n, s = c.Z.isLocalSoundboardMuted(n), (0, h.RF)(i, r, {
        soundboardMuted: s
      }), R.cancel(), g()
    }
  }
}
class D extends l.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: O,
      AUDIO_SET_LOCAL_VOLUME: C,
      AUDIO_TOGGLE_LOCAL_MUTE: v,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: L
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new D