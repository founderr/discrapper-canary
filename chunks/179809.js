"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("942389"),
  o = n("718017"),
  u = n("924826"),
  d = n("477690"),
  c = n("153867"),
  f = n("771845"),
  h = n("880080"),
  p = n("624138"),
  C = n("727258"),
  m = n("199540"),
  g = n("40153"),
  E = n("252686"),
  _ = n("682662"),
  S = n("662146"),
  I = n("689938"),
  N = n("515330"),
  T = n("814886");
let A = (0, p.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
  L = (0, p.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE),
  v = (0, p.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_MARGIN);

function x(e) {
  let {
    folderNode: t,
    setNodeRef: n,
    selected: s,
    expanded: d,
    mediaState: p,
    mentionCount: x = 0,
    unread: R = !1,
    defaultFolderName: M,
    useCircleMask: y = !1,
    draggable: O = !1,
    sorting: D = !1,
    onDragStart: b,
    onDragEnd: j,
    onExpandCollapse: G,
    onContextMenu: U,
    renderChildNode: P,
    folderIconContent: w
  } = e, {
    id: F,
    name: B,
    children: V
  } = t, [H, k] = a.useState(!1), [Y, K] = a.useState(!1), W = H || Y;
  a.useEffect(() => {
    D && k(!1)
  }, [D]);
  let [{
    dragging: z
  }, Z] = (0, r.useDrag)({
    type: C.GuildsNodeType.FOLDER,
    item: () => (null == b || b(), {
      type: C.GuildsNodeType.FOLDER,
      nodeId: t.id
    }),
    end() {
      null == j || j(), (0, c.saveGuildFolders)(f.default.getCompatibleGuildFolders())
    },
    collect: e => ({
      dragging: e.isDragging()
    })
  }), X = a.useCallback(e => {
    K(e)
  }, []), Q = a.useCallback(e => {
    ("ArrowRight" === e.key && !d || "ArrowLeft" === e.key && d) && G()
  }, [G, d]), q = null != B && "" !== B ? B : null != M && "" !== M ? M : I.default.Messages.SERVER_FOLDER_PLACEHOLDER, J = (0, u.useTreeItem)("".concat(F)), $ = "folder-items-".concat(F), ee = V.length * (L + v), et = (0, o.useTransition)(!z && d, {
    from: {
      height: 0
    },
    enter: {
      height: 1
    },
    leave: {
      height: 0
    },
    config: {
      duration: A
    }
  }), en = a.useCallback(e => null == n ? void 0 : n(F, e), [n, F]), el = (0, l.jsxs)(_.ListItem, {
    children: [(0, l.jsx)(h.default, {
      disabled: z || d,
      hovered: H,
      selected: s,
      unread: R,
      className: T.pill
    }), (0, l.jsx)(S.default, {
      text: q,
      disabled: D,
      selected: s,
      disableWrapper: !0,
      children: (0, l.jsx)("div", {
        ref: O ? Z : void 0,
        className: i()({
          [T.wobble]: !z && Y && !d
        }),
        "data-dnd-name": q,
        children: z ? (0, l.jsx)(E.default, {}) : (0, l.jsx)(m.default, {
          folderNode: t,
          expanded: d,
          forceCircular: y,
          sorting: D,
          mediaState: p,
          mentionCount: x,
          tooltipName: q,
          folderGroupId: $,
          onClick: G,
          onContextMenu: U,
          onHoverChange: k,
          onKeyDown: Q,
          treeItemProps: J,
          folderIconContent: w
        })
      })
    }), O ? (0, l.jsx)(g.default, {
      name: q,
      targetNode: t,
      onDragOverChanged: X
    }) : null]
  });
  return (0, l.jsxs)("div", {
    ref: en,
    className: N.wrapper,
    children: [!z && (0, l.jsx)("span", {
      className: i()(N.expandedFolderBackground, {
        [N.collapsed]: !d,
        [N.hover]: W
      })
    }), el, et((e, t, n) => {
      let {
        key: a
      } = n;
      return t && (0, l.jsx)(o.animated.ul, {
        id: $,
        style: {
          height: e.height.to(e => e * ee)
        },
        className: N.__invalid_expandedGuilds,
        role: "group",
        children: V.map(P)
      }, a)
    }), O && d ? (0, l.jsx)(g.FolderEndDropTarget, {
      name: q,
      targetNode: t
    }) : null]
  })
}