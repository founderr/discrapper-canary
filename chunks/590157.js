"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("442837"),
  i = l("481060"),
  r = l("366598"),
  o = l("377617"),
  d = l("821864"),
  u = l("905753"),
  c = l("995390"),
  f = l("469880"),
  I = l("665578"),
  m = l("689938"),
  T = l("575796");

function E(e) {
  let {
    application: t,
    canNavigate: l,
    guildId: c
  } = e, I = (0, s.useStateFromStores)([u.default], () => u.default.isUnavailable());
  return (a.useEffect(() => (d.initIntegrationPermissions(t.id), d.clearIntegrationPermissions), [t.id]), a.useEffect(() => {
    d.getApplicationCommandPermissions(t.id, c, t.id), d.getApplicationCommands(c, t.id)
  }, [t.id, c]), I) ? null : (0, n.jsxs)(a.Fragment, {
    children: [(0, n.jsx)(r.default, {
      icon: (0, n.jsx)(o.default, {}),
      title: m.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS
    }), (0, n.jsx)(i.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: m.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION
    }), (0, n.jsx)(N, {
      guildId: c,
      applicationId: t.id
    }), (0, n.jsx)(f.default, {
      applicationIcon: t.icon,
      applicationName: t.name,
      canNavigate: l,
      guildId: c
    })]
  })
}

function N(e) {
  let {
    applicationId: t,
    guildId: l
  } = e, {
    originalApplicationPermissions: a,
    editedTargetPermissions: s,
    selectedPermissionCount: i
  } = (0, c.default)(l, t);
  return (0, n.jsx)("div", {
    className: T.applicationPermissions,
    children: (0, n.jsx)(I.default, {
      applicationId: t,
      guildId: l,
      inModal: !1,
      editedTargetPermissions: s,
      originalApplicationPermissions: a,
      selectedPermissionCount: i
    })
  })
}