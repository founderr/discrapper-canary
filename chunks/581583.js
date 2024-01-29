"use strict";
l.r(t), l.d(t, {
  MemberRole: function() {
    return F
  },
  default: function() {
    return B
  }
}), l("222007"), l("70102");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("627445"),
  o = l.n(r),
  u = l("748820"),
  d = l("974667"),
  c = l("509043"),
  f = l("446674"),
  m = l("669491"),
  p = l("77078"),
  h = l("272030"),
  E = l("851387"),
  T = l("737960"),
  S = l("206230"),
  _ = l("339023"),
  g = l("405645"),
  A = l("592407"),
  I = l("26989"),
  v = l("957255"),
  N = l("697218"),
  C = l("145131"),
  y = l("476765"),
  M = l("945330"),
  x = l("907566"),
  O = l("151185"),
  R = l("483093"),
  L = l("991170"),
  P = l("487311"),
  j = l("49111"),
  b = l("782340"),
  D = l("618600");
let U = () => Promise.resolve();

function w(e) {
  let {
    userRoles: t,
    position: l,
    ...a
  } = e, s = (0, y.useUID)();
  return (0, n.jsxs)(p.Dialog, {
    className: i(D.overflowRolesPopout, {
      [D.popoutBottom]: "bottom" === l,
      [D.popoutTop]: "top" === l
    }),
    "aria-labelledby": s,
    children: [(0, n.jsx)("div", {
      className: D.overflowRolesPopoutArrowWrapper,
      children: (0, n.jsx)("div", {
        className: D.overflowRolesPopoutArrow
      })
    }), (0, n.jsxs)(C.default, {
      className: D.overflowRolesPopoutHeader,
      align: C.default.Align.CENTER,
      children: [(0, n.jsx)(x.default, {
        color: m.default.unsafe_rawColors.PRIMARY_400.css,
        className: D.overflowRolesPopoutHeaderIcon
      }), (0, n.jsx)("div", {
        className: D.overflowRolesPopoutHeaderText,
        id: s,
        children: b.default.Messages.ROLES_LIST.format({
          numRoles: t.length
        })
      })]
    }), (0, n.jsx)(k, {
      ...a,
      wrap: !0,
      userRoles: t
    })]
  })
}
let F = a.forwardRef(function(e, t) {
  var s, r, o;
  let u;
  let {
    canRemove: E,
    className: T,
    role: A,
    onRemove: I,
    guildId: v,
    disableBorderColor: N,
    onMouseDown: C
  } = e, {
    tabIndex: y,
    ...x
  } = (0, d.useListItem)(A.id), O = (0, g.useRoleIcon)({
    roleId: A.id,
    size: 16,
    guildId: v
  }), L = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), P = (null === (s = A.tags) || void 0 === s ? void 0 : s.guild_connections) === null, j = a.useCallback(e => {
    (0, h.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.el("443070").then(l.bind(l, "443070"));
      return t => (0, n.jsx)(e, {
        ...t,
        id: A.id,
        label: b.default.Messages.COPY_ID_ROLE
      })
    })
  }, [A.id]), U = (0, p.useToken)(m.default.unsafe_rawColors.PRIMARY_300).hsl(), w = null !== (r = A.colorString) && void 0 !== r ? r : U, F = null !== (o = (0, c.hex2rgb)(w, .6)) && void 0 !== o ? o : void 0, G = m.default.unsafe_rawColors.WHITE_500.css, Y = (0, c.hex2int)(w);
  null != Y && .3 > (0, c.getDarkness)(Y) && (G = m.default.unsafe_rawColors.PRIMARY_630.css), u = P ? (0, n.jsx)(_.default, {
    className: D.roleFlowerStar,
    iconClassName: E ? D.roleVerifiedIcon : void 0,
    color: w,
    size: 14
  }) : "dot" === L ? (0, n.jsx)(p.RoleDot, {
    className: D.roleDot,
    color: w,
    background: !1,
    tooltip: !1
  }) : (0, n.jsx)(p.RoleCircle, {
    color: w
  });
  let k = a.useMemo(() => {
    var t;
    return {
      borderColor: N ? void 0 : F,
      ...null !== (t = e.style) && void 0 !== t ? t : {}
    }
  }, [F, N, e.style]);
  return (0, n.jsx)(p.FocusRing, {
    children: (0, n.jsxs)("div", {
      ref: t,
      className: i(D.role, T),
      style: k,
      onContextMenu: j,
      onMouseDown: C,
      "aria-label": A.name,
      tabIndex: y,
      ...x,
      children: [(0, n.jsxs)(p.Clickable, {
        className: D.roleRemoveButton,
        onClick: E ? I : void 0,
        tabIndex: E ? y : -1,
        focusProps: {
          focusClassName: D.roleRemoveIconFocused
        },
        "aria-hidden": !E,
        "aria-label": b.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
          roleName: A.name
        }),
        children: [u, E ? (0, n.jsx)(M.default, {
          color: G,
          className: D.roleRemoveIcon,
          "aria-hidden": !0
        }) : null]
      }), null != O ? (0, n.jsx)(R.default, {
        className: D.roleIcon,
        ...O,
        enableTooltip: !1
      }) : null, (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: D.roleName,
        children: (0, n.jsx)(p.Text, {
          variant: "text-xs/medium",
          className: D.roleNameOverflow,
          children: A.name
        })
      })]
    })
  })
});

