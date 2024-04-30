"use strict";
a.r(t);
var n = a("710845"),
  s = a("857192"),
  l = a("901077"),
  i = a("46832"),
  r = a("852926"),
  o = a("748635"),
  u = a("981631");
let d = new n.default("RPCServer:PostMessage"),
  c = (e, t, a) => {
    (s.default.isLoggingOverlayEvents || e.cmd !== u.RPCCommands.OVERLAY) && t.info("Socket Message: ".concat(a.id), (0, l.default)(e))
  };
t.default = function() {
  let e = new i.default(r.validateSocketClient, d, o.default, c);
  return window.addEventListener("message", t => {
    if (window === t.source) return;
    if (null == t.source || null == t.source.postMessage) {
      d.error("Unknown event source");
      return
    }
    let a = t.source,
      n = t.data,
      s = t.origin;
    e.handleMessage(n, s, (e, t) => {
      a.postMessage(e, t)
    })
  }), e
}()