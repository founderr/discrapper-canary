n.d(e, {
  r: function() {
    return a
  }
});
var r = n(177668),
  i = n(50074);

function a(t, {
  metadata: e,
  tunnel: n,
  dsn: a
}) {
  let s = {
      event_id: t.event_id,
      sent_at: new Date().toISOString(),
      ...e && e.sdk && {
        sdk: {
          name: e.sdk.name,
          version: e.sdk.version
        }
      },
      ...!!n && !!a && {
        dsn: (0, r.RA)(a)
      }
    },
    o = function(t) {
      return [{
        type: "user_report"
      }, t]
    }(t);
  return (0, i.Jd)(s, [o])
}