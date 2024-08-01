n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var s = n(373793),
  a = n(481060),
  r = n(700582),
  l = n(592180),
  o = n(565138),
  c = n(430824),
  u = n(594174),
  d = n(689938),
  _ = n(938639);

function E(e) {
  var t, n, E;
  if (!(0, l.a)(e))
return null;
  let I = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[s.Y.USER_INSTALL],
m = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[s.Y.GUILD_INSTALL],
T = u.default.getUser(I),
h = c.Z.getGuild(m),
N = u.default.getUser(null === (E = e.interactionMetadata) || void 0 === E ? void 0 : E.user.id),
f = null;
  return null != h ? f = (0, i.jsx)(a.MenuItem, {
className: _.interactionInfoMenuItem,
disabled: !0,
icon: () => (0, i.jsx)(o.Z, {
  guild: h,
  size: o.Z.Sizes.MINI
}),
id: 'integration-owner',
label: h.name,
showIconFirst: !0,
subtext: d.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({
  application: e.author.username
})
  }) : null != T && (f = (0, i.jsx)(a.MenuItem, {
className: _.interactionInfoMenuItem,
disabled: !0,
icon: () => (0, i.jsx)(r.Z, {
  user: T,
  size: a.AvatarSizes.SIZE_20
}),
id: 'integration-owner',
label: T.username,
showIconFirst: !0,
subtext: d.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({
  application: e.author.username
})
  })), (0, i.jsxs)(a.MenuItem, {
id: 'view-interaction-info',
label: d.Z.Messages.VIEW_INTERACTION_INFO,
children: [
  f,
  null != N ? (0, i.jsx)(a.MenuItem, {
    className: _.interactionInfoMenuItem,
    disabled: !0,
    icon: () => (0, i.jsx)(r.Z, {
      user: N,
      size: a.AvatarSizes.SIZE_20
    }),
    id: 'interaction-user',
    label: N.username,
    showIconFirst: !0,
    subtext: d.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY
  }) : null
]
  });
}