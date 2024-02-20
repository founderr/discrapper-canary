"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("917351"),
  a = n.n(i),
  l = n("862337"),
  s = n("689988"),
  r = n("271938"),
  o = n("718517"),
  u = n("709681"),
  d = n("636371"),
  c = n("170152"),
  f = n("391591");
let E = 15 * o.default.Millis.SECOND,
  h = 15 * o.default.Millis.SECOND,
  _ = ["\uD83C\uDDE9", "\uD83C\uDDF4", "\uD83C\uDDF9", "\uD83C\uDDE6"],
  C = _.length,
  S = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return "".concat(e, ":").concat(t, ":").concat(n)
  },
  g = new l.Timeout,
  T = [],
  m = {},
  p = (0, u.createSound)("highfive_whistle", "highfive_whistle", .6),
  I = (0, u.createSound)("highfive_clap", "highfive_clap", .6);

function A(e) {
  let {
    emoji: t,
    channelId: n,
    userId: i
  } = e, s = r.default.getId(), o = c.default.getEnabled();
  if (null != t) {
    if (o && (0, f.default)(t.name)) return function(e, t, n) {
      var i;
      let a = S(t, n);
      if (null != c.default.getWaitingHighFive(n, t)) return;
      let [s, r] = null !== (i = Object.entries(m).find(e => {
        let [t] = e;
        return t !== a
      })) && void 0 !== i ? i : [];
      if (null != s && null != r) r.cancel(), I.play(), delete m[s], (0, d.completeHighFive)(s.split(":")[0], t, n, e);
      else {
        (0, d.queueHighFive)(e, t, n), p.play();
        let i = new l.DelayedCall(h, () => {
          delete m[t], (0, d.removeHighFive)(t, n)
        });
        m[t] = i, i.delay()
      }
    }(t.name, i, n);
    i === s && (T = [...T, t.name].slice(-1 * C), a.isEqual(T, _) ? (p.play(), g.stop(), T = [], (0, d.setHighFiveEnabled)(!o)) : g.start(E, () => T = []))
  }
}

function N(e) {
  let {
    completingUserId: t,
    waitingUserId: n,
    channelId: i
  } = e, a = S(t + n, i, !0);
  m[a] = new l.DelayedCall(550, () => {
    delete m[a], (0, d.clearCompletedHighFive)(t, n, i)
  }), m[a].delay()
}
class O extends s.default {
  _terminate() {
    Object.values(m).forEach(e => e.cancel()), m = {}
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_EFFECT_SEND: A,
      HIGH_FIVE_COMPLETE: N
    }
  }
}
var v = new O