"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("996106"),
  s = a("631467"),
  l = a("76238"),
  i = a("186901"),
  r = a("981631");

function o(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class u extends l.default {
  send(e) {
    var t;
    null === (t = this.onSendingToRPCClient) || void 0 === t || t.call(this, e, this.id), this.postMessageToRPCClient([s.default.FRAME, e], this.origin)
  }
  close(e, t) {
    !this.closed && this.postClose(this.origin, {
      code: e,
      message: t
    }, this.postMessageToRPCClient), this.closed = !0
  }
  constructor({
    origin: e,
    postMessageToRPCClient: t,
    frameId: a,
    version: s,
    encoding: l,
    logger: u,
    postClose: d,
    onSendingToRPCClient: c
  }) {
    if (super(i.TransportTypes.POST_MESSAGE, s, l), o(this, "origin", void 0), o(this, "frameId", void 0), o(this, "postMessageToRPCClient", void 0), o(this, "logger", void 0), o(this, "postClose", void 0), o(this, "onSendingToRPCClient", void 0), o(this, "closed", void 0), -1 === ["etf", "json"].indexOf(l)) throw new n.default({
      closeCode: r.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(l));
    if ("etf" === l) throw new n.default({
      closeCode: r.RPCCloseCodes.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this.origin = e, this.postMessageToRPCClient = t, this.frameId = a, this.logger = u, this.postClose = d, this.onSendingToRPCClient = c, this.closed = !1
  }
}