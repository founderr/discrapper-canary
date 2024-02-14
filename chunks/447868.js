"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("222007");
var t = E("689988"),
  o = E("49671"),
  n = E("102985");
let a = !1;

function r() {
  var e;
  let _ = null === o.default || void 0 === o.default ? void 0 : null === (e = o.default.window) || void 0 === e ? void 0 : e.setContentProtection;
  if (null == _) return;
  let E = n.default.enableContentProtection;
  E !== a && (_(E), a = E)
}
class i extends t.default {
  constructor() {
    r(), super(), this.stores = new Map().set(n.default, r)
  }
}
var I = new i