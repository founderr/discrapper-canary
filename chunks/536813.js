"use strict";
E.r(_), E.d(_, {
  default: function() {
    return h
  }
}), E("222007");
var t = E("917351"),
  o = E.n(t),
  n = E("862337"),
  a = E("689988"),
  i = E("271938"),
  r = E("718517"),
  I = E("709681"),
  T = E("636371"),
  s = E("170152"),
  S = E("391591");
let N = 15 * r.default.Millis.SECOND,
  O = 15 * r.default.Millis.SECOND,
  A = ["\uD83C\uDDE9", "\uD83C\uDDF4", "\uD83C\uDDF9", "\uD83C\uDDE6"],
  R = A.length,
  l = function(e, _) {
    let E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return "".concat(e, ":").concat(_, ":").concat(E)
  },
  L = new n.Timeout,
  u = [],
  C = {},
  D = (0, I.createSound)("highfive_whistle", "highfive_whistle", .6),
  c = (0, I.createSound)("highfive_clap", "highfive_clap", .6);

function d(e) {
  let {
    emoji: _,
    channelId: E,
    userId: t
  } = e, a = i.default.getId(), r = s.default.getEnabled();
  if (null != _) {
    if (r && (0, S.default)(_.name)) return function(e, _, E) {
      var t;
      let o = l(_, E);
      if (null != s.default.getWaitingHighFive(E, _)) return;
      let [a, i] = null !== (t = Object.entries(C).find(e => {
        let [_] = e;
        return _ !== o
      })) && void 0 !== t ? t : [];
      if (null != a && null != i) i.cancel(), c.play(), delete C[a], (0, T.completeHighFive)(a.split(":")[0], _, E, e);
      else {
        (0, T.queueHighFive)(e, _, E), D.play();
        let t = new n.DelayedCall(O, () => {
          delete C[_], (0, T.removeHighFive)(_, E)
        });
        C[_] = t, t.delay()
      }
    }(_.name, t, E);
    t === a && (u = [...u, _.name].slice(-1 * R), o.isEqual(u, A) ? (D.play(), L.stop(), u = [], (0, T.setHighFiveEnabled)(!r)) : L.start(N, () => u = []))
  }
}

function U(e) {
  let {
    completingUserId: _,
    waitingUserId: E,
    channelId: t
  } = e, o = l(_ + E, t, !0);
  C[o] = new n.DelayedCall(550, () => {
    delete C[o], (0, T.clearCompletedHighFive)(_, E, t)
  }), C[o].delay()
}
class M extends a.default {
  _terminate() {
    Object.values(C).forEach(e => e.cancel()), C = {}
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_EFFECT_SEND: d,
      HIGH_FIVE_COMPLETE: U
    }
  }
}
var h = new M