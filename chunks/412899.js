"use strict";
n.d(t, {
  UB: function() {
    return x
  },
  ZP: function() {
    return F
  }
}), n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(772848),
  _ = n(91192),
  c = n(924826),
  d = n(866442),
  E = n(442837),
  I = n(692547),
  T = n(481060),
  h = n(239091),
  f = n(749210),
  S = n(112724),
  A = n(607070),
  N = n(605436),
  m = n(134433),
  O = n(518738),
  R = n(434404),
  p = n(271383),
  g = n(430824),
  C = n(496675),
  v = n(594174),
  L = n(285952),
  D = n(153124),
  M = n(176278),
  P = n(700785),
  y = n(944613),
  U = n(981631),
  b = n(689938),
  G = n(371173);
let w = () => Promise.resolve();

function B(e) {
  let {
    userRoles: t,
    position: n,
    ...r
  } = e, s = (0, D.Dt)();
  return (0, i.jsxs)(T.Dialog, {
    className: o()(G.overflowRolesPopout, {
      [G.popoutBottom]: "bottom" === n,
      [G.popoutTop]: "top" === n
    }),
    "aria-labelledby": s,
    children: [(0, i.jsx)("div", {
      className: G.overflowRolesPopoutArrowWrapper,
      children: (0, i.jsx)("div", {
        className: G.overflowRolesPopoutArrow
      })
    }), (0, i.jsxs)(L.Z, {
      className: G.overflowRolesPopoutHeader,
      align: L.Z.Align.CENTER,
      children: [(0, i.jsx)(T.FlagIcon, {
        size: "xs",
        color: I.Z.unsafe_rawColors.PRIMARY_400.css,
        className: G.overflowRolesPopoutHeaderIcon
      }), (0, i.jsx)("div", {
        className: G.overflowRolesPopoutHeaderText,
        id: s,
        children: b.Z.Messages.ROLES_LIST.format({
          numRoles: t.length
        })
      })]
    }), (0, i.jsx)(Z, {
      ...r,
      wrap: !0,
      userRoles: t
    })]
  })
}
let x = r.forwardRef(function(e, t) {
  var s, a, l;
  let u;
  let {
    canRemove: c,
    className: f,
    role: S,
    onRemove: N,
    guildId: R,
    disableBorderColor: p,
    onMouseDown: g
  } = e, {
    tabIndex: C,
    ...v
  } = (0, _.JA)(S.id), L = (0, O.p9)({
    roleId: S.id,
    size: 16,
    guildId: R
  }), D = (0, E.e7)([A.Z], () => A.Z.roleStyle), P = (null === (s = S.tags) || void 0 === s ? void 0 : s.guild_connections) === null, y = r.useCallback(e => {
    (0, h.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, i.jsx)(e, {
        ...t,
        id: S.id,
        label: b.Z.Messages.COPY_ID_ROLE
      })
    })
  }, [S.id]), U = (0, T.useToken)(I.Z.unsafe_rawColors.PRIMARY_300).hsl(), w = null !== (a = S.colorString) && void 0 !== a ? a : U, B = null !== (l = (0, d.wK)(w, .6)) && void 0 !== l ? l : void 0, x = I.Z.unsafe_rawColors.WHITE_500.css, k = (0, d._i)(w);
  null != k && .3 > (0, d.Bd)(k) && (x = I.Z.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, i.jsx)(m.Z, {
    className: G.roleFlowerStar,
    iconClassName: c ? G.roleVerifiedIcon : void 0,
    color: w,
    size: 14
  }) : "dot" === D ? (0, i.jsx)(T.RoleDot, {
    className: G.roleDot,
    color: w,
    background: !1,
    tooltip: !1
  }) : (0, i.jsx)(T.RoleCircle, {
    color: w
  });
  let V = r.useMemo(() => {
    var t;
    return {
      borderColor: p ? void 0 : B,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [B, p, e.style]);
  return (0, i.jsx)(T.FocusRing, {
    children: (0, i.jsxs)("div", {
      ref: t,
      className: o()(G.role, f),
      style: V,
      onContextMenu: y,
      onMouseDown: g,
      "aria-label": S.name,
      tabIndex: C,
      ...v,
      children: [(0, i.jsxs)(T.Clickable, {
        className: o()(c && G.roleRemoveButtonCanRemove, G.roleRemoveButton),
        onClick: c ? N : void 0,
        tabIndex: c ? C : -1,
        focusProps: {
          focusClassName: G.roleRemoveIconFocused
        },
        "aria-hidden": !c,
        "aria-label": b.Z.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: S.name
        }),
        children: [u, c ? (0, i.jsx)(T.CloseSmallIcon, {
          size: "md",
          color: x,
          className: G.roleRemoveIcon,
          "aria-hidden": !0
        }) : null]
      }), null != L ? (0, i.jsx)(M.Z, {
        className: G.roleIcon,
        ...L,
        enableTooltip: !1
      }) : null, (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: G.roleName,
        children: (0, i.jsx)(T.Text, {
          variant: "text-xs/medium",
          className: G.roleNameOverflow,
          children: S.name
        })
      })]
    })
  })
});

