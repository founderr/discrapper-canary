let r;
n.d(e, {
  Z1: function() {
    return h
  },
  ph: function() {
    return d
  },
  yW: function() {
    return c
  }
});
var i = n(635602),
  a = n(24716);
t = n.hmd(t);
let s = (0, a.Rf)(),
  o = {
    nowSeconds: () => Date.now() / 1e3
  },
  l = (0, i.KV)() ? function() {
    try {
      return (0, i.l$)(t, "perf_hooks").performance
    } catch (t) {
      return
    }
  }() : function() {
    let {
      performance: t
    } = s;
    if (!!t && !!t.now) return {
      now: () => t.now(),
      timeOrigin: Date.now() - t.now()
    }
  }(),
  u = void 0 === l ? o : {
    nowSeconds: () => (l.timeOrigin + l.now()) / 1e3
  },
  c = o.nowSeconds.bind(o),
  d = u.nowSeconds.bind(u),
  h = (() => {
    let {
      performance: t
    } = s;
    if (!t || !t.now) return;
    let e = t.now(),
      n = Date.now(),
      r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
      i = t.timing && t.timing.navigationStart,
      a = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
    if (r < 36e5 || a < 36e5) return r <= a ? t.timeOrigin : i;
    return n
  })()