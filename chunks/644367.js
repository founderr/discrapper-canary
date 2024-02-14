"use strict";
e("808653"), r.type = function(t) {
  return t.split(/ *; */).shift()
}, r.params = function(t) {
  return t.split(/ *; */).reduce(function(t, r) {
    var e = r.split(/ *= */),
      n = e.shift(),
      i = e.shift();
    return n && i && (t[n] = i), t
  }, {})
}, r.parseLinks = function(t) {
  return t.split(/ *, */).reduce(function(t, r) {
    var e = r.split(/ *; */),
      n = e[0].slice(1, -1);
    return t[e[1].split(/ *= */)[1].slice(1, -1)] = n, t
  }, {})
}, r.cleanHeader = function(t, r) {
  return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, r && (delete t.authorization, delete t.cookie), t
}