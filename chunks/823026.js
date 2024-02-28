"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  u = n("77078"),
  i = n("713841"),
  r = n("79112"),
  d = n("988721"),
  o = n("592407"),
  c = n("305961"),
  m = n("957255"),
  f = n("49111"),
  g = n("782340");

function h(e) {
  let {
    user: t,
    guildId: n,
    channel: h,
    context: E
  } = e, _ = c.default.getGuild(n), p = (0, l.useStateFromStores)([m.default], () => null != _ ? m.default.can(f.Permissions.MANAGE_GUILD, _) : null), v = (0, d.useContextIndexState)(h, !0, !0), I = (0, d.useUserIndexState)(!0, !0), {
    isUserApp: S,
    isGuildApp: M
  } = s.useMemo(() => {
    var e, n, a, s;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let l = Object.values(null !== (a = null === (e = v.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
      u = Object.values(null !== (s = null === (n = I.result) || void 0 === n ? void 0 : n.sections) && void 0 !== s ? s : {});
    return {
      isGuildApp: l.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: u.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [v, I, null == t ? void 0 : t.id]), A = s.useCallback(() => {
    (null == _ ? void 0 : _.id) != null && (o.default.open(_.id, f.GuildSettingsSections.INTEGRATIONS), i.default.setSection(f.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == _ ? void 0 : _.id]), N = s.useCallback(() => {
    r.default.open(f.UserSettingsSections.AUTHORIZED_APPS)
  }, []), R = E === f.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !p || R || !M && !S) return null;
  let O = [];
  return M && O.push((0, a.jsx)(u.MenuItem, {
    id: "manage-integration",
    label: g.default.Messages.MANAGE_INTEGRATION,
    action: A
  }, "manage-integration")), S && O.push((0, a.jsx)(u.MenuItem, {
    id: "manage-authorized-app",
    label: g.default.Messages.MANAGE_AUTHORIZED_APP,
    action: N
  }, "manage-authorized-app")), O
}