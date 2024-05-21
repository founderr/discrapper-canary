"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var s = l("735250");
l("470079");
var a = l("442837"),
  n = l("270394"),
  i = l("388610"),
  r = l("430824"),
  o = l("496675"),
  d = l("246946"),
  u = l("981631");

function c() {
  let e = (0, a.useStateFromStores)([d.default], () => d.default.hideInstantInvites),
    {
      channel: t,
      guild: l
    } = (0, a.useStateFromStoresObject)([i.default, r.default], () => {
      let {
        channel: e
      } = i.default.getProps(), t = null != e ? r.default.getGuild(e.getGuildId()) : null;
      return {
        channel: e,
        guild: t
      }
    }, []),
    c = (0, a.useStateFromStores)([o.default], () => null != t && o.default.can(u.Permissions.CREATE_INSTANT_INVITE, t), [t]),
    {
      invites: h,
      loading: m
    } = (0, a.useStateFromStoresObject)([i.default], () => i.default.getInvites(), []);
  return (0, s.jsx)(n.default, {
    invites: h,
    loading: m,
    guild: l,
    channel: t,
    canCreateInvites: c,
    hide: e
  })
}