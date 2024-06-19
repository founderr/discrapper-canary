a.d(s, {
  Z: function() {
    return _
  }
});
var l = a(470079),
  t = a(252618),
  n = a(358085),
  r = a(689938);

function _() {
  return l.useEffect(() => {
    !n.isPlatformEmbedded && (0, t.EM)({
      messages: [r.Z.Messages.GO_LIVE_HEY, r.Z.Messages.GO_LIVE_LOOK, r.Z.Messages.GO_LIVE_LISTEN],
      interval: 600,
      count: 20,
      onlyWhenBlurred: !0
    })
  }, []), null
}