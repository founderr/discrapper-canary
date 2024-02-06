"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("884691"),
  l = n("65597"),
  r = n("526887"),
  o = n("880731");

function a() {
  let {
    createMultipleConfettiAt: e
  } = i.useContext(r.ConfettiCannonContext), t = (0, l.default)([o.default], () => o.default.getState()), n = i.useCallback(e => ({
    size: {
      type: "static-random",
      minValue: e.confettiSize - 7,
      maxValue: e.confettiSize + 7
    }
  }), []), a = i.useMemo(() => ({
    fire: (i, l, r) => {
      var o, a;
      let s = (null == r ? void 0 : r.settings) != null ? {
          ...t,
          ...r.settings
        } : t,
        u = n(s);
      e(i, l, u, (null !== (o = null == r ? void 0 : r.count) && void 0 !== o ? o : s.confettiCount) * (null !== (a = null == r ? void 0 : r.countMultiplier) && void 0 !== a ? a : 1), {
        sprite: null == r ? void 0 : r.sprite
      })
    }
  }), [e, n, t]);
  return a
}