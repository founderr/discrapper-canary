"use strict";
t.type = e => e.split(/ *; */).shift(), t.params = e => {
  let t = {};
  for (let n of e.split(/ *; */)) {
    let e = n.split(/ *= */),
      r = e.shift(),
      i = e.shift();
    r && i && (t[r] = i)
  }
  return t
}, t.parseLinks = e => {
  let t = {};
  for (let n of e.split(/ *, */)) {
    let e = n.split(/ *; */),
      r = e[0].slice(1, -1);
    t[e[1].split(/ *= */)[1].slice(1, -1)] = r
  }
  return t
}, t.cleanHeader = (e, t) => (delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e), t.isObject = e => null !== e && "object" == typeof e, t.hasOwn = Object.hasOwn || function(e, t) {
  if (null == e) throw TypeError("Cannot convert undefined or null to object");
  return Object.prototype.hasOwnProperty.call(Object(e), t)
}, t.mixin = (e, n) => {
  for (let r in n) t.hasOwn(n, r) && (e[r] = n[r])
}