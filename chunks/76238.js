"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("392711"),
  s = a.n(n),
  l = a("996106"),
  i = a("981631");

function r(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class o {
  constructor(e, t, a) {
    if (r(this, "transport", void 0), r(this, "version", void 0), r(this, "encoding", void 0), r(this, "id", void 0), r(this, "authorization", void 0), r(this, "application", void 0), this.transport = e, this.version = t, this.encoding = a, this.id = s().uniqueId(), this.authorization = {
        authing: !1,
        scopes: [],
        accessToken: null,
        expires: new Date(0)
      }, this.application = {
        id: null,
        name: null,
        icon: null
      }, null == t || t > i.RPC_VERSION || t < 1) throw new l.default({
      closeCode: i.RPCCloseCodes.INVALID_VERSION
    }, "Invalid Version: ".concat(t))
  }
}