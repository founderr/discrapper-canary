n.d(t, {
  RY: function() {
    return l
  },
  Tb: function() {
    return r
  },
  ec: function() {
    return o
  },
  iD: function() {
    return a
  }
}), n(47120);
var s = n(570140),
  i = n(830168);

function l(e) {
  i.Z.queryDirectory(e, (t, n) => {
    if (null == t && null != n) s.Z.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: e,
      metadata: n
    })
  })
}

function a(e) {
  s.Z.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: e
  })
}

function r(e, t) {
  let {
    label: n,
    isDefault: i
  } = t;
  s.Z.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: e,
    label: n,
    isDefault: i
  })
}

function o(e) {
  let t = {},
    n = 0;
  for (let l of e) {
    if (null != l && "string" == typeof l) i.Z.queryDirectory(l, (i, a) => {
      ++n, null == i && null != a && (t[l] = a), n === e.length && s.Z.dispatch({
        type: "INSTALLATION_LOCATION_FETCH_METADATA",
        metadataPayload: t
      })
    })
  }
}