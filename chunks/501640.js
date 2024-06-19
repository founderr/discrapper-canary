n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(149765),
  s = n(442837),
  l = n(984933),
  a = n(496675),
  r = n(981631);

function o(e) {
  let t = (0, s.e7)([l.ZP], () => {
    var t;
    return null !== (t = l.ZP.getChannels(e)[l.sH]) && void 0 !== t ? t : []
  }, [e]);
  return 0 === t.length ? 0 : t.filter(e => {
    let {
      channel: t
    } = e;
    return a.Z.can(i.$e(r.Plq.SEND_MESSAGES, r.Plq.VIEW_CHANNEL), t)
  }).length
}