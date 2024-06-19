n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(470079),
  i = n(592125),
  s = n(944486),
  a = n(585483),
  r = n(917107),
  o = n(89425),
  c = n(197386),
  u = n(981631);

function d(e) {
  let {
    onTransition: t
  } = e;
  l.useEffect(() => {
    async function e(e) {
      let {
        channelId: n
      } = e;
      if (!(0, r.Z)(n)) return;
      s.Z.getVoiceChannelId() !== n && await (0, o.Z)({
        channelId: n
      });
      let l = i.Z.getChannel(n),
        a = null == l ? void 0 : l.guild_id;
      setTimeout(() => {
        (0, c.Z)(a, n), null == t || t()
      }, 0)
    }
    return a.S.subscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e), () => {
      a.S.unsubscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e)
    }
  }, [t])
}