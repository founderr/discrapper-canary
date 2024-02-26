"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("716241"),
  u = s("454273"),
  c = s("70919"),
  E = s("957255"),
  _ = s("599110"),
  I = s("449008"),
  T = s("36402"),
  f = s("531493"),
  S = s("900938"),
  m = s("986654"),
  N = s("462752"),
  g = s("505002"),
  h = s("893448"),
  C = s("376252"),
  R = s("728955"),
  x = s("53948"),
  L = s("49111"),
  O = s("786920");

function p(e) {
  let t, {
      editRoleId: s,
      setEditRoleId: n,
      selectedSection: p,
      setSelectedSection: A
    } = e,
    M = (0, r.useStateFromStores)([f.default], () => f.default.guild, []);
  i(null != M, "guildId cannot be null here");
  let {
    role: D,
    permissionSearchQuery: v
  } = (0, r.useStateFromStoresObject)([f.default], () => ({
    role: f.default.getRole(s),
    permissionSearchQuery: f.default.getPermissionSearchQuery()
  }), [s]);
  l.useEffect(() => {
    null == D && n(null)
  }, [D, n]);
  let j = (0, r.useStateFromStores)([E.default], () => E.default.getHighestRole(M), [M]),
    G = (0, r.useStateFromStores)([E.default], () => !E.default.isRoleHigher(M, j, D)),
    U = l.useRef(null),
    P = (0, r.useStateFromStores)([S.default], () => S.default.getProps().integrations);
  if (l.useEffect(() => {
      var e, t;
      let a = (0, m.getSectionAnalyticsName)(p),
        l = null !== (t = null === (e = T.default.getRoleMemberCount(M.id)) || void 0 === e ? void 0 : e[s]) && void 0 !== t ? t : 0;
      _.default.track(L.AnalyticEvents.ROLE_PAGE_VIEWED, {
        tab_opened: a,
        is_everyone: (0, u.isEveryoneRoleId)(M.id, s),
        role_id: s,
        role_mentionable: null == D ? void 0 : D.mentionable,
        role_hoist: null == D ? void 0 : D.hoist,
        role_permissions: null == D ? void 0 : D.permissions.toString(),
        role_num_members: l,
        ...(0, d.collectGuildAnalyticsMetadata)(M.id)
      })
    }, [p, M.id, null == D ? void 0 : D.id]), l.useEffect(() => {
      (null == D ? void 0 : D.id) != null && (0, c.fetchRoleConnectionsConfiguration)(M.id, D.id)
    }, [M.id, null == D ? void 0 : D.id]), null == D) return null;
  switch (p) {
    case x.GuildSettingsRoleEditSections.DISPLAY:
      t = (0, a.jsx)(g.default, {
        guild: M,
        role: D,
        locked: G,
        highestRole: j,
        setSelectedSection: A
      });
      break;
    case x.GuildSettingsRoleEditSections.PERMISSIONS:
      t = (0, a.jsx)(C.default, {
        guild: M,
        role: D,
        locked: G,
        setSelectedSection: A,
        initialSearchQuery: v
      });
      break;
    case x.GuildSettingsRoleEditSections.VERIFICATIONS:
      t = (0, a.jsx)(N.default, {
        guild: M,
        role: D,
        locked: G,
        setSelectedSection: A,
        integrations: null != P ? P : void 0
      });
      break;
    case x.GuildSettingsRoleEditSections.MEMBERS:
      t = (0, a.jsx)(h.default, {
        guild: M,
        role: D,
        locked: G,
        setSelectedSection: A
      });
      break;
    default:
      (0, I.assertNever)(p)
  }
  return (0, a.jsxs)(o.FormSection, {
    className: O.page,
    children: [(0, a.jsx)(R.default, {
      guild: M,
      currentRoleId: s,
      setCurrentRoleId: n,
      setSelectedSection: A
    }), (0, a.jsx)("div", {
      className: O.contentContainer,
      ref: U,
      children: (0, a.jsx)(o.FocusRingScope, {
        containerRef: U,
        children: t
      })
    })]
  })
}