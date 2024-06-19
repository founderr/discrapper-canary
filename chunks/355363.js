n.d(t, {
  ZP: function() {
    return s
  }
});
var l = n(829750),
  i = n(981631);

function s(e) {
  let {
    channel: t,
    locked: n,
    video: s,
    selected: r
  } = e;
  return function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: s = !0
    } = e, {
      limit: r
    } = (0, l.Z)(t), a = -1;
    return (t.userLimit > 0 && (a = t.userLimit), n && r > 0 && (a = a > 0 ? Math.min(a, r) : r), s && a === i.xGv) ? 0 : a
  }({
    channel: t,
    video: s
  }) > 0 && !n && !r
}