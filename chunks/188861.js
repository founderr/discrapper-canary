var s = n(710845),
  i = n(857192),
  l = n(901077),
  a = n(46832),
  r = n(852926),
  o = n(748635),
  c = n(981631);
let u = new s.Z("RPCServer:PostMessage"),
  d = (e, t, n) => {
    (i.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, l.Z)(e))
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
      s = t.data,
      i = t.origin;
    e.handleMessage(s, i, (e, t) => {
      n.postMessage(e, t)
    })
  }), e
}()