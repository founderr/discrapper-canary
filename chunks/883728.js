var i = n(735250);
n(470079);
var s = n(374470),
  a = n(239091);
t.Z = e => {
  let {
    facepileRef: t,
    goToThread: l,
    channel: o
  } = e;
  return {
    handleLeftClick: e => {
      var n;
      !((0, s.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target))) && l(o, e.shiftKey)
    },
    handleRightClick: e => (0, a.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("39285"), n.e("48800"), n.e("19213")]).then(n.bind(n, 422200));
      return t => (0, i.jsx)(e, {
        ...t,
        channel: o
      })
    })
  }
}