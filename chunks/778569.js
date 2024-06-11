"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("47120");
var i = n("470079"),
  r = n("81063");
let s = ["embedded_cover", "embedded_background"];

function a(e) {
  let {
    applicationId: t,
    size: n,
    names: a = s
  } = e, [o, l] = i.useState(null), [u, d] = i.useState(!0), _ = (0, r.getAssetImage)(t, o, n);
  return i.useEffect(() => {
    (0, r.getAssets)(t).then(e => {
      for (let [t, n] of(d(!1), Object.entries(e)))
        if (null != n && "" !== n.id && a.includes(n.name)) {
          l(n.id);
          return
        }
    })
  }, [t]), {
    url: _,
    state: u ? "loading" : null != _ ? "fetched" : "not-found"
  }
}