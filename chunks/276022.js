"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  i = n("442837"),
  u = n("481060"),
  s = n("139387"),
  d = n("230711"),
  r = n("213459"),
  o = n("434404"),
  c = n("430824"),
  f = n("496675"),
  E = n("981631"),
  S = n("689938");

function _(e) {
  let {
    user: t,
    guildId: n,
    channel: _,
    context: T
  } = e, p = c.default.getGuild(n), A = (0, i.useStateFromStores)([f.default], () => null != p ? f.default.can(E.Permissions.MANAGE_GUILD, p) : null), I = (0, r.useContextIndexState)(_, !0, !0), g = (0, r.useUserIndexState)(!0, !0), {
    isUserApp: m,
    isGuildApp: M
  } = l.useMemo(() => {
    var e, n, a, l;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let i = Object.values(null !== (a = null === (e = I.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
      u = Object.values(null !== (l = null === (n = g.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
    return {
      isGuildApp: i.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: u.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [I, g, null == t ? void 0 : t.id]), v = l.useCallback(() => {
    (null == p ? void 0 : p.id) != null && (o.default.open(p.id, E.GuildSettingsSections.INTEGRATIONS), s.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]), O = l.useCallback(() => {
    d.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
  }, []), N = T === E.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !A || N || !M && !m) return null;
  let h = [];
  return M && h.push((0, a.jsx)(u.MenuItem, {
    id: "manage-integration",
    label: S.default.Messages.MANAGE_INTEGRATION,
    action: v
  }, "manage-integration")), m && h.push((0, a.jsx)(u.MenuItem, {
    id: "manage-authorized-app",
    label: S.default.Messages.MANAGE_AUTHORIZED_APP,
    action: O
  }, "manage-authorized-app")), h
}