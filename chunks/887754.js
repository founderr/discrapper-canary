"use strict";
s.r(t), s.d(t, {
  GuildSettingsRolesNotice: function() {
    return R
  },
  default: function() {
    return x
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("627445"),
  i = s.n(n),
  r = s("446674"),
  o = s("851387"),
  d = s("45299"),
  u = s("525065"),
  c = s("449008"),
  E = s("592407"),
  _ = s("766419"),
  I = s("531493"),
  T = s("900938"),
  f = s("986654"),
  S = s("482763"),
  m = s("620296"),
  N = s("500053"),
  g = s("53948"),
  h = s("49111");

function C(e) {
  E.default.selectRole(e)
}
let R = () => {
  let {
    guild: e
  } = (0, r.useStateFromStoresObject)([T.default], () => T.default.getProps()), t = (0, r.useStateFromStores)([I.default], () => I.default.formState), s = (0, r.useStateFromStores)([I.default], () => I.default.errorMessage);
  return (0, a.jsx)(d.default, {
    errorMessage: s,
    onSave: () => {
      if (null == e) return;
      let {
        id: t
      } = e, s = I.default.editedRoleIds.map(e => I.default.getRole(e)).filter(c.isNotNullish), a = I.default.getSortDeltas(), l = null, n = null;
      I.default.hasRoleConfigurationChanges && (n = I.default.editedRoleIdsForConfigurations, l = I.default.getEditedRoleConnectionConfigurationsMap()), (0, _.saveRoleSettings)(t, s, a, n, l)
    },
    submitting: t === h.FormStates.SUBMITTING,
    onReset: _.init
  })
};

function x(e) {
  let {
    refToScroller: t
  } = e, {
    guild: s,
    roles: n
  } = (0, r.useStateFromStoresObject)([I.default], () => ({
    guild: I.default.guild,
    roles: I.default.roles
  }), []);
  i(null != s, "Guild cannot be null here");
  let d = l.useMemo(() => n.find(e => e.id === s.id), [n, s]);
  i(null != d, "Guild must have an everyone role");
  let c = l.useMemo(() => n.filter(e => e.id !== s.id), [n, s]),
    E = (0, r.useStateFromStores)([T.default], () => T.default.getSelectedRoleId()),
    [_, h] = l.useState(c.length > 0);
  l.useEffect(() => {
    h(_ || c.length > 0)
  }, [_, c.length]), l.useEffect(() => {
    let e = u.default.getMemberCount(s.id);
    null != e && e <= f.MAX_PREFETCH_MEMBER_COUNT && o.default.requestMembers(s.id, "", 0, !1)
  }, []);
  let [R, x] = l.useState(g.GuildSettingsRoleEditSections.DISPLAY);
  return (l.useEffect(() => {
    null == E && x(g.GuildSettingsRoleEditSections.DISPLAY)
  }, [E]), null != E) ? (0, a.jsx)(S.default, {
    editRoleId: E,
    setEditRoleId: C,
    selectedSection: R,
    setSelectedSection: x
  }) : _ ? (0, a.jsx)(N.default, {
    setEditRoleId: C,
    guild: s,
    everyoneRole: d,
    otherRoles: c,
    setSelectedSection: x,
    refToScroller: t
  }) : (0, a.jsx)(m.default, {
    guild: s,
    everyoneRole: d,
    setEditRoleId: C
  })
}