function k(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: r
  } = e, s = (0, _.JA)("overflow-more-roles-".concat(t.id));
  return (0, i.jsx)(T.Popout, {
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, i.jsx)(B, {
        ...e,
        position: null != n ? n : "top"
      })
    },
    position: "top",
    align: "center",
    children: e => (0, i.jsx)(T.FocusRing, {
      children: (0, i.jsx)("button", {
        ...e,
        className: o()(G.overflowButton, r),
        ...s,
        children: "+".concat(n)
      })
    })
  })
}

function V(e) {
  let {
    guild: t,
    user: n,
    handleAddRole: r,
    roleClassName: s,
    addButtonClassName: a,
    addButtonIconClassName: l
  } = e, u = (0, _.JA)("overflow-add-roles-".concat(n.id)), c = (0, E.e7)([A.Z], () => A.Z.roleStyle), d = C.Z.getHighestRole(t), I = p.ZP.getMember(t.id, n.id), h = e => (0, N.Gy)(t.id, e.id) && !e.managed && C.Z.isRoleHigher(t, d, e) && (null == I || -1 === I.roles.indexOf(e.id));
  return (0, i.jsx)(T.Popout, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(y.Z, {
        guild: t,
        roleStyle: c,
        roleFilter: h,
        onSelect: r,
        onClose: n
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, i.jsx)(T.FocusRing, {
      children: (0, i.jsx)("button", {
        ...e,
        className: o()(G.addButton, s, a),
        "aria-label": b.Z.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
        type: "button",
        ...u,
        children: (0, i.jsx)(T.PlusSmallIcon, {
          size: "md",
          color: "currentColor",
          className: o()(G.addButtonIcon, l),
          "aria-hidden": !0
        })
      })
    })
  })
}

function Z(e) {
  let t;
  let {
    user: n,
    guild: s,
    userRoles: a,
    wrap: d = !0,
    width: I,
    className: T,
    readOnly: h,
    roleClassName: S,
    disableBorderColor: A
  } = e, N = r.useRef({}), m = r.useCallback(e => {
    var t;
    let i = a.filter(t => t !== e.id);
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? f.Z.unassignGuildRoleConnection(s.id, e.id) : R.Z.updateMemberRoles(s.id, n.id, i, [], [e.id])
  }, [a, s.id, n.id]), O = r.useCallback(e => {
    let t = a; - 1 === t.indexOf(e) && (t = t.concat([e])), R.Z.updateMemberRoles(s.id, n.id, t, [e], [])
  }, [a, s.id, n.id]), [p, L] = r.useState(null), D = (0, E.e7)([g.Z], () => g.Z.getRoles(s.id)), M = r.useMemo(() => {
    let e = Object.values(D).filter(e => a.includes(e.id)).sort((e, t) => {
      var n, i;
      let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
        s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
      return r && !s ? 1 : !r && s ? -1 : 0
    });
    return null != p ? e.slice(0, p) : e
  }, [D, p, a]), y = a.length - M.length;
  r.useLayoutEffect(() => {
    if (d) return;
    if ("number" != typeof I) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = I - 30 - 4;
    for (let i = 0; i < M.length; i++) {
      let r = M[i],
        s = N.current[r.id];
      if (null != s) {
        if ((t += s.offsetWidth + 4) > n) break;
        e++
      }
    }
    L(t => e < M.length ? e : t)
  }, [d, I, M]);
  let B = v.default.getCurrentUser();
  l()(null != B, "MemberRolesList: currentUser cannot be undefined");
  let Z = !h && C.Z.can(U.Plq.MANAGE_ROLES, s),
    H = P.e9(s, B.id),
    F = r.useMemo(() => "roles-".concat((0, u.Z)()), []),
    Y = (0, c.ZP)({
      id: F,
      isEnabled: !0,
      scrollToStart: w,
      scrollToEnd: w,
      wrap: !0
    }),
    j = M.map(e => {
      var t;
      return (0, i.jsx)(x, {
        className: S,
        role: e,
        canRemove: Z && P.r6(s, B.id, H, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === B.id,
        onRemove: () => m(e),
        ref: t => {
          var n, i;
          return n = e.id, void(null != (i = t) ? N.current[n] = i : delete N.current[n])
        },
        guildId: s.id,
        disableBorderColor: A
      }, e.id)
    });
  return null != p && 0 !== y ? t = (0, i.jsx)(k, {
    ...e,
    numRolesHidden: y
  }) : Z && (t = (0, i.jsx)(V, {
    ...e,
    handleAddRole: O
  })), (0, i.jsx)(_.bG, {
    navigator: Y,
    children: (0, i.jsx)(_.SJ, {
      children: e => {
        let {
          ref: n,
          ...r
        } = e;
        return (0, i.jsxs)("div", {
          className: o()(G.root, T),
          "aria-label": b.Z.Messages.ROLES_LIST.format({
            numRoles: a.length
          }),
          ref: n,
          ...r,
          children: [j, t]
        })
      }
    })
  })
}
let H = (0, S.Z)(Z);

function F(e) {
  return (0, E.e7)([C.Z], () => {
    var t;
    return C.Z.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
  }), !1 === e.wrap ? (0, i.jsx)(H, {
    ...e
  }) : (0, i.jsx)(Z, {
    ...e
  })
}