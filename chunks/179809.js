"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("176617"),
  o = n("685626"),
  u = n("924826"),
  d = n("477690"),
  c = n("153867"),
  f = n("771845"),
  h = n("880080"),
  m = n("624138"),
  p = n("727258"),
  C = n("199540"),
  g = n("40153"),
  E = n("252686"),
  _ = n("682662"),
  S = n("662146"),
  I = n("689938"),
  N = n("538962"),
  T = n("634165");
let A = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
  L = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE),
  v = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_MARGIN);

function x(e) {
  let {
    folderNode: t,
    setNodeRef: n,
    selected: s,
    expanded: d,
    mediaState: m,
    mentionCount: x = 0,
    unread: R = !1,
    defaultFolderName: M,
    useCircleMask: y = !1,
    draggable: O = !1,
    sorting: D = !1,
    onDragStart: b,
    onDragEnd: j,
    onExpandCollapse: P,
    onContextMenu: G,
    renderChildNode: U,
    folderIconContent: w
  } = e, {
    id: B,
    name: F,
    children: H
  } = t, [V, k] = a.useState(!1), [Y, K] = a.useState(!1), W = V || Y;
  a.useEffect(() => {
    D && k(!1)
  }, [D]);
  let [{
    dragging: z
  }, Z] = (0, r.useDrag)({
    type: p.GuildsNodeType.FOLDER,
    item: () => (null == b || b(), {
      type: p.GuildsNodeType.FOLDER,
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
    ("ArrowRight" === e.key && !d || "ArrowLeft" === e.key && d) && P()
  }, [P, d]), q = null != F && "" !== F ? F : null != M && "" !== M ? M : I.default.Messages.SERVER_FOLDER_PLACEHOLDER, J = (0, u.useTreeItem)("".concat(B)), $ = "folder-items-".concat(B), ee = H.length * (L + v), et = (0, o.useTransition)(!z && d, {
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
  }), en = a.useCallback(e => null == n ? void 0 : n(B, e), [n, B]), el = (0, l.jsxs)(_.ListItem, {
    children: [(0, l.jsx)(h.default, {
      disabled: z || d,
      hovered: V,
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
        children: z ? (0, l.jsx)(E.default, {}) : (0, l.jsx)(C.default, {
          folderNode: t,
          expanded: d,
          forceCircular: y,
          sorting: D,
          mediaState: m,
          mentionCount: x,
          tooltipName: q,
          folderGroupId: $,
          onClick: P,
          onContextMenu: G,
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
        children: H.map(U)
      }, a)
    }), O && d ? (0, l.jsx)(g.FolderEndDropTarget, {
      name: q,
      targetNode: t
    }) : null]
  })
}