"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("920906"),
  o = n("866442"),
  u = n("442837"),
  d = n("477690"),
  c = n("481060"),
  f = n("430824"),
  h = n("346656"),
  m = n("286908"),
  C = n("624138"),
  p = n("674552"),
  g = n("981631"),
  E = n("689938"),
  S = n("538962");
let _ = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
  I = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE);

function N(e) {
  let {
    guildId: t,
    animate: n
  } = e, a = (0, u.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  return null == a ? (0, l.jsx)("div", {
    className: S.guildIconUnavailable,
    children: "!"
  }) : (0, l.jsx)(h.default, {
    guild: a,
    animate: n,
    size: h.default.Sizes.SMOL,
    className: S.guildIcon,
    tabIndex: -1
  })
}

function T(e) {
  let t, n, {
      folderNode: s,
      hovered: i,
      expanded: u
    } = e,
    {
      color: d,
      children: c
    } = s,
    f = null != d ? d : g.DEFAULT_FOLDER_COLOR,
    h = c.map(e => e.id),
    [C, p] = a.useState(!1),
    [E, T] = a.useState(u),
    A = u ? 0 : -I,
    L = (0, r.useSpring)({
      transform: "translate3d(0, ".concat(A, "px, 0)"),
      config: {
        duration: _
      },
      onStart() {
        p(!0), T(u)
      },
      onRest() {
        p(!1), T(u)
      }
    }),
    v = C ? L : void 0;
  return (C || E) && (t = (0, l.jsx)(r.animated.div, {
    style: v,
    className: S.expandedFolderIconWrapper,
    children: (0, l.jsx)(m.default, {
      style: {
        color: (0, o.int2hex)(f)
      }
    })
  })), (C || !E) && (n = (0, l.jsx)(r.animated.div, {
    style: v,
    className: S.closedFolderIconWrapper,
    children: h.slice(0, 4).map(e => (0, l.jsx)(N, {
      guildId: e,
      animate: i
    }, e))
  })), (0, l.jsxs)("div", {
    "aria-hidden": !0,
    style: u ? void 0 : {
      backgroundColor: (0, o.int2rgba)(f, .4)
    },
    className: S.folderIconWrapper,
    children: [t, n]
  })
}

function A(e) {
  let {
    folderNode: t,
    forceCircular: n,
    expanded: s,
    sorting: r,
    mediaState: o,
    mentionCount: u = 0,
    tooltipName: d,
    folderGroupId: f,
    folderIconContent: h,
    onClick: m,
    onContextMenu: C,
    onHoverChange: g,
    onKeyDown: _,
    treeItemProps: {
      onFocus: I,
      ...N
    }
  } = e, [A, L] = a.useState(!1), v = a.useCallback(() => {
    r || L(!0), null == g || g(!0)
  }, [r, g]), x = a.useCallback(() => {
    r || L(!1), null == g || g(!1)
  }, [r, g]), R = s || null == o ? null : (0, p.renderMediaBadge)(o), M = !s && u > 0 ? (0, p.renderMentionBadge)(u) : null;
  return (0, l.jsx)(c.BlobMask, {
    selected: !n,
    upperBadge: R,
    lowerBadge: M,
    lowerBadgeSize: {
      width: (0, c.getBadgeWidthForValue)(u)
    },
    children: (0, l.jsx)(c.Clickable, {
      className: i()(S.folder, {
        [S.hover]: A
      }),
      onClick: m,
      onContextMenu: C,
      onMouseEnter: v,
      onMouseLeave: x,
      onKeyDown: _,
      onFocus: I,
      "aria-label": E.default.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
        folderName: d,
        mentions: u
      }),
      "aria-expanded": s,
      "aria-owns": f,
      focusProps: {
        enabled: !1
      },
      ...N,
      role: "treeitem",
      children: null != h ? (0, l.jsx)("div", {
        className: S.expandedFolderIconWrapper,
        children: h
      }) : (0, l.jsx)(T, {
        folderNode: t,
        hovered: A,
        expanded: s
      })
    })
  })
}