function G(e) {
  let {
    user: t,
    numRolesHidden: l,
    roleClassName: a
  } = e, s = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
  return (0, n.jsx)(p.Popout, {
    renderPopout: t => {
      let {
        position: l
      } = t;
      return (0, n.jsx)(w, {
        ...e,
        position: null != l ? l : "top"
      })
    },
    position: "top",
    align: "center",
    children: e => (0, n.jsx)(p.FocusRing, {
      children: (0, n.jsx)("button", {
        ...e,
        className: i(D.overflowButton, a),
        ...s,
        children: "+".concat(l)
      })
    })
  })
}

function Y(e) {
  let {
    guild: t,
    user: l,
    handleAddRole: a,
    roleClassName: s
  } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(l.id)), o = (0, f.useStateFromStores)([S.default], () => S.default.roleStyle), u = v.default.getHighestRole(t), c = I.default.getMember(t.id, l.id), m = e => e.id !== t.id && !e.managed && v.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
  return (0, n.jsx)(p.Popout, {
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, n.jsx)(P.default, {
        guild: t,
        roleStyle: o,
        roleFilter: m,
        onSelect: a,
        onClose: l
      })
    },
    position: "bottom",
    align: "center",
    children: e => (0, n.jsx)(p.FocusRing, {
      children: (0, n.jsx)("button", {
        ...e,
        className: i(D.addButton, s),
        "aria-label": b.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
        type: "button",
        ...r,
        children: (0, n.jsx)(O.default, {
          className: D.addButtonIcon,
          "aria-hidden": !0
        })
      })
    })
  })
}

function k(e) {
  let t;
  let {
    user: l,
    guild: s,
    userRoles: r,
    wrap: c = !0,
    width: f,
    className: m,
    readOnly: p,
    roleClassName: h,
    disableBorderColor: T
  } = e, S = a.useRef({}), _ = a.useCallback(e => {
    var t;
    let n = r.filter(t => t !== e.id);
    (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? E.default.unassignGuildRoleConnection(s.id, e.id) : A.default.updateMemberRoles(s.id, l.id, n, [], [e.id])
  }, [r, s.id, l.id]), g = a.useCallback(e => {
    let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), A.default.updateMemberRoles(s.id, l.id, t, [e], [])
  }, [r, s.id, l.id]), [I, C] = a.useState(null), y = a.useMemo(() => {
    let e = Object.values(s.roles).filter(e => r.includes(e.id)).sort((e, t) => {
      var l, n;
      let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
        s = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
      return a && !s ? 1 : !a && s ? -1 : 0
    });
    return null != I ? e.slice(0, I) : e
  }, [s.roles, I, r]), M = r.length - y.length;
  a.useLayoutEffect(() => {
    if (c) return;
    if ("number" != typeof f) throw Error("Unexpected null width");
    let e = 0,
      t = 0,
      l = f - 30 - 4;
    for (let n = 0; n < y.length; n++) {
      let a = y[n],
        s = S.current[a.id];
      if (null == s) continue;
      let i = s.offsetWidth;
      if ((t += i + 4) > l) break;
      e++
    }
    C(t => e < y.length ? e : t)
  }, [c, f, y]);
  let x = N.default.getCurrentUser();
  o(null != x, "MemberRolesList: currentUser cannot be undefined");
  let O = !p && v.default.can(j.Permissions.MANAGE_ROLES, s),
    R = L.default.getHighestRole(s, x.id),
    P = a.useMemo(() => "roles-".concat((0, u.v4)()), []),
    w = (0, d.default)({
      id: P,
      isEnabled: !0,
      scrollToStart: U,
      scrollToEnd: U,
      wrap: !0
    }),
    k = y.map(e => {
      var t;
      return (0, n.jsx)(F, {
        className: h,
        role: e,
        canRemove: O && L.default.isRoleHigher(s, x.id, R, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && l.id === x.id,
        onRemove: () => _(e),
        ref: t => {
          var l, n;
          return l = e.id, void(null != (n = t) ? S.current[l] = n : delete S.current[l])
        },
        guildId: s.id,
        disableBorderColor: T
      }, e.id)
    });
  return null != I && 0 !== M ? t = (0, n.jsx)(G, {
    ...e,
    numRolesHidden: M
  }) : O && (t = (0, n.jsx)(Y, {
    ...e,
    handleAddRole: g
  })), (0, n.jsx)(d.ListNavigatorProvider, {
    navigator: w,
    children: (0, n.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: l,
          ...a
        } = e;
        return (0, n.jsxs)("div", {
          className: i(D.root, m),
          "aria-label": b.default.Messages.ROLES_LIST.format({
            numRoles: r.length
          }),
          ref: l,
          ...a,
          children: [k, t]
        })
      }
    })
  })
}
let V = (0, T.default)(k);

function B(e) {
  return (0, f.useStateFromStores)([v.default], () => {
    var t;
    return v.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
  }), !1 === e.wrap ? (0, n.jsx)(V, {
    ...e
  }) : (0, n.jsx)(k, {
    ...e
  })
}