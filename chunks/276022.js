"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("653041");
var i = n("735250"),
  l = n("470079"),
  a = n("442837"),
  u = n("481060"),
  s = n("139387"),
  d = n("230711"),
  r = n("213459"),
  o = n("434404"),
  c = n("430824"),
  f = n("496675"),
  S = n("981631"),
  E = n("689938");

function T(e) {
  let {
    user: t,
    guildId: n,
    channel: T,
    context: _
  } = e, p = c.default.getGuild(n), A = (0, a.useStateFromStores)([f.default], () => null != p ? f.default.can(S.Permissions.MANAGE_GUILD, p) : null), I = (0, r.useContextIndexState)(T, !0, !0), g = (0, r.useUserIndexState)(!0, !0), {
    isUserApp: m,
    isGuildApp: M
  } = l.useMemo(() => {
    var e, n, i, l;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let a = Object.values(null !== (i = null === (e = I.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
      u = Object.values(null !== (l = null === (n = g.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
    return {
      isGuildApp: a.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: u.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [I, g, null == t ? void 0 : t.id]), O = l.useCallback(() => {
    (null == p ? void 0 : p.id) != null && (o.default.open(p.id, S.GuildSettingsSections.INTEGRATIONS), s.default.setSection(S.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]), v = l.useCallback(() => {
    d.default.open(S.UserSettingsSections.AUTHORIZED_APPS)
  }, []), h = _ === S.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !A || h || !M && !m) return null;
  let N = [];
  return M && N.push((0, i.jsx)(u.MenuItem, {
    id: "manage-integration",
    label: E.default.Messages.MANAGE_INTEGRATION,
    action: O
  }, "manage-integration")), m && N.push((0, i.jsx)(u.MenuItem, {
    id: "manage-authorized-app",
    label: E.default.Messages.MANAGE_AUTHORIZED_APP,
    action: v
  }, "manage-authorized-app")), N
}