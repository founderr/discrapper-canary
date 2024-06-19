t.d(n, {
  Z: function() {
    return s
  }
}), t(47120);
var i = t(470079);

function s(e, n) {
  let [t, s] = i.useState(null), l = i.useCallback(e => {
    s(e)
  }, []), a = i.useCallback(() => {
    s(null)
  }, []), r = i.useCallback(i => {
    a();
    let s = e.find(e => {
        let {
          id: n
        } = e;
        return t === n
      }),
      l = e.find(e => {
        let {
          id: n
        } = e;
        return i === n
      });
    if (null == s || null == l || s === l) return;
    let r = [...e],
      o = r.indexOf(s),
      c = r.indexOf(l),
      d = c - o > 0 ? 1 : 0;
    r.splice(o, 1), c = r.indexOf(l), r.splice(c + d, 0, s), n(r)
  }, [e, t, a, n]);
  return {
    draggingId: t,
    handleDragStart: l,
    handleDragReset: a,
    handleDragComplete: r
  }
}