"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
});
var r = n("773336");
async function i(t, e) {
  let {
    default: i
  } = await n.el("572544").then(n.bind(n, "572544")), u = i(t, {
    skipExtensionCheck: e,
    analyticsLocations: []
  });
  if (null != u) u(null);
  else if (r.isPlatformEmbedded) window.open(t);
  else {
    let e = document.createElement("a");
    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
  }
}