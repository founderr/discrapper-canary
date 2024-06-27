"use strict";
n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(512722),
  o = n.n(s),
  a = n(772848),
  l = n(924826),
  u = n(91192),
  _ = n(442837),
  c = n(481060),
  d = n(749210),
  E = n(112724),
  I = n(434404),
  T = n(271383),
  h = n(430824),
  f = n(496675),
  S = n(700785),
  A = n(785717),
  N = n(256226),
  m = n(314172),
  O = n(981631),
  R = n(689938),
  p = n(446384);
let g = (0, E.Z)(function(e) {
  let {
    user: t,
    currentUser: n,
    guild: s,
    guildMember: d,
    userRoles: E,
    highestRole: I,
    canManageRoles: T,
    width: f,
    onAddRole: A,
    onRemoveRole: g,
    onOpenProfile: C
  } = e;
  o()(null != f, "Unexpected null width");
  let v = r.useRef({}),
    L = (e, t) => {
      null != t ? v.current[e] = t : delete v.current[e]
    },
    D = (0, _.e7)([h.Z], () => h.Z.getRoles(s.id)),
    [M, P] = r.useState(null),
    y = r.useMemo(() => {
      let e = Object.values(D).filter(e => E.includes(e.id)).sort((e, t) => {
        var n, i;
        let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
          s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
        return r && !s ? 1 : !r && s ? -1 : 0
      });
      return null != M ? e.slice(0, M) : e
    }, [D, E, M]),
    [U, b] = r.useState(f),
    G = E.length > y.length,
    w = T && null != d,
    B = r.useRef(null),
    x = r.useRef(null);
  r.useLayoutEffect(() => {
    var e, t, n, i, r, s, o, a;
    let l = null !== (r = null === (t = B.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0,
      u = null !== (s = null === (i = x.current) || void 0 === i ? void 0 : null === (n = i.getBoundingClientRect()) || void 0 === n ? void 0 : n.width) && void 0 !== s ? s : 0,
      _ = f - (l > 0 ? l + 4 : 0) - (u > 0 ? u + 4 : 0),
      c = 0;
    for (let e = 0; e < 2; e++) {
      let t = 1 === e,
        n = 0;
      for (let e = c; e < y.length; e++) {
        let i = y[e],
          r = v.current[i.id];
        if (null == r) continue;
        let s = null !== (a = null === (o = r.getBoundingClientRect()) || void 0 === o ? void 0 : o.width) && void 0 !== a ? a : 0;
        if (n > 0 && !t && n + s > f || n > 0 && t && n + s > _) break;
        n += s + 4, c++
      }
    }
    P(c === E.length ? null : c), b(_)
  }, [f, y, E]);
  let k = r.useMemo(() => "roles-".concat((0, a.Z)()), []),
    V = (0, l.ZP)({
      id: k,
      isEnabled: !0,
      scrollToStart: O.Cyb,
      scrollToEnd: O.Cyb,
      wrap: !0
    }),
    Z = 0 === E.length ? R.Z.Messages.ROLE_LIST_EMPTY : R.Z.Messages.ROLES_LIST.format({
      numRoles: E.length
    }),
    H = y.map((e, r) => {
      var o;
      return (0, i.jsx)(N.Z, {
        role: e,
        guildId: s.id,
        style: {
          maxWidth: r === y.length - 1 ? U : f
        },
        disableBorderColor: !0,
        ref: t => L(e.id, t),
        onRemove: () => g(e),
        canRemove: T ? S.r6(s, n.id, I, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && t.id === n.id
      }, e.id)
    });
  return (0, i.jsx)(u.bG, {
    navigator: V,
    children: (0, i.jsx)(u.SJ, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, i.jsxs)("div", {
          className: p.root,
          "aria-label": Z,
          ref: t,
          ...n,
          children: [H, G && (0, i.jsx)(c.TooltipContainer, {
            text: R.Z.Messages.VIEW_ALL_ROLES,
            children: (0, i.jsx)(c.Clickable, {
              innerRef: B,
              onClick: C,
              className: p.showMoreButton,
              children: (0, i.jsx)(c.Text, {
                variant: "text-xs/medium",
                children: "+".concat(E.length - y.length)
              })
            })
          }), w && (0, i.jsx)(m.Z, {
            variant: E.length > 0 ? "icon" : "text",
            buttonRef: x,
            guild: s,
            guildMember: d,
            highestRole: I,
            onAddRole: A
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
    guild: s,
    onOpenProfile: o
  } = e, {
    trackUserProfileAction: a
  } = (0, A.KZ)(), l = (0, _.e7)([T.ZP], () => T.ZP.getMember(s.id, t.id)), u = null == l ? void 0 : l.roles, c = null == u || 0 === u.length, E = S.e9(s, n.id), [h] = (0, _.Wu)([f.Z], () => [f.Z.can(O.Plq.MANAGE_ROLES, s), null != s ? f.Z.getGuildVersion(s.id) : null]), N = r.useCallback(e => {
    var n, i;
    a({
      action: "REMOVE_ROLE"
    });
    let r = null !== (i = null == u ? void 0 : u.filter(t => t !== e.id)) && void 0 !== i ? i : [];
    (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(s.id, e.id) : I.Z.updateMemberRoles(s.id, t.id, r, [], [e.id])
  }, [u, s.id, t.id, a]), m = r.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let n = null != u ? u : []; - 1 === n.indexOf(e) && (n = n.concat([e])), I.Z.updateMemberRoles(s.id, t.id, n, [e], [])
  }, [u, s.id, t.id, a]);
  return c && !h ? null : (0, i.jsx)("div", {
    children: (0, i.jsx)(g, {
      user: t,
      currentUser: n,
      guild: s,
      guildMember: l,
      userRoles: null != u ? u : [],
      highestRole: E,
      canManageRoles: h,
      onAddRole: m,
      onRemoveRole: N,
      onOpenProfile: o
    })
  })
}