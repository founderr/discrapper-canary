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
  g = n(346656),
  p = n(624138),
  m = n(674552),
  C = n(981631),
  E = n(689938),
  f = n(248699);
let _ = (0, p.Mg)(c.Z.FOLDER_ITEM_ANIMATION_DURATION),
  I = (0, p.Mg)(c.Z.FOLDER_ITEM_GUILD_ICON_SIZE);

function N(e) {
  let {
    guildId: t,
    animate: n
  } = e, i = (0, u.e7)([h.Z], () => h.Z.getGuild(t), [t]);
  return null == i ? (0, l.jsx)("div", {
    className: f.guildIconUnavailable,
    children: "!"
  }) : (0, l.jsx)(g.Z, {
    guild: i,
    animate: n,
    size: g.Z.Sizes.SMOL,
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
    g = null != c ? c : C.Wyy,
    p = h.map(e => e.id),
    [m, E] = i.useState(!1),
    [Z, S] = i.useState(u),
    x = u ? 0 : -I,
    T = (0, a.useSpring)({
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
    L = m ? T : void 0;
  return (m || Z) && (t = (0, l.jsx)(a.animated.div, {
    style: L,
    className: f.expandedFolderIconWrapper,
    children: (0, l.jsx)(d.FolderIcon, {
      size: "md",
      color: "currentColor",
      style: {
        color: (0, o.Rf)(g)
      }
    })
  })), (m || !Z) && (n = (0, l.jsx)(a.animated.div, {
    style: L,
    className: f.closedFolderIconWrapper,
    children: p.slice(0, 4).map(e => (0, l.jsx)(N, {
      guildId: e,
      animate: r
    }, e))
  })), (0, l.jsxs)("div", {
    "aria-hidden": !0,
    style: u ? void 0 : {
      backgroundColor: (0, o.br)(g, .4)
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
    folderIconContent: g,
    onClick: p,
    onContextMenu: C,
    onHoverChange: _,
    onKeyDown: I,
    treeItemProps: {
      onFocus: N,
      ...S
    }
  } = e, [x, T] = i.useState(!1), L = i.useCallback(() => {
    a || T(!0), null == _ || _(!0)
  }, [a, _]), v = i.useCallback(() => {
    a || T(!1), null == _ || _(!1)
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
      onClick: p,
      onContextMenu: C,
      onMouseEnter: L,
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
      children: null != g ? (0, l.jsx)("div", {
        className: f.expandedFolderIconWrapper,
        children: g
      }) : (0, l.jsx)(Z, {
        folderNode: t,
        hovered: x,
        expanded: s
      })
    })
  })
}