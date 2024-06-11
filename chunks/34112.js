"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("176617"),
  o = s("866442"),
  d = s("442837"),
  u = s("481060"),
  c = s("239091"),
  E = s("493544"),
  _ = s("134433"),
  I = s("646892"),
  T = s("741247"),
  S = s("518738"),
  f = s("549631"),
  m = s("496675"),
  N = s("548343"),
  g = s("794358"),
  h = s("808268"),
  C = s("185403"),
  R = s("158010"),
  x = s("964309"),
  L = s("241820"),
  O = s("176278"),
  p = s("626135"),
  A = s("480608"),
  M = s("243730"),
  D = s("130341"),
  v = s("970129"),
  j = s("712181"),
  G = s("203377"),
  U = s("981631"),
  P = s("689938"),
  b = s("540356"),
  y = s("793577");
let B = "DRAGGABLE_ROLE";

function F(e) {
  let {
    setEditRoleId: t,
    guild: s,
    everyoneRole: n,
    otherRoles: i,
    setSelectedSection: r,
    renderHeader: o,
    headerHeight: u,
    query: c
  } = e, _ = (0, d.useStateFromStores)([M.default], () => M.default.getRoleMemberCount(s.id), [s.id]), I = (0, d.useStateFromStores)([m.default], () => m.default.getHighestRole(s), [s]), T = c.trim();
  l.useEffect(() => {
    (0, A.fetchMemberCounts)(s.id)
  }, [s.id]);
  let S = l.useRef(!1);
  l.useEffect(() => {
    !S.current && "" !== c.trimStart() && (p.default.track(U.AnalyticEvents.SEARCH_STARTED, {
      search_type: "Roles"
    }), S.current = !0)
  }, [c]);
  let f = l.useMemo(() => i.filter(e => (0, D.filterRole)(e, T)), [i, T]),
    N = l.useMemo(() => [...i, n], [i, n]),
    {
      draggingId: g,
      handleDragStart: h,
      handleDragReset: C,
      handleDragComplete: R
    } = (0, j.default)(N),
    x = l.useCallback(e => {
      var l;
      let {
        row: n
      } = e;
      if (0 === f.length) return (0, a.jsx)(H, {}, "empty-role");
      let o = f[n];
      return (0, a.jsx)(k, {
        role: o,
        guild: s,
        highestRole: I,
        currentPosition: n,
        memberCount: null !== (l = null == _ ? void 0 : _[o.id]) && void 0 !== l ? l : 0,
        onDragStart: h,
        onDragReset: C,
        onDragComplete: R,
        disableHover: null != g,
        disableDrag: i.length !== f.length,
        setEditRoleId: t,
        setSelectedSection: r
      }, o.id)
    }, [f, s, I, _, h, C, R, g, i, t, r]);
  return (0, a.jsx)(E.ListContentScroller, {
    sections: [Math.max(f.length, 1)],
    sectionHeight: u,
    renderSection: o,
    rowHeight: 61,
    renderRow: x
  })
}

function H() {
  return (0, a.jsxs)("div", {
    className: b.emptyRoles,
    children: [(0, a.jsx)("div", {
      className: y.dragSpacing
    }), (0, a.jsx)(R.default, {}), (0, a.jsx)(u.Text, {
      className: b.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: P.default.Messages.ROLE_LIST_EMPTY
    })]
  })
}

