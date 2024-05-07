"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("512722"),
  s = n.n(a),
  o = n("153832"),
  l = n("924826"),
  u = n("442837"),
  d = n("481060"),
  _ = n("749210"),
  c = n("412899"),
  E = n("112724"),
  I = n("434404"),
  T = n("271383"),
  f = n("430824"),
  S = n("496675"),
  h = n("700785"),
  A = n("785717"),
  m = n("314172"),
  N = n("981631"),
  p = n("689938"),
  O = n("705444");
let R = (0, E.default)(function(e) {
  let {
    user: t,
    currentUser: n,
    guild: a,
    guildMember: _,
    userRoles: E,
    highestRole: I,
    canManageRoles: T,
    width: S,
    onAddRole: A,
    onRemoveRole: R,
    onOpenProfile: C
  } = e;
  s()(null != S, "Unexpected null width");
  let g = r.useRef({}),
    L = (e, t) => {
      null != t ? g.current[e] = t : delete g.current[e]
    },
    [v, D] = r.useState(null),
    M = (0, u.useStateFromStores)([f.default], () => f.default.getRoles(a.id)),
    y = r.useMemo(() => {
      let e = Object.values(M).filter(e => E.includes(e.id)).sort((e, t) => {
        var n, i;
        let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
          a = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
        return r && !a ? 1 : !r && a ? -1 : 0
      });
      return null != v ? e.slice(0, v) : e
    }, [M, v, E]),
    P = E.length - y.length,
    U = T && null != _ ? S - 32 - 30 : S - 32;
  r.useLayoutEffect(() => {
    let e = 0,
      t = 0;
    for (let n = 0; n < 2; n++) {
      t = 0;
      let i = 1 === n ? U : S;
      for (let n = e; n < y.length; n++) {
        let r = y[n],
          a = g.current[r.id];
        if (null != a) {
          if ((t += a.offsetWidth) > i) break;
          t += 4, e++
        }
      }
    }
    D(t => e < y.length ? e : t)
  }, [S, U, y]);
  let b = r.useMemo(() => "roles-".concat((0, o.v4)()), []),
    G = (0, l.default)({
      id: b,
      isEnabled: !0,
      scrollToStart: N.NOOP_PROMISE,
      scrollToEnd: N.NOOP_PROMISE,
      wrap: !0
    }),
    w = y.map(e => {
      var r;
      return (0, i.jsx)(c.MemberRole, {
        className: O.role,
        role: e,
        canRemove: T ? h.isRoleHigher(a, n.id, I, e) : (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && t.id === n.id,
        onRemove: () => R(e),
        ref: t => L(e.id, t),
        guildId: a.id,
        disableBorderColor: !0
      }, e.id)
    });
  return (0, i.jsx)(l.ListNavigatorProvider, {
    navigator: G,
    children: (0, i.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, i.jsxs)("div", {
          className: O.root,
          "aria-label": 0 === E.length ? p.default.Messages.ROLE_LIST_EMPTY : p.default.Messages.ROLES_LIST.format({
            numRoles: E.length
          }),
          ref: t,
          ...n,
          children: [w, null != v && 0 !== P && (0, i.jsx)(d.Clickable, {
            onClick: C,
            className: O.showMoreButton,
            children: (0, i.jsx)(d.Text, {
              variant: "text-xs/medium",
              children: "+".concat(P)
            })
          }), T && null != _ && (0, i.jsx)(m.default, {
            guild: a,
            guildMember: _,
            highestRole: I,
            onAddRole: A,
            compact: E.length > 0
          })]
        })
      }
    })
  })
});

function C(e) {
  let {
    user: t,
    currentUser: n,
    guild: a,
    onOpenProfile: s
  } = e, {
    trackUserProfileAction: o
  } = (0, A.useUserProfileAnalyticsContext)(), l = (0, u.useStateFromStores)([T.default], () => T.default.getMember(a.id, t.id)), d = null == l ? void 0 : l.roles, c = null == d || 0 === d.length, E = h.getHighestRole(a, n.id), [f] = (0, u.useStateFromStoresArray)([S.default], () => [S.default.can(N.Permissions.MANAGE_ROLES, a), null != a ? S.default.getGuildVersion(a.id) : null]), m = r.useCallback(e => {
    var n, i;
    o({
      action: "REMOVE_ROLE"
    });
    let r = null !== (i = null == d ? void 0 : d.filter(t => t !== e.id)) && void 0 !== i ? i : [];
    (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.default.unassignGuildRoleConnection(a.id, e.id) : I.default.updateMemberRoles(a.id, t.id, r, [], [e.id])
  }, [d, a.id, t.id, o]), p = r.useCallback(e => {
    o({
      action: "ADD_ROLE"
    });
    let n = null != d ? d : []; - 1 === n.indexOf(e) && (n = n.concat([e])), I.default.updateMemberRoles(a.id, t.id, n, [e], [])
  }, [d, a.id, t.id, o]);
  return c && !f ? null : (0, i.jsx)("div", {
    children: (0, i.jsx)(R, {
      user: t,
      currentUser: n,
      guild: a,
      guildMember: l,
      userRoles: null != d ? d : [],
      highestRole: E,
      canManageRoles: f,
      onAddRole: p,
      onRemoveRole: m,
      onOpenProfile: s
    })
  })
}