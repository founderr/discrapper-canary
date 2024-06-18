"use strict";
t.d(s, {
  Z: function() {
    return p
  }
});
var n = t(735250),
  i = t(470079),
  l = t(512722),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(367907),
  d = t(605436),
  u = t(228643),
  E = t(496675),
  _ = t(626135),
  I = t(823379),
  T = t(243730),
  N = t(946724),
  m = t(999382),
  S = t(130341),
  h = t(981975),
  g = t(660962),
  C = t(442182),
  x = t(322816),
  R = t(266665),
  L = t(203377),
  O = t(981631),
  A = t(408965);

function p(e) {
  let s, {
      editRoleId: t,
      setEditRoleId: l,
      selectedSection: p,
      setSelectedSection: M
    } = e,
    f = (0, r.e7)([N.Z], () => N.Z.guild, []);
  a()(null != f, "guildId cannot be null here");
  let {
    role: D,
    permissionSearchQuery: v
  } = (0, r.cj)([N.Z], () => ({
    role: N.Z.getRole(t),
    permissionSearchQuery: N.Z.getPermissionSearchQuery()
  }), [t]);
  i.useEffect(() => {
    null == D && l(null)
  }, [D, l]);
  let j = (0, r.e7)([E.Z], () => E.Z.getHighestRole(f), [f]),
    Z = (0, r.e7)([E.Z], () => !E.Z.isRoleHigher(f, j, D)),
    U = i.useRef(null),
    G = (0, r.e7)([m.Z], () => m.Z.getProps().integrations);
  if (i.useEffect(() => {
      var e, s;
      let n = (0, S.UT)(p),
        i = null !== (s = null === (e = T.Z.getRoleMemberCount(f.id)) || void 0 === e ? void 0 : e[t]) && void 0 !== s ? s : 0;
      _.default.track(O.rMx.ROLE_PAGE_VIEWED, {
        tab_opened: n,
        is_everyone: (0, d.pM)(f.id, t),
        role_id: t,
        role_mentionable: null == D ? void 0 : D.mentionable,
        role_hoist: null == D ? void 0 : D.hoist,
        role_permissions: null == D ? void 0 : D.permissions.toString(),
        role_num_members: i,
        ...(0, c.hH)(f.id)
      })
    }, [p, f.id, null == D ? void 0 : D.id]), i.useEffect(() => {
      if ((null == D ? void 0 : D.id) != null)(0, u.sE)(f.id, D.id)
    }, [f.id, null == D ? void 0 : D.id]), null == D) return null;
  switch (p) {
    case L.ZI.DISPLAY:
      s = (0, n.jsx)(g.ZP, {
        guild: f,
        role: D,
        locked: Z,
        highestRole: j,
        setSelectedSection: M
      });
      break;
    case L.ZI.PERMISSIONS:
      s = (0, n.jsx)(x.ZP, {
        guild: f,
        role: D,
        locked: Z,
        setSelectedSection: M,
        initialSearchQuery: v
      });
      break;
    case L.ZI.VERIFICATIONS:
      s = (0, n.jsx)(h.Z, {
        guild: f,
        role: D,
        locked: Z,
        setSelectedSection: M,
        integrations: null != G ? G : void 0
      });
      break;
    case L.ZI.MEMBERS:
      s = (0, n.jsx)(C.ZP, {
        guild: f,
        role: D,
        locked: Z,
        setSelectedSection: M
      });
      break;
    default:
      (0, I.vE)(p)
  }
  return (0, n.jsxs)(o.FormSection, {
    className: A.page,
    children: [(0, n.jsx)(R.Z, {
      guild: f,
      currentRoleId: t,
      setCurrentRoleId: l,
      setSelectedSection: M
    }), (0, n.jsx)("div", {
      className: A.contentContainer,
      ref: U,
      children: (0, n.jsx)(o.FocusRingScope, {
        containerRef: U,
        children: s
      })
    })]
  })
}