"use strict";
t.d(s, {
  Z: function() {
    return Z
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(225857),
  o = t(290843),
  c = t(866442),
  d = t(442837),
  u = t(481060),
  E = t(239091),
  _ = t(493544),
  I = t(134433),
  T = t(646892),
  N = t(741247),
  m = t(518738),
  S = t(549631),
  h = t(496675),
  g = t(176278),
  C = t(626135),
  x = t(480608),
  R = t(243730),
  L = t(130341),
  O = t(970129),
  A = t(712181),
  p = t(203377),
  M = t(981631),
  f = t(689938),
  D = t(62748),
  v = t(292955);
let j = "DRAGGABLE_ROLE";

function Z(e) {
  let {
    setEditRoleId: s,
    guild: t,
    everyoneRole: l,
    otherRoles: a,
    setSelectedSection: r,
    renderHeader: o,
    headerHeight: c,
    query: u
  } = e, E = (0, d.e7)([R.Z], () => R.Z.getRoleMemberCount(t.id), [t.id]), I = (0, d.e7)([h.Z], () => h.Z.getHighestRole(t), [t]), T = u.trim();
  i.useEffect(() => {
    (0, x.E)(t.id)
  }, [t.id]);
  let N = i.useRef(!1);
  i.useEffect(() => {
    if (!N.current && "" !== u.trimStart()) C.default.track(M.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), N.current = !0
  }, [u]);
  let m = i.useMemo(() => a.filter(e => (0, L.uo)(e, T)), [a, T]),
    S = i.useMemo(() => [...a, l], [a, l]),
    {
      draggingId: g,
      handleDragStart: O,
      handleDragReset: p,
      handleDragComplete: f
    } = (0, A.Z)(S),
    D = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === m.length) return (0, n.jsx)(U, {}, "empty-role");
      let o = m[l];
      return (0, n.jsx)(G, {
        role: o,
        guild: t,
        highestRole: I,
        currentPosition: l,
        memberCount: null !== (i = null == E ? void 0 : E[o.id]) && void 0 !== i ? i : 0,
        onDragStart: O,
        onDragReset: p,
        onDragComplete: f,
        disableHover: null != g,
        disableDrag: a.length !== m.length,
        setEditRoleId: s,
        setSelectedSection: r
      }, o.id)
    }, [m, t, I, E, O, p, f, g, a, s, r]);
  return (0, n.jsx)(_.Xi, {
    sections: [Math.max(m.length, 1)],
    sectionHeight: c,
    renderSection: o,
    rowHeight: 61,
    renderRow: D
  })
}

function U() {
  return (0, n.jsxs)("div", {
    className: D.emptyRoles,
    children: [(0, n.jsx)("div", {
      className: v.dragSpacing
    }), (0, n.jsx)(u.GroupIcon, {
      size: "md",
      color: "currentColor"
    }), (0, n.jsx)(u.Text, {
      className: D.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: f.Z.Messages.ROLE_LIST_EMPTY
    })]
  })
}

