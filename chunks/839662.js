n.d(t, {
  Z: function() {
    return s
  }
});
var l = n(44136),
  i = n(354459);

function s(e, t) {
  var n, s;
  let a = null,
    r = null,
    o = null,
    c = !1,
    u = !1;
  switch (e.type) {
    case i.fO.ACTIVITY:
      break;
    case i.fO.USER:
      a = e.streamId, o = e.voiceState, c = e.speaking, u = e.ringing;
      break;
    case i.fO.STREAM:
      a = e.streamId, r = e.stream
  }
  return {
    streamId: a,
    stream: r,
    speaking: c,
    ringing: u,
    muted: null !== (n = null == o ? void 0 : o.isVoiceMuted()) && void 0 !== n && n,
    deafen: null !== (s = null == o ? void 0 : o.isVoiceDeafened()) && void 0 !== s && s,
    mirror: e.type === i.fO.USER && e.user.id === t,
    hasVideo: (0, l.ZP)(e)
  }
}