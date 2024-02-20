"use strict";

function t(e) {
  let _ = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    t = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
    o = null != e ? "?redirect_to=".concat(encodeURIComponent(e)) : "";
  return 0 !== E.length && (E = 0 === o.length ? "?".concat(E) : "&".concat(E)), "".concat(_ ? t : "", "/login").concat(o).concat(E)
}
E.r(_), E.d(_, {
  getLoginPath: function() {
    return t
  },
  wrapPaths: function() {
    return o
  }
}), E("222007");

function o(e, _) {
  let E = {};
  for (let t of Object.keys(e)) {
    let o = e[t];
    if ("function" != typeof o) {
      E[t] = o;
      continue
    }
    E[t] = function() {
      for (var e = arguments.length, E = Array(e), t = 0; t < e; t++) E[t] = arguments[t];
      return o(... function(e, _) {
        return e.map(e => null == e ? e : null == _ ? encodeURIComponent(e) : String(e).split("").map(e => null != _ && _.includes(e) ? e : encodeURIComponent(e)).join(""))
      }(E, _))
    }
  }
  return E
}