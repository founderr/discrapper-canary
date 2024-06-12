"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("653041");
var u = n("735250"),
  l = n("470079"),
  i = n("442837"),
  s = n("481060"),
  a = n("139387"),
  r = n("230711"),
  d = n("213459"),
  o = n("434404"),
  c = n("430824"),
  f = n("496675"),
  p = n("981631"),
  S = n("689938");

function g(e) {
  let {
    user: t,
    guildId: n,
    channel: g,
    context: m
  } = e, A = c.default.getGuild(n), M = (0, i.useStateFromStores)([f.default], () => null != A ? f.default.can(p.Permissions.MANAGE_GUILD, A) : null), h = (0, d.useContextIndexState)(g, !0, !0), v = (0, d.useUserIndexState)(!0, !0), {
    isUserApp: E,
    isGuildApp: I
  } = l.useMemo(() => {
    var e, n, u, l;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let i = Object.values(null !== (u = null === (e = h.result) || void 0 === e ? void 0 : e.sections) && void 0 !== u ? u : {}),
      s = Object.values(null !== (l = null === (n = v.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
    return {
      isGuildApp: i.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: s.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [h, v, null == t ? void 0 : t.id]), _ = l.useCallback(() => {
    (null == A ? void 0 : A.id) != null && (o.default.open(A.id, p.GuildSettingsSections.INTEGRATIONS), a.default.setSection(p.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == A ? void 0 : A.id]), T = l.useCallback(() => {
    r.default.open(p.UserSettingsSections.AUTHORIZED_APPS)
  }, []), P = m === p.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !M || P || !I && !E) return null;
  let N = [];
  return I && N.push((0, u.jsx)(s.MenuItem, {
    id: "manage-integration",
    label: S.default.Messages.MANAGE_INTEGRATION,
    action: _
  }, "manage-integration")), E && N.push((0, u.jsx)(s.MenuItem, {
    id: "manage-authorized-app",
    label: S.default.Messages.MANAGE_AUTHORIZED_APP,
    action: T
  }, "manage-authorized-app")), N
}