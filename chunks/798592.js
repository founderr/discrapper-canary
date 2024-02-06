"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("884691"),
  r = n("65597"),
  o = n("526887"),
  s = n("880731");

function l() {
  let {
    createMultipleConfettiAt: e
  } = i.useContext(o.ConfettiCannonContext), t = (0, r.default)([s.default], () => s.default.getState()), n = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 7,
      maxValue: e.confettiSize + 7
    }
  }), []), l = i.useMemo(() => ({
    fire: (i, r, o) => {
      var s, l;
      let a = (null == o ? void 0 : o.settings) != null ? {
          ...t,
          ...o.settings
        } : t,
        u = n(a);
      e(i, r, u, (null !== (s = null == o ? void 0 : o.count) && void 0 !== s ? s : a.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), {
        sprite: null == o ? void 0 : o.sprite
      })
    }
  }), [e, n, t]);
  return l
}