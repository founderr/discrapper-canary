n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(848246),
  l = n(442837),
  r = n(358221),
  a = n(557457),
  s = n(386542);

function o(e, t) {
  let n = (0, l.e7)([r.Z], () => null != e ? r.Z.getStreamParticipants(e).find(e => e.user.id === t) : void 0, [e, t]),
    {
      activated: o,
      available: c,
      hqStreamingState: {
        hqStreamingIsEnabled: u
      }
    } = (0, s.k)(i.q.STREAM_HIGH_QUALITY);
  if (!o || !c || !u) return;
  let d = null != n ? (0, a.Wc)(n) : void 0;
  return null != d ? "".concat((0, a.ml)(d.maxResolution), " ").concat((0, a.bp)(d.maxFrameRate)) : void 0
}