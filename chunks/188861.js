var i = n(710845),
  s = n(857192),
  l = n(901077),
  a = n(46832),
  r = n(852926),
  o = n(748635),
  c = n(981631);
let u = new i.Z("RPCServer:PostMessage"),
  d = (e, t, n) => {
    (s.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, l.Z)(e))
  };
t.Z = function() {
  let e = new a.Z(r.em, u, o.Z, d);
  return window.addEventListener("message", t => {
    if (window === t.source) return;
    if (null == t.source || null == t.source.postMessage) {
      u.error("Unknown event source");
      return
    }
    let n = t.source,
      i = t.data,
      s = t.origin;
    e.handleMessage(i, s, (e, t) => {
      n.postMessage(e, t)
    })
  }), e
}()