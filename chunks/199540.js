n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(920906),
  o = n(866442),
  u = n(442837),
  c = n(477690),
  d = n(481060),
  h = n(430824),
  p = n(346656),
  g = n(624138),
  m = n(674552),
  C = n(981631),
  E = n(689938),
  f = n(248699);
let _ = (0, g.Mg)(c.Z.FOLDER_ITEM_ANIMATION_DURATION),
  I = (0, g.Mg)(c.Z.FOLDER_ITEM_GUILD_ICON_SIZE);

function N(e) {
  let {
    guildId: t,
    animate: n
  } = e, i = (0, u.e7)([h.Z], () => h.Z.getGuild(t), [t]);
  return null == i ? (0, l.jsx)("div", {
    className: f.guildIconUnavailable,
    children: "!"
  }) : (0, l.jsx)(p.Z, {
    guild: i,
    animate: n,
    size: p.Z.Sizes.SMOL,
    className: f.guildIcon,
    tabIndex: -1
  })
}

function Z(e) {
  let t, n, {
      folderNode: s,
      hovered: r,
      expanded: u
    } = e,
    {
      color: c,
      children: h
    } = s,
    p = null != c ? c : C.Wyy,
    g = h.map(e => e.id),
    [m, E] = i.useState(!1),
    [Z, S] = i.useState(u),
    x = u ? 0 : -I,
    L = (0, a.useSpring)({
      transform: "translate3d(0, ".concat(x, "px, 0)"),
      config: {
        duration: _
      },
      onStart() {
        E(!0), S(u)
      },
      onRest() {
        E(!1), S(u)
      }
    }),
    T = m ? L : void 0;
  return (m || Z) && (t = (0, l.jsx)(a.animated.div, {
    style: T,
    className: f.expandedFolderIconWrapper,
    children: (0, l.jsx)(d.FolderIcon, {
      size: "md",
      color: "currentColor",
      style: {
        color: (0, o.Rf)(p)
      }
    })
  })), (m || !Z) && (n = (0, l.jsx)(a.animated.div, {
    style: T,
    className: f.closedFolderIconWrapper,
    children: g.slice(0, 4).map(e => (0, l.jsx)(N, {
      guildId: e,
      animate: r
    }, e))
  })), (0, l.jsxs)("div", {
    "aria-hidden": !0,
    style: u ? void 0 : {
      backgroundColor: (0, o.br)(p, .4)
    },
    className: f.folderIconWrapper,
    children: [t, n]
  })
}

function S(e) {
  let {
    folderNode: t,
    forceCircular: n,
    expanded: s,
    sorting: a,
    mediaState: o,
    mentionCount: u = 0,
    tooltipName: c,
    folderGroupId: h,
    folderIconContent: p,
    onClick: g,
    onContextMenu: C,
    onHoverChange: _,
    onKeyDown: I,
    treeItemProps: {
      onFocus: N,
      ...S
    }
  } = e, [x, L] = i.useState(!1), T = i.useCallback(() => {
    a || L(!0), null == _ || _(!0)
  }, [a, _]), v = i.useCallback(() => {
    a || L(!1), null == _ || _(!1)
  }, [a, _]), A = s || null == o ? null : (0, m.Or)(o), M = !s && u > 0 ? (0, m.Ne)(u) : null;
  return (0, l.jsx)(d.BlobMask, {
    selected: !n,
    upperBadge: A,
    lowerBadge: M,
    lowerBadgeSize: {
      width: (0, d.getBadgeWidthForValue)(u)
    },
    children: (0, l.jsx)(d.Clickable, {
      className: r()(f.folder, {
        [f.hover]: x
      }),
      onClick: g,
      onContextMenu: C,
      onMouseEnter: T,
      onMouseLeave: v,
      onKeyDown: I,
      onFocus: N,
      "aria-label": E.Z.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
        folderName: c,
        mentions: u
      }),
      "aria-expanded": s,
      "aria-owns": h,
      focusProps: {
        enabled: !1
      },
      ...S,
      role: "treeitem",
      children: null != p ? (0, l.jsx)("div", {
        className: f.expandedFolderIconWrapper,
        children: p
      }) : (0, l.jsx)(Z, {
        folderNode: t,
        hovered: x,
        expanded: s
      })
    })
  })
}