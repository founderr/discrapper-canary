t.d(n, {
  J: function() {
    return i
  }
});
var r = t(442837),
  u = t(19780),
  l = t(977059);

function i(e) {
  let {
    enabled: n
  } = l.c.useExperiment({
    location: "useIsSecureFramesUIEnabled"
  }), t = (0, r.e7)([u.Z], () => {
    var n;
    if (null == e || u.Z.getChannelId() !== e) return !1;
    let t = null === (n = u.Z.getSecureFramesState()) || void 0 === n ? void 0 : n.version;
    return null != t && t > 100
  });
  return n && t
}