n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(442837),
  i = n(872810),
  s = n(199902),
  a = n(314897);

function r(e, t) {
  let n = (0, l.e7)([a.default], () => a.default.getId()),
    r = (0, l.e7)([s.Z], () => {
      let t = s.Z.getCurrentUserActiveStream();
      return null != t && t.channelId === e
    }, [e]),
    o = (0, l.e7)([s.Z], () => s.Z.isSelfStreamHidden(e), [e]);
  return [(null == t || t === n) && r, o, t => {
    (0, i.pR)(e, t)
  }]
}