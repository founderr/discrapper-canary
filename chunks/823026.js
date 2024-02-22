"use strict";
n.r(e), n.d(e, {
  default: function() {
    return _
  }
}), n("424973");
var i = n("37983"),
  u = n("884691"),
  a = n("446674"),
  r = n("77078"),
  d = n("713841"),
  l = n("79112"),
  o = n("988721"),
  s = n("592407"),
  c = n("305961"),
  E = n("957255"),
  I = n("49111"),
  T = n("782340");

function _(t) {
  let {
    user: e,
    guildId: n,
    channel: _,
    context: f
  } = t, S = c.default.getGuild(n), N = (0, a.useStateFromStores)([E.default], () => null != S ? E.default.can(I.Permissions.MANAGE_GUILD, S) : null), p = (0, o.useContextIndexState)(_, !0, !0), A = (0, o.useUserIndexState)(!0, !0), {
    isUserApp: G,
    isGuildApp: M
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
  }, [p, A, null == e ? void 0 : e.id]), D = u.useCallback(() => {
    (null == S ? void 0 : S.id) != null && (s.default.open(S.id, I.GuildSettingsSections.INTEGRATIONS), d.default.setSection(I.IntegrationSettingsSections.APPLICATION, null == e ? void 0 : e.id))
  }, [null == e ? void 0 : e.id, null == S ? void 0 : S.id]), O = u.useCallback(() => {
    l.default.open(I.UserSettingsSections.AUTHORIZED_APPS)
  }, []), m = f === I.AppContext.POPOUT;
  if (!(null == e ? void 0 : e.bot) || !N || m || !M && !G) return null;
  let C = [];
  return M && C.push((0, i.jsx)(r.MenuItem, {
    id: "manage-integration",
    label: T.default.Messages.MANAGE_INTEGRATION,
    action: D
  }, "manage-integration")), G && C.push((0, i.jsx)(r.MenuItem, {
    id: "manage-authorized-app",
    label: T.default.Messages.MANAGE_AUTHORIZED_APP,
    action: O
  }, "manage-authorized-app")), C
}