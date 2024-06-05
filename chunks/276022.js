"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("653041");
var i = n("735250"),
  a = n("470079"),
  l = n("442837"),
  s = n("481060"),
  u = n("139387"),
  d = n("230711"),
  r = n("213459"),
  o = n("434404"),
  T = n("430824"),
  c = n("496675"),
  E = n("981631"),
  S = n("689938");

function I(e) {
  let {
    user: t,
    guildId: n,
    channel: I,
    context: _
  } = e, p = T.default.getGuild(n), f = (0, l.useStateFromStores)([c.default], () => null != p ? c.default.can(E.Permissions.MANAGE_GUILD, p) : null), N = (0, r.useContextIndexState)(I, !0, !0), A = (0, r.useUserIndexState)(!0, !0), {
    isUserApp: O,
    isGuildApp: h
  } = a.useMemo(() => {
    var e, n, i, a;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let l = Object.values(null !== (i = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
      s = Object.values(null !== (a = null === (n = A.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
    return {
      isGuildApp: l.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: s.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [N, A, null == t ? void 0 : t.id]), m = a.useCallback(() => {
    (null == p ? void 0 : p.id) != null && (o.default.open(p.id, E.GuildSettingsSections.INTEGRATIONS), u.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == p ? void 0 : p.id]), g = a.useCallback(() => {
    d.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
  }, []), R = _ === E.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !f || R || !h && !O) return null;
  let M = [];
  return h && M.push((0, i.jsx)(s.MenuItem, {
    id: "manage-integration",
    label: S.default.Messages.MANAGE_INTEGRATION,
    action: m
  }, "manage-integration")), O && M.push((0, i.jsx)(s.MenuItem, {
    id: "manage-authorized-app",
    label: S.default.Messages.MANAGE_AUTHORIZED_APP,
    action: g
  }, "manage-authorized-app")), M
}