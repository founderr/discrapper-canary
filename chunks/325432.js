"use strict";
a.r(t), a.d(t, {
  addInstallLocation: function() {
    return l
  },
  fetchMetadata: function() {
    return o
  },
  removeInstallLocation: function() {
    return i
  },
  updateInstallLocation: function() {
    return r
  }
}), a("47120");
var n = a("570140"),
  s = a("830168");

function l(e) {
  s.default.queryDirectory(e, (t, a) => {
    null == t && null != a && n.default.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: e,
      metadata: a
    })
  })
}

function i(e) {
  n.default.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: e
  })
}

function r(e, t) {
  let {
    label: a,
    isDefault: s
  } = t;
  n.default.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: e,
    label: a,
    isDefault: s
  })
}

function o(e) {
  let t = {},
    a = 0;
  for (let l of e) null != l && "string" == typeof l && s.default.queryDirectory(l, (s, i) => {
    ++a, null == s && null != i && (t[l] = i), a === e.length && n.default.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: t
    })
  })
}