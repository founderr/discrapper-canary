n.d(t, {
  J: function() {
    return a
  }
});
var l = n(442837),
  i = n(19780),
  s = n(977059);

function a(e) {
  let {
    enabled: t
  } = s.c.useExperiment({
    location: "useIsSecureFramesUIEnabled"
  }), n = (0, l.e7)([i.Z], () => {
    var t;
    if (null == e || i.Z.getChannelId() !== e) return !1;
    let n = null === (t = i.Z.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
    return null != n && n > 100
  });
  return t && n
}