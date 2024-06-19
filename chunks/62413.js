i.d(t, {
  Z: function() {
    return C
  }
}), i(411104);
var n = i(735250),
  s = i(470079),
  a = i(120356),
  r = i.n(a),
  l = i(873199),
  o = i(442837),
  c = i(857192),
  d = i(674588),
  u = i(368862),
  h = i(927356),
  m = i(125909),
  p = i(185156),
  _ = i(87528),
  x = i(57348),
  g = i(219285);

function C() {
  let e = (0, o.e7)([c.default], () => c.default.appDirectoryIncludesInactiveCollections),
    t = (0, o.e7)([u.Z], () => u.Z.getFetchState({
      includesInactive: e
    })),
    i = (0, o.e7)([u.Z], () => u.Z.getCollections({
      includesInactive: e
    }));
  return (s.useEffect(() => {
    d.bG({
      includesInactive: e
    })
  }, [e]), t === u.M.ERROR) ? (0, n.jsx)(h.Z, {}) : (0, n.jsx)(m.Z, {
    loading: t === u.M.FETCHING,
    children: null == i ? void 0 : i.map((e, t) => {
      let s;
      let a = t > 0 && i[t - 1].type !== l.o.GALLERY;
      switch (e.type) {
        case l.o.LIST:
          s = (0, n.jsx)(_.Z, {
            collection: e
          });
          break;
        case l.o.LIST_WITH_IMAGE:
          s = (0, n.jsx)(x.Z, {
            collection: e
          });
          break;
        case l.o.GALLERY:
          s = (0, n.jsx)(p.Z, {
            collection: e
          });
          break;
        default:
          return null
      }
      return (0, n.jsx)("div", {
        className: r()({
          [g.topMargin]: a
        }),
        children: s
      }, e.id)
    })
  })
}