function G(e) {
  var s, l, c;
  let {
    role: d,
    guild: _,
    highestRole: m,
    currentPosition: h,
    memberCount: g,
    onDragStart: C,
    onDragReset: x,
    onDragComplete: R,
    disableHover: L,
    disableDrag: A,
    setEditRoleId: M,
    setSelectedSection: Z
  } = e, U = (0, O.T)(_, m, d), G = null != U, [b, B] = i.useState(!1), y = i.useMemo(() => ({
    type: j,
    item: () => (C(d.id), {
      id: d.id,
      position: h
    }),
    canDrag: () => b && !G,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, s) => {
      let t = s.getDropResult();
      if (null == t) {
        x();
        return
      }
      R(t.roleId)
    }
  }), [d, C, x, R, G, b]), [{
    isDragging: F
  }, k] = (0, r.c)(y), H = i.useMemo(() => ({
    accept: j,
    canDrop: () => !G,
    collect: e => {
      let s = e.getItem();
      return null != s && e.isOver() && e.canDrop() ? {
        dragSourcePosition: s.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: d.id
    })
  }), [G, d]), [{
    dragSourcePosition: w
  }, V] = (0, o.L)(H), Y = i.useCallback(e => {
    (0, E.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(t.bind(t, 741247));
      return s => (0, n.jsx)(e, {
        ...s,
        role: d,
        guild: _
      })
    })
  }, [_, d]), W = (0, N.useHasGuildRoleItems)(_, d);
  if (F) return (0, n.jsx)("div", {
    ref: k,
    className: a()(D.roleRow, D.roleRowDragging)
  });

  function z() {
    M(d.id)
  }

  function K() {
    z(), Z(p.ZI.MEMBERS)
  }
  return (0, n.jsxs)(u.Clickable, {
    className: a()(D.roleRow, {
      [D.roleRowDisableHover]: L,
      [D.containerDragBefore]: null != w && h < w,
      [D.containerDragAfter]: null != w && h > w
    }),
    onClick: z,
    onContextMenu: Y,
    innerRef: e => k(V(e)),
    "data-dnd-name": d.name,
    "aria-label": f.Z.Messages.ROLE_ROW_DESCRIPTION.format({
      name: d.name,
      count: "".concat(g)
    }),
    children: [(0, n.jsx)("div", {
      className: a()(D.dragIcon, v.dragSpacing, {
        [D.dragIconHidden]: G || A
      }),
      onMouseEnter: () => B(!0),
      onMouseLeave: () => B(!1),
      children: (0, n.jsx)(u.DragIcon, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, n.jsxs)("div", {
      className: a()(D.roleNameContainer, v.roleNameSpacing),
      children: [(null === (s = d.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? (0, n.jsx)(I.Z, {
        className: D.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, n.jsx)(P, {
        guildId: _.id,
        role: d,
        size: 24,
        className: D.roleIcon,
        defaultIconClassName: D.shield
      }), null != U ? (0, n.jsx)(O.Z, {
        className: D.lock,
        tooltipText: U
      }) : null, (0, n.jsx)(u.Text, {
        className: D.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null === (l = d.tags) || void 0 === l ? void 0 : l.subscription_listing_id) != null && (0, n.jsx)(S.Z, {
        className: D.subscriptionRoleIcon,
        "aria-label": f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
      }), (null === (c = d.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, n.jsx)(T.Z, {})]
    }), (0, n.jsx)(u.Tooltip, {
      text: f.Z.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
      "aria-label": f.Z.Messages.ROLE_ROW_VIEW_MEMBERS.format({
        count: "".concat(g)
      }),
      position: "right",
      children: e => (0, n.jsxs)(u.Clickable, {
        ...e,
        className: a()(D.memberCountContainer, v.memberSpacing),
        onClick: K,
        children: [(0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          children: g
        }), (0, n.jsx)(u.UserIcon, {
          size: "custom",
          color: "currentColor",
          className: D.person,
          width: 20,
          height: 20
        })]
      })
    }), (0, n.jsxs)("div", {
      className: a()(D.buttonsContainer, v.buttonsSpacing),
      children: [(0, n.jsx)(u.CircleIconButton, {
        className: a()(D.circleButton, D.editButton),
        tooltip: G ? f.Z.Messages.VIEW : f.Z.Messages.EDIT,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: G ? (0, n.jsx)(u.EyeIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        }) : (0, n.jsx)(u.PencilIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        }),
        onClick: z
      }), (0, n.jsx)(u.CircleIconButton, {
        className: D.circleButton,
        tooltip: f.Z.Messages.MORE,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: (0, n.jsx)(u.MoreHorizontalIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        }),
        onClick: Y,
        disabled: !W
      })]
    })]
  })
}

function P(e) {
  var s;
  let {
    guildId: t,
    role: i,
    size: l,
    enableTooltip: r,
    className: o,
    defaultIconClassName: d
  } = e, E = (0, m.p9)({
    guildId: t,
    roleId: i.id,
    size: l
  });
  return null != E ? (0, n.jsx)(g.Z, {
    ...E,
    className: o,
    enableTooltip: r
  }) : (0, n.jsx)(u.ShieldUserIcon, {
    size: "custom",
    className: a()(o, d),
    color: null !== (s = i.colorString) && void 0 !== s ? s : (0, c.Rf)(M.p6O),
    width: l,
    height: l
  })
}