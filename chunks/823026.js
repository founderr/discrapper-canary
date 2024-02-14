"use strict";
n.r(e), n.d(e, {
  default: function() {
    return _
  }
}), n("424973");
var i = n("37983"),
  u = n("884691"),
  r = n("446674"),
  a = n("77078"),
  d = n("713841"),
  l = n("79112"),
  o = n("988721"),
  s = n("592407"),
  I = n("305961"),
  E = n("957255"),
  c = n("49111"),
  T = n("782340");

function _(t) {
  let {
    user: e,
    guildId: n,
    channel: _,
    context: S
  } = t, f = I.default.getGuild(n), N = (0, r.useStateFromStores)([E.default], () => null != f ? E.default.can(c.Permissions.MANAGE_GUILD, f) : null), p = (0, o.useContextIndexState)(_, !0, !0), G = (0, o.useUserIndexState)(!0, !0), {
    isUserApp: A,
    isGuildApp: D
  } = u.useMemo(() => {
    var t, n, i, u;
    if ((null == e ? void 0 : e.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let r = Object.values(null !== (i = null === (t = p.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {}),
      a = Object.values(null !== (u = null === (n = G.result) || void 0 === n ? void 0 : n.sections) && void 0 !== u ? u : {});
    return {
      isGuildApp: r.some(t => {
        var n;
        return (null === (n = t.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == e ? void 0 : e.id)
      }),
      isUserApp: a.some(t => {
        var n;
        return (null === (n = t.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == e ? void 0 : e.id)
      })
    }
  }, [p, G, null == e ? void 0 : e.id]), M = u.useCallback(() => {
    (null == f ? void 0 : f.id) != null && (s.default.open(f.id, c.GuildSettingsSections.INTEGRATIONS), d.default.setSection(c.IntegrationSettingsSections.APPLICATION, null == e ? void 0 : e.id))
  }, [null == e ? void 0 : e.id, null == f ? void 0 : f.id]), O = u.useCallback(() => {
    l.default.open(c.UserSettingsSections.AUTHORIZED_APPS)
  }, []), m = S === c.AppContext.POPOUT;
  if (!(null == e ? void 0 : e.bot) || !N || m || !D && !A) return null;
  let U = [];
  return D && U.push((0, i.jsx)(a.MenuItem, {
    id: "manage-integration",
    label: T.default.Messages.MANAGE_INTEGRATION,
    action: M
  }, "manage-integration")), A && U.push((0, i.jsx)(a.MenuItem, {
    id: "manage-authorized-app",
    label: T.default.Messages.MANAGE_AUTHORIZED_APP,
    action: O
  }, "manage-authorized-app")), U
}