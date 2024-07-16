n.d(t, {
  Z: function() {
return r;
  }
});
var s = n(470079),
  o = n(252618),
  a = n(358085),
  l = n(689938);

function r() {
  return s.useEffect(() => {
!a.isPlatformEmbedded && (0, o.EM)({
  messages: [
    l.Z.Messages.GO_LIVE_HEY,
    l.Z.Messages.GO_LIVE_LOOK,
    l.Z.Messages.GO_LIVE_LISTEN
  ],
  interval: 600,
  count: 20,
  onlyWhenBlurred: !0
});
  }, []), null;
}