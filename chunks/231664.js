n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(848246),
  i = n(442837),
  s = n(358221),
  r = n(557457),
  a = n(386542);

function o(e, t) {
  let n = (0, i.e7)([s.Z], () => null != e ? s.Z.getStreamParticipants(e).find(e => e.user.id === t) : void 0, [e, t]),
    {
      activated: o,
      available: u,
      hqStreamingState: {
        hqStreamingIsEnabled: c
      }
    } = (0, a.k)(l.q.STREAM_HIGH_QUALITY);
  if (!o || !u || !c) return;
  let d = null != n ? (0, r.Wc)(n) : void 0;
  return null != d ? "".concat((0, r.ml)(d.maxResolution), " ").concat((0, r.bp)(d.maxFrameRate)) : void 0
}