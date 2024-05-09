"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("411104");
var n = i("735250"),
  a = i("470079"),
  l = i("120356"),
  s = i.n(l),
  r = i("873199"),
  o = i("442837"),
  c = i("857192"),
  d = i("674588"),
  u = i("368862"),
  h = i("927356"),
  p = i("125909"),
  f = i("185156"),
  m = i("87528"),
  C = i("57348"),
  x = i("164217");

function _() {
  let e = (0, o.useStateFromStores)([c.default], () => c.default.appDirectoryIncludesInactiveCollections),
    t = (0, o.useStateFromStores)([u.default], () => u.default.getFetchState({
      includesInactive: e
    })),
    i = (0, o.useStateFromStores)([u.default], () => u.default.getCollections({
      includesInactive: e
    }));
  return (a.useEffect(() => {
    d.getCollections({
      includesInactive: e
    })
  }, [e]), t === u.FetchState.ERROR) ? (0, n.jsx)(h.default, {}) : (0, n.jsx)(p.default, {
    loading: t === u.FetchState.FETCHING,
    children: null == i ? void 0 : i.map((e, t) => {
      let a;
      let l = t > 0 && i[t - 1].type !== r.ApplicationDirectoryCollectionType.GALLERY;
      switch (e.type) {
        case r.ApplicationDirectoryCollectionType.LIST:
          a = (0, n.jsx)(m.default, {
            collection: e
          });
          break;
        case r.ApplicationDirectoryCollectionType.LIST_WITH_IMAGE:
          a = (0, n.jsx)(C.default, {
            collection: e
          });
          break;
        case r.ApplicationDirectoryCollectionType.GALLERY:
          a = (0, n.jsx)(f.default, {
            collection: e
          });
          break;
        default:
          return null
      }
      return (0, n.jsx)("div", {
        className: s()({
          [x.topMargin]: l
        }),
        children: a
      }, e.id)
    })
  })
}