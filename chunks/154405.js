n.d(e, {
  _: function() {
    return a
  }
});
var r = n(442853),
  i = n(28434);

function a(t, e, n) {
  let a = e.getOptions(),
    {
      publicKey: s
    } = e.getDsn() || {},
    {
      segment: o
    } = n && n.getUser() || {},
    l = (0, r.Jr)({
      environment: a.environment || i.J,
      release: a.release,
      user_segment: o,
      public_key: s,
      trace_id: t
    });
  return e.emit && e.emit("createDsc", l), l
}