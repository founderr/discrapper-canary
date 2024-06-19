n.d(e, {
  M: function() {
    return s
  },
  Q: function() {
    return a
  }
});
var r = n(50074),
  i = n(177668);

function a(t, e, n, a) {
  let s = (0, r.HY)(n),
    o = {
      sent_at: new Date().toISOString(),
      ...s && {
        sdk: s
      },
      ...!!a && {
        dsn: (0, i.RA)(e)
      }
    },
    l = "aggregates" in t ? [{
      type: "sessions"
    }, t] : [{
      type: "session"
    }, t.toJSON()];
  return (0, r.Jd)(o, [l])
}

function s(t, e, n, i) {
  var a, s;
  let o = (0, r.HY)(n),
    l = t.type && "replay_event" !== t.type ? t.type : "event";
  a = t, !(s = n && n.sdk) || (a.sdk = a.sdk || {}, a.sdk.name = a.sdk.name || s.name, a.sdk.version = a.sdk.version || s.version, a.sdk.integrations = [...a.sdk.integrations || [], ...s.integrations || []], a.sdk.packages = [...a.sdk.packages || [], ...s.packages || []]);
  let u = (0, r.Cd)(t, o, i, e);
  delete t.sdkProcessingMetadata;
  let c = [{
    type: l
  }, t];
  return (0, r.Jd)(u, [c])
}