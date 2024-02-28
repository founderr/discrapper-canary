"use strict";
n.r(t), n.d(t, {
  MemberRole: function() {
    return w
  },
  default: function() {
    return V
  }
}), n("222007"), n("70102");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("748820"),
  d = n("974667"),
  c = n("509043"),
  f = n("446674"),
  m = n("669491"),
  p = n("77078"),
  h = n("272030"),
  E = n("851387"),
  g = n("737960"),
  C = n("206230"),
  S = n("339023"),
  T = n("405645"),
  I = n("592407"),
  v = n("26989"),
  _ = n("957255"),
  N = n("697218"),
  A = n("145131"),
  x = n("476765"),
  y = n("945330"),
  O = n("907566"),
  R = n("151185"),
  M = n("483093"),
  L = n("991170"),
  P = n("487311"),
  b = n("49111"),
  j = n("782340"),
  U = n("556248");
let D = () => Promise.resolve();

function k(e) {
  let {
    userRoles: t,
    position: n,
    ...i
  } = e, a = (0, x.useUID)();
  return (0, l.jsxs)(p.Dialog, {
    className: s(U.overflowRolesPopout, {
      [U.popoutBottom]: "bottom" === n,
      [U.popoutTop]: "top" === n
    }),
    "aria-labelledby": a,
    children: [(0, l.jsx)("div", {
      className: U.overflowRolesPopoutArrowWrapper,
      children: (0, l.jsx)("div", {
        className: U.overflowRolesPopoutArrow
      })
    }), (0, l.jsxs)(A.default, {
      className: U.overflowRolesPopoutHeader,
      align: A.default.Align.CENTER,
      children: [(0, l.jsx)(O.default, {
        color: m.default.unsafe_rawColors.PRIMARY_400.css,
        className: U.overflowRolesPopoutHeaderIcon
      }), (0, l.jsx)("div", {
        className: U.overflowRolesPopoutHeaderText,
        id: a,
        children: j.default.Messages.ROLES_LIST.format({
          numRoles: t.length
        })
      })]
    }), (0, l.jsx)(B, {
      ...i,
      wrap: !0,
      userRoles: t
    })]
  })
}
let w = i.forwardRef(function(e, t) {
  var a, r, o;
  let u;
  let {
    canRemove: E,
    className: g,
    role: I,
    onRemove: v,
    guildId: _,
    disableBorderColor: N,
    onMouseDown: A
  } = e, {
    tabIndex: x,
    ...O
  } = (0, d.useListItem)(I.id), R = (0, T.useRoleIcon)({
    roleId: I.id,
    size: 16,
    guildId: _
  }), L = (0, f.useStateFromStores)([C.default], () => C.default.roleStyle), P = (null === (a = I.tags) || void 0 === a ? void 0 : a.guild_connections) === null, b = i.useCallback(e => {
    (0, h.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("443070").then(n.bind(n, "443070"));
      return t => (0, l.jsx)(e, {
        ...t,
        id: I.id,
        label: j.default.Messages.COPY_ID_ROLE
      })
    })
  }, [I.id]), D = (0, p.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), k = null !== (r = I.colorString) && void 0 !== r ? r : D, w = null !== (o = (0, c.hex2rgb)(k, .6)) && void 0 !== o ? o : void 0, F = m.default.unsafe_rawColors.WHITE_500.css, G = (0, c.hex2int)(k);
  null != G && .3 > (0, c.getDarkness)(G) && (F = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, l.jsx)(S.default, {
    className: U.roleFlowerStar,
    iconClassName: E ? U.roleVerifiedIcon : void 0,
    color: k,
    size: 14
  }) : "dot" === L ? (0, l.jsx)(p.RoleDot, {
    className: U.roleDot,
    color: k,
    background: !1,
    tooltip: !1
  }) : (0, l.jsx)(p.RoleCircle, {
    color: k
  });
  let B = i.useMemo(() => {
    var t;
    return {
      borderColor: N ? void 0 : w,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [w, N, e.style]);
  return (0, l.jsx)(p.FocusRing, {
    children: (0, l.jsxs)("div", {
      ref: t,
      className: s(U.role, g),
      style: B,
      onContextMenu: b,
      onMouseDown: A,
      "aria-label": I.name,
      tabIndex: x,
      ...O,
      children: [(0, l.jsxs)(p.Clickable, {
        className: U.roleRemoveButton,
        onClick: E ? v : void 0,
        tabIndex: E ? x : -1,
        focusProps: {
          focusClassName: U.roleRemoveIconFocused
        },
        "aria-hidden": !E,
        "aria-label": j.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: I.name
        }),
        children: [u, E ? (0, l.jsx)(y.default, {
          color: F,
          className: U.roleRemoveIcon,
          "aria-hidden": !0
        }) : null]
      }), null != R ? (0, l.jsx)(M.default, {
        className: U.roleIcon,
        ...R,
        enableTooltip: !1
      }) : null, (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: U.roleName,
        children: (0, l.jsx)(p.Text, {
          variant: "text-xs/medium",
          className: U.roleNameOverflow,
          children: I.name
        })
      })]
    })
  })
});