function k(e) {
  var t, n, o;
  let {
    role: d,
    guild: E,
    highestRole: S,
    currentPosition: m,
    memberCount: R,
    onDragStart: L,
    onDragReset: O,
    onDragComplete: p,
    disableHover: A,
    disableDrag: M,
    setEditRoleId: D,
    setSelectedSection: j
  } = e, U = (0, v.useLockTooltip)(E, S, d), F = null != U, [H, k] = l.useState(!1), V = l.useMemo(() => ({
    type: B,
    item: () => (L(d.id), {
      id: d.id,
      position: m
    }),
    canDrag: () => H && !F,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let s = t.getDropResult();
      if (null == s) {
        O();
        return
      }
      p(s.roleId)
    }
  }), [d, L, O, p, F, H]), [{
    isDragging: Y
  }, W] = (0, r.useDrag)(V), z = l.useMemo(() => ({
    accept: B,
    canDrop: () => !F,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: d.id
    })
  }), [F, d]), [{
    dragSourcePosition: K
  }, Z] = (0, r.useDrop)(z), X = l.useCallback(e => {
    (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "741247"));
      return t => (0, a.jsx)(e, {
        ...t,
        role: d,
        guild: E
      })
    })
  }, [E, d]), Q = (0, T.useHasGuildRoleItems)(E, d);
  if (Y) return (0, a.jsx)("div", {
    ref: W,
    className: i()(b.roleRow, b.roleRowDragging)
  });

  function J() {
    D(d.id)
  }

  function q() {
    J(), j(G.GuildSettingsRoleEditSections.MEMBERS)
  }
  return (0, a.jsxs)(u.Clickable, {
    className: i()(b.roleRow, {
      [b.roleRowDisableHover]: A,
      [b.containerDragBefore]: null != K && m < K,
      [b.containerDragAfter]: null != K && m > K
    }),
    onClick: J,
    onContextMenu: X,
    innerRef: e => W(Z(e)),
    "data-dnd-name": d.name,
    "aria-label": P.default.Messages.ROLE_ROW_DESCRIPTION.format({
      name: d.name,
      count: "".concat(R)
    }),
    children: [(0, a.jsx)("div", {
      className: i()(b.dragIcon, y.dragSpacing, {
        [b.dragIconHidden]: F || M
      }),
      onMouseEnter: () => k(!0),
      onMouseLeave: () => k(!1),
      children: (0, a.jsx)(N.default, {})
    }), (0, a.jsxs)("div", {
      className: i()(b.roleNameContainer, y.roleNameSpacing),
      children: [(null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? (0, a.jsx)(_.default, {
        className: b.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, a.jsx)(w, {
        guildId: E.id,
        role: d,
        size: 24,
        className: b.roleIcon,
        defaultIconClassName: b.shield
      }), null != U ? (0, a.jsx)(v.default, {
        className: b.lock,
        tooltipText: U
      }) : null, (0, a.jsx)(u.Text, {
        className: b.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null === (n = d.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null && (0, a.jsx)(f.default, {
        className: b.subscriptionRoleIcon,
        "aria-label": P.default.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
      }), (null === (o = d.tags) || void 0 === o ? void 0 : o.is_guild_product_role) === !0 && (0, a.jsx)(I.default, {})]
    }), (0, a.jsx)(u.Tooltip, {
      text: P.default.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
      "aria-label": P.default.Messages.ROLE_ROW_VIEW_MEMBERS.format({
        count: "".concat(R)
      }),
      position: "right",
      children: e => (0, a.jsxs)(u.Clickable, {
        ...e,
        className: i()(b.memberCountContainer, y.memberSpacing),
        onClick: q,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          children: R
        }), (0, a.jsx)(x.default, {
          className: b.person,
          width: 20,
          height: 20
        })]
      })
    }), (0, a.jsxs)("div", {
      className: i()(b.buttonsContainer, y.buttonsSpacing),
      children: [(0, a.jsx)(u.CircleIconButton, {
        className: i()(b.circleButton, b.editButton),
        tooltip: F ? P.default.Messages.VIEW : P.default.Messages.EDIT,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: F ? (0, a.jsx)(g.default, {
          width: 20,
          height: 20
        }) : (0, a.jsx)(C.default, {
          width: 20,
          height: 20
        }),
        onClick: J
      }), (0, a.jsx)(u.CircleIconButton, {
        className: b.circleButton,
        tooltip: P.default.Messages.MORE,
        color: u.CircleIconButtonColors.SECONDARY,
        size: u.CircleIconButtonSizes.SIZE_36,
        icon: (0, a.jsx)(h.default, {
          width: 20,
          height: 20
        }),
        onClick: X,
        disabled: !Q
      })]
    })]
  })
}

function w(e) {
  var t;
  let {
    guildId: s,
    role: l,
    size: n,
    enableTooltip: r,
    className: d,
    defaultIconClassName: u
  } = e, c = (0, S.useRoleIcon)({
    guildId: s,
    roleId: l.id,
    size: n
  });
  return null != c ? (0, a.jsx)(O.default, {
    ...c,
    className: d,
    enableTooltip: r
  }) : (0, a.jsx)(L.default, {
    className: i()(d, u),
    color: null !== (t = l.colorString) && void 0 !== t ? t : (0, o.int2hex)(U.DEFAULT_ROLE_COLOR),
    width: n,
    height: n
  })
}