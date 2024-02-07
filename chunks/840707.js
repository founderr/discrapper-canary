"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("872717"),
  s = n("599110");

function o(e, t, n) {
  let {
    trackedActionData: r,
    ...o
  } = t, a = {
    url: o.url,
    request_method: n
  };
  return new Promise((t, n) => {
    e(o).then(e => {
      let n = r.properties;
      "function" == typeof r.properties && (n = r.properties(e)), (0, s.trackNetworkAction)(r.event, {
        status_code: e.status,
        ...a,
        ...n
      }), t(e)
    }).catch(e => {
      var t, o;
      let l = r.properties;
      "function" == typeof r.properties && (l = r.properties(e)), (0, s.trackNetworkAction)(r.event, {
        status_code: e.status,
        error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
        error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message,
        ...a,
        ...l
      }), n(e)
    })
  })
}
var a = {
  get: function(e) {
    return o(r.default.get, e, "get")
  },
  post: function(e) {
    return o(r.default.post, e, "post")
  },
  put: function(e) {
    return o(r.default.put, e, "put")
  },
  patch: function(e) {
    return o(r.default.patch, e, "patch")
  },
  delete: function(e) {
    return o(r.default.delete, e, "del")
  }
}