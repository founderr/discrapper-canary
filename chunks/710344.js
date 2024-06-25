t.d(n, {
  Z: function() {
    return l
  }
}), t(47120);
var i = t(470079);

function l(e, n) {
  let [t, l] = i.useState(null), s = i.useCallback(e => {
    l(e)
  }, []), a = i.useCallback(() => {
    l(null)
  }, []), r = i.useCallback(i => {
    a();
    let l = e.find(e => {
        let {
          id: n
        } = e;
        return t === n
      }),
      s = e.find(e => {
        let {
          id: n
        } = e;
        return i === n
      });
    if (null == l || null == s || l === s) return;
    let r = [...e],
      o = r.indexOf(l),
      c = r.indexOf(s),
      d = c - o > 0 ? 1 : 0;
    r.splice(o, 1), c = r.indexOf(s), r.splice(c + d, 0, l), n(r)
  }, [e, t, a, n]);
  return {
    draggingId: t,
    handleDragStart: s,
    handleDragReset: a,
    handleDragComplete: r
  }
}