function F(e) {
  let {
    user: t,
    numRolesHidden: n,
    roleClassName: i
  } = e, a = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
  return (0, l.jsx)(p.Popout, {
    renderPopout: t => {
      let {
        position: n
      } = t;
      return (0, l.jsx)(k, {
        ...e,
        position: null != n ? n : "top"
      })
    },
    position: "top",
    align: "center",
    children: e => (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)("button", {
        ...e,
        className: s(U.overflowButton, i),
        ...a,
        children: "+".concat(n)
      })
    })
  })
}

function G(e) {
  let {
    guild: t,
    user: n,
    handleAddRole: i,
    roleClassName: a
  } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(n.id)), o = (0, f.useStateFromStores)([C.default], () => C.default.roleStyle), u = _.default.getHighestRole(t), c = v.default.getMember(t.id, n.id), m = e => e.id !== t.id && !e.managed && _.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
  return (0, l.jsx)(p.Popout, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, l.jsx)(P.default, {
        guild: t,
        roleStyle: o,
        roleFilter: m,
        onSelect: i,
        onClose: n
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, l.jsx)(p.FocusRing, {
      children: (0, l.jsx)("button", {
        ...e,
        className: s(U.addButton, a),
        "aria-label": j.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
        type: "button",
        ...r,
        children: (0, l.jsx)(R.default, {
          className: U.addButtonIcon,
          "aria-hidden": !0
        })
      })
    })
  })
}

function B(e) {
  let t;
  let {
    user: n,
    guild: a,
    userRoles: r,
    wrap: c = !0,
    width: f,
    className: m,
    readOnly: p,
    roleClassName: h,
    disableBorderColor: g
  } = e, C = i.useRef({}), S = i.useCallback(e => {
    var t;
    let l = r.filter(t => t !== e.id);
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? E.default.unassignGuildRoleConnection(a.id, e.id) : I.default.updateMemberRoles(a.id, n.id, l, [], [e.id])
  }, [r, a.id, n.id]), T = i.useCallback(e => {
    let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), I.default.updateMemberRoles(a.id, n.id, t, [e], [])
  }, [r, a.id, n.id]), [v, A] = i.useState(null), x = i.useMemo(() => {
    let e = Object.values(a.roles).filter(e => r.includes(e.id)).sort((e, t) => {
      var n, l;
      let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
        a = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
      return i && !a ? 1 : !i && a ? -1 : 0
    });
    return null != v ? e.slice(0, v) : e
  }, [a.roles, v, r]), y = r.length - x.length;
  i.useLayoutEffect(() => {
    if (c) return;
    if ("number" != typeof f) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      n = f - 30 - 4;
    for (let l = 0; l < x.length; l++) {
      let i = x[l],
        a = C.current[i.id];
      if (null == a) continue;
      let s = a.offsetWidth;
      if ((t += s + 4) > n) break;
      e++
    }
    A(t => e < x.length ? e : t)
  }, [c, f, x]);
  let O = N.default.getCurrentUser();
  o(null != O, "MemberRolesList: currentUser cannot be undefined");
  let R = !p && _.default.can(b.Permissions.MANAGE_ROLES, a),
    M = L.default.getHighestRole(a, O.id),
    P = i.useMemo(() => "roles-".concat((0, u.v4)()), []),
    k = (0, d.default)({
      id: P,
      isEnabled: !0,
      scrollToStart: D,
      scrollToEnd: D,
      wrap: !0
    }),
    B = x.map(e => {
      var t;
      return (0, l.jsx)(w, {
        className: h,
        role: e,
        canRemove: R && L.default.isRoleHigher(a, O.id, M, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === O.id,
        onRemove: () => S(e),
        ref: t => {
          var n, l;
          return n = e.id, void(null != (l = t) ? C.current[n] = l : delete C.current[n])
        },
        guildId: a.id,
        disableBorderColor: g
      }, e.id)
    });
  return null != v && 0 !== y ? t = (0, l.jsx)(F, {
    ...e,
    numRolesHidden: y
  }) : R && (t = (0, l.jsx)(G, {
    ...e,
    handleAddRole: T
  })), (0, l.jsx)(d.ListNavigatorProvider, {
    navigator: k,
    children: (0, l.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          ...i
        } = e;
        return (0, l.jsxs)("div", {
          className: s(U.root, m),
          "aria-label": j.default.Messages.ROLES_LIST.format({
            numRoles: r.length
          }),
          ref: n,
          ...i,
          children: [B, t]
        })
      }
    })
  })
}
let H = (0, g.default)(B);

function V(e) {
  return (0, f.useStateFromStores)([_.default], () => {
    var t;
    return _.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
  }), !1 === e.wrap ? (0, l.jsx)(H, {
    ...e
  }) : (0, l.jsx)(B, {
    ...e
  })
}