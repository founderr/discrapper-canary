"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("424973");
var i = n("37983"),
  a = n("884691"),
  r = n("446674"),
  l = n("77078"),
  s = n("713841"),
  u = n("79112"),
  o = n("988721"),
  d = n("592407"),
  c = n("305961"),
  f = n("957255"),
  E = n("49111"),
  h = n("782340");

function p(e) {
  let {
    user: t,
    guildId: n,
    channel: p,
    context: C
  } = e, _ = c.default.getGuild(n), I = (0, r.useStateFromStores)([f.default], () => null != _ ? f.default.can(E.Permissions.MANAGE_GUILD, _) : null), S = (0, o.useContextIndexState)(p, !0, !0), T = (0, o.useUserIndexState)(!0, !0), {
    isUserApp: N,
    isGuildApp: v
  } = a.useMemo(() => {
    var e, n, i, a;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let r = Object.values(null !== (i = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
      l = Object.values(null !== (a = null === (n = T.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
    return {
      isGuildApp: r.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: l.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [S, T, null == t ? void 0 : t.id]), A = a.useCallback(() => {
    (null == _ ? void 0 : _.id) != null && (d.default.open(_.id, E.GuildSettingsSections.INTEGRATIONS), s.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == _ ? void 0 : _.id]), g = a.useCallback(() => {
    u.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
  }, []), m = C === E.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !I || m || !v && !N) return null;
  let M = [];
  return v && M.push((0, i.jsx)(l.MenuItem, {
    id: "manage-integration",
    label: h.default.Messages.MANAGE_INTEGRATION,
    action: A
  }, "manage-integration")), N && M.push((0, i.jsx)(l.MenuItem, {
    id: "manage-authorized-app",
    label: h.default.Messages.MANAGE_AUTHORIZED_APP,
    action: g
  }, "manage-authorized-app")), M
}