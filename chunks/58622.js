"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("37983");
a("884691");
var l = a("446674"),
  s = a("77078"),
  u = a("242757"),
  i = a("923959"),
  r = a("957255"),
  d = a("76539"),
  o = a("49111"),
  c = a("782340");

function f(e) {
  let {
    source: t,
    guild: a,
    channel: n,
    stageInstance: s
  } = e, d = (0, l.useStateFromStores)([i.default], () => i.default.getDefaultChannel(a.id, !0, o.Permissions.CREATE_INSTANT_INVITE)), c = (0, l.useStateFromStores)([r.default], () => (0, u.canViewInviteModal)(r.default, a, n, s)), f = E(t, a, c && null != n ? n : d), h = C(t);
  return null == n && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != d ? f : h
}
let E = (e, t, l) => (0, n.jsx)(s.MenuItem, {
    id: "invite-people",
    label: c.default.Messages.INVITE_PEOPLE,
    color: "brand",
    icon: e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: s
      } = await a.el("310688").then(a.bind(a, "310688"));
      return a => (0, n.jsx)(s, {
        ...a,
        guild: t,
        channel: l,
        source: e
      })
    })
  }),
  C = e => (0, n.jsx)(s.MenuItem, {
    id: "invite-people",
    label: c.default.Messages.INVITE_PEOPLE,
    color: "brand",
    icon: e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
    action: () => (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("973132").then(a.bind(a, "973132"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    })
  })