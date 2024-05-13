"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("996106"),
  s = n("631467"),
  i = n("76238"),
  l = n("186901"),
  r = n("981631");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends i.default {
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
    frameId: n,
    version: s,
    encoding: i,
    logger: u,
    postClose: d,
    onSendingToRPCClient: c
  }) {
    if (super(l.TransportTypes.POST_MESSAGE, s, i), o(this, "origin", void 0), o(this, "frameId", void 0), o(this, "postMessageToRPCClient", void 0), o(this, "logger", void 0), o(this, "postClose", void 0), o(this, "onSendingToRPCClient", void 0), o(this, "closed", void 0), -1 === ["etf", "json"].indexOf(i)) throw new a.default({
      closeCode: r.RPCCloseCodes.INVALID_ENCODING
    }, "Invalid Encoding: ".concat(i));
    if ("etf" === i) throw new a.default({
      closeCode: r.RPCCloseCodes.INVALID_ENCODING
    }, "Erlpack cannot be used on this client");
    this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = u, this.postClose = d, this.onSendingToRPCClient = c, this.closed = !1
  }
}