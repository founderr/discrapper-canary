"use strict";
n.r(e), n.d(e, {
  default: function() {
    return r
  }
});
var i = n("773336");
async function r(t, e) {
  let {
    default: r
  } = await n.el("572544").then(n.bind(n, "572544")), l = r(t, {
    skipExtensionCheck: e,
    analyticsLocations: []
  });
  if (null != l) l(null);
  else if (i.isPlatformEmbedded) window.open(t);
  else {
    let e = document.createElement("a");
    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
  }
}