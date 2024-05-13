"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("392711"),
  s = n.n(a),
  i = n("996106"),
  l = n("981631");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o {
  constructor(e, t, n) {
    if (r(this, "transport", void 0), r(this, "version", void 0), r(this, "encoding", void 0), r(this, "id", void 0), r(this, "authorization", void 0), r(this, "application", void 0), this.transport = e, this.version = t, this.encoding = n, this.id = s().uniqueId(), this.authorization = {
        authing: !1,
        scopes: [],
        accessToken: null,
        expires: new Date(0)
      }, this.application = {
        id: null,
        name: null,
        icon: null
      }, null == t || t > l.RPC_VERSION || t < 1) throw new i.default({
      closeCode: l.RPCCloseCodes.INVALID_VERSION
    }, "Invalid Version: ".concat(t))
  }
}