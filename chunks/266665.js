"use strict";
t.d(s, {
  Z: function() {
    return D
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
  _ = t(749210),
  I = t(607070),
  T = t(605436),
  N = t(134433),
  m = t(496675),
  S = t(442313),
  h = t(671533),
  g = t(946724),
  C = t(970129),
  x = t(712181),
  R = t(420966),
  L = t(203377),
  O = t(981631),
  A = t(689938),
  p = t(324367);
let M = "DRAGGABLE_ROLE";

function f(e) {
  var s, i;
  let l, {
      guild: d,
      role: _,
      highestRole: I,
      selectedItem: m,
      onClick: S,
      currentPosition: h,
      onDragStart: g,
      onDragReset: x,
      onDragComplete: R,
      roleStyle: L
    } = e,
    A = (0, C.T)(d, I, _),
    f = (0, T.pM)(d.id, _.id),
    D = null == A && !f,
    v = (null === (s = _.tags) || void 0 === s ? void 0 : s.guild_connections) !== void 0,
    [, j] = (0, r.c)({
      type: M,
      item: () => (g(_.id), {
        id: _.id,
        position: h
      }),
      canDrag: () => D,
      end: (e, s) => {
        let t = s.getDropResult();
        if (null == t) {
          x();
          return
        }
        R(t.roleId)
      }
    }),
    [{
      dragSourcePosition: Z
    }, U] = (0, o.L)({
      accept: M,
      canDrop: () => D,
      collect: e => {
        let s = e.getItem();
        return null != s && e.isOver() && e.canDrop() ? {
          dragSourcePosition: s.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: _.id
      })
    }),
    G = null !== (i = _.colorString) && void 0 !== i ? i : (0, c.Rf)(O.p6O);
  return l = v ? (0, n.jsx)(N.Z, {
    size: 12,
    color: _.colorString,
    className: p.verifiedRoleIcon
  }) : "dot" === L ? (0, n.jsx)(u.RoleDot, {
    color: G,
    background: !1,
    tooltip: !1
  }) : (0, n.jsx)(u.RoleCircle, {
    color: G
  }), (0, n.jsxs)(u.TabBar.Item, {
    className: a()(p.row, {
      [p.dragBefore]: null !== Z && h < Z,
      [p.dragAfter]: null !== Z && h > Z
    }),
    id: _.id,
    selectedItem: m,
    itemType: "side",
    onClick: S,
    onContextMenu: function(e) {
      (0, E.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(t.bind(t, 741247));
        return s => (0, n.jsx)(e, {
          ...s,
          role: _,
          guild: d
        })
      })
    },
    "aria-label": _.name,
    clickableRef: e => {
      var s;
      return j(U(null !== (s = null == e ? void 0 : e.ref) && void 0 !== s ? s : null))
    },
    children: [l, null != A ? (0, n.jsx)(C.Z, {
      className: p.lock,
      tooltipText: A
    }) : null, (0, n.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: f ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: _.name
    })]
  })
}

function D(e) {
  let {
    guild: s,
    currentRoleId: t,
    setCurrentRoleId: l,
    setSelectedSection: r
  } = e, o = (0, d.e7)([g.Z], () => g.Z.roles), c = (0, d.e7)([m.Z], () => m.Z.getHighestRole(s)), E = (0, d.e7)([I.Z], () => I.Z.roleStyle), [T, N] = i.useState(o.length), {
    scrolledToTop: C,
    handleScroll: O
  } = (0, R.V)(), {
    handleDragStart: M,
    handleDragReset: D,
    handleDragComplete: v
  } = (0, x.Z)(o), j = i.useRef(null), Z = i.useCallback(e => {
    var s, t;
    let n = o.findIndex(s => s.id === e);
    null === (t = j.current) || void 0 === t || null === (s = t.getScrollerNode()) || void 0 === s || s.scrollTo({
      top: Math.max((n - 2) * 34, 0)
    })
  }, [o]);
  i.useEffect(() => {
    Z(t)
  }, []), i.useEffect(() => {
    o.length > T && Z(t), o.length !== T && N(o.length)
  }, [o.length, T, N, Z, t]);
  let U = () => {
    _.Z.createRole(s.id), r(L.ZI.DISPLAY)
  };
  return (0, n.jsx)(S.ZP.Sidebar, {
    className: p.sidebar,
    children: (0, n.jsxs)("div", {
      className: p.container,
      children: [(0, n.jsxs)("div", {
        className: a()(p.titleContainer, {
          [p.titleElevated]: !C
        }),
        children: [(0, n.jsxs)(u.Clickable, {
          className: p.title,
          onClick: () => l(null),
          children: [(0, n.jsx)(h.Z, {
            direction: h.Z.Directions.LEFT
          }), (0, n.jsx)(u.Text, {
            className: p.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: A.Z.Messages.BACK
          })]
        }), (0, n.jsx)(u.Tooltip, {
          position: "top",
          "aria-label": A.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE,
          text: (0, n.jsx)(u.Text, {
            className: p.tooltip,
            variant: "text-sm/normal",
            children: A.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
          }),
          children: e => (0, n.jsx)(u.Clickable, {
            className: p.addRole,
            ...e,
            onClick: U,
            children: (0, n.jsx)(u.PlusSmallIcon, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          })
        })]
      }), (0, n.jsx)(u.AdvancedScroller, {
        className: p.list,
        ref: j,
        onScroll: O,
        children: (0, n.jsx)(u.TabBar, {
          selectedItem: t,
          onItemSelect: e => l(e),
          orientation: "vertical",
          children: o.map((e, i) => (0, n.jsx)(f, {
            guild: s,
            role: e,
            highestRole: c,
            selectedItem: t,
            onClick: () => l(e.id),
            currentPosition: i,
            onDragStart: M,
            onDragReset: D,
            onDragComplete: v,
            roleStyle: E
          }, e.id))
        })
      })]
    })
  })
}