n.d(e, {
  y: function() {
    return a
  }
});
var r = n(50074),
  i = n(868145);

function a(t, e, n) {
  let a = [{
    type: "client_report"
  }, {
    timestamp: n || (0, i.yW)(),
    discarded_events: t
  }];
  return (0, r.Jd)(e ? {
    dsn: e
  } : {}, [a])
}