t.d(s, {
  Z: function() {
    return u
  }
});
var l = t(735250);
t(470079);
var n = t(442837),
  i = t(270394),
  a = t(388610),
  r = t(430824),
  o = t(496675),
  d = t(246946),
  c = t(981631);

function u() {
  let e = (0, n.e7)([d.Z], () => d.Z.hideInstantInvites),
    {
      channel: s,
      guild: t
    } = (0, n.cj)([a.Z, r.Z], () => {
      let {
        channel: e
      } = a.Z.getProps(), s = null != e ? r.Z.getGuild(e.getGuildId()) : null;
      return {
        channel: e,
        guild: s
      }
    }, []),
    u = (0, n.e7)([o.Z], () => null != s && o.Z.can(c.Plq.CREATE_INSTANT_INVITE, s), [s]),
    {
      invites: h,
      loading: m
    } = (0, n.cj)([a.Z], () => a.Z.getInvites(), []);
  return (0, l.jsx)(i.Z, {
    invites: h,
    loading: m,
    guild: t,
    channel: s,
    canCreateInvites: u,
    hide: e
  })
}