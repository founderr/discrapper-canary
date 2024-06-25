t.d(n, {
  Z: function() {
    return T
  }
});
var i = t(735250),
  l = t(470079),
  s = t(442837),
  a = t(481060),
  r = t(366598),
  o = t(821864),
  c = t(905753),
  d = t(995390),
  u = t(469880),
  I = t(665578),
  N = t(689938),
  E = t(586452);

function T(e) {
  let {
    application: n,
    canNavigate: t,
    guildId: d
  } = e, I = (0, s.e7)([c.Z], () => c.Z.isUnavailable());
  return (l.useEffect(() => (o.I4(n.id), o.kZ), [n.id]), l.useEffect(() => {
    o.gq(n.id, d, n.id), o.Sn(d, n.id)
  }, [n.id, d]), I) ? null : (0, i.jsxs)(l.Fragment, {
    children: [(0, i.jsx)(r.Z, {
      icon: (0, i.jsx)(a.SlashBoxIcon, {
        size: "md",
        color: "currentColor"
      }),
      title: N.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS
    }), (0, i.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: N.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION
    }), (0, i.jsx)(m, {
      guildId: d,
      applicationId: n.id
    }), (0, i.jsx)(u.Z, {
      applicationIcon: n.icon,
      applicationName: n.name,
      canNavigate: t,
      guildId: d
    })]
  })
}

function m(e) {
  let {
    applicationId: n,
    guildId: t
  } = e, {
    originalApplicationPermissions: l,
    editedTargetPermissions: s,
    selectedPermissionCount: a
  } = (0, d.Z)(t, n);
  return (0, i.jsx)("div", {
    className: E.applicationPermissions,
    children: (0, i.jsx)(I.Z, {
      applicationId: n,
      guildId: t,
      inModal: !1,
      editedTargetPermissions: s,
      originalApplicationPermissions: l,
      selectedPermissionCount: a
    })
  })
}