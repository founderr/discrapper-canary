"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("476042"),
  o = s("509043"),
  d = s("446674"),
  u = s("77078"),
  c = s("272030"),
  E = s("851387"),
  _ = s("206230"),
  I = s("339023"),
  T = s("957255"),
  f = s("730988"),
  S = s("246053"),
  m = s("151185"),
  N = s("531493"),
  g = s("476324"),
  h = s("983521"),
  C = s("91816"),
  R = s("53948"),
  x = s("49111"),
  L = s("782340"),
  O = s("346431");
let p = "DRAGGABLE_ROLE";

function A(e) {
  var t, l;
  let n, {
      guild: d,
      role: E,
      highestRole: _,
      selectedItem: T,
      onClick: f,
      currentPosition: S,
      onDragStart: m,
      onDragReset: N,
      onDragComplete: h,
      roleStyle: C
    } = e,
    R = (0, g.useLockTooltip)(d, _, E),
    L = (null == d ? void 0 : d.id) === E.id,
    A = null == R && !L,
    M = (null === (t = E.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
    [, D] = (0, r.useDrag)({
      type: p,
      item: () => (m(E.id), {
        id: E.id,
        position: S
      }),
      canDrag: () => A,
      end: (e, t) => {
        let s = t.getDropResult();
        if (null == s) {
          N();
          return
        }
        h(s.roleId)
      }
    }),
    [{
      dragSourcePosition: v
    }, j] = (0, r.useDrop)({
      accept: p,
      canDrop: () => A,
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver() && e.canDrop() ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: E.id
      })
    }),
    G = null !== (l = E.colorString) && void 0 !== l ? l : (0, o.int2hex)(x.DEFAULT_ROLE_COLOR);
  return n = M ? (0, a.jsx)(I.default, {
    size: 12,
    color: E.colorString,
    className: O.verifiedRoleIcon
  }) : "dot" === C ? (0, a.jsx)(u.RoleDot, {
    color: G,
    background: !1,
    tooltip: !1
  }) : (0, a.jsx)(u.RoleCircle, {
    color: G
  }), (0, a.jsxs)(u.TabBar.Item, {
    className: i(O.row, {
      [O.dragBefore]: null !== v && S < v,
      [O.dragAfter]: null !== v && S > v
    }),
    id: E.id,
    selectedItem: T,
    itemType: "side",
    onClick: f,
    onContextMenu: function(e) {
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("726527").then(s.bind(s, "726527"));
        return t => (0, a.jsx)(e, {
          ...t,
          role: E,
          guild: d
        })
      })
    },
    "aria-label": E.name,
    clickableRef: e => {
      var t;
      return D(j(null !== (t = null == e ? void 0 : e.ref) && void 0 !== t ? t : null))
    },
    children: [n, null != R ? (0, a.jsx)(g.default, {
      className: O.lock,
      tooltipText: R
    }) : null, (0, a.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: L ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: E.name
    })]
  })
}

function M(e) {
  let {
    guild: t,
    currentRoleId: s,
    setCurrentRoleId: n,
    setSelectedSection: r
  } = e, o = (0, d.useStateFromStores)([N.default], () => N.default.roles), c = (0, d.useStateFromStores)([T.default], () => T.default.getHighestRole(t)), I = (0, d.useStateFromStores)([_.default], () => _.default.roleStyle), [g, x] = l.useState(o.length), {
    scrolledToTop: p,
    handleScroll: M
  } = (0, C.useScrolledToTop)(), {
    handleDragStart: D,
    handleDragReset: v,
    handleDragComplete: j
  } = (0, h.default)(o), G = l.useRef(null), U = l.useCallback(e => {
    var t, s;
    let a = o.findIndex(t => t.id === e);
    null === (s = G.current) || void 0 === s || null === (t = s.getScrollerNode()) || void 0 === t || t.scrollTo({
      top: Math.max((a - 2) * 34, 0)
    })
  }, [o]);
  l.useEffect(() => {
    U(s)
  }, []), l.useEffect(() => {
    o.length > g && U(s), o.length !== g && x(o.length)
  }, [o.length, g, x, U, s]);
  let P = () => {
    E.default.createRole(t.id), r(R.GuildSettingsRoleEditSections.DISPLAY)
  };
  return (0, a.jsx)(f.default.Sidebar, {
    className: O.sidebar,
    children: (0, a.jsxs)("div", {
      className: O.container,
      children: [(0, a.jsxs)("div", {
        className: i(O.titleContainer, {
          [O.titleElevated]: !p
        }),
        children: [(0, a.jsxs)(u.Clickable, {
          className: O.title,
          onClick: () => n(null),
          children: [(0, a.jsx)(S.default, {
            direction: S.default.Directions.LEFT
          }), (0, a.jsx)(u.Text, {
            className: O.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: L.default.Messages.BACK
          })]
        }), (0, a.jsx)(u.Tooltip, {
          position: "top",
          "aria-label": L.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE,
          text: (0, a.jsx)(u.Text, {
            className: O.tooltip,
            variant: "text-sm/normal",
            children: L.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
          }),
          children: e => (0, a.jsx)(u.Clickable, {
            className: O.addRole,
            ...e,
            onClick: P,
            children: (0, a.jsx)(m.default, {
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, a.jsx)(u.AdvancedScroller, {
        className: O.list,
        ref: G,
        onScroll: M,
        children: (0, a.jsx)(u.TabBar, {
          selectedItem: s,
          onItemSelect: e => n(e),
          orientation: "vertical",
          children: o.map((e, l) => (0, a.jsx)(A, {
            guild: t,
            role: e,
            highestRole: c,
            selectedItem: s,
            onClick: () => n(e.id),
            currentPosition: l,
            onDragStart: D,
            onDragReset: v,
            onDragComplete: j,
            roleStyle: I
          }, e.id))
        })
      })]
    })
  })
}