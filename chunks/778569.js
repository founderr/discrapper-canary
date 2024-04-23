"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("47120");
var s = n("470079"),
  l = n("81063");
let a = ["embedded_cover", "embedded_background"];

function i(e) {
  let {
    applicationId: t,
    size: n,
    names: i = a
  } = e, [r, o] = s.useState(null), [u, d] = s.useState(!0), c = (0, l.getAssetImage)(t, r, n);
  return s.useEffect(() => {
    (0, l.getAssets)(t).then(e => {
      for (let [t, n] of(d(!1), Object.entries(e)))
        if (null != n && "" !== n.id && i.includes(n.name)) {
          o(n.id);
          return
        }
    })
  }, [t]), {
    url: c,
    state: u ? "loading" : null != c ? "fetched" : "not-found"
  }
}