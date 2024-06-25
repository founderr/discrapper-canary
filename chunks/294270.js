"use strict";
n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(846519),
  o = n(147913),
  a = n(314897),
  l = n(70956),
  u = n(557177),
  _ = n(697492),
  c = n(37091),
  d = n(721264);
let E = 15 * l.Z.Millis.SECOND,
  I = 15 * l.Z.Millis.SECOND,
  T = ["\uD83C\uDDE9", "\uD83C\uDDF4", "\uD83C\uDDF9", "\uD83C\uDDE6"],
  h = T.length,
  f = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return "".concat(e, ":").concat(t, ":").concat(n)
  },
  S = new s.V7,
  A = [],
  N = {},
  m = (0, u.tu)("highfive_whistle", "highfive_whistle", .6),
  O = (0, u.tu)("highfive_clap", "highfive_clap", .6);

function p(e) {
  let {
    emoji: t,
    channelId: n,
    userId: i
  } = e, o = a.default.getId(), l = c.Z.getEnabled();
  if (null != t) {
    if (l && (0, d.Z)(t.name)) return function(e, t, n) {
      var i;
      let r = f(t, n);
      if (null != c.Z.getWaitingHighFive(n, t)) return;
      let [o, a] = null !== (i = Object.entries(N).find(e => {
        let [t] = e;
        return t !== r
      })) && void 0 !== i ? i : [];
      if (null != o && null != a) a.cancel(), O.play(), delete N[o], (0, _.Ym)(o.split(":")[0], t, n, e);
      else {
        (0, _._g)(e, t, n), m.play();
        let i = new s.sW(I, () => {
          delete N[t], (0, _.Gd)(t, n)
        });
        N[t] = i, i.delay()
      }
    }(t.name, i, n);
    i === o && (A = [...A, t.name].slice(-1 * h), r().isEqual(A, T) ? (m.play(), S.stop(), A = [], (0, _.ME)(!l)) : S.start(E, () => A = []))
  }
}

function R(e) {
  let {
    completingUserId: t,
    waitingUserId: n,
    channelId: i
  } = e, r = f("".concat(t).concat(n), i, !0);
  N[r] = new s.sW(550, () => {
    delete N[r], (0, _.hu)(t, n, i)
  }), N[r].delay()
}
class g extends o.Z {
  _terminate() {
    Object.values(N).forEach(e => e.cancel()), N = {}
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VOICE_CHANNEL_EFFECT_SEND: p,
      HIGH_FIVE_COMPLETE: R
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new g