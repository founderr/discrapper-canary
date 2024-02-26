"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("424973");
var i = n("37983"),
  l = n("884691"),
  u = n("446674"),
  a = n("77078"),
  r = n("713841"),
  d = n("79112"),
  o = n("988721"),
  s = n("592407"),
  c = n("305961"),
  E = n("957255"),
  _ = n("49111"),
  f = n("782340");

function T(e) {
  let {
    user: t,
    guildId: n,
    channel: T,
    context: I
  } = e, S = c.default.getGuild(n), N = (0, u.useStateFromStores)([E.default], () => null != S ? E.default.can(_.Permissions.MANAGE_GUILD, S) : null), p = (0, o.useContextIndexState)(T, !0, !0), m = (0, o.useUserIndexState)(!0, !0), {
    isUserApp: A,
    isGuildApp: M
  } = l.useMemo(() => {
    var e, n, i, l;
    if ((null == t ? void 0 : t.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let u = Object.values(null !== (i = null === (e = p.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
      a = Object.values(null !== (l = null === (n = m.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
    return {
      isGuildApp: u.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      }),
      isUserApp: a.some(e => {
        var n;
        return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
      })
    }
  }, [p, m, null == t ? void 0 : t.id]), h = l.useCallback(() => {
    (null == S ? void 0 : S.id) != null && (s.default.open(S.id, _.GuildSettingsSections.INTEGRATIONS), r.default.setSection(_.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
  }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]), C = l.useCallback(() => {
    d.default.open(_.UserSettingsSections.AUTHORIZED_APPS)
  }, []), O = I === _.AppContext.POPOUT;
  if (!(null == t ? void 0 : t.bot) || !N || O || !M && !A) return null;
  let v = [];
  return M && v.push((0, i.jsx)(a.MenuItem, {
    id: "manage-integration",
    label: f.default.Messages.MANAGE_INTEGRATION,
    action: h
  }, "manage-integration")), A && v.push((0, i.jsx)(a.MenuItem, {
    id: "manage-authorized-app",
    label: f.default.Messages.MANAGE_AUTHORIZED_APP,
    action: C
  }, "manage-authorized-app")), v
}