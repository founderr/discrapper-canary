"use strict";
n.r(t), n("47120");
var i = n("633302");
t.default = e => {
  let t = new Map;
  for (let r of e) {
    var n;
    if (null != r.id) {
      t.set(r.id, r);
      continue
    }
    let e = null !== (n = i.default.convertSurrogateToBase(r.surrogates)) && void 0 !== n ? n : r;
    t.set(e.name, e)
  }
  return t
}