n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(225857),
  o = n(920906),
  u = n(91192),
  c = n(477690),
  d = n(153867),
  h = n(771845),
  p = n(880080),
  g = n(624138),
  m = n(727258),
  C = n(199540),
  E = n(40153),
  f = n(252686),
  _ = n(682662),
  I = n(662146),
  N = n(689938),
  Z = n(248699),
  S = n(784490);
let x = (0, g.Mg)(c.Z.FOLDER_ITEM_ANIMATION_DURATION),
  L = (0, g.Mg)(c.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
  T = (0, g.Mg)(c.Z.FOLDER_ITEM_GUILD_ICON_MARGIN);

function v(e) {
  let {
    folderNode: t,
    setNodeRef: n,
    selected: s,
    expanded: c,
    mediaState: g,
    mentionCount: v = 0,
    unread: A = !1,
    defaultFolderName: M,
    useCircleMask: R = !1,
    draggable: O = !1,
    sorting: P = !1,
    onDragStart: b,
    onDragEnd: j,
    onExpandCollapse: y,
    onContextMenu: D,
    renderChildNode: U,
    folderIconContent: G
  } = e, {
    id: w,
    name: k,
    children: B
  } = t, [V, H] = i.useState(!1), [F, W] = i.useState(!1), Y = V || F;
  i.useEffect(() => {
    P && H(!1)
  }, [P]);
  let [{
    dragging: z
  }, K] = (0, a.c)({
    type: m.eD.FOLDER,
    item: () => (null == b || b(), {
      type: m.eD.FOLDER,
      nodeId: t.id
    }),
    end() {
      null == j || j(), (0, d.V1)(h.ZP.getCompatibleGuildFolders())
    },
    collect: e => ({
      dragging: e.isDragging()
    })
  }), q = i.useCallback(e => {
    W(e)
  }, []), Q = i.useCallback(e => {
    ("ArrowRight" === e.key && !c || "ArrowLeft" === e.key && c) && y()
  }, [y, c]), J = null != k && "" !== k ? k : null != M && "" !== M ? M : N.Z.Messages.SERVER_FOLDER_PLACEHOLDER, X = (0, u.Ie)("".concat(w)), $ = "folder-items-".concat(w), ee = B.length * (L + T), et = (0, o.useTransition)(!z && c, {
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
      duration: x
    }
  }), en = i.useCallback(e => null == n ? void 0 : n(w, e), [n, w]), el = (0, l.jsxs)(_.H, {
    children: [(0, l.jsx)(p.Z, {
      disabled: z || c,
      hovered: V,
      selected: s,
      unread: A,
      className: S.pill
    }), (0, l.jsx)(I.Z, {
      text: J,
      disabled: P,
      selected: s,
      disableWrapper: !0,
      children: (0, l.jsx)("div", {
        ref: O ? K : void 0,
        className: r()({
          [S.wobble]: !z && F && !c
        }),
        "data-dnd-name": J,
        children: z ? (0, l.jsx)(f.Z, {}) : (0, l.jsx)(C.Z, {
          folderNode: t,
          expanded: c,
          forceCircular: R,
          sorting: P,
          mediaState: g,
          mentionCount: v,
          tooltipName: J,
          folderGroupId: $,
          onClick: y,
          onContextMenu: D,
          onHoverChange: H,
          onKeyDown: Q,
          treeItemProps: X,
          folderIconContent: G
        })
      })
    }), O ? (0, l.jsx)(E.ZP, {
      name: J,
      targetNode: t,
      onDragOverChanged: q
    }) : null]
  });
  return (0, l.jsxs)("div", {
    ref: en,
    className: Z.wrapper,
    children: [!z && (0, l.jsx)("span", {
      className: r()(Z.expandedFolderBackground, {
        [Z.collapsed]: !c,
        [Z.hover]: Y
      })
    }), el, et((e, t, n) => {
      let {
        key: i
      } = n;
      return t && (0, l.jsx)(o.animated.ul, {
        id: $,
        style: {
          height: e.height.to(e => e * ee)
        },
        className: Z.__invalid_expandedGuilds,
        role: "group",
        children: B.map(U)
      }, i)
    }), O && c ? (0, l.jsx)(E.Zu, {
      name: J,
      targetNode: t
    }) : null]
  })
}