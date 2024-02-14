"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("716241"),
  u = s("70919"),
  c = s("957255"),
  E = s("599110"),
  _ = s("449008"),
  I = s("36402"),
  T = s("531493"),
  f = s("900938"),
  S = s("986654"),
  m = s("462752"),
  N = s("505002"),
  g = s("893448"),
  h = s("376252"),
  C = s("728955"),
  R = s("53948"),
  x = s("49111"),
  L = s("786920");

function O(e) {
  let t, {
      editRoleId: s,
      setEditRoleId: n,
      selectedSection: O,
      setSelectedSection: p
    } = e,
    A = (0, r.useStateFromStores)([T.default], () => T.default.guild, []);
  i(null != A, "guildId cannot be null here");
  let {
    role: M,
    permissionSearchQuery: D
  } = (0, r.useStateFromStoresObject)([T.default], () => ({
    role: T.default.getRole(s),
    permissionSearchQuery: T.default.getPermissionSearchQuery()
  }), [s]);
  l.useEffect(() => {
    null == M && n(null)
  }, [M, n]);
  let v = (0, r.useStateFromStores)([c.default], () => c.default.getHighestRole(A), [A]),
    j = (0, r.useStateFromStores)([c.default], () => !c.default.isRoleHigher(A, v, M)),
    G = l.useRef(null),
    U = (0, r.useStateFromStores)([f.default], () => f.default.getProps().integrations);
  if (l.useEffect(() => {
      var e, t;
      let a = (0, S.getSectionAnalyticsName)(O),
        l = null !== (t = null === (e = I.default.getRoleMemberCount(A.id)) || void 0 === e ? void 0 : e[s]) && void 0 !== t ? t : 0;
      E.default.track(x.AnalyticEvents.ROLE_PAGE_VIEWED, {
        tab_opened: a,
        is_everyone: A.id === s,
        role_id: s,
        role_mentionable: null == M ? void 0 : M.mentionable,
        role_hoist: null == M ? void 0 : M.hoist,
        role_permissions: null == M ? void 0 : M.permissions.toString(),
        role_num_members: l,
        ...(0, d.collectGuildAnalyticsMetadata)(A.id)
      })
    }, [O, A.id, null == M ? void 0 : M.id]), l.useEffect(() => {
      (null == M ? void 0 : M.id) != null && (0, u.fetchRoleConnectionsConfiguration)(A.id, M.id)
    }, [A.id, null == M ? void 0 : M.id]), null == M) return null;
  switch (O) {
    case R.GuildSettingsRoleEditSections.DISPLAY:
      t = (0, a.jsx)(N.default, {
        guild: A,
        role: M,
        locked: j,
        highestRole: v,
        setSelectedSection: p
      });
      break;
    case R.GuildSettingsRoleEditSections.PERMISSIONS:
      t = (0, a.jsx)(h.default, {
        guild: A,
        role: M,
        locked: j,
        setSelectedSection: p,
        initialSearchQuery: D
      });
      break;
    case R.GuildSettingsRoleEditSections.VERIFICATIONS:
      t = (0, a.jsx)(m.default, {
        guild: A,
        role: M,
        locked: j,
        setSelectedSection: p,
        integrations: null != U ? U : void 0
      });
      break;
    case R.GuildSettingsRoleEditSections.MEMBERS:
      t = (0, a.jsx)(g.default, {
        guild: A,
        role: M,
        locked: j,
        setSelectedSection: p
      });
      break;
    default:
      (0, _.assertNever)(O)
  }
  return (0, a.jsxs)(o.FormSection, {
    className: L.page,
    children: [(0, a.jsx)(C.default, {
      guild: A,
      currentRoleId: s,
      setCurrentRoleId: n,
      setSelectedSection: p
    }), (0, a.jsx)("div", {
      className: L.contentContainer,
      ref: G,
      children: (0, a.jsx)(o.FocusRingScope, {
        containerRef: G,
        children: t
      })
    })]
  })
}