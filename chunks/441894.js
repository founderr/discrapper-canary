t.d(n, {
  J: function() {
    return u
  }
});
var i = t(442837),
  r = t(19780),
  l = t(977059);

function u(e) {
  let {
    enabled: n
  } = l.c.useExperiment({
    location: "useIsSecureFramesUIEnabled"
  }), t = (0, i.e7)([r.Z], () => {
    var n;
    if (null == e || r.Z.getChannelId() !== e) return !1;
    let t = null === (n = r.Z.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
    return null != t && t > 100
  });
  return n && t
}