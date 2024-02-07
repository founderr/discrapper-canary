"use strict";
n.r(e), n.d(e, {
  default: function() {
    return I
  }
}), n("424973");
var i = n("37983"),
  u = n("884691"),
  a = n("446674"),
  r = n("77078"),
  l = n("713841"),
  o = n("79112"),
  d = n("988721"),
  s = n("592407"),
  E = n("305961"),
  c = n("957255"),
  _ = n("49111"),
  T = n("782340");

function I(t) {
  let {
    user: e,
    guildId: n,
    channel: I,
    context: S
  } = t, f = E.default.getGuild(n), N = (0, a.useStateFromStores)([c.default], () => null != f ? c.default.can(_.Permissions.MANAGE_GUILD, f) : null), p = (0, d.useContextIndexState)(I, !0, !0), A = (0, d.useUserIndexState)(!0, !0), {
    isUserApp: C,
    isGuildApp: G
  } = u.useMemo(() => {
    var t, n, i, u;
    if ((null == e ? void 0 : e.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let a = Object.values(null !== (i = null === (t = p.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {}),
      r = Object.values(null !== (u = null === (n = A.result) || void 0 === n ? void 0 : n.sections) && void 0 !== u ? u : {});
    return {
      isGuildApp: a.some(t => {
        var n;
        return (null === (n = t.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == e ? void 0 : e.id)
      }),
      isUserApp: r.some(t => {
        var n;
        return (null === (n = t.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == e ? void 0 : e.id)
      })
    }
  }, [p, A, null == e ? void 0 : e.id]), O = u.useCallback(() => {
    (null == f ? void 0 : f.id) != null && (s.default.open(f.id, _.GuildSettingsSections.INTEGRATIONS), l.default.setSection(_.IntegrationSettingsSections.APPLICATION, null == e ? void 0 : e.id))
  }, [null == e ? void 0 : e.id, null == f ? void 0 : f.id]), h = u.useCallback(() => {
    o.default.open(_.UserSettingsSections.AUTHORIZED_APPS)
  }, []), R = S === _.AppContext.POPOUT;
  if (!(null == e ? void 0 : e.bot) || !N || R || !G && !C) return null;
  let U = [];
  return G && U.push((0, i.jsx)(r.MenuItem, {
    id: "manage-integration",
    label: T.default.Messages.MANAGE_INTEGRATION,
    action: O
  }, "manage-integration")), C && U.push((0, i.jsx)(r.MenuItem, {
    id: "manage-authorized-app",
    label: T.default.Messages.MANAGE_AUTHORIZED_APP,
    action: h
  }, "manage-authorized-app")